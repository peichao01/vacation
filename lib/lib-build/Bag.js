//var fs = require('fs');
var pth = require('path');
var inherit = require('../inherit');
var buildUtil = require('./util');
var BagBase = require('./BagBase');
var BagSub = require('./BagSub');
//var Module = require('./Module');


var TYPE = {
	FILE: 'file',
	DIR: 'dir'
};

// package 标识符 在 strict 模式下不能使用
var Bag = inherit(BagBase, {
	/**
	 *
	 * @param {String} uri
	 * @param {Object} config
	 * @constructor
	 */
	__constructor: function(opt){
		this.__base(opt);
		this.isMain = true;
		this.moduleType = opt.type;
		var Module = this.moduleType == 'requirejs' ? require('./ModuleRequire') : require('./ModuleSea');
		this.mainModule = Module.get({
			uri: opt.uri,
			isMain: true
		});
		this.exceptMods().BagSub();
		this.contains.push(this.mainModule);
		this.dealModules().genDistFilename().genDistId().dealBags();//.writeFile();
	},
	_check: function(opt){
		if(!buildUtil.isURIAvailable(opt.uri)) vacation.log.error('uri('+opt.uri+') is ignored.');
		return this.__base(opt);
	},
	/*genDistId: function(){
		this.distId = pth.join(pth.dirname(this.mainModule.distId), pth.basename(this.distFilename));
		return this;
	},*/
	exceptMods: function(){
		this.exceptedModules = [];
		this.config.except.forEach(function(exceptReg){
			this.mainModule.alldeps.forEach(function(mod){
				if(mod.uri_nux.match(exceptReg) && this.exceptedModules.indexOf(mod) < 0) this.exceptedModules.push(mod);
			}.bind(this));
		}.bind(this));

		this.contains = buildUtil.difference(this.mainModule.alldeps, this.exceptedModules);
		return this;
	},
	BagSub: function(){
		var config = this.config;
		var modules = this.contains;
		this.subBags = [];
		config.sub && config.sub.forEach(function(sub){
			sub.contain.forEach(function(subReg){
				var mods = [];
				modules.forEach(function(mod){
					if(mod.uri_nux.match(subReg)){
						mods.push(mod);
					}
				});
				if(mods.length) {
					var subBag = BagSub.get({
						modules: mods,
						config: sub,
						parent: this,
						distFilename: this.distFilename
					});
					this.subBags.push(subBag);
					this.contains = buildUtil.difference(this.contains, mods);
				}
			}.bind(this));
		}.bind(this));
		return this;
	},
	dealBags: function(){
		this.genDistContent();
		this.subBags.forEach(function(bag){
			bag.genDistContent();
		});
		return this;
	},
	writeFile: function(){
		this.__base();
		this.subBags.forEach(function(bag){
			bag.writeFile();
		});
		return this;
	}
},{
	TYPE: TYPE
});

module.exports = Bag;
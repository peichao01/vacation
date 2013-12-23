/*! lastmodify: 2013-12-23 23:44:03 */
;define("jquery",[],function(require,exports,module){module.exports=function(){}});
;define("underscore",[],function(require,exports,module){module.exports=function(){}});
;define("detail/mod_util.js",["underscore","jquery"],function(require,exports){require("../../../lib/underscore.js"),require("jquery");var e=function(){};exports.data={get:e,set:e},exports.int=e,exports.getMoneyHtml=e,exports.extendDeep=e,exports.getWeekday=e,exports.isSameDay=e,exports.decimal=e,exports.dtdate=e,exports.onResize=e,exports.onScroll=e,exports.onDocClick=e,exports.onDocKeyup=e});
;define("detail/mod_detail_big_order.js",["jquery","underscore","public/EventEmitter.js","detail/mod_util.js","Modules/HotelSelect.js","detail/mod_detail_big_order_flight.js","detail/mod_detail_big_order_other.js","detail/mode_detail_orderbar_fix.js","http://webresource.xxx.com/path/to/here.js","detail/mod_detail_dataManager.js","Modules/SelectBase.js","lib/inherit.js","tpl/detail/hotel_room_list.html.js","tpl/detail/big_order.html.js","tpl/detail/order_money_contain.html.js"],function(require){require("../../../lib/jquery"),require("../../../lib/underscore"),require("../public/EventEmitter"),require("./mod_util"),require("../Modules/HotelSelect"),require("./mod_detail_big_order_flight"),require("./mod_detail_big_order_other"),require("./mode_detail_orderbar_fix"),require("http://webresource.xxx.com/path/to/here.js"),require("./mod_detail_dataManager"),require("../Modules/SelectBase"),require("../../../lib/inherit"),Handlebars.registerPartial("RoomList",require("tpl/detail/hotel_room_list.html.js")),Handlebars.compile(require("tpl/detail/big_order.html.js")),Handlebars.compile(require("tpl/detail/order_money_contain.html.js"))});
;define("public/EventEmitter.js",[],function(require,exports,module){function e(){}e.mixTo=function(){},module.exports=e});
;define("Modules/HotelSelect.js",["jquery","underscore","lib/inherit.js","public/EventEmitter.js","detail/mod_util.js","Modules/SelectBase.js","Interface/IDetailPageOrderComponent.js","tpl/detail/hotel_room_list.html.js"],function(require,exports,module){var e=(require("../../../lib/jquery"),require("../../../lib/underscore"),require("../../../lib/inherit")),t=require("../public/EventEmitter");require("../detail/mod_util"),require("./SelectBase"),require("../Interface/IDetailPageOrderComponent"),Handlebars.compile(require("tpl/detail/hotel_room_list.html.js"));var i=e({});t.mixTo(i);var l=e({});t.mixTo(l),module.exports=l});
;define("lib/inherit.js",[],function(require,exports,module){module.exports=function(e,t){return e+t}});
;define("Modules/SelectBase.js",["jquery","underscore","lib/inherit.js","public/EventEmitter.js"],function(require,exports,module){var e=(require("../../../lib/jquery"),require("../../../lib/underscore"),require("../../../lib/inherit")),t=require("../public/EventEmitter"),i=e({});t.mixTo(i),module.exports=i});
;define("Interface/IDetailPageOrderComponent.js",[],function(require,exports,module){var e={};module.exports=e});
;define("tpl/detail/hotel_room_list.html.js",[],"<ul class=\"htl_room_list\"> {{#each RoomInfos}} <li class=\"js-room-item\" data-room-id={{Room}} data-price=\"{{RoomPrice}}\" style=\"{{#is ../../RoomTotalCount \'<=\' 1}}border-bottom:none;{{/is}}{{#is @index \'>\' 0}}display:none;{{/is}}\"> <div class=\"room_name\"> <span>{{RoomName}}</span> {{#notEmpty HotelAddInfos}}<i class=\"icon_htltips\" data-params=\"{options:{type:\'jmp_table\',classNames:{boxType:\'jmp_table\'},template:\'#jmp_pkg_title\', content:{txt0:\'这里是汉字\',txt1:\'{{#each HotelAddInfos}}{{#dtdate EffectDate}}{{/dtdate}}这里是汉字{{#dtdate ExpireDate}}{{/dtdate}}:{{Description}}<br>{{/each}}\'},css:{maxWidth:\'500\',minWidth:\'300\'},alignTo:\'cursor\'}}\" data-role=\"jmp\"></i>{{/notEmpty}} {{#notEmpty RoomGift RoomGift.GiftDesc}}<i class=\"icon_gift\" data-params=\"{options:{type:\'jmp_table\',classNames:{boxType:\'jmp_table\'},template:\'#jmp_pkg_title\', content:{txt0:\'这里是汉字\',txt1:\'{{RoomGift.GiftDesc}}<br>这里是汉字:{{#dtdate RoomGift.EffectDate}}{{/dtdate}}<br>这里是汉字:{{#dtdate RoomGift.ExpireDate}}{{/dtdate}}\'},css:{maxWidth:\'300\',minWidth:\'240\'},alignTo:\'cursor\'}}\" data-role=\"jmp\"></i>{{/notEmpty}} {{#notEmpty RoomTicketGift RoomTicketGift.TicketGiftsNo}} {{#is RoomTicketGift.TicketType \'C\'}} <span class=\"rebates\" data-params=\"{options:{type:\'jmp_table\',classNames:{boxType:\'jmp_table\'},template:\'#jmp_single_title\', content:{txt:\'这里是汉字，这里是汉字，这里是汉字{{RoomTicketGift.CalculateValue}}这里是汉字。<br /><a target=_blank href=http://help.ctrip.com/QuestionDetail.aspx这里是汉字questionId=693>这里是汉字</a>\'},css:{maxWidth:\'300\',minWidth:\'240\'},alignTo:\'cursor\'}}\" data-role=\"jmp\"><em>这里是汉字</em>{{RoomTicketGift.CalculateValue}}这里是汉字</span> {{else}} <span class=\"rebates\" data-params=\"{options:{type:\'jmp_table\',classNames:{boxType:\'jmp_table\'},template:\'#jmp_single_title\', content:{txt:\'这里是汉字，这里是汉字，这里是汉字{{RoomTicketGift.CalculateValue}}这里是汉字。<br /><a target=_blank href=http://help.ctrip.com/QuestionDetail.aspx这里是汉字questionId=693>这里是汉字</a>\'},css:{maxWidth:\'300\',minWidth:\'240\'},alignTo:\'cursor\'}}\" data-role=\"jmp\"><em>这里是汉字</em>{{RoomTicketGift.CalculateValue}}这里是汉字</span> {{/is}} {{/notEmpty}} </div> <div class=\"room_bed\">{{RoomBedType}}</div> <div class=\"room_breakfast\">{{BreakfastNote}}</div> <div class=\"room_net\">{{BroadNet}}</div> <div class=\"room_price\"> </div> <div class=\"room_num\"> <div class=\"num_input_wrap\"> <input type=\"text\" value=\"{{SelectedRoomNum}}\"/> <b></b> <p style=\"display:none;\"> {{#eachx \"null\" MinRoom MaxRoom}} <a href=\"javascript:void(0);\">{{$index}}</a> {{/eachx}} </p> </div> 这里是汉字 </div> <div class=\"{{#if Select}}room_selected{{else}}room_select_btn{{/if}}\"> <a href=\"javascript:void(0);\">这里是汉字</a> </div> {{#with RoomExtraInfo}} <div class=\"room_detail_wrap\" style=\"display:none;\" data-room-id=\"{{Room}}\"> <div class=\"room_img_wrap basefix\"> {{#notEmpty RoomPicUrl}} {{#each RoomPicUrl}} <img src=\"{{this}}\" alt=\"\" width=\"75\" height=\"75\"> {{/each}} {{/notEmpty}} </div> <div class=\"room_txt_wrap basefix\"> {{#if AreaRangeValue}}<div title=\"{{AreaRangeTitle}}：{{AreaRangeValue}}这里是汉字\">{{AreaRangeTitle}}：{{AreaRangeValue}}这里是汉字</div>{{/if}} {{#if FloorRangeValue}}<div title=\"{{FloorRangeTitle}}：{{FloorRangeValue}}这里是汉字\">{{FloorRangeTitle}}：{{FloorRangeValue}}这里是汉字</div>{{/if}} {{#if BedWidthValue}}<div title=\"{{BedWidthTitle}}：{{BedWidthValue}}这里是汉字\">{{BedWidthTitle}}：{{BedWidthValue}}</div>{{/if}} {{#if AddBed}}<div title=\"{{AddBed}}\">{{AddBed}}</div>{{/if}} {{#if SmokeValue}}<div title=\"{{SmokeTitle}}：{{SmokeValue}}\">{{SmokeTitle}}：{{SmokeValue}}</div>{{/if}} {{#if MaxPersonValue}}<div title=\"{{MaxPersonTitle}}：{{MaxPersonValue}}这里是汉字\">{{MaxPersonTitle}}：{{MaxPersonValue}}这里是汉字</div>{{/if}} {{#if BordNetValue}}<div class=\"long\" title=\"{{BordNetTitle}}：{{BordNetValue}}\">{{BordNetTitle}}：{{BordNetValue}}</div>{{/if}} {{#if Description}}<div class=\"long\" title=\"{{Description}}\">{{Description}}</div>{{/if}} </div> <a class=\"flod_btn\" href=\"javascript:void(0);\">这里是汉字<b></b></a> </div> {{/with}} </li> {{#is @index 0}} <li class=\"js-room-loading\" style=\"display:none\"> <div class=\"flt_loading\"><img src=\"http://pic.ctrip.com/common/loading.gif\" alt=\"\">这里是汉字，这里是汉字...</div> </li> {{/is}} {{/each}} </ul>");
;define("detail/mod_detail_big_order_flight.js",["jquery","underscore","lib/inherit.js","public/EventEmitter.js"],function(require,exports,module){var e=(require("../../../lib/jquery"),require("../../../lib/underscore"),require("../../../lib/inherit")),t=require("../public/EventEmitter"),i=e({});t.mixTo(i),module.exports=i});
;define("detail/mod_detail_big_order_other.js",["jquery","underscore","lib/inherit.js","detail/mod_util.js","public/EventEmitter.js","Modules/SelectBase.js","Interface/IDetailPageOrderComponent.js"],function(require,exports){var e=(require("../../../lib/jquery"),require("../../../lib/underscore"),require("../../../lib/inherit")),t=(require("./mod_util"),require("../public/EventEmitter"));require("../Modules/SelectBase"),require("../Interface/IDetailPageOrderComponent");var i=e({});t.mixTo(i);var r=e(i,{}),l=e(i,{});exports.OtherSingal=r,exports.OtherOptional=l});
;define("detail/mode_detail_orderbar_fix.js",["jquery","underscore","detail/mod_util.js"],function(require){require("jquery"),require("underscore"),require("./mod_util")});
;define("detail/mod_detail_dataManager.js",["jquery","underscore","detail/mod_util.js"],function(require,exports,module){require("jquery"),require("underscore"),require("./mod_util");var e=function(){},t={setJSON:e,getRresourceData:e,getSingleData:e,getOptionalData:e,setRresourceData:e,setSingleData:e,setOptionalData:e,getChosedResourceRequest:e,_delEmptyInChosedResource:e,delEmptyOptionInChosedResource:e,getChosedSingle:e,setChosedSingle:e,_setOneBaoxianByResourceID:e,setChosedBaoxian:e,getChosedBaoxian:e,getChosedOptional:e,getChosedHotel:e,setChosedHotel:e,getChosedFlight:e,setChosedFlight:e,getSegmentDatasById:e,getSegmentDatasByNumber:e,setHotelData:e,getHotelData:e,getHotelDefaultCompareMoney:e,setFlightData:e,getFlightData:e,getResourceBaoxian:e,dealSingle:e,dealOptional:e,dealFlightInfo:e,dealHotelInfo:e,calendar:{bigCalendar:{},ajaxError:!1,loadData:e,availableDate:{},init:e,getDateData:e,getAvailableDate:e,getBigCalendar:e,getFirstAvailableDate:e}};module.exports=t});
;define("tpl/detail/big_order.html.js",[],"<ul class=\"resource_price_wrap basefix\"> <li class=\"start_date\"> <label for=\"\">这里是汉字</label> <div class=\"input_wrap\"> <input type=\"text\" id=\"js-departure-date\" value=\"{{#if BaseInfo.DepartureDate}} {{#dtdate BaseInfo.DepartureDate}}{{/dtdate}}（{{#week BaseInfo.DepartureDate}}{{/week}}） {{#is BaseInfo.PriceAdult \'!==\' undefined}} &nbsp;&nbsp;&nbsp;&yen;{{BaseInfo.PriceAdult}}/这里是汉字 &nbsp;&nbsp;&nbsp;&yen;{{BaseInfo.PriceChild}}/这里是汉字 {{/is}}{{/if}}\" /> <b></b> </div> <span data-role=\"jmp\" data-params=\"{options:{type:\'jmp_table\',classNames:{boxType:\'jmp_table\'},template:\'#jmp_pkg_title\', content:{txt0:\'这里是汉字\',txt1:\'这里是汉字2-12这里是汉字，这里是汉字，这里是汉字、这里是汉字、这里是汉字。\'},css:{maxWidth:\'300\',minWidth:\'240\'},alignTo:\'cursor\'}}\" class=\"children_price\"><i></i>这里是汉字</span> </li> <li class=\"tourist_num\"> <label for=\"\">这里是汉字</label> <div class=\"input_wrap\"> <input type=\"text\" value=\"{{#is BaseInfo.AdultNum \'!==\' undefined}}{{BaseInfo.AdultNum}}{{/is}}\" /> <b></b> <p style=\"display:none\"> {{#eachx \"null\" 1 10}} <a href=\"javascript:void(0);\">{{$index}}</a> {{/eachx}} </p> </div> </li> <li class=\"children_num\"> {{#if BaseInfo.ForChild}} <label for=\"\">这里是汉字<span>(2-12这里是汉字)</span></label> <div class=\"input_wrap\"> <input type=\"text\" value=\"{{#is BaseInfo.ChildNum \'!==\' undefined}}{{BaseInfo.ChildNum}}{{/is}}\" /> <b></b> <p style=\"display:none\"> {{#eachx \"null\" 0 10}} <a href=\"javascript:void(0);\">{{$index}}</a> {{/eachx}} </p> </div> {{else}} <label for=\"\">这里是汉字<span>(这里是汉字)</span></label> {{/if}} </li> <li class=\"total_price\"> <span class=\"price_name\">这里是汉字</span> <span class=\"price\">{{#if isFetchSuccess }}{{#moneyHTML BaseInfo.TotalPrice}}{{/moneyHTML}}{{else}}--{{/if}}</span> <a id=\"js-submit\" class=\"{{#if isFetchSuccess }}btn_red_big{{else}}btn_big_disabled{{/if}}\" href=\"javascript:void(0);\">{{#if isFetching }}{{#if isOrdering}}这里是汉字...{{else}}这里是汉字...{{/if}}{{else}}这里是汉字{{/if}}</a> </li> </ul> <div class=\"all_resource\"> {{#if isFetchSuccess}} <div class=\"flt_htl_resource basefix\"> <h3 class=\"resource_title\"> 这里是汉字<i class=\"icon_b icon_b_05\"></i> </h3> {{#if FlightInfos.length}} <div class=\"flt_resource_detail\" id=\"js-flight-wrap\"> <h4 class=\"resource_detail_title\">这里是汉字</h4> <table class=\"flt_resource_table\"> <tbody> {{#each FlightInfosDealed}} <tr{{#if CSSHasBorder}} class=\"border\"{{/if}} data-segment-number=\"{{TripSegmentNo}}\"> <td class=\"col_01\"> {{DepartDate}}{{#if DarkMorning}}<span data-role=\"jmp\" data-params=\"{options:{type:\'jmp_title\',classNames:{boxType:\'jmp_title\'},template:\'#jmp_pkg_title\', content:{txt0:\'{{DarkMorning}}\'},css:{maxWidth:\'300\',minWidth:\'240\'},alignTo:\'cursor\',showArrow:false}}\" class=\"special_flt\">这里是汉字</span>{{/if}} </td> <td class=\"col_02\"> <div> <strong class=\"time\">{{DepartTime}}</strong>{{DepartCityName}}（{{DepartAirportName}}） </div> <div> <strong class=\"time\">{{ArriveTime}}</strong>{{ArriveCityName}}（{{ArriveAirportName}}） {{#is NextDay \'>\' 0}} <span class=\"base_txtdiv\" data-role=\"jmp\" data-params=\"{options:{css:{maxWidth:\'300\',minWidth:\'240\'},type:\'jmp_text\',classNames:{boxType:\'jmp_text\'}, template:\'#jmp_NextDay_{{TripSegmentNo}}_{{FlightNo}}\',alignTo:\'cursor\',showArrow:false}}\">这里是汉字{{NextDay}}</span> <div id=\"jmp_NextDay_{{TripSegmentNo}}_{{FlightNo}}\" style=\"display:none\"> <div class=\"jmp_bd\">这里是汉字，这里是汉字{{NextDay}}这里是汉字。这里是汉字。</div> </div> {{/is}} </div> </td> <td class=\"col_03\"> <div class=\"pubFlights_{{AirlineCode}}\">{{AirlineShortName}}</div> <div class=\"flt_num\"> {{FlightNo}} <span data-params=\"{options: {boundaryShow:false,css:{maxWidth:\'490\'}, type:\'jmp_table\',classNames:{boxType:\'jmp_table\'}, template:\'#jmp_tab\', content:online.getTableTips(\'fltDomestic_planeType.asp这里是汉字CraftType={{PlaneType}}\'), alignTo:\'cursor\'}}\" data-role=\"jmp\" class=\"base_txtdiv\">{{PlaneType}}</span> </div> </td> <td class=\"col_04\">{{ClassName}}</td> <td class=\"col_05\">{{JourneyTime}}</td> <td class=\"col_06\"> {{#FlightStops}} <span class=\"base_txtdiv\" data-role=\"jmp\" data-params=\"{options: {css:{maxWidth:\'300\'},type:\'jmp_text\',classNames:{boxType:\'jmp_text\'}, template:\'#jmp_TransfersOrStops\',content:{ txt:\'{{#each Data}}<div class=jmp_bd><strong>{{Text}}</strong><p>{{Value}}</p></div>{{/each}}\'},alignTo:\'cursor\',showArrow:false}}\">{{Key}}</span> {{/FlightStops}} {{#Remarks}} {{#Votes}} <span class=\"base_txtdiv\">{{Value}}</span> {{/Votes}} {{#ChangeBack}} <span class=\"base_txtdiv\" data-role=\"jmp\" data-params=\"{options: {css:{maxWidth:\'300\',minWidth:\'240\'},type:\'jmp_title\', classNames:{boxType:\'jmp_title\'},template:\'#jmp_ChangeBack\',\'content\':{ key:\'{{Key}}\',txt:\'{{#Data}}<strong>{{Text}}</strong><p>{{Value}}</p>{{/Data}}\'}, alignTo:\'cursor\'}}\">{{Key}}</span> {{/ChangeBack}} {{#Limit}} <span class=\"base_txtdiv\" data-role=\"jmp\" data-params=\"{options: {css:{maxWidth:\'300\',minWidth:\'240\'},type:\'jmp_title\',classNames:{boxType:\'jmp_title\'}, template:\'#jmp_Limit\',\'content\':{ key:\'{{Key}}\',content:\'{{Content}}\',txt:\'{{#Data}}<strong>{{Text}}</strong><p>{{Value}}</p>{{/Data}}\'}, alignTo:\'cursor\'}}\">{{Key}}</span> {{/Limit}} {{#ShareFlight}} <span class=\"base_txtdiv\" data-role=\"jmp\" data-params=\"{options: {css:{maxWidth:\'300\',minWidth:\'240\'},type:\'jmp_title\',classNames:{boxType:\'jmp_text\'}, template: \'#jmp_ShareFlight\',\'content\':{\'txt\':\'<div class=jmp_bd>{{Value}}\'},alignTo:\'cursor\'}}\">{{Text}}</span> {{/ShareFlight}} {{/Remarks}} </td> {{#if HasMoreButton}} <td class=\"col_btn\" rowspan=\"{{MoreButtonRowSpan}}\"> <a class=\"change_resource_btn\" href=\"javascript:void(0);\">这里是汉字</a> </td> {{/if}} </tr> {{#if HasTransfer}} <tr> <td colspan=\"6\"> <div class=\"transfer_plane\"><span><i></i>{{ArriveCityName}}（{{ArriveAirportName}}）这里是汉字&nbsp;这里是汉字：{{Duration}}</span></div> </td> </tr> {{/if}} {{/each}} </tbody> </table> </div> {{/if}} {{#if HotelInfos.length}} <div class=\"htl_resource_detail\" id=\"js-hotel-wrap\"> <h4 class=\"resource_detail_title\">这里是汉字</h4> <table class=\"htl_resource_table\"> <tbody> {{#each HotelInfos}} <tr data-index-in-data=\"{{@index}}\" data-segment-number=\"{{SegmentNumber}}\" data-hotel-id=\"{{Hotel}}\"> <td class=\"col_01\"> <p class=\"gray\">{{CityName}}（{{LiveCount}}这里是汉字）</p> <p class=\"gray\">这里是汉字&nbsp;&nbsp;{{#dtdate LiveStartDay}}{{/dtdate}}</p> <p class=\"gray\">这里是汉字&nbsp;&nbsp;{{#dtdate LiveEndDay}}{{/dtdate}}</p> </td> <td class=\"col_02\"> <a class=\"htl_img\" href=\"{{HotelUrl}}\" target=\"_blank\" title=\"{{HotelName}}\"> <img src=\"{{LogoUrl}}\" alt=\"\" width=\"100\" height=\"75\"> </a> <div class=\"htl_detail\"> <h3> <a href=\"{{HotelUrl}}\" target=\"_blank\" title=\"{{HotelName}}\">{{HotelName}}</a> {{#is StarLience \'T\'}} <i title=\"这里是汉字\" class=\"hotel_star_{{Star}}\"></i> {{else}} <i title=\"这里是汉字\" class=\"hotel_hollow_{{Star}}\"></i> {{/is}} </h3> <p class=\"gray\">{{Address}}</p> {{> RoomList}} {{#is RoomTotalCount \'>\' 1}} <div class=\"flod_spread_btn\"> <a href=\"javascript:void(0);\"> 这里是汉字<b class=\"down\"></b> </a> <a href=\"javascript:void(0);\" style=\"display:none\"> 这里是汉字<b class=\"up\"></b> </a> </div> {{/is}} </div> </td> <td class=\"col_btn\"> <a class=\"change_resource_btn\" href=\"javascript:void(0);\">这里是汉字</a> </td> </tr> {{/each}} </tbody> </table> </div> {{/if}} <div class=\"other_resource_detail\"> <table class=\"other_resource_table\"> <tbody> {{#each SingleResources}} {{#if IsShow}} <tr class=\"js-single\" data-index-in-data=\"{{@index}}\" data-segment-id=\"{{SegmentID}}\" data-resource-id=\"{{ResourceID}}\" data-category-id=\"{{CategoryID}}\"> <td class=\"col_01\"> <h4 class=\"other_product\">{{{CategoryName}}}</h4> </td> <td class=\"col_02\"> <div class=\"other_name\">{{{Name}}}</div> </td> <td class=\"col_03\"> -- </td> {{#if IsTraffic}} <td class=\"col_04\">{{#dtdate DepartureDate}}{{/dtdate}}</td> {{else}} <td class=\"col_04\">--</td> {{/if}} <td class=\"col_05\"> <div class=\"room_num\"> <div class=\"num_input_wrap\"> {{TotalCount}} </div> {{Unit}} </div> </td> <td class=\"col_06\"> -- </td> <td class=\"col_07\"> <div class=\"room_selected\"{{#is Count \'<=\' 0}} style=\"display:none\"{{/is}}> <a href=\"javascript:void(0);\">这里是汉字</a> </div> </td> {{#is TotalCount \'>\' 1}} <td class=\"col_btn\"> <a class=\"change_resource_btn\" href=\"javascript:void(0);\">这里是汉字{{{CategoryName}}}</a> </td> {{/is}} </tr> {{/if}} {{/each}} {{#each OptionResources}} <tr{{#unless IsShow}} style=\"display:none\"{{/unless}} class=\"js-optional{{#if IsBaoxian}} js-is-baoxian{{/if}}\" {{#is Inventory.length 1}}data-only-date=\"{{#each Inventory}}{{#dtdate Date}}{{/dtdate}}{{/each}}\" {{/is}}data-index-in-data=\"{{@index}}\" data-resource-id=\"{{ResourceID}}\" data-category-id=\"{{CategoryID}}\"> <td class=\"col_01\" rowspan=\"{{Rowspan}}\"{{#unless IsShowTitle}} style=\"display:none\"{{/unless}}> <h4 class=\"other_product\">{{{CategoryName}}}</h4> </td> <td class=\"col_02\"> <div class=\"other_name\">{{{Name}}}</div> </td> <td class=\"col_03\"> {{#each Inventory}} {{#unless @index}} <div><span class=\"js-price other_price\">{{#moneyHTML Price}}{{/moneyHTML}}</span>{{#if MarketPrice}}<span class=\"original_price\">(<strong>{{#moneyHTML MarketPrice}}{{/moneyHTML}}</strong>)</span>{{/if}}</div> {{/unless}} {{/each}} </td> <td class=\"col_04\"> {{#is Inventory.length \'>\' 1}} <div class=\"use_date\"> <div class=\"date_input_wrap\"> {{#each Inventory}} {{#unless @index}}<input type=\"text\" value=\"{{#dtdate Date}}{{/dtdate}}\"/>{{/unless}} {{/each}} <p style=\"display:none\"> {{#each Inventory}} <a href=\"javascript:void(0);\">{{#dtdate Date}}{{/dtdate}}</a> {{/each}} </p> </div> </div> {{else}} -- {{/is}} </td> <td class=\"col_05\"> <div class=\"room_num\"> <div class=\"num_input_wrap\"> {{#each Inventory}} {{#unless @index}} {{#is MinQuantity MaxQuantity}} {{DefaultQuantity}} {{else}} <input type=\"text\" value=\"{{DefaultQuantity}}\"/> <b></b> <p style=\"display:none\"> {{#eachx \'null\' MinQuantity MaxQuantity StepQuantity}} <a href=\"javascript:void(0);\">{{$index}}</a> {{/eachx}} </p> {{/is}} {{/unless}} {{/each}} </div>{{Unit}} </div> </td> <td class=\"col_06\"> <div><span class=\"other_price js-total-price\">{{#if TotalPrice}}{{#moneyHTML TotalPrice}}{{/moneyHTML}}</span>{{else}}--{{/if}}</div> </td> <td class=\"col_07\"> {{#each Inventory}} {{#unless @index}} <div class=\"room_selected\"{{#is DefaultQuantity \'<=\' 0}} style=\"display:none;\"{{/is}}> <a href=\"javascript:void(0);\">这里是汉字</a> </div> {{/unless}} {{/each}} </td> <td class=\"col_btn\" rowspan=\"{{Rowspan}}\"{{#unless IsShowTitle}} style=\"display:none\"{{/unless}}> {{#if IsBaoxian}} {{#is ThisCategoryTotalCount \'>\' 1}} <a class=\"change_resource_btn\" href=\"javascript:void(0);\">这里是汉字{{CategoryName}}</a> {{/is}} {{/if}} </td> </tr> {{#if Introduction}} <tr class=\"js-intro\" style=\"display:none\"> <td></td> <td colspan=\"5\"> <div class=\"other_product_detail\"> <b></b> <i></i> <div>{{Introduction}}</div> <a class=\"flod_btn\" href=\"javascript:void(0);\">这里是汉字</a> </div> </td> <td></td> </tr> {{/if}} {{/each}} </tbody> </table> </div> </div> {{else}}{{#if isFetching}} {{#if isOrdering}} <div class=\"c_loading detail_loading\"><strong>这里是汉字，这里是汉字</strong></div> {{else}} <div class=\"c_loading detail_loading\"><strong>这里是汉字，这里是汉字</strong></div> {{/if}} {{else}}{{#if isFetchFail}} {{#if errmsg}} <div class=\"no_resource_txt\">{{errmsg}}</div> {{else}} {{#if isServerError}} <div class=\"no_resource_txt\">这里是汉字，这里是汉字，这里是汉字。</div> {{else}} <div class=\"no_resource_txt\">这里是汉字，这里是汉字，这里是汉字。</div> {{/if}} {{/if}} {{/if}}{{/if}}{{/if}} </div> <div id=\"jmp_pkg_title\" style=\"display:none;\"> <div class=\"jmp_bd flt_jmp\"> <strong>${txt0}</strong> <p>${txt1}</p> </div> </div> <div id=\"jmp_single_title\" style=\"display:none;\"> <div class=\"jmp_bd\"> <p>${txt}</p> </div> </div> ");
;define("tpl/detail/order_money_contain.html.js",[]," {{#anyNoneEmpty FeeInfos FlightContains}} <div id=\"js-money-contain\" class=\"flt_htl_resource basefix\"> <h3 class=\"resource_title\"> 这里是汉字&nbsp;&nbsp;这里是汉字<i class=\"icon_b icon_b_03\"></i> </h3> {{#notEmpty FeeInfos}} <div class=\"cost_detail\"{{#unless FlightContains}} style=\"border-bottom:0\"{{/unless}}> {{#each FeeInfos}} {{#notEmpty PkgDescEntitys}} <h4 class=\"resource_detail_title\">{{TitleName}}</h4> <ul class=\"resource_detail_list\"> {{#each PkgDescEntitys}} <li>{{Detail}}</li> {{/each}} </ul> {{/notEmpty}} {{/each}} </div> {{/notEmpty}} {{#notEmpty FlightContains}} <div class=\"include_flt basefix\"> <h4> <i></i>这里是汉字 </h4> <div class=\"flt_detail_wrap\"> {{#each FlightContains}} <span class=\"pubFlights_{{AirlineCode}}\">{{this.AirlineName}}&nbsp;{{this.FlightNo}}({{this.DepartCityName}}{{this.DepartTime}}-{{this.ArriveCityName}}{{this.ArriveTime}})</span> {{/each}} </div> </div> {{/notEmpty}} </div> {{/anyNoneEmpty}}");
;define("detail/mod_detail_calendar.js",["jquery","underscore","public/EventEmitter.js","detail/mod_util.js","public/bigcalendar.js","detail/mod_detail_dataManager.js"],function(require){require("../../../lib/jquery"),require("../../../lib/underscore"),require("../public/EventEmitter"),require("./mod_util"),require("../public/bigcalendar"),require("./mod_detail_dataManager").calendar});
;define("public/bigcalendar.js",["jquery"],function(require){require("jquery");var e='            {{#if tpl_need_wrapper}}<div class="{{class_prefix}}calendar">{{/if}}            <ul class="{{class_prefix}}calendar_num basefix"><li class="bold">这里是汉字</li>            <li>这里是汉字</li><li>这里是汉字</li><li>这里是汉字</li><li>这里是汉字</li><li>这里是汉字</li><li class="bold">这里是汉字</li>            </ul>            <div class="basefix">            <div class="{{class_prefix}}calendar_left pkg_double_month" data-plug-bigcalendar="control">            <p class="border bgblue"></p>            <p></p>            <a href="javascript:;" title="这里是汉字" class="pkg_circle_top">这里是汉字</a>            <a href="javascript:;" title="这里是汉字" class="pkg_circle_bottom">这里是汉字</a>            </div>            <table class="{{class_prefix}}calendar_right">            <tbody>            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>            {{#if need6tr}}<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>{{/if}}            </tbody></table></div>            <div class="bigcalendar_loding" style="display:none;"><span class="loading">这里是汉字...</span></div>            {{#if tpl_need_wrapper}}</div>{{/if}}            ';e=Handlebars.compile(e)});
;define("detail/mod_detail_needknow.js",["jquery","underscore","public/EventEmitter.js","detail/mod_util.js","tpl/detail/order_needknow.html.js","tpl/detail/visa.html.js"],function(require){require("../../../lib/jquery.js"),require("../../../lib/underscore.js"),require("../public/EventEmitter"),require("./mod_util"),Handlebars.compile(require("tpl/detail/order_needknow.html.js")),Handlebars.compile(require("tpl/detail/visa.html.js"))});
;define("tpl/detail/order_needknow.html.js",[],"<a id=\"ydxz\" class=\"under_tab_anchor\">&nbsp;</a> <h3 class=\"resource_title\">这里是汉字<i class=\"icon_b icon_b_06\"></i></h3> <p class=\"group_book_notice\">({{{CorpDescInfo}}})</p> {{#each OrderingNeedToKnowInfoDetails}} {{#notEmpty Details}} <dl class=\"detail_date\"> <dt>{{{TitleName}}}</dt> <dd> <ul class=\"num_list\"> {{#each Details}} <li>{{{Detail}}}</li> {{/each}} </ul> </dd> </dl> {{/notEmpty}} {{/each}} {{#notEmpty PayInfo}} <dl class=\"detail_date\"> <dt>这里是汉字</dt> <dd> <p>{{{PayInfo}}}</p> </dd> </dl> {{/notEmpty}} {{#notEmpty SafetyGuide}} <dl class=\"detail_date border_none\"> <dt>这里是汉字</dt> <dd> <p>{{{SafetyGuide}}}</p> </dd> </dl> {{/notEmpty}}");
;define("tpl/detail/visa.html.js",[]," <a id=\"ctrip_qz\" class=\"under_tab_anchor\">&nbsp;</a> <h3 class=\"resource_title\">这里是汉字/这里是汉字<i class=\"icon_b icon_b_07\"></i></h3> {{#if IsVisaNoteShow}} <dl class=\"detail_date\"{{#unless IsVisaNoteShowBorder}} style=\"border-bottom:none\"{{/unless}}> <dt>{{{VisaNote}}}</dt> <dd> <ul class=\"num_list\"> {{#each VisaContainDetails}} <li>{{this.Detail}}</li> {{/each}} </ul> </dd> </dl> {{/if}} {{#if IsAgencyNoteShow}} <dl class=\"detail_date\"{{#unless IsAgencyNoteShowBorder}} style=\"border-bottom:none\"{{/unless}}> <dt>{{{AgencyNote}}}</dt> <dd> <ul class=\"num_list\"> <li>{{{AgencyContainDetail}}}</li> </ul> </dd> </dl> {{/if}} {{#if IsVisaCountryShow}} <p class=\"detail_visa_notice\">{{{VisaHeadNote}}}</p> {{#if IsCountryTabShow}} <div class=\"detail_visa_list basefix\"> {{#each VisaCountries}} <a href=\"javascript:void(0);\"{{#unless @index}} class=\"current\"{{/unless}}>{{{this}}}这里是汉字</a> {{/each}} </div> {{/if}} {{#each VisaCountryInfos}} <div class=\"js-visa-table-wrap\"{{#if @index}} style=\"display:none\"{{/if}}> {{#if ../IsVisaTabShow}} <div class=\"detail_visa_tips basefix\"> {{#each this}} <a href=\"javascript:void(0);\"{{#unless @index}} class=\"current\"{{/unless}}>{{this.Name}}</a> {{/each}} </div> {{/if}} {{#each this}} <div class=\"detail_visa_content\"{{#if @index}} style=\"display:none\"{{/if}}> <div class=\"visa_type basefix\"> {{#each VisaClientTypes}} <a href=\"javascript:void(0);\"{{#unless @index}} class=\"current\"{{/unless}}>{{this.Name}}</a> {{/each}} </div> {{#each VisaClientTypes}} <table class=\"visa_list\" width=\"100这里是汉字\"{{#if @index}} style=\"display:none\"{{/if}}> {{#notEmpty ../VisaWorktime}} <tr> <th>这里是汉字</th> <td>{{../../VisaWorktime}}</td> </tr> {{/notEmpty}} {{#notEmpty ../VisaAcceptedRange}} <tr> <th>这里是汉字</th> <td>{{../../VisaAcceptedRange}}</td> </tr> {{/notEmpty}} {{#each VisaStuffs}} <tr> <th>{{#if Options}}这里是汉字{{else}}这里是汉字{{/if}}{{{Name}}}</th> <td>{{{Content}}}</td> </tr> {{/each}} {{#notEmpty ../VisaRemark}} <tr> <th>这里是汉字</th> <td>{{../../VisaRemark}}</td> </tr> {{/notEmpty}} </table> {{/each}} </div> {{/each}} </div> {{/each}} {{/if}}");
;define("detail/v_hotel.js",["jquery","underscore","public/EventEmitter.js","lib/inherit.js","detail/mod_util.js","Modules/SelectBase.js","Modules/scrollspy.js","Modules/HotelSelect.js","detail/mod_detail_big_order_other.js"],function(require,exports,module){require("jquery"),require("underscore"),require("../public/EventEmitter"),require("lib/inherit"),require("./mod_util"),require("../Modules/SelectBase"),require("../Modules/scrollspy"),require("../Modules/HotelSelect"),require("./mod_detail_big_order_other");var e='<div class="resource_mask" id="J_optional_select_pop" style="display: none;">                            <a href="javascript:void(0);" class="close J_optional_pop_close"><span>关闭</span></a>                            <div class="scroll_wrap">                                <table class="other_mask_table other_resource_table">                                {{#each AA}}{{/each}}                                </table>                                <div class="btn_wrap">                                    <a class="yes" id="J_optional_pop_confirm" href="javascript:void(0);">确定</a>                                    <a class="no J_optional_pop_close" href="javascript:void(0);">取消</a>                                </div>                            </div>                        </div>',t="",i="";Handlebars.compile(i),Handlebars.compile(t),Handlebars.compile(e),module.exports=""});
;define("Modules/scrollspy.js",["jquery"],function(require){function e(e,t){var i=$.proxy(this.process,this),l=this.options=t;this.$element=$(e),this.$body=$("body"),this.$target=$(l.target||this.$element.attr("data-target")||this.$element),this.$scrollElement=(this.$target[0]==this.$element[0]?$(window):this.$element).on("scroll."+l.core,i),this.selector="a[href],a[data-target]",this.offsets=$([]),this.targets=$([]),this.activeTarget=null}var $=require("jquery");e.prototype={constructor:e,init:function(){var e=this.$scrollElement[0]==window?"offset":"position";this.offsets=$([]),this.targets=$([]),this.hrefs=this.$target.find(this.selector);var t=this;this.hrefs.map(function(){var i=$(this),l=i.data("target")||i.attr("href"),a=/^#\w/.test(l)&&$(l);return a&&a.length&&[[a[e]().top+(!$.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),l]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])}),this.process()},process:function(){var e,t=this.$scrollElement.scrollTop()+this.options.offsetY,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,l=i-this.$scrollElement.height(),a=this.offsets,s=this.targets,r=this.activeTarget;if(t>=l)return r!=(e=s.last()[0])&&s.length&&this.activate(s.length-1);for(e=a.length;e--;)r!=s[e]&&t>=a[e]&&(!a[e+1]||a[e+1]>=t)&&this.activate(e)},activate:function(e){var t=this.options;this.activeTarget=this.targets[e],t.onchange&&t.onchange.call(this,$(this.activeTarget).attr("id"),this.hrefs,this.targets)}},e.options={core:"data-plug-scrollspy",offsetY:10},$.fn.scrollspy=function(t,i,l){var a=e.options,t=t||{};return this.each(function(){var s,r=$(this),o=r.data(a.core);"object"==typeof t&&(s=$.extend({},o?o.options:a,t),o&&(o.options=s)),o||r.data(a.core,o=new e(this,s)),"object"==typeof t&&o.init(),"string"==typeof t&&o[t]?o[t].apply(o,i||[]):"string"==typeof i&&o[i]&&o[i].apply(o,l||[])})}});
;define("detail/v_dp.js",["jquery","public/EventEmitter.js"],function(require,exports){require("../../../lib/jquery.js"),require("../public/EventEmitter"),exports.init=function(){}});
;define("detail/v_flight.js",["jquery","public/EventEmitter.js"],function(require,exports){require("../../../lib/jquery.js"),require("../public/EventEmitter"),exports.init=function(){}});
;define("tpl/Modules/ProductPreviewManager.html.js",[],"<div id=\"js-preview-photo\" class=\"attraction_photo_big\" data-id=\"{{FirstPreview.ImageID}}\"> <img src=\"{{FirstPreview.Url}}\" alt=\"{{FirstPreview.ImageDesc}}\" width=\"500px\" height=\"280px\"> <a href=\"javascript:;\" title=\"\" class=\"prev\"></a> <a href=\"javascript:;\" title=\"\" class=\"next\"></a> <div class=\"photo_name\"> <p>1/{{Data.length}} {{FirstPreview.ImageDesc}}</p> <a style=\"display:none;\" href=\"javascript:;\" title=\"这里是汉字\" class=\"play\">这里是汉字</a> <a href=\"javascript:;\" title=\"这里是汉字\" class=\"stop\">这里是汉字</a> </div> </div> <div id=\"js-preview-video\" class=\"attraction_photo_big\" style=\"display:none\"> <embed quality=\"high\" width=\"100这里是汉字\" height=\"100这里是汉字\" align=\"middle\" allowscriptaccess=\"sameDomain\" type=\"application/x-shockwave-flash\" wmode=\"transparent\"> </div> <div class=\"attraction_photo_small\"> <div class=\"small_photo_wrap\"> <ul style=\"position:absolute\"> {{#each Data}} {{#modulus @index 5 0}} <li> {{/modulus}} {{#is ImageDesc \'!==\' undefined}} <a{{#unless @index}} class=\"current\"{{/unless}} href=\"javascript:;\" title=\"{{ImageDesc}}\" data-type=\"image\"><img src=\"{{#each Gallery}}{{#is @index 0}}{{Url}}{{/is}}{{/each}}\" data-big-url=\"{{#each Gallery}}{{#is @index 1}}{{Url}}{{/is}}{{/each}}\" alt=\"{{ImageDesc}}\" width=\"82px\" height=\"46px\"><span><i></i></span></a> {{else}} <a{{#unless @index}} class=\"current\"{{/unless}} href=\"javascript:;\" title=\"{{VideoDesc}}\" data-type=\"video\"><img src=\"{{ThumbnailUrl}}\" data-big-url=\"{{VideoUrl}}\" alt=\"{{VideoDesc}}\" width=\"82px\" height=\"46px\"><span><i></i></span></a> {{/is}} {{#modulus @index 5 4}} </li> {{/modulus}} {{/each}} </ul> </div> <div class=\"small_photo_control\"> <a href=\"javascript:;\" title=\"这里是汉字\" class=\"prev prev_disable\"><i></i></a> <a href=\"javascript:;\" title=\"这里是汉字\" class=\"next\"><i></i></a> </div> </div>");
;define("tpl/detail/special_info.html.js",[]," <p>pp </p> <dl class=\"special_info\"> <dt>这里是汉字</dt> <dd> {{#if flight}}<span class=\"flt_ico\">这里是汉字</span>{{/if}} {{#if hotel}}<span class=\"htl_ico\">这里是汉字</span>{{/if}} {{#if freeTravel}}<span class=\"free_ico\">这里是汉字</span>{{/if}} {{#if goldenguide}}<span class=\"gold_ico\">这里是汉字</span>{{/if}} {{#if goodbrand}}<span class=\"sh_ico\">这里是汉字</span>{{/if}} {{#if announcedGroup}}<span class=\"group_ico\">这里是汉字</span>{{/if}} </dd> </dl>");
;define("Modules/ProductPreviewManager.js",["jquery","underscore","lib/inherit.js","public/EventEmitter.js"],function(require,exports,module){require("../../../lib/jquery"),require("../../../lib/underscore"),require("../../../lib/inherit"),require("../public/EventEmitter"),Handlebars.compile("{{nowIndex}}/{{total}} {{ImageDesc}}"),module.exports=function(){}});
;define("detail/v_detail.js",["jquery","underscore","detail/mod_util.js","detail/mod_detail_big_order.js","detail/mod_detail_calendar.js","detail/mod_detail_needknow.js","detail/v_hotel.js","detail/v_dp.js","detail/v_flight.js","tpl/Modules/ProductPreviewManager.html.js","tpl/detail/special_info.html.js","Modules/ProductPreviewManager.js"],function(require){require("../../../lib/jquery"),require("underscore"),require("./mod_util"),require("./mod_detail_big_order"),require("./mod_detail_calendar"),require("./mod_detail_needknow"),require("./v_hotel"),require("./v_dp").init(),require("./v_flight").init(),require("../style/v_detail.css"),Handlebars.compile(require("tpl/Modules/ProductPreviewManager.html.js")),Handlebars.compile(require("tpl/detail/special_info.html.js")),require("../Modules/ProductPreviewManager")});
webpackJsonp([1],{"0p6b":function(t,s){},"1dNJ":function(t,s){},"59uE":function(t,s){},"7NTH":function(t,s){},CCTB:function(t,s){},E0ZT:function(t,s){},EXr2:function(t,s){},EaCJ:function(t,s){},M6Sr:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},a,!1,function(t){e("hdy8")},null,null).exports,r=e("/ocq"),o=e("NYxO"),_={name:"Header",data:function(){return{isNew:!1,timer:"",beforeDate:0}},methods:{to_message:function(){this.$router.push({path:"/message"})},to_freshen:function(){this.$router.go(0)},getNews:function(){var t=this,s=this.Cookies.get("wxqy_userid");this.axios.get(this.api+"/lyapi/notifyMessageRecord/"+s,{params:{code:i.a.localStorage.get("orderNum")}}).then(function(s){console.log(s);var e=s.data;if(1==e.status){for(var i=e.data.NOTIFY_MESSAGE,a=0,n=0;n<i.length;n++)if(0==i[n].isRead)return t.isNew=!0,void(a=1);0==a&&(t.isNew=!1)}else console.log(s.message)})}},computed:Object(o.b)({userName:function(t){return""==t.userName&&(t.userName=i.a.localStorage.get("userName")),t.userName},userJob:function(t){return""==t.userJob&&(t.userJob=i.a.localStorage.get("userJob")),t.userJob},userImg:function(t){return""==t.userImg&&(t.userImg=i.a.localStorage.get("userImg")),t.userImg}}),mounted:function(){this.getNews(),this.timer=setInterval(this.getNews,6e4)},beforeDestroy:function(){clearInterval(this.timer)}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"header clearfix"},[i("span",{staticClass:"img_span"},[i("img",{staticClass:"header_img",attrs:{src:this.userImg,alt:""}})]),t._v(" "),i("div",{staticClass:"user_info"},[i("div",{staticClass:"name"},[t._v(t._s(this.userName))]),t._v(" "),i("div",{staticClass:"job"},[t._v(t._s(this.userJob))])]),t._v(" "),i("div",{staticClass:"header_right"},[i("div",{staticClass:"right_icon"},[i("span",{staticClass:"freshen",on:{click:t.to_freshen}},[i("img",{attrs:{src:e("eesw")}})]),t._v(" "),i("span",{staticClass:"message",on:{click:t.to_message}},[i("img",{attrs:{src:e("QfG4")}}),t._v(" "),t.isNew?i("span",{staticClass:"iconfont point"},[t._v("")]):t._e()])])])])},staticRenderFns:[]};var l=e("VU/8")(_,c,!1,function(t){e("ll2q")},"data-v-58618277",null).exports,v=e("mw3O"),u=e.n(v),d={name:"Scan",data:function(){return{popShow:!1,getNum:"",getOrder:"",isError:!1,errorText:""}},methods:{start:function(){var t=this;wx.scanQRCode({needResult:1,scanType:["qrCode"],success:function(s){console.log(s),t.getNum=s.resultStr;var e=(new Date).toLocaleString("chinese",{hour12:!1}),a=t.$store.state.userName,n=t.Cookies.get("wxqy_userid"),r=u.a.stringify({CAR_PLATE_NO:t.getNum,OPERATOR_NAME:a,OPERATOR_ID:n,OPERAT_DATE:e});t.axios.post(t.api+"/lyapi/transfer/BIND_CAR_PLATE",r,t.sendHeaders).then(function(s){console.log(s);var e=s.data;1==e.RESULT?(t.getOrder=e.data.WAYBILL_CODE,i.a.localStorage.set("carNum",t.getNum),i.a.localStorage.set("orderNum",t.getOrder),t.popShow=!0):(t.errorText=e.MESSAGE,t.isError=!0,t.popShow=!0)})}})},skip_detail:function(){this.$router.replace({path:"/detail"})},hideBox:function(){this.popShow=!1,this.isError=!1}}},E={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"scan_box"},[e("div",{staticClass:"scan"},[e("div",{staticClass:"title"},[t._v("执行配送任务")]),t._v(" "),e("div",{staticClass:"con"},[e("span",{staticClass:"iconfont wran"},[t._v("")]),t._v(" "),e("div",{staticClass:"text1"},[t._v("绑定运单")]),t._v(" "),e("div",{staticClass:"text2"},[t._v("请扫描配送车辆二维码")]),t._v(" "),e("div",{staticClass:"start_box"},[e("div",{staticClass:"start",on:{click:t.start}},[t._v("绑定车牌，开始配送")])])])]),t._v(" "),t.popShow?e("div",{staticClass:"pop"},[t.isError?t._e():e("div",{staticClass:"pop_con"},[e("div",{staticClass:"pop_info"},[e("span",{staticClass:"iconfont true_icon"},[t._v("")]),t._v(" "),e("p",[t._v("绑定成功")]),t._v(" "),e("p",{staticClass:"num"},[t._v("\n                        车牌号："),e("span",[t._v(t._s(t.getNum))])])]),t._v(" "),e("div",{staticClass:"confirm_box"},[e("div",{staticClass:"confirm",on:{click:t.skip_detail}},[t._v("确定")])])]),t._v(" "),t.isError?e("div",{staticClass:"pop_con"},[e("div",{staticClass:"pop_info"},[e("span",{staticClass:"iconfont error_icon"},[t._v("")]),t._v(" "),e("p",[t._v(t._s(this.errorText))])]),t._v(" "),e("div",{staticClass:"confirm_box"},[e("div",{staticClass:"confirm",on:{click:t.hideBox}},[t._v("确定")])])]):t._e(),t._v(" "),e("div",{staticClass:"mask"})]):t._e()])},staticRenderFns:[]};var h=e("VU/8")(d,E,!1,function(t){e("YTlg")},"data-v-070f99ed",null).exports,p=e("eFvv"),A=e.n(p),f={name:"Home",components:{HomeHeader:l,HomeScan:h,VueElementLoading:A.a},data:function(){return{isShowMask:!0}},methods:{getUserInfo:function(){var t=this,s=this.Cookies.get("wxqy_userid");console.log(s),this.axios.get(this.api+"/lyapi/userInfo/"+s).then(function(s){console.log(s);var e=s.data;if(1==e.status){var i=e.data;t.$store.commit("getName",i.name),t.$store.commit("getJob",i.position),t.$store.commit("getImg",i.avatar)}else console.log(s.message);t.isShowMask=!1})}},created:function(){i.a.localStorage.get("WAYBILL_STATE")?this.$router.push("/process"):i.a.localStorage.get("carNum")&&this.$router.push("/detail")},mounted:function(){console.log((new Date).toLocaleString("chinese",{hour12:!1})),this.common.getsign(),this.getUserInfo()}},g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"home"},[s("vue-element-loading",{attrs:{active:this.isShowMask,"is-full-screen":!0}}),this._v(" "),s("home-header"),this._v(" "),s("home-scan")],1)},staticRenderFns:[]};var m=e("VU/8")(f,g,!1,function(t){e("0p6b")},"data-v-42261f3e",null).exports,L=e("//Fk"),C=e.n(L),T={name:"order",props:{list:Object}},O={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"order"},[s("div",{staticClass:"num"},[s("span",[this._v("流水号：")]),this._v(" "),s("span",[this._v(this._s(this.list.WAYBILL_CODE))])])])},staticRenderFns:[]};var R=e("VU/8")(T,O,!1,function(t){e("59uE")},"data-v-a1a35ff4",null).exports,S={name:"Info",props:{list:Object}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info"},[e("div",{staticClass:"line"},[e("p",[e("span",[t._v("要求到达时间：")]),t._v(" "),e("span",[t._v(t._s(t.list.PER_ONLINE_DATE?t.list.PER_ONLINE_DATE:"--"))])]),t._v(" "),e("p",[e("span",[t._v("紧急度：")]),t._v(" "),e("span",[t._v(t._s(t.list.LEVEL_URGENT?1==t.list.LEVEL_URGENT?"加急":"正常":""))])]),t._v(" "),e("p",[e("span",[t._v("目的地：")]),t._v(" "),e("span",[t._v(t._s(t.list.TARGET_PLACE))])])]),t._v(" "),e("div",{staticClass:"line"},[e("p",[e("span",[t._v("承运商：")]),t._v(" "),e("span",[t._v(t._s(t.list.CARRIER_NAME))])]),t._v(" "),e("p",[e("span",[t._v("车牌号码：")]),t._v(" "),e("span",[t._v(t._s(t.list.CAR_PLATE_NO))])]),t._v(" "),e("p",[e("span",[t._v("司机：")]),t._v(" "),e("span",[t._v(t._s(t.list.DRIVER))])])])])},staticRenderFns:[]};var N=e("VU/8")(S,P,!1,function(t){e("1dNJ")},"data-v-c8df6372",null).exports,M={name:"Goods",props:{list:Array},methods:{getShortTime:function(t){return t.substring(5,16).replace(/-/,"/")}}},D={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods",class:{on:!t.list.length}},[e("div",{staticClass:"box"},[e("p",[t._v("途经装货点")]),t._v(" "),e("table",[t._m(0),t._v(" "),t._l(t.list,function(s){return e("tr",[e("td",[t._v(t._s(s.origin[0].PLACE_NAME))]),t._v(" "),e("td",[t._v(t._s(s.origin.length>0?t.getShortTime(s.origin[0].PLACE_TIME):"--"))]),t._v(" "),e("td",[t._v(t._s(s.origin.length>1?t.getShortTime(s.origin[1].PLACE_TIME):"--"))])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("th",[this._v("供应商简称")]),this._v(" "),s("th",[this._v("到达时间")]),this._v(" "),s("th",[this._v("离开时间")])])}]};var I=e("VU/8")(M,D,!1,function(t){e("EXr2")},"data-v-61bd61ba",null).exports,U={name:"Supplier",props:{list:Array}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"supplier"},[e("div",{staticClass:"box"},[e("p",[t._v("部品清单")]),t._v(" "),e("table",[t._m(0),t._v(" "),t._l(t.list,function(s){return e("tr",[e("td",[t._v(t._s(s.SUPPLY_NAME))]),t._v(" "),e("td",[t._v(t._s(s.PART_CODE))]),t._v(" "),e("td",[t._v(t._s(s.ORDER_NUMBER))])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("th",[this._v("供应商简称")]),this._v(" "),s("th",[this._v("零件编号")]),this._v(" "),s("th",[this._v("明示卡数")])])}]};var w=e("VU/8")(U,x,!1,function(t){e("7NTH")},"data-v-6f6b81df",null).exports,b={name:"Btn",data:function(){return{popShow:!1,errorText:""}},methods:{loading_point:function(t){var s=this;wx.scanQRCode({needResult:1,scanType:["qrCode"],success:function(e){console.log(e);var a=e.resultStr,n=(new Date).toLocaleString("chinese",{hour12:!1}),r=s.$store.state.userName,o=u.a.stringify({PLACE_NO:a,OPERATE_OPTION:t,CAR_PLATE_NO:i.a.localStorage.get("carNum"),WAYBILL_CODE:i.a.localStorage.get("orderNum"),OPERATOR_NAME:r,OPERATOR_ID:s.Cookies.get("wxqy_userid"),OPERAT_DATE:n});s.axios.post(s.api+"/lyapi/transfer/SCAN_PLACE",o,s.sendHeaders).then(function(e){console.log(e);var i=e.data;1==i.RESULT?(0==t?s.$store.commit("getArrive",!1):1==t&&s.$store.commit("getArrive",!0),s.$emit("getTime")):(s.errorText=i.MESSAGE,s.popShow=!0)})}})},to_process:function(){this.$router.push({path:"/process"})},hideBox:function(){this.popShow=!1}},computed:Object(o.b)({isArrive:function(t){return!0===t.isArrive&&null!==i.a.localStorage.get("isArrive")&&(t.isArrive=JSON.parse(i.a.localStorage.get("isArrive"))),t.isArrive}})},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section"},[this.isArrive?e("div",{staticClass:"btn_box"},[e("div",{staticClass:"btn on",on:{click:function(s){return t.loading_point("0")}}},[t._v("到达装货点扫码")]),t._v(" "),e("div",{staticClass:"btn",on:{click:function(s){return t.loading_point("1")}}},[t._v("离开装货点扫码")])]):t._e(),t._v(" "),this.isArrive?t._e():e("div",{staticClass:"btn_box"},[e("div",{staticClass:"btn",on:{click:function(s){return t.loading_point("0")}}},[t._v("到达装货点扫码")]),t._v(" "),e("div",{staticClass:"btn on",on:{click:function(s){return t.loading_point("1")}}},[t._v("离开装货点扫码")])]),t._v(" "),e("div",{staticClass:"next_box"},[e("div",{staticClass:"btn to_next",on:{click:t.to_process}},[t._v("已完成所有装货，去往三厂")])]),t._v(" "),t.popShow?e("div",{staticClass:"pop"},[e("div",{staticClass:"pop_con"},[e("div",{staticClass:"pop_info"},[e("span",{staticClass:"iconfont error_icon"},[t._v("")]),t._v(" "),e("p",[t._v(t._s(this.errorText))])]),t._v(" "),e("div",{staticClass:"confirm_box"},[e("div",{staticClass:"confirm",on:{click:t.hideBox}},[t._v("确定")])])]),t._v(" "),e("div",{staticClass:"mask"})]):t._e()])},staticRenderFns:[]};var y={name:"Detail",components:{HomeHeader:l,DetailOrder:R,DetailInfo:N,DetailGoods:I,DetailSupplier:w,DetailBtn:e("VU/8")(b,F,!1,function(t){e("E0ZT")},"data-v-f8eab400",null).exports,VueElementLoading:A.a},data:function(){return{infoList:{},supplierList:[],arrayList:[],isShowMask:!0}},methods:{getHomeInfo:function(){var t=this,s={CAR_PLATE_NO:i.a.localStorage.get("carNum"),WAYBILL_CODE:i.a.localStorage.get("orderNum")},e=u.a.stringify(s);C.a.all([this.axios.post(this.api+"/lyapi/transfer/ORDER_DETAIL",e,this.sendHeaders),this.axios.post(this.api+"/lyapi/transfer/THE_WAY",e,this.sendHeaders)]).then(function(s){console.log(s);var e=s[0].data;if(console.log(e.RESULT),1==e.RESULT){var i=e.data;t.infoList=i,t.supplierList=i.order_list}var a=s[1].data;if(1==a.RESULT){for(var n=function(t){return function(s,e){return s[t]-e[t]}},r=a.data.PLACES,o=[],_=[],c=0;c<r.length;c++)if(-1===_.indexOf(r[c].PLACE_CODE))o.push({PLACE_CODE:r[c].PLACE_CODE,origin:[r[c]]}),_.push(r[c].PLACE_CODE);else for(var l=0;l<o.length;l++)if(o[l].PLACE_CODE==r[c].PLACE_CODE){o[l].origin.push(r[c]);break}for(var v=0;v<o.length;v++)o[v].origin.sort(n("PLACE_OPTION"));t.arrayList=o,console.log(t.arrayList)}t.isShowMask=!1})}},mounted:function(){this.common.getsign(),this.getHomeInfo()}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detail"},[e("vue-element-loading",{attrs:{active:t.isShowMask,"is-full-screen":!0}}),t._v(" "),e("home-header"),t._v(" "),e("detail-order",{attrs:{list:t.infoList}}),t._v(" "),e("div",{staticClass:"main"},[e("detail-info",{attrs:{list:t.infoList}}),t._v(" "),e("div",{staticClass:"table_box"},[e("detail-goods",{attrs:{list:t.arrayList}}),t._v(" "),e("detail-supplier",{attrs:{list:t.supplierList}})],1)],1),t._v(" "),e("detail-btn",{on:{getTime:t.getHomeInfo}})],1)},staticRenderFns:[]};var B=e("VU/8")(y,k,!1,function(t){e("n/Mz")},"data-v-6fc098cc",null).exports,Y={name:"Order",data:function(){return{popShow:!1,getType:"",plat_no:"",hasTimes:!1,isStart:!0,isError:!1,errorText:""}},props:{list:Object,dList:Object,mList:Object,aList:{type:Array,default:[]}},methods:{formatSeconds:function(t){var s=Math.floor(t%3600);return(Math.floor(t/3600)?Math.floor(t/3600)+"小时":"")+Math.floor(s/60)+"分钟"},back:function(){this.$router.push("/detail")},getShortTime:function(t){return t.substring(5,16).replace(/-/,"/")},arrive:function(t){var s=this;wx.scanQRCode({needResult:1,scanType:["qrCode"],success:function(e){console.log(e),s.plat_no=e.resultStr;var a=(new Date).toLocaleString("chinese",{hour12:!1}),n=s.$store.state.userName,r=u.a.stringify({PLATFORM_NO:s.plat_no,OPERATE_OPTION:t,WAYBILL_CODE:i.a.localStorage.get("orderNum"),CAR_PLATE_NO:i.a.localStorage.get("carNum"),OPERATOR_NAME:n,OPERATOR_ID:s.Cookies.get("wxqy_userid"),OPERAT_DATE:a});s.axios.post(s.api+"/lyapi/transfer/SCAN_PLATFORM_IN_OUT",r,s.sendHeaders).then(function(e){console.log(e);var i=e.data;1==i.RESULT?(s.getType=t,0==s.getType?s.$store.commit("getShow",!1):(s.$store.commit("getShow",!0),0==i.data.UNLOAD_AMOUNT?s.isStart=!1:s.hasTimes=!0),s.popShow=!0):(s.errorText=i.MESSAGE,s.isError=!0,s.popShow=!0)})}})},be_sure:function(){this.isStart=!0,this.isError=!1,this.hasTimes=!1,1==this.getType&&(this.$emit("showList"),this.$emit("reMessage")),this.popShow=!1},leave_sure:function(){i.a.localStorage.remove("carNum"),i.a.localStorage.remove("WAYBILL_STATE"),i.a.localStorage.remove("isShow"),i.a.localStorage.remove("isArrive"),i.a.localStorage.remove("orderNum"),this.$router.push("/")}},computed:Object(o.b)({otherNumber:function(){for(var t=0,s=this.list.PLATFORMS,e=0;e<s.length;e++)0==s[e].PLATFORM_FREE&&t++;return t},areaList:function(){for(var t="",s=[],e=this.list.PLATFORMS,i=0;i<e.length;i++)0==e[i].PLATFORM_FREE&&(s.push(e[i].PLATFORM_NAME),t=s.join(","));return t},isOut:function(){return this.list.WAYBILL_STATE<3},isPark:function(){return 3==this.list.WAYBILL_STATE||4==this.list.WAYBILL_STATE},isUnloading:function(){return 5==this.list.WAYBILL_STATE},isFinish:function(){return 6==this.list.WAYBILL_STATE},isLeave:function(){return 7==this.list.WAYBILL_STATE},isWait:function(){return this.list.WAYBILL_STATE<5},isHot:function(){return 1==this.list.LEVEL_URGENT},isLater:function(){return 1==this.list.LEVEL_LATE},isFull:function(){return this.list.AREA_AMOUNT_TOTAL==this.list.AREA_AMOUNT_USED},isShow:function(t){return!0===t.isShow&&null!==i.a.localStorage.get("isShow")&&(t.isShow=JSON.parse(i.a.localStorage.get("isShow"))),t.isShow}})},W={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"order"},[e("div",{staticClass:"order_box"},[e("div",{staticClass:"scroll_area"},[t.isOut?e("div",{staticClass:"advice"},[t.isFull?e("div",{staticClass:"advice_text"},[t._v("建议你在"),e("span",[t._v("厂外等候")])]):t._e(),t._v(" "),t.isFull?t._e():e("div",{staticClass:"advice_text"},[t._v("厂内当前停车资源："),e("span",[t._v(t._s(t.list.AREA_AMOUNT_USED)+"/"+t._s(t.list.AREA_AMOUNT_TOTAL))])])]):t.isPark?e("div",{staticClass:"advice"},[e("div",{staticClass:"advice_text"},[t._v(" 请前往"),e("span",[t._v(t._s(t.list.AREA_NAME))]),t._v("等候")])]):t.isUnloading&&this.isShow?e("div",{staticClass:"advice"},[e("div",{staticClass:"advice_text"},[t._v("\n                        请到"),e("span",[t._v(t._s(t.list.LINE_NAME)+"-"+t._s(t.list.CUR_PLATFORM_NAME))]),t._v("卸货"),e("br"),t._v("停靠扫码\n                    ")])]):t.isUnloading&&!this.isShow?e("div",{staticClass:"advice"},[t._m(0)]):t.isFinish?e("div",{staticClass:"advice"},[t._m(1)]):t._e(),t._v(" "),t.isFinish?t._e():e("div",{staticClass:"wait"},[t.isOut?t._e():e("p",{staticClass:"num"},[t._v("\n                        前面还有"),t.isWait?e("span",[t._v(t._s(t.list.WAITTING_AMOUNT))]):t._e(),t._v(" "),t.isWait?t._e():e("span",[t._v("0")]),t._v("人等待\n                    ")]),t._v(" "),e("div",{staticClass:"wait_box",class:{on:t.isPark}},[e("div",{staticClass:"park park1",class:{out_bottom:t.isOut}},[t._m(2),t._v(" "),e("div",{staticClass:"park_right"},[e("div",{staticClass:"place"},[e("div",[t._v("位置："+t._s(t.list.AREA_NAME))]),t._v(" "),e("div",[e("span",[t._v(t._s(t.list.AREA_AMOUNT_USED))]),t._v("/"),e("em",[t._v(t._s(t.list.AREA_AMOUNT_TOTAL))])])]),t._v(" "),e("div",{staticClass:"time"},[t._v("预计等待："+t._s(t.list.WAITTING_DURATION?t.formatSeconds(t.list.WAITTING_DURATION):"--"))])])])]),t._v(" "),e("div",{staticClass:"wait_box",class:{on:t.isUnloading}},[e("div",{staticClass:"park"},[t._m(3),t._v(" "),e("div",{staticClass:"park_right"},[e("div",{staticClass:"place"},[t._v("区域："+t._s(t.list.LINE_NAME))]),t._v(" "),e("div",{staticClass:"time"},[this.list.PLATFORMS&&!t.isUnloading?e("div",[t._v("平台："+t._s(t.areaList))]):t._e(),t._v(" "),this.list.PLATFORMS&&t.isUnloading?e("div",[t._v("平台："+t._s(t.list.CUR_PLATFORM_NAME))]):t._e(),t._v(" "),this.list.PLATFORMS?e("div",[e("span",[t._v(t._s(t.otherNumber))]),t._v("/"),e("em",[t._v(t._s(t.list.PLATFORM_AMOUNT))])]):t._e()])])])])]),t._v(" "),e("div",{staticClass:"unload_msg"},[t.aList.length>1?e("table",[t._m(4),t._v(" "),t._l(t.aList,function(s){return e("tr",{key:s.PLATFORM_CODE},[e("td",[t._v(t._s(s.origin[0].PLATFORM_NAME))]),t._v(" "),e("td",[t._v(t._s(s.origin.length>0?t.getShortTime(s.origin[0].OPERATE_TIME):"--"))]),t._v(" "),e("td",[t._v(t._s(s.origin.length>1?t.getShortTime(s.origin[1].OPERATE_TIME):"--"))])])})],2):t._e()])])]),t._v(" "),t.isOut||t.isUnloading?e("div",{staticClass:"btn_box"},[t.isOut?e("div",{staticClass:"scan_btn red",on:{click:t.back}},[t._v("继续装载，返回上一步")]):t._e(),t._v(" "),t.isUnloading?e("div",[this.isShow?e("div",{staticClass:"scan_btn",on:{click:function(s){return t.arrive("0")}}},[t._v("已停靠，扫描二维码")]):t._e(),t._v(" "),this.isShow?t._e():e("div",{staticClass:"scan_btn red",on:{click:function(s){return t.arrive("1")}}},[t._v("卸货完成，离开平台扫码")])]):t._e()]):t._e(),t._v(" "),t.popShow||t.isLeave?e("div",{staticClass:"pop"},[e("div",{staticClass:"pop_con"},[t.isError?t._e():e("div",{staticClass:"pop_info"},[e("span",{staticClass:"iconfont true_icon"},[t._v("")]),t._v(" "),t.isLeave?e("p",[t._v("您已离厂，该次配送任务结束。")]):t._e(),t._v(" "),e("p",{staticClass:"num"},[t._v("\n                        车牌号："),e("span",[t._v(t._s(t.dList.CAR_PLATE_NO))])]),t._v(" "),t.isUnloading&&!t.isLeave?e("div",[t.isStart&&!t.hasTimes?e("p",{staticClass:"num"},[t._v("开始卸货")]):t._e(),t._v(" "),t.isStart||t.hasTimes?t._e():e("p",{staticClass:"num"},[t._v("完成卸货，现可离场")]),t._v(" "),t.hasTimes?e("p",{staticClass:"num"},[t._v("还有卸货次数，请继续卸货")]):t._e()]):t._e()]),t._v(" "),t.isError?e("div",{staticClass:"pop_info"},[e("span",{staticClass:"iconfont error_icon"},[t._v("")]),t._v(" "),e("p",[t._v(t._s(this.errorText))])]):t._e(),t._v(" "),e("div",{staticClass:"confirm_box"},[t.isLeave?t._e():e("div",{staticClass:"confirm",on:{click:t.be_sure}},[t._v("确定")]),t._v(" "),t.isLeave?e("div",{staticClass:"confirm",on:{click:t.leave_sure}},[t._v("确定")]):t._e()])]),t._v(" "),e("div",{staticClass:"mask"})]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"advice_text"},[s("span",[this._v("卸货中")]),this._v("，扫码后离开平台")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"advice_text"},[this._v("卸货完毕，请"),s("span",[this._v("及时离场")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"park_left"},[s("span",{staticClass:"iconfont park_icon"},[this._v("")]),this._v(" "),s("p",[this._v("驻场")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"park_left"},[s("span",{staticClass:"iconfont park_icon"},[this._v("")]),this._v(" "),s("p",[this._v("卸货")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("停靠平台")]),this._v(" "),s("td",[this._v("停靠时间")]),this._v(" "),s("td",[this._v("离开时间")])])}]};var X=e("VU/8")(Y,W,!1,function(t){e("OszE")},"data-v-3bf0a038",null).exports,$={name:"basic",props:{list:Object,dList:Object},computed:{isHot:function(){return 1==this.list.LEVEL_URGENT},isLater:function(){return 1==this.list.LEVEL_LATE},arriveTime:function(){var t=this.dList.PER_ONLINE_DATE;return t.substring(0,t.length-3)}}},H={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"basic"},[e("div",{staticClass:"status"},[e("div",{staticClass:"num"},[t._v(t._s(t.dList.CAR_PLATE_NO))]),t._v(" "),e("div",[t.isLater?e("span",{staticClass:"warn"},[t._v("已晚点")]):t._e(),t._v(" "),t.isHot?e("span",{staticClass:"hot_icon"},[t._v("已加急")]):t._e()])]),t._v(" "),e("div",{staticClass:"order_info",class:{on:t.isHot}},[e("div",{staticClass:"info1"},[t._v("\n            流水号："),e("span",[t._v(t._s(t.list.WAYBILL_CODE))])]),t._v(" "),e("div",{staticClass:"info2"},[t.dList.PER_ONLINE_DATE?e("span",[t._v("要求到达时间："+t._s(t.arriveTime))]):t._e(),t._v(" "),e("span",[t._v(t._s(t.dList.TARGET_PLACE))])])])])},staticRenderFns:[]};var G={name:"Process",components:{HomeHeader:l,ProcessOrder:X,ProcessBasic:e("VU/8")($,H,!1,function(t){e("tj+c")},"data-v-0338ede6",null).exports,VueElementLoading:A.a},data:function(){return{orderList:{},detailList:{},messageList:{},arrayList:[],timer:"",isShowMask:!0}},methods:{getDetail:function(){var t=this,s={CAR_PLATE_NO:i.a.localStorage.get("carNum"),WAYBILL_CODE:i.a.localStorage.get("orderNum")},e=u.a.stringify(s);this.axios.post(this.api+"/lyapi/transfer/ORDER_DETAIL",e,this.sendHeaders).then(function(s){if(1==s.data.RESULT){var e=s.data.data;t.detailList=e}})},getProcessList:function(){var t={CAR_PLATE_NO:i.a.localStorage.get("carNum"),WAYBILL_CODE:i.a.localStorage.get("orderNum")},s=u.a.stringify(t);this.Cookies.get("wxqy_userid");this.axios.post(this.api+"/lyapi/transfer/DETAIL_LINE_UP",s,this.sendHeaders).then(this.getProcessListSucc)},getProcessListSucc:function(t){var s=t.data;if(1==s.RESULT){var e=function(t){return function(s,e){return s[t]-e[t]}},a=s.data;this.orderList=a,a.WAYBILL_STATE>1&&i.a.localStorage.set("WAYBILL_STATE",a.WAYBILL_STATE);for(var n=a.TASKS,r=[],o=[],_=0;_<n.length;_++)if(-1===o.indexOf(n[_].PLATFORM_CODE))r.push({PLATFORM_CODE:n[_].PLATFORM_CODE,origin:[n[_]]}),o.push(n[_].PLATFORM_CODE);else for(var c=0;c<r.length;c++)if(r[c].PLATFORM_CODE==n[_].PLATFORM_CODE){r[c].origin.push(n[_]);break}for(var l=0;l<r.length;l++)r[l].origin.sort(e("OPERATE_CODE"));this.arrayList=r,console.log(this.arrayList)}this.isShowMask=!1},childMethod:function(){this.$refs.fromChild.getNews()}},mounted:function(){this.common.getsign(),this.getDetail(),this.getProcessList(),this.timer=setInterval(this.getProcessList,6e4)},beforeDestroy:function(){clearInterval(this.timer)}},V={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"process"},[e("vue-element-loading",{attrs:{active:t.isShowMask,"is-full-screen":!0}}),t._v(" "),e("home-header",{ref:"fromChild"}),t._v(" "),e("process-basic",{attrs:{list:t.orderList,dList:t.detailList}}),t._v(" "),e("process-order",{attrs:{list:t.orderList,dList:t.detailList,mList:t.messageList,aList:t.arrayList},on:{showList:t.getProcessList,reMessage:t.childMethod}})],1)},staticRenderFns:[]};var J=e("VU/8")(G,V,!1,function(t){e("zuk/")},"data-v-0ae33e64",null).exports,j={name:"List",props:{list:Array},data:function(){return{}}},q={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list"},[e("p",{staticClass:"title"},[t._v("信息")]),t._v(" "),e("div",{staticClass:"list_main"},t._l(t.list,function(s){return e("div",{staticClass:"item"},[e("div",{staticClass:"text"},[e("span",{staticClass:"des"},[t._v(t._s(s.title))]),t._v(" "),1==s.isLate?e("span",{staticClass:"iconfont warn"},[t._v("")]):t._e(),t._v(" "),1==s.isUrgent?e("span",{staticClass:"iconfont hot_icon"},[t._v("")]):t._e()]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(s.createDate))])])}),0)])},staticRenderFns:[]};var z={name:"Message",components:{HomeHeader:l,MessageList:e("VU/8")(j,q,!1,function(t){e("xyB/")},"data-v-a4d18740",null).exports,VueElementLoading:A.a},data:function(){return{msgList:[],isShowMask:!0}},mounted:function(){var t=this,s=this.Cookies.get("wxqy_userid");console.log(s),this.axios.get(this.api+"/lyapi/notifyMessageRecord/"+s,{params:{readFlag:!0,code:i.a.localStorage.get("orderNum")}}).then(function(s){console.log(s);var e=s.data;1==e.status?t.msgList=e.data.NOTIFY_MESSAGE:console.log(s.message),t.isShowMask=!1})},beforeDestroy:function(){var t=this.Cookies.get("wxqy_userid");console.log("beforeDestroy"),this.axios.get(this.api+"/lyapi/notifyMessageRecord/"+t,{params:{readFlag:!0,code:i.a.localStorage.get("orderNum")}})}},Q={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("vue-element-loading",{attrs:{active:this.isShowMask,"is-full-screen":!0}}),this._v(" "),s("home-header"),this._v(" "),s("message-list",{attrs:{list:this.msgList}})],1)},staticRenderFns:[]};var Z=e("VU/8")(z,Q,!1,function(t){e("EaCJ")},"data-v-6d5ee9f6",null).exports;i.a.use(r.a);var K=new r.a({routes:[{path:"/",name:"Home",component:m},{path:"/detail",name:"Detail",component:B},{path:"/process",name:"Process",component:J},{path:"/message",name:"Message",component:Z}]}),tt=r.a.prototype.push;r.a.prototype.push=function(t){return tt.call(this,t).catch(function(t){return t})};var st=e("v5o6"),et=e.n(st),it=(e("CCTB"),e("M6Sr"),e("TzC8"),e("wF7/"),e("SHZo"),e("mtWM")),at=e.n(it),nt=e("lbHh"),rt=e.n(nt),ot=e("zNUS"),_t=e.n(ot);_t.a.setup({timeout:"1000"});_t.a.mock("/detail/query","post",{RESULT:"1",MESSAGE:"成功",data:{WAYBILL_CODE:"YD888888888888882",PER_ONLINE_DATE:"2020-06-30 11:00:00",LEVEL_URGENT:"3",START_PLACE:"WDHL中转库",TARGET_PLACE:"三工厂",CARRIER_NAME:"WDHL东本储运",DRIVER:"梁XX",CAR_PLATE_NO:"鄂A8888",order_list:[{SUPPLY_CODE:"0001",SUPPLY_NAME:"供应商A",PART_CODE:"XXXXXXX",ORDER_NUMBER:"10"},{SUPPLY_CODE:"0002",SUPPLY_NAME:"供应商B",PART_CODE:"XXXXXXX",ORDER_NUMBER:"10"},{SUPPLY_CODE:"0003",SUPPLY_NAME:"供应商C",PART_CODE:"XXXXXXX",ORDER_NUMBER:"10"},{SUPPLY_CODE:"0001",SUPPLY_NAME:"供应商A",PART_CODE:"XXXXXXX",ORDER_NUMBER:"10"},{SUPPLY_CODE:"0002",SUPPLY_NAME:"供应商B",PART_CODE:"XXXXXXX",ORDER_NUMBER:"10"},{SUPPLY_CODE:"0003",SUPPLY_NAME:"供应商C",PART_CODE:"XXXXXXX",ORDER_NUMBER:"10"}]}}),_t.a.mock("/detail/goodsList","post",{RESULT:"1",MESSAGE:"成功",data:{PLACES:[{PLACE_TYPE:"0",PLACE_NAME:"供应商A",PLACE_CODE:"0001",PLACE_OPTION:"1",PLACE_TIME:"2020-07-02 16:00:00"},{PLACE_TYPE:"0",PLACE_NAME:"供应商A",PLACE_CODE:"0001",PLACE_OPTION:"0",PLACE_TIME:"2020-07-02 14:00:00"},{PLACE_TYPE:"0",PLACE_NAME:"供应商B",PLACE_CODE:"0002",PLACE_OPTION:"0",PLACE_TIME:"2020-07-02 11:00:00"},{PLACE_TYPE:"0",PLACE_NAME:"供应商B",PLACE_CODE:"0002",PLACE_OPTION:"1",PLACE_TIME:"2020-07-02 12:00:00"}]}}),_t.a.mock("/process/query","post",{RESULT:"1",MESSAGE:"成功",data:{WAYBILL_CODE:"YD888888888888882",WAYBILL_STATE:5,LEVEL_URGENT:"1",LEVEL_LATE:"1",LINE_UP_NO:"2020",WAITTING_AMOUNT:"20",START_PLACE:"WDHL中转库",TARGET_PLACE:"三工厂",TIME:"12:00",AREA_NAME:"南区停车区域",AREA_AMOUNT_TOTAL:"20",AREA_AMOUNT_USED:"10",WAITTING_DURATION:"4300",LINE_NAME:"WE",CUR_PLATFORM_NAME:"W08",CUR_PLATFORM_CODE:"",PLATFORM_AMOUNT:"3",PLATFORMS:[{PLATFORM_NAME:"WE/W02",PLATFORM_FREE:"1"},{PLATFORM_NAME:"W07",PLATFORM_FREE:"1"},{PLATFORM_NAME:"W08",PLATFORM_FREE:"0"},{PLATFORM_NAME:"W09",PLATFORM_FREE:"0"}],TASKS:[{PLATFORM_NAME:"平台A",PLATFORM_CODE:"0001",OPERATE_CODE:"1",OPERATE_TIME:"2020-07-02 16:00:00"},{PLATFORM_NAME:"平台A",PLATFORM_CODE:"0001",OPERATE_CODE:"0",OPERATE_TIME:"2020-07-02 14:00:00"},{PLATFORM_NAME:"平台B",PLATFORM_CODE:"0002",OPERATE_CODE:"0",OPERATE_TIME:"2020-07-02 11:00:00"},{PLATFORM_NAME:"平台B",PLATFORM_CODE:"0002",OPERATE_CODE:"1",OPERATE_TIME:"2020-07-02 12:00:00"}]}}),_t.a.mock("/message/list","get",{status:"1",message:"",data:{total:"31",NOTIFY_MESSAGE:[{isLate:"1",isUrgent:"1",title:"运单配送晚点",description:"描述1",createDate:"2020-10-13 15:35:00",isRead:"1",id:"2"},{isLate:"1",isUrgent:"0",title:"请到驻车场位置等待",description:"描述2",createDate:"2020-10-23 17:35:00",isRead:"1",id:"@integer(0,3)"},{isLate:"0",isUrgent:"0",title:"请到卸货平台卸货",description:"描述3",createDate:"2020-10-24 12:35:00",isRead:"@integer(0,1)",id:"1"}]}}),_t.a.mock("/lyapi/transfer/BIND_CAR_PLATE","post",{RESULT:"1",MESSAGE:"成功",data:{WAYBILL_CODE:"xxxxxxxxx"}}),_t.a.mock("/lyapi/transfer/SCAN_PLATFORM_IN_OUT","post",{RESULT:"1",MESSAGE:"成功",data:{UNLOAD_AMOUNT:1}});_t.a;i.a.use(o.a);var ct={getsign:function(){var t=location.href.split("#")[0],s=u.a.stringify({url:t});at.a.post("../../jsapi/config",s,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){console.log(t);var s=t.data;wx.config({debug:!1,appId:s.appId,timestamp:s.timestamp,nonceStr:s.nonceStr,signature:s.signature,jsApiList:["scanQRCode"]})},function(t){console.log(t)})}},lt=e("UnSZ"),vt=e.n(lt);i.a.use(vt.a),i.a.prototype.axios=at.a,i.a.prototype.Cookies=rt.a,i.a.prototype.common=ct,i.a.prototype.api="../..",i.a.prototype.sendHeaders={headers:{"Content-Type":"application/x-www-form-urlencoded"}},i.a.config.productionTip=!1,et.a.attach(document.body),new i.a({el:"#app",store:function(){return new o.a.Store({state:{userName:"",userJob:"",userImg:"",description:"",isNews:"",isShow:!0,isArrive:!0},mutations:{getName:function(t,s){t.userName=s,i.a.localStorage.set("userName",s)},getJob:function(t,s){t.userJob=s,i.a.localStorage.set("userJob",s)},getImg:function(t,s){t.userImg=s,i.a.localStorage.set("userImg",s)},getDes:function(t,s){t.description=s,i.a.localStorage.set("description",s)},getNews:function(t,s){t.isNews=s},getShow:function(t,s){t.isShow=s,i.a.localStorage.set("isShow",s)},getArrive:function(t,s){t.isArrive=s,i.a.localStorage.set("isArrive",s)}}})},router:K,components:{App:n},template:"<App/>"});var ut=function(){var t=document.getElementsByTagName("html")[0],s=document.documentElement.clientWidth||document.body.clientWidth;s>=750&&(s=750),s<=320&&(s=320),t.style.fontSize=s/7.5+"px"};window.onresize=ut,ut()},OszE:function(t,s){},QfG4:function(t,s,e){t.exports=e.p+"static/img/msg_icon.d40e69c.png"},TzC8:function(t,s){},YTlg:function(t,s){},eesw:function(t,s,e){t.exports=e.p+"static/img/freshen_icon.bf7e79a.png"},hdy8:function(t,s){},ll2q:function(t,s){},"n/Mz":function(t,s){},"tj+c":function(t,s){},"wF7/":function(t,s){},"xyB/":function(t,s){},"zuk/":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.6fe8418068514e6ee2b0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{639:function(t,e,o){var content=o(642);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("4a697b00",content,!0,{sourceMap:!1})},640:function(t,e,o){"use strict";o.r(e);o(26);var r={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"},tags:{type:Array,default:function(){return[]}},expanded:{type:Boolean,default:!1}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:500}})}}},n=(o(641),o(64)),c=o(91),l=o.n(c),h=(o(6),o(5),o(14),o(10),o(15),o(17)),v=o(0),d=(o(7),o(643),o(8)),f=o(173),x=o(127),m=o(39),y=o(206),_=o(29),w=o(58),k=o(102),z=o(205),C=o(16);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $=Object(d.a)(m.a,z.a,k.a,_.a,Object(y.a)("chipGroup"),Object(w.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return j(j(j(j({"v-chip":!0},k.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(k.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var o=Object(h.a)(e,2),r=o[0],n=o[1];t.$attrs.hasOwnProperty(r)&&Object(C.a)(r,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(x.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(f.b,t)},genClose:function(){var t=this;return this.$createElement(x.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],o=this.generateRouteLink(),r=o.tag,data=o.data;data.attrs=j(j({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var n=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(n,data),e)}}),B=o(405),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"frame"},[o("div",{staticClass:"overlay"},[o("div",{staticClass:"top"},[o("div",{staticClass:"d-flex"},t._l(t.tags,(function(e,r){return o("v-chip",{key:r,attrs:{color:e.color,label:""}},[t._v("\n          "+t._s(t.$t(e.text))+"\n        ")])})),1),t._v(" "),o("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),o("br")],2),t._v(" "),o("span",{attrs:{id:"caption-author"}},[t._t("author")],2)]),t._v(" "),o("div",{staticClass:"bottom"},[t.tags.find((function(t){return"event"===t.text}))?o("span",{attrs:{id:"caption-date"}},[t._t("date")],2):t._e()])]),t._v(" "),o("v-img",{class:{expanded:t.expanded},attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}})],1)}),[],!1,null,"3063bde2",null);e.default=component.exports;l()(component,{VChip:$,VImg:B.a})},641:function(t,e,o){"use strict";o(639)},642:function(t,e,o){var r=o(23)(!1);r.push([t.i,".frame[data-v-3063bde2]{overflow:hidden}.overlay[data-v-3063bde2]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;padding-bottom:2rem;padding-right:1.9rem;justify-content:space-between}.overlay[data-v-3063bde2],.top[data-v-3063bde2]{display:flex;flex-direction:column}.top[data-v-3063bde2]{align-items:flex-end;justify-content:flex-start;text-align:right}.v-image[data-v-3063bde2]{transition:all .6s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-3063bde2]{transform:scale(1.1);opacity:.6}#caption-author[data-v-3063bde2],#caption-content[data-v-3063bde2],#caption-date[data-v-3063bde2]{background-position:0;background-size:200%;transition:all .6s ease-in;text-align:right;text-decoration:none;max-width:66%}#caption-content[data-v-3063bde2]{font-size:1.2rem;line-height:2.2rem;text-decoration:none;text-shadow:1px 1px 0 alpha(#fff,.6);padding:12px;color:#000;background-image:linear-gradient(270deg,#fff 100%,#000 0);text-transform:uppercase}#caption-author[data-v-3063bde2]{padding:4px;color:#fff;background-image:linear-gradient(270deg,#000 100%,#fff 0);font-size:.8rem;line-height:2.2rem;text-shadow:1px 1px 0 alpha(#000,.6)}.overlay:hover #caption-content[data-v-3063bde2]{color:#fff;background-position:200%;background-color:#000;line-height:2.2rem;font-size:1.3rem}.overlay:hover #caption-author[data-v-3063bde2]{color:#000;background-position:200%;background-color:#fff}#caption-date[data-v-3063bde2]{padding:4px;color:#000;background-image:linear-gradient(270deg,#fff 100%,#000 0);font-size:1.2rem;line-height:2.2rem;text-shadow:1px 1px 0 alpha(#000,.6)}.expanded .v-image[data-v-3063bde2]{padding-top:24px!important}",""]),t.exports=r},643:function(t,e,o){var content=o(644);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("197fcea4",content,!0,{sourceMap:!1})},644:function(t,e,o){var r=o(23)(!1);r.push([t.i,'.caption,.display-2,.theme--light .display-4,.title{font-style:italic}.v-btn.v-btn--contained,.v-card{box-shadow:none}.v-chip.v-chip{border-radius:0;border-style:solid;border-width:thin}.v-stepper.v-stepper--vertical .v-stepper__content{border-left-color:transparent!important;margin-bottom:16px;padding-bottom:0}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#fff}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:0!important}.v-chip.v-chip--outlined{border-width:2px;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--x-small .v-icon{font-size:10px;height:10px;width:10px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--small .v-icon{font-size:12px;height:12px;width:12px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--default .v-icon{font-size:14px;height:14px;width:14px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--large .v-icon{font-size:16px;height:16px;width:16px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}.v-chip.v-size--x-large .v-icon{font-size:18px;height:18px;width:18px}',""]),t.exports=r}}]);
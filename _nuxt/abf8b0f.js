(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,10],{579:function(t,e,r){var content=r(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("fa9db1d8",content,!0,{sourceMap:!1})},580:function(t,e,r){"use strict";r(579)},581:function(t,e,r){var n=r(19)(!1);n.push([t.i,".caption,.display-2,.theme--light .display-4,.title{font-style:italic}.v-btn.v-btn--contained,.v-card{box-shadow:none}.v-chip.v-chip{border-radius:0;border-style:solid;border-width:thin}.v-stepper.v-stepper--vertical .v-stepper__content{border-left-color:transparent!important;margin-bottom:16px;padding-bottom:0}.section-title{border-bottom:5px solid #000}",""]),t.exports=n},582:function(t,e,r){"use strict";r.r(e);var n={props:{text:{type:String,default:""}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=(r(580),r(56)),l=r(80),c=r.n(l),d=r(565),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[r("div",{staticClass:"my-8"},[r("span",{staticClass:"section-title text-h4 text-uppercase"},[t._v(t._s(t.$t(t.text)))])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a})},583:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},584:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:""},alt:{type:Boolean,default:!1}},data:function(){return{scrolled:!1}},computed:{},mounted:function(){},methods:{onScroll:function(){this.scrolled=window.pageYOffset>0}}},o=r(56),l=r(80),c=r.n(l),d=r(565),v=r(578),f=r(567),m=r(583),x=r.n(m),w=r(274),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"transition-swing",class:{scrolled:"mt-14"},attrs:{fluid:!t.scrolled}},[r("v-row",{staticClass:"transition-swing",class:t.scrolled?"":"mx-12",attrs:{"no-gutters":!t.scrolled}},[r("SectionTitle",{attrs:{text:t.title}})],1),t._v(" "),r("v-row",{staticClass:"transition-swing",class:t.scrolled?"":"mx-12",attrs:{"no-gutters":!t.scrolled}},[r("v-col",{staticClass:"transition-swing",attrs:{cols:"12",md:"6",xl:"4",order:t.alt?"last":"first"}},[r("Item",{attrs:{first:!0,scroll:t.scrolled}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6",xl:"4"}},[r("v-row",{attrs:{"no-gutters":!t.scrolled}},[r("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[r("Item")],1),t._v(" "),r("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[r("Item")],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.xl?r("v-col",{attrs:{cols:"12",md:"6",xl:"4"}},[r("v-row",{attrs:{"no-gutters":!t.scrolled}},[r("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[r("Item")],1),t._v(" "),r("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[r("Item")],1)],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{SectionTitle:r(582).default,Item:r(585).default}),c()(component,{VCol:d.a,VContainer:v.a,VRow:f.a}),x()(component,{Scroll:w.b})},637:function(t,e,r){"use strict";r.r(e);var n=r(16),o=(r(63),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("hello").fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),l=r(56),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Section",{attrs:{title:"latest"}}),t._v(" "),r("Section",{attrs:{title:"events",alt:""}}),t._v(" "),r("Section",{attrs:{title:"research"}}),t._v(" "),r("Section",{attrs:{title:"library"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Section:r(584).default})}}]);
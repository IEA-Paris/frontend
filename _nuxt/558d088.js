(window.webpackJsonp=window.webpackJsonp||[]).push([[17,11,12],{588:function(t,e,o){var content=o(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("fa9db1d8",content,!0,{sourceMap:!1})},589:function(t,e,o){"use strict";o(588)},590:function(t,e,o){var n=o(19)(!1);n.push([t.i,".caption,.display-2,.theme--light .display-4,.title{font-style:italic}.v-btn.v-btn--contained,.v-card{box-shadow:none}.v-chip.v-chip{border-radius:0;border-style:solid;border-width:thin}.v-stepper.v-stepper--vertical .v-stepper__content{border-left-color:transparent!important;margin-bottom:16px;padding-bottom:0}.section-title{border-bottom:5px solid #000}",""]),t.exports=n},591:function(t,e,o){"use strict";o.r(e);var n={props:{text:{type:String,default:""}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},l=(o(589),o(40)),r=o(47),c=o.n(r),d=o(585),v=o(575),f=o(257),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{staticClass:"transition-swing d-flex justify-space-between align-center",attrs:{cols:"12"}},[o("div",{staticClass:"mb-6 mt-12 flex-grow-1"},[o("span",{staticClass:"section-title text-h4 text-uppercase"},[t._v(t._s(t.$t(t.text)))])]),t._v(" "),"latest"!==t.text?o("v-btn",{staticClass:"mt-6",attrs:{"x-large":"",text:"",nuxt:"",to:t.localePath("/"+t.text)}},[t._v("\n    See all\n    "),o("v-icon",{attrs:{right:""}},[t._v("mdi-chevron-right")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VIcon:f.a})},593:function(t,e,o){"use strict";o.r(e);var n={props:{title:{type:String,default:""},alt:{type:Boolean,default:!1}},data:function(){return{scrolled:!1}},computed:{},mounted:function(){},methods:{}},l=o(40),r=o(47),c=o.n(r),d=o(575),v=o(587),f=o(577),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",{staticClass:"transition-swing",attrs:{fluid:!t.$store.state.scrolled}},[o("v-row",{staticClass:"transition-swing",class:t.$store.state.scrolled?"":"mx-12",attrs:{"no-gutters":!t.$store.state.scrolled}},[o("SectionTitle",{attrs:{text:t.title}})],1),t._v(" "),o("v-row",{staticClass:"transition-swing",class:t.$store.state.scrolled?"":"mx-12",attrs:{"no-gutters":!t.$store.state.scrolled}},[o("v-col",{staticClass:"transition-swing",attrs:{cols:"12",md:"6",xl:"4",order:t.alt?"last":"first"}},[o("Item",{attrs:{first:!0,scroll:t.$store.state.scrolled}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",xl:"4"}},[o("v-row",{attrs:{"no-gutters":!t.$store.state.scrolled}},[o("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[o("Item")],1),t._v(" "),o("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[o("Item")],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.xl?o("v-col",{attrs:{cols:"12",md:"6",xl:"4"}},[o("v-row",{attrs:{"no-gutters":!t.$store.state.scrolled}},[o("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[o("Item")],1),t._v(" "),o("v-col",{staticClass:"transition-swing",attrs:{cols:"12"}},[o("Item")],1)],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{SectionTitle:o(591).default,Item:o(597).default}),c()(component,{VCol:d.a,VContainer:v.a,VRow:f.a})},641:function(t,e,o){"use strict";o.r(e);var n={props:{},data:function(){return{}},computed:{},mounted:function(){},methods:{}},l=o(40),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Section",{attrs:{title:"latest"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Section:o(593).default})}}]);
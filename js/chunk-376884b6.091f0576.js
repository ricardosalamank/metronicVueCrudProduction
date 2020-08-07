(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-376884b6"],{"10af":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[t("div",{staticClass:"alert-icon"},[t("span",{staticClass:"svg-icon svg-icon-lg"},[t("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),t("div",{staticClass:"alert-text"},[t("b",[e._v("Tables")]),e._v(" For displaying tabular data, <b-table> supports pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data. For simple display of tabular data without all the fancy features, BootstrapVue provides two lightweight alternative components <b-table-lite> and <b-table-simple>. "),t("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/table",target:"_blank"}},[e._v(" See documentation. ")])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("KTCodePreview",{attrs:{title:"Basic usage"},scopedSlots:e._u([{key:"preview",fn:function(){return[t("div",[t("b-table",{attrs:{striped:"",hover:"",items:e.code1.items}})],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code1.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code1.js)+" ")]},proxy:!0}])}),t("KTCodePreview",{attrs:{title:"Using variants for table cells"},scopedSlots:e._u([{key:"preview",fn:function(){return[t("p",[e._v(" Record data may also have additional special reserved name keys for colorizing rows and individual cells (variants), and for triggering additional row detail. The supported optional item record modifier properties (make sure your field keys do not conflict with these names): ")]),t("div",[t("b-table",{attrs:{hover:"",items:e.code2.items}})],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code2.js)+" ")]},proxy:!0}])}),t("KTCodePreview",{attrs:{title:"Fields as a simple array"},scopedSlots:e._u([{key:"preview",fn:function(){return[t("p",[e._v(" Fields can be a simple array, for defining the order of the columns, and which columns to display: ")]),t("div",[t("b-table",{attrs:{striped:"",hover:"",items:e.code3.items,fields:e.code3.fields}})],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code3.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code3.js)+" ")]},proxy:!0}])}),t("KTCodePreview",{attrs:{title:"Fields as an array of objects"},scopedSlots:e._u([{key:"preview",fn:function(){return[t("p",[e._v(" Fields can be a an array of objects, providing additional control over the fields (such as sorting, formatting, etc). Only columns (keys) that appear in the fields array will be shown: ")]),t("div",[t("b-table",{attrs:{striped:"",hover:"",items:e.code4.items,fields:e.code4.fields}})],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code4.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code4.js)+" ")]},proxy:!0}])}),t("KTCodePreview",{attrs:{title:"Table style options"},scopedSlots:e._u([{key:"preview",fn:function(){return[t("p",[e._v(" Table style options "),t("code",[e._v("fixed")]),e._v(", "),t("code",[e._v("stacked")]),e._v(", "),t("code",[e._v("caption-top")]),e._v(", "),t("code",[e._v("no-border-collapse")]),e._v(", sticky headers, sticky columns, and the table sorting feature, all require BootstrapVue's custom CSS. ")]),t("div",[t("b-form-group",{attrs:{label:"Table Options","label-cols-lg":"2"}},[t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.striped,callback:function(a){e.$set(e.code5,"striped",a)},expression:"code5.striped"}},[e._v(" Striped ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.bordered,callback:function(a){e.$set(e.code5,"bordered",a)},expression:"code5.bordered"}},[e._v(" Bordered ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.borderless,callback:function(a){e.$set(e.code5,"borderless",a)},expression:"code5.borderless"}},[e._v(" Borderless ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.outlined,callback:function(a){e.$set(e.code5,"outlined",a)},expression:"code5.outlined"}},[e._v(" Outlined ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.small,callback:function(a){e.$set(e.code5,"small",a)},expression:"code5.small"}},[e._v(" Small ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.hover,callback:function(a){e.$set(e.code5,"hover",a)},expression:"code5.hover"}},[e._v(" Hover ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.dark,callback:function(a){e.$set(e.code5,"dark",a)},expression:"code5.dark"}},[e._v(" Dark ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.fixed,callback:function(a){e.$set(e.code5,"fixed",a)},expression:"code5.fixed"}},[e._v(" Fixed ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.footClone,callback:function(a){e.$set(e.code5,"footClone",a)},expression:"code5.footClone"}},[e._v(" Foot Clone ")]),t("b-form-checkbox",{attrs:{inline:""},model:{value:e.code5.noCollapse,callback:function(a){e.$set(e.code5,"noCollapse",a)},expression:"code5.noCollapse"}},[e._v(" No border collapse ")])],1),t("b-form-group",{attrs:{label:"Head Variant","label-cols-lg":"2"}},[t("b-form-radio-group",{staticClass:"mt-lg-2",model:{value:e.code5.headVariant,callback:function(a){e.$set(e.code5,"headVariant",a)},expression:"code5.headVariant"}},[t("b-form-radio",{attrs:{value:null,inline:""}},[e._v("None")]),t("b-form-radio",{attrs:{value:"light",inline:""}},[e._v("Light")]),t("b-form-radio",{attrs:{value:"dark",inline:""}},[e._v("Dark")])],1)],1),t("b-form-group",{attrs:{label:"Table Variant","label-for":"table-style-variant","label-cols-lg":"2"}},[t("b-form-select",{attrs:{options:e.code5.tableVariants,id:"table-style-variant"},scopedSlots:e._u([{key:"first",fn:function(){return[t("option",{attrs:{value:""}},[e._v("-- None --")])]},proxy:!0}]),model:{value:e.code5.tableVariant,callback:function(a){e.$set(e.code5,"tableVariant",a)},expression:"code5.tableVariant"}})],1),t("b-table",{attrs:{striped:e.code5.striped,bordered:e.code5.bordered,borderless:e.code5.borderless,outlined:e.code5.outlined,small:e.code5.small,hover:e.code5.hover,dark:e.code5.dark,fixed:e.code5.fixed,"foot-clone":e.code5.footClone,"no-border-collapse":e.code5.noCollapse,items:e.code5.items,fields:e.code5.fields,"head-variant":e.code5.headVariant,"table-variant":e.code5.tableVariant}})],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code5.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code5.js)+" ")]},proxy:!0}])})],1)])],1)},n=[],o=t("d968"),l=t("0bce"),i={data:function(){return{code1:{html:'<div>\n    <b-table striped hover :items="items"></b-table>\n  </div>',js:"export default {\n    data() {\n      return {\n        items: [\n          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n          { age: 38, first_name: 'Jami', last_name: 'Carney' }\n        ]\n      }\n    }\n  }",items:[{age:40,first_name:"Dickerson",last_name:"Macdonald"},{age:21,first_name:"Larsen",last_name:"Shaw"},{age:89,first_name:"Geneva",last_name:"Wilson"},{age:38,first_name:"Jami",last_name:"Carney"}]},code2:{html:'<div>\n    <b-table hover :items="items"></b-table>\n  </div>',js:"export default {\n    data() {\n      return {\n        items: [\n          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          {\n            age: 89,\n            first_name: 'Geneva',\n            last_name: 'Wilson',\n            _rowVariant: 'danger'\n          },\n          {\n            age: 40,\n            first_name: 'Thor',\n            last_name: 'MacDonald',\n            _cellVariants: { age: 'info', first_name: 'warning' }\n          },\n          { age: 29, first_name: 'Dick', last_name: 'Dunlap' }\n        ]\n      }\n    }\n  }",items:[{age:40,first_name:"Dickerson",last_name:"Macdonald"},{age:21,first_name:"Larsen",last_name:"Shaw"},{age:89,first_name:"Geneva",last_name:"Wilson",_rowVariant:"danger"},{age:40,first_name:"Thor",last_name:"MacDonald",_cellVariants:{age:"info",first_name:"warning"}},{age:29,first_name:"Dick",last_name:"Dunlap"}]},code3:{html:'<div>\n    <b-table striped hover :items="items" :fields="fields"></b-table>\n  </div>',js:"export default {\n    data() {\n      return {\n        // Note `isActive` is left out and will not appear in the rendered table\n        fields: ['first_name', 'last_name', 'age'],\n        items: [\n          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }\n        ]\n      }\n    }\n  }",fields:["first_name","last_name","age"],items:[{isActive:!0,age:40,first_name:"Dickerson",last_name:"Macdonald"},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson"},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney"}]},code4:{html:'<div>\n    <b-table striped hover :items="items" :fields="fields"></b-table>\n  </div>',js:"export default {\n    data() {\n      return {\n        // Note 'isActive' is left out and will not appear in the rendered table\n        fields: [\n          {\n            key: 'last_name',\n            sortable: true\n          },\n          {\n            key: 'first_name',\n            sortable: false\n          },\n          {\n            key: 'age',\n            label: 'Person age',\n            sortable: true,\n            // Variant applies to the whole column, including the header and footer\n            variant: 'danger'\n          }\n        ],\n        items: [\n          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }\n        ]\n      }\n    }\n  }",fields:[{key:"last_name",sortable:!0},{key:"first_name",sortable:!1},{key:"age",label:"Person age",sortable:!0,variant:"danger"}],items:[{isActive:!0,age:40,first_name:"Dickerson",last_name:"Macdonald"},{isActive:!1,age:21,first_name:"Larsen",last_name:"Shaw"},{isActive:!1,age:89,first_name:"Geneva",last_name:"Wilson"},{isActive:!0,age:38,first_name:"Jami",last_name:"Carney"}]},code5:{html:'<div>\n    <b-form-group label="Table Options" label-cols-lg="2">\n      <b-form-checkbox v-model="striped" inline>Striped</b-form-checkbox>\n      <b-form-checkbox v-model="bordered" inline>Bordered</b-form-checkbox>\n      <b-form-checkbox v-model="borderless" inline>Borderless</b-form-checkbox>\n      <b-form-checkbox v-model="outlined" inline>Outlined</b-form-checkbox>\n      <b-form-checkbox v-model="small" inline>Small</b-form-checkbox>\n      <b-form-checkbox v-model="hover" inline>Hover</b-form-checkbox>\n      <b-form-checkbox v-model="dark" inline>Dark</b-form-checkbox>\n      <b-form-checkbox v-model="fixed" inline>Fixed</b-form-checkbox>\n      <b-form-checkbox v-model="footClone" inline>Foot Clone</b-form-checkbox>\n      <b-form-checkbox v-model="noCollapse" inline>No border collapse</b-form-checkbox>\n    </b-form-group>\n    <b-form-group label="Head Variant" label-cols-lg="2">\n      <b-form-radio-group v-model="headVariant" class="mt-lg-2">\n        <b-form-radio :value="null" inline>None</b-form-radio>\n        <b-form-radio value="light" inline>Light</b-form-radio>\n        <b-form-radio value="dark" inline>Dark</b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n    <b-form-group label="Table Variant" label-for="table-style-variant" label-cols-lg="2">\n      <b-form-select\n        v-model="tableVariant"\n        :options="tableVariants"\n        id="table-style-variant"\n      >\n        <template v-slot:first>\n          <option value="">-- None --</option>\n        </template>\n      </b-form-select>\n    </b-form-group>\n\n    <b-table\n      :striped="striped"\n      :bordered="bordered"\n      :borderless="borderless"\n      :outlined="outlined"\n      :small="small"\n      :hover="hover"\n      :dark="dark"\n      :fixed="fixed"\n      :foot-clone="footClone"\n      :no-border-collapse="noCollapse"\n      :items="items"\n      :fields="fields"\n      :head-variant="headVariant"\n      :table-variant="tableVariant"\n    ></b-table>\n  </div>',js:"export default {\n    data() {\n      return {\n        fields: ['first_name', 'last_name', 'age'],\n        items: [\n          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }\n        ],\n        tableVariants: [\n          'primary',\n          'secondary',\n          'info',\n          'danger',\n          'warning',\n          'success',\n          'light',\n          'dark'\n        ],\n        striped: false,\n        bordered: false,\n        borderless: false,\n        outlined: false,\n        small: false,\n        hover: false,\n        dark: false,\n        fixed: false,\n        footClone: false,\n        headVariant: null,\n        tableVariant: '',\n        noCollapse: false\n      }\n    }\n  }",fields:["first_name","last_name","age"],items:[{age:40,first_name:"Dickerson",last_name:"Macdonald"},{age:21,first_name:"Larsen",last_name:"Shaw"},{age:89,first_name:"Geneva",last_name:"Wilson"}],tableVariants:["primary","secondary","info","danger","warning","success","light","dark"],striped:!1,bordered:!1,borderless:!1,outlined:!1,small:!1,hover:!1,dark:!1,fixed:!1,footClone:!1,headVariant:null,tableVariant:"",noCollapse:!1}}},components:{KTCodePreview:o["a"]},mounted:function(){this.$store.dispatch(l["a"],[{title:"Vue Bootstrap",route:"alert"},{title:""}])}},r=i,d=t("2877"),c=Object(d["a"])(r,s,n,!1,null,null,null);a["default"]=c.exports},d968:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("KTCard",{ref:"preview",attrs:{title:e.title,example:!0},scopedSlots:e._u([e.hasTitleSlot?{key:"title",fn:function(){return[t("h3",{staticClass:"card-title"},[e._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[t("div",{staticClass:"example-tools justify-content-center"},[t("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),t("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[t("div",{staticClass:"example-code mb-5"},[e.hasGeneralCode||e.hasSingleCodeType?e._e():t("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[e.hasHtmlCode?t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:e.setActiveTab}},[e._v(" HTML ")])]):e._e(),e.hasJsCode?t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:e.setActiveTab}},[e._v(" JS ")])]):e._e(),e.hasScssCode?t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:e.setActiveTab}},[e._v(" SCSS ")])]):e._e()]),e.hasGeneralCode?t("div",[e._t("code")],2):e._e(),e.hasGeneralCode||e.hasSingleCodeType?e._e():t("div",[t("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:e.tabIndex,callback:function(a){e.tabIndex=a},expression:"tabIndex"}},[t("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[t("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[e._t("html")],2)],1),t("b-tab",{staticClass:"example-highlight"},[t("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[e._t("js")],2)],1),t("b-tab",{staticClass:"example-highlight"},[t("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[e._t("scss")],2)],1)],1)],1),e.hasSingleCodeType?t("div",{staticClass:"example-highlight"},[e.hasHtmlCode?t("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[e._t("html")],2):e._e(),e.hasJsCode?t("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[e._t("js")],2):e._e(),e.hasScssCode?t("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[e._t("scss")],2):e._e()],1):e._e()]),e._t("preview")]},proxy:!0}],null,!0)})},n=[],o=(t("4160"),t("159b"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card card-custom gutter-b",class:e.classes},[e.hasTitleSlot||e.title?t("div",{staticClass:"card-header",class:e.headClass},[t("div",{staticClass:"card-title"},[e.hasTitleSlot?e._t("title"):e._e(),e.hasTitleSlot?e._e():t("h3",{staticClass:"card-label"},[e._v(" "+e._s(e.title)+" ")])],2),t("div",{staticClass:"card-toolbar"},[e._t("toolbar")],2)]):e._e(),t("div",{staticClass:"card-body",class:{bodyClass:e.bodyClass,"body-fit":e.bodyFit,"body-fluid":e.bodyFluid}},[e._t("body")],2),e.hasFootSlot?t("div",{staticClass:"card-footer"},[e._t("foot")],2):e._e()])}),l=[],i={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var e={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return e[this.headSizeClass]=this.headSizeClass,this.cardClass&&(e[this.cardClass]=!0),e},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=i,d=t("2877"),c=Object(d["a"])(r,o,l,!1,null,null,null),m=c.exports,f=t("b2e9"),b={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:m},mounted:function(){var e=this;this.$nextTick((function(){f["a"].init([e.$el]);var a=e.$el.querySelectorAll(".hljs");a.forEach((function(e){e.classList.add("language-".concat(e.classList[1])),e.classList.remove("hljs")}))}))},methods:{setActiveTab:function(e){for(var a=e.target.closest('[role="tablist"]'),t=a.querySelectorAll('[data-toggle="tab"]'),s=0;s<t.length;s++)t[s].classList.remove("active");e.target.classList.add("active"),this.tabIndex=parseInt(e.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var e=this,a=0;return["html","js","scss"].forEach((function(t){e.$slots.hasOwnProperty(t)&&a++})),1===a},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},h=b,u=Object(d["a"])(h,s,n,!1,null,null,null);a["a"]=u.exports}}]);
//# sourceMappingURL=chunk-376884b6.091f0576.js.map
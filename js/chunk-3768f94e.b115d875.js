(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3768f94e"],{"20ca":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[o("div",{staticClass:"alert-icon"},[o("span",{staticClass:"svg-icon svg-icon-lg"},[o("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),o("div",{staticClass:"alert-text"},[o("b",[t._v("Button group")]),t._v(" Group a series of buttons together on a single line with <b-button-group>. "),o("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/button-group",target:"_blank"}},[t._v(" See documentation. ")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("KTCodePreview",{attrs:{title:"Button group"},scopedSlots:t._u([{key:"preview",fn:function(){return[o("p",[t._v(" Default button group and button group using contextual variants. ")]),o("div",[o("b-button-group",[o("b-button",[t._v("Button 1")]),o("b-button",[t._v("Button 2")]),o("b-button",[t._v("Button 3")])],1)],1),o("div",{staticClass:"mt-3"},[o("b-button-group",[o("b-button",{attrs:{variant:"success"}},[t._v("Success")]),o("b-button",{attrs:{variant:"info"}},[t._v("Info")]),o("b-button",{attrs:{variant:"warning"}},[t._v("Warning")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html1)+" ")]},proxy:!0}])}),o("KTCodePreview",{attrs:{title:"Sizing"},scopedSlots:t._u([{key:"preview",fn:function(){return[o("p",[t._v(" Set the size prop to "),o("code",[t._v("lg")]),t._v(" or "),o("code",[t._v("sm")]),t._v(" to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons. ")]),o("div",[o("b-button-group",[o("b-button",[t._v("Button 1")]),o("b-button",[t._v("Button 2")]),o("b-button",[t._v("Button 3")])],1)],1),o("div",{staticClass:"mt-3"},[o("b-button-group",{attrs:{size:"sm"}},[o("b-button",[t._v("Left")]),o("b-button",[t._v("Middle")]),o("b-button",[t._v("Right")])],1)],1),o("div",{staticClass:"mt-3"},[o("b-button-group",{attrs:{size:"lg"}},[o("b-button",[t._v("Left")]),o("b-button",[t._v("Middle")]),o("b-button",[t._v("Right")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html2)+" ")]},proxy:!0}])})],1),o("div",{staticClass:"col-md-6"},[o("KTCodePreview",{attrs:{title:"Vertical variation"},scopedSlots:t._u([{key:"preview",fn:function(){return[o("p",[t._v(" Make a set of buttons appear vertically stacked rather than horizontally by setting the "),o("code",[t._v("vertical")]),t._v(" prop. Split button dropdowns are not supported here. ")]),o("div",[o("b-button-group",{attrs:{vertical:""}},[o("b-button",[t._v("Top")]),o("b-button",[t._v("Middle")]),o("b-button",[t._v("Bottom")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html3)+" ")]},proxy:!0}])}),o("KTCodePreview",{attrs:{title:"Dropdown menu support"},scopedSlots:t._u([{key:"preview",fn:function(){return[o("p",[t._v(" Add "),o("code",[t._v("<b-dropdown>")]),t._v(" menus directly inside your "),o("code",[t._v("<b-button-group>")]),t._v(". Note that split dropdown menus are not supported when prop codevertical is set. ")]),o("div",[o("b-button-group",[o("b-button",[t._v("Button")]),o("b-dropdown",{attrs:{right:"",text:"Menu"}},[o("b-dropdown-item",[t._v("Item 1")]),o("b-dropdown-item",[t._v("Item 2")]),o("b-dropdown-divider"),o("b-dropdown-item",[t._v("Item 3")])],1),o("b-dropdown",{attrs:{right:"",split:"",text:"Split Menu"}},[o("b-dropdown-item",[t._v("Item 1")]),o("b-dropdown-item",[t._v("Item 2")]),o("b-dropdown-divider"),o("b-dropdown-item",[t._v("Item 3")])],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html4)+" ")]},proxy:!0}])})],1)])],1)},s=[],a=o("d968"),i=o("0bce"),l={data:function(){return{html1:'\n  <div>\n    <b-button-group>\n      <b-button>Button 1</b-button>\n      <b-button>Button 2</b-button>\n      <b-button>Button 3</b-button>\n    </b-button-group>\n  </div>\n  <div class="mt-3">\n    <b-button-group>\n      <b-button variant="success">Success</b-button>\n      <b-button variant="info">Info</b-button>\n      <b-button variant="warning">Warning</b-button>\n    </b-button-group>\n  </div>',html2:'\n  <div>\n    <b-button-group>\n      <b-button>Button 1</b-button>\n      <b-button>Button 2</b-button>\n      <b-button>Button 3</b-button>\n    </b-button-group>\n  </div>\n  <div class="mt-3">\n    <b-button-group size="sm">\n      <b-button>Left</b-button>\n      <b-button>Middle</b-button>\n      <b-button>Right</b-button>\n    </b-button-group>\n  </div>\n  <div class="mt-3">\n    <b-button-group size="lg">\n      <b-button>Left</b-button>\n      <b-button>Middle</b-button>\n      <b-button>Right</b-button>\n    </b-button-group>\n  </div>',html3:"\n        <b-button-group vertical>\n          <b-button>Top</b-button>\n          <b-button>Middle</b-button>\n          <b-button>Bottom</b-button>\n        </b-button-group>",html4:'<div>\n  <b-button-group>\n    <b-button>Button</b-button>\n    <b-dropdown right text="Menu">\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider></b-dropdown-divider>\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-dropdown right split text="Split Menu">\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider></b-dropdown-divider>\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n  </b-button-group>\n</div>'}},components:{KTCodePreview:a["a"]},mounted:function(){this.$store.dispatch(i["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Buttons",route:"button"},{title:"Button Group"}])}},r=l,d=o("2877"),u=Object(d["a"])(r,n,s,!1,null,null,null);e["default"]=u.exports},d968:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[o("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[o("div",{staticClass:"example-tools justify-content-center"},[o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[o("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():o("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?o("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():o("div",[o("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[o("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[o("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),o("b-tab",{staticClass:"example-highlight"},[o("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),o("b-tab",{staticClass:"example-highlight"},[o("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?o("div",{staticClass:"example-highlight"},[t.hasHtmlCode?o("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?o("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?o("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},s=[],a=(o("4160"),o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?o("div",{staticClass:"card-header",class:t.headClass},[o("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():o("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),o("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),o("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?o("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),i=[],l={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=l,d=o("2877"),u=Object(d["a"])(r,a,i,!1,null,null,null),b=u.exports,c=o("b2e9"),p={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:b},mounted:function(){var t=this;this.$nextTick((function(){c["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),o=e.querySelectorAll('[data-toggle="tab"]'),n=0;n<o.length;n++)o[n].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(o){t.$slots.hasOwnProperty(o)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},h=p,v=Object(d["a"])(h,n,s,!1,null,null,null);e["a"]=v.exports}}]);
//# sourceMappingURL=chunk-3768f94e.b115d875.js.map
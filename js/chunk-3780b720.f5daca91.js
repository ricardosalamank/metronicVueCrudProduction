(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3780b720"],{d968:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[e("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[e("div",{staticClass:"example-tools justify-content-center"},[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[e("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():e("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?e("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():e("div",[e("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(s){t.tabIndex=s},expression:"tabIndex"}},[e("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[e("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),e("b-tab",{staticClass:"example-highlight"},[e("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),e("b-tab",{staticClass:"example-highlight"},[e("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?e("div",{staticClass:"example-highlight"},[t.hasHtmlCode?e("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?e("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?e("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},i=[],l=(e("4160"),e("159b"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?e("div",{staticClass:"card-header",class:t.headClass},[e("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():e("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),e("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),e("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?e("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),n=[],o={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=o,c=e("2877"),d=Object(c["a"])(r,l,n,!1,null,null,null),h=d.exports,u=e("b2e9"),g={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:h},mounted:function(){var t=this;this.$nextTick((function(){u["a"].init([t.$el]);var s=t.$el.querySelectorAll(".hljs");s.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var s=t.target.closest('[role="tablist"]'),e=s.querySelectorAll('[data-toggle="tab"]'),a=0;a<e.length;a++)e[a].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,s=0;return["html","js","scss"].forEach((function(e){t.$slots.hasOwnProperty(e)&&s++})),1===s},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},m=g,p=Object(c["a"])(m,a,i,!1,null,null,null);s["a"]=p.exports},f7eb:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[e("div",{staticClass:"alert-icon"},[e("span",{staticClass:"svg-icon svg-icon-lg"},[e("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),e("div",{staticClass:"alert-text"},[e("b",[t._v("Carousel")]),t._v(" The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators. "),e("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/carousel",target:"_blank"}},[t._v(" See documentation. ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("KTCodePreview",{attrs:{title:"Carousel"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("div",[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(s){t.slide=s},expression:"slide"}},[e("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),e("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[e("h1",[t._v("Hello world!")])]),e("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),e("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),e("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[e("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1),e("p",{staticClass:"mt-4"},[t._v(" Slide #: "+t._s(t.slide)),e("br"),t._v(" Sliding: "+t._s(t.sliding)+" ")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html1)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.js1)+" ")]},proxy:!0}])})],1)])],1)},i=[],l=e("d968"),n=e("0bce"),o={data:function(){return{slide:0,sliding:null,html1:'<div>\n    <b-carousel\n      id="carousel-1"\n      v-model="slide"\n      :interval="4000"\n      controls\n      indicators\n      background="#ababab"\n      img-width="1024"\n      img-height="480"\n      style="text-shadow: 1px 1px 2px #333;"\n      @sliding-start="onSlideStart"\n      @sliding-end="onSlideEnd"\n    >\n      \x3c!-- Text slides with image --\x3e\n      <b-carousel-slide\n        caption="First slide"\n        text="Nulla vitae elit libero, a pharetra augue mollis interdum."\n        img-src="https://picsum.photos/1024/480/?image=52"\n      ></b-carousel-slide>\n\n      \x3c!-- Slides with custom text --\x3e\n      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">\n        <h1>Hello world!</h1>\n      </b-carousel-slide>\n\n      \x3c!-- Slides with image only --\x3e\n      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>\n\n      \x3c!-- Slides with img slot --\x3e\n      \x3c!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment --\x3e\n      <b-carousel-slide>\n        <template v-slot:img>\n          <img\n            class="d-block img-fluid w-100"\n            width="1024"\n            height="480"\n            src="https://picsum.photos/1024/480/?image=55"\n            alt="image slot"\n          >\n        </template>\n      </b-carousel-slide>\n\n      \x3c!-- Slide with blank fluid image to maintain slide aspect ratio --\x3e\n      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\n        </p>\n      </b-carousel-slide>\n    </b-carousel>\n\n    <p class="mt-4">\n      Slide #: {{ slide }}<br>\n      Sliding: {{ sliding }}\n    </p>\n  </div>',js1:"\n  export default {\n    data() {\n      return {\n        slide: 0,\n        sliding: null\n      }\n    },\n    methods: {\n      onSlideStart(slide) {\n        this.sliding = true\n      },\n      onSlideEnd(slide) {\n        this.sliding = false\n      }\n    }\n  }"}},components:{KTCodePreview:l["a"]},mounted:function(){this.$store.dispatch(n["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Carousel"}])},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},r=o,c=e("2877"),d=Object(c["a"])(r,a,i,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3780b720.f5daca91.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{176:function(t,e,i){"use strict";i(188)},177:function(t,e,i){"use strict";e.a=(t,e)=>new Promise((i=>{const s="object"==typeof window&&window.storefront;if(s){const n=()=>{let n=s.info&&s.info[t];return!!(n&&(e&&(n=n[e]),n&&Object.keys(n).length))&&(i(n),!0)};n()||s.on(`info:${t}`,n)}}))},187:function(t,e,i){"use strict";var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((({path:t})=>t===this.href))))}}},n=i(52),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},188:function(t,e,i){var s=i(213);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(175).default)("fd5c67d2",s,!0,{})},189:function(t,e,i){"use strict";i(12);var s=i(28),n=i(89),o=i(65);var a={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(n.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let n,o;for(const a in s){const r=s[a];if(void 0!==r&&t[a]){if(void 0!==o)if(null===r){if(o>=e)continue}else if(r<e||r-50<=i||null!==o&&r>o)continue;n=a,o=r}}return n})(this.src,t,i,this.containerBreakpoints),n=this.src[s],{url:o,size:a}=n||this.defaultImgObj;if(e=o,t&&a&&this.canCalcHeight){const[e,i]=a.split("x").map((t=>parseInt(t,10)));i&&(this.height=`${t>=e?i:t*i/e}px`)}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/"+(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(o.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},r=(i(176),i(52)),c=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,n=t.type;return i("source",{key:e,attrs:{srcset:s,type:n}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},190:function(t,e,i){"use strict";var s=i(27),n=i(43),o=i(44),a=i(45),r=i(80),c=i(177);const l=(t,e)=>{const{type:i,value:s}=e;if(s)return"percentage"===i?t*(100-s)/100:t-s};var u={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(n.a)(s.o),i19from:()=>Object(n.a)(s.xb),i19interestFree:()=>Object(n.a)(s.Kb),i19of:()=>Object(n.a)(s.rc),i19to:()=>Object(n.a)(s.Gd),i19upTo:()=>Object(n.a)(s.Pd),i19youEarn:()=>Object(n.a)(s.Xd),price(){const t=Object(o.a)(this.product);return this.extraDiscount.value?l(t,this.extraDiscount):t},comparePrice(){return Object(a.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(o.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(o.a)(this.product);for(let i=0;i<t.length;i++){if(Object(o.a)({...this.product,...t[i]})>e)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&l(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:r.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(c.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(c.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const e=t.loyalty_points_programs;this.isLiteral&&e&&this.$nextTick((()=>{for(const t in e){const i=e[t];if(i&&i.earn_percentage>0){this.pointsMinPrice=i.min_subtotal_to_earn,this.pointsProgramName=i.name,this.earnPointsFactor=i.earn_percentage/100;break}}}))})))}},d=(i(176),i(52)),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(" "+t._s(t.i19from)+" ")]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(" "+t._s(t.i19to)+" ")])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value"},[t.hasVariedPrices?i("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?i("div",{key:"points",staticClass:"prices__points"},[i("i",{staticClass:"fas fa-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),i("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),i("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=p.exports},191:function(t,e,i){"use strict";var s=i(27),n=i(43),o=i(25),a=i(82),r=i(45),c=i(44),l=i(34),u=i(3),d=i(7),p=i(187),h=i(189),m=i(190);const b=(t,e)=>{if("object"==typeof window){t=`productCard${t}Html`;const i="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof i)return i}};var f={name:"ProductCard",components:{ALink:p.a,APicture:h.a,APrices:m.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,error:""}),computed:{i19outOfStock:()=>Object(n.a)(s.Cc),i19unavailable:()=>Object(n.a)(s.Ld),ratingHtml(){return b("Rating",this.body)},buyHtml(){return b("Buy",this.body)},footerHtml(){return b("Footer",this.body)},name(){return Object(o.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(n.a)(s.u)},isInStock(){return Object(a.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},discount(){const{body:t}=this;return Object(r.a)(t)?Math.round(100*(t.base_price-Object(c.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records},fetchItem(){this.productId&&(this.isLoading=!0,Object(u.g)({url:`/products/${this.productId}.json`}).then((({data:t})=>{this.$emit("update:product",t),this.setBody(t),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(n.a)(s.Q))})).finally((()=>{this.isLoading=!1})))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(u.g)({url:`/products/${t._id}.json`}).then((({data:e})=>{const s=["variations","customizations","kit_composition"];for(let t=0;t<s.length;t++){const n=e[s[t]];if(n&&n.length)return Promise.all([i.e(0),i.e(2),i.e(6),i.e(18)]).then(i.bind(null,378)).then((t=>{new l.a({render:i=>i(t.default,{props:{product:e}})}).$mount(this.$refs.quickview)}))}const{quantity:n,price:o}=e;d.a.addProduct({...t,quantity:n,price:o})})).catch((e=>{console.error(e),window.location=`/${t.slug}`})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},_=(i(176),i(52)),y=Object(_.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():i("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("body",(function(){return[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,s){return 1===t.body.pictures.length||1===s||t.isHovered?i("a-picture",{key:s,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",(function(){return[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2)]})),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",(function(){return[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]})),i("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",(function(){return[t.buyHtml?i("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),i("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?i("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",(function(){return[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}))],2)]:t._t("out-of-stock",(function(){return[i("p",{staticClass:"badge badge-dark"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[i("p",{staticClass:"badge badge-warning"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("footer",(function(){return[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2)]),t.isLoading?[t._t("default"),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),i("div",{ref:"quickview"})],2)}),[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}],!1,null,null,null);e.a=y.exports},213:function(t,e,i){(e=i(174)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},215:function(t,e,i){"use strict";i.r(e);var s=i(0),n=i(20),o=i(34),a=i(65),r=i(82),c=i(67),l=i(191),u=(t={},e="product-card")=>{t.buyText&&(window.productCardBuyText=t.buyText),t.buy&&(window.productCardBuyHtml=t.buy),t.footer&&(window.productCardFooterHtml=t.footer);const i=window.storefront&&window.storefront.getScopedSlots,s=document.querySelectorAll(`.${e}`),n=[];for(let t=0;t<s.length;t++)if(s[t]){const{productId:e,toRender:i}=s[t].dataset;i&&-1===n.indexOf(e)&&n.push(e)}let u;if(n.length>=4&&n.length<=70&&!t.skipSearchApi){const t=new c.a;u=t.setPageSize(n.length).setProductIds(n).fetch(!0,{timeout:5e3}).then((()=>{const e=t.getItems();for(let t=0;t<2;t++)d(s[t]);return e})).catch((t=>{console.error(t)}))}else u=Promise.resolve();const d=s=>{if(s){const{productId:n,sku:a,toRender:c}=s.dataset;if(c){let c;u.then((t=>{Array.isArray(t)&&(c=t.find((({_id:t})=>t===n)))})).finally((()=>{let u;if(c){if(u=!0,!c.available||!c.visible||!Object(r.a)(c)){const t=s.parentNode&&s.parentNode.parentNode;t&&"LI"===t.tagName&&t.parentNode.appendChild(t)}}else{const t=s.parentNode;if(t&&(c=t.dataset.product,"string"==typeof c))try{c=JSON.parse(c)}catch(t){c=void 0}}((s,n,a,r,c)=>{new o.a({render:o=>o(l.a,{class:"product-card"!==e?e:null,attrs:{"data-product-id":n,"data-sku":a},props:{...t.props,productId:n,product:r,isLoaded:c,transitionClass:null},scopedSlots:"function"==typeof i?i(s,o):void 0})}).$mount(s)})(s,n,a,c,u)}))}}};Object(a.a)(s,{rootMargin:"350px 0px",threshold:0,load:d}).observe()};const d=window.location.pathname.startsWith("/app/"),p=[],h="localhost"===window.location.hostname?50:1,m=(t,e)=>{const i=new Promise((i=>{setTimeout((()=>{const o=window._widgets&&window._widgets[t];if(o&&o.active&&(!o.desktopOnly||!s.isMobile)&&(d?o.enableCheckout:!o.disablePages))return e().then((e=>{"function"==typeof e.default&&e.default({...o.options,$emit(t,e){n.a.emit(t,e)}}),n.a.emit(`widget:${t}`),console.log(`Widget loaded: ${t}`)})).catch(console.error).finally(i);i()}),h)}));p.push(i)},{resource:b}=document.body.dataset;d||"products"!==b||m("@ecomplus/widget-product",(()=>Promise.all([i.e(0),i.e(2),i.e(6),i.e(29)]).then(i.bind(null,362)))),Promise.all(p).then((()=>{m("@ecomplus/widget-product-card",(()=>Promise.resolve({default:u}))),("/search"===window.location.pathname||"categories"===b||"brands"===b||!b&&document.getElementById("search-engine"))&&m("@ecomplus/widget-search-engine",(()=>Promise.all([i.e(3),i.e(22)]).then(i.bind(null,363))));const t=t=>{"function"==typeof window.requestIdleCallback?setTimeout((()=>window.requestIdleCallback(t)),200):setTimeout(t,800)};t((()=>{n.a.emit("load:lcp"),d||(m("@ecomplus/widget-search",(()=>Promise.all([i.e(3),i.e(19)]).then(i.bind(null,373)))),m("@ecomplus/widget-minicart",(()=>i.e(15).then(i.bind(null,374)))),m("@ecomplus/widget-user",(()=>i.e(17).then(i.bind(null,375))))),Promise.all(p).then((()=>{t((()=>n.a.emit("load:components"))),m("@ecomplus/widget-tag-manager",(()=>i.e(21).then(i.bind(null,379)))),m("@ecomplus/widget-analytics",(()=>i.e(20).then(i.bind(null,380)))),m("@ecomplus/widget-fb-pixel",(()=>i.e(27).then(i.bind(null,376)))),m("@ecomplus/widget-gmc-ratings",(()=>i.e(28).then(i.bind(null,364)))),m("@ecomplus/widget-ebit",(()=>i.e(26).then(i.bind(null,365)))),m("@ecomplus/widget-compre-confie",(()=>i.e(25).then(i.bind(null,366))))}))}))}))}},0,[0,2,6,29,3,22]]);
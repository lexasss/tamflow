(function(t){function e(e){for(var s,l,r=e[0],o=e[1],c=e[2],d=0,p=[];d<r.length;d++)l=r[d],i[l]&&p.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},n=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="https://lexasss.github.io/tamflow/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"00d6":function(t,e,a){"use strict";a("300e")},1361:function(t,e,a){},"300e":function(t,e,a){},"32cd":function(t,e,a){"use strict";a("bcbc")},"353f":function(t,e,a){"use strict";a("a812")},3695:function(t,e,a){},"3c8a":function(t,e,a){},4508:function(t,e,a){"use strict";a("494c")},"494c":function(t,e,a){},"54dd":function(t,e,a){"use strict";a("ee0f")},"576a":function(t,e,a){"use strict";a("1361")},"5c48":function(t,e,a){},"5c6c":function(t,e,a){"use strict";a("d906")},"7c55":function(t,e,a){"use strict";a("5c48")},"8e86":function(t,e,a){},a812:function(t,e,a){},b435:function(t,e,a){"use strict";a("3695")},b879:function(t,e,a){"use strict";a("3c8a")},bcbc:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);var s=a("2b0e");s["default"];const i=s["default"];var n=i,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section",attrs:{id:"app"}},[a("navbar"),a("router-view"),a("div",{staticClass:"modal",class:{"is-active":t.showLogin}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-content"},[a("login")],1),a("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.closeLogin()}}})])],1)},r=[],o=a("60a3"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navbar-main-menu"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:t.pathTo()}},[t._v(t._s(t.plants))]),t.isAuthorized?a("router-link",{staticClass:"navbar-item",attrs:{to:t.pathTo("add")}},[t._v(t._s(t.add))]):t._e(),a("router-link",{staticClass:"navbar-item",attrs:{to:t.pathTo("about")}},[t._v(t._s(t.about))])],1),a("div",{staticClass:"site-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[t.isAuthorized?a("a",{staticClass:"button",on:{click:function(e){t.logOut()}}},[t._m(1),a("span",[t._v("Log out")])]):a("a",{staticClass:"button",on:{click:function(e){t.logIn()}}},[t._m(2),a("span",[t._v("Log in")])])])])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"navbar-item"}),a("div",{staticClass:"navbar-item"},[a("h2",{staticClass:"is-size-4"},[t._v("TAMFLIST")])]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbar-main-menu"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-large"},[a("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-large"},[a("i",{staticClass:"fas fa-user-lock"})])}];const d=new s["default"];var p=d;const f={apiKey:"AIzaSyC0TU1Neb_ClQUWh0V3MJ3JBJYKi8fQDus",authDomain:"tamflow-6aa34.firebaseapp.com",databaseURL:"https://tamflow-6aa34.firebaseio.com",projectId:"tamflow-6aa34",storageBucket:"",messagingSenderId:"863210262585"};let g=null,m=!0;const v=firebase.initializeApp(f),h=v.database().ref(),b=firebase.auth();function C(t){const e=!g&&!!t,a=!!g&&!t;m=!0,g=t,e?p.$emit("login"):a&&p.$emit("logout")}b.onAuthStateChanged(C);class y{get isAuthorized(){return!!g}logIn(t,e,a){return h||a(new Error("Not connected to the database")),b.signInWithEmailAndPassword(t,e).then(t=>{a(null,t)}).catch(t=>{a(t)})}logOut(){b&&b.signOut()}put(t){return h.child("plants").push(t)}update(t){const e=Object.assign({},t);delete e.id;const a={};return a["plants/"+t.id]=e,h.update(a)}all(){return h.child("/plants").once("value").then(t=>{const e=t.val(),a=[];for(const s in e){if(!e.hasOwnProperty(s))continue;const t=e[s];t.id=s,a.push(t)}return Promise.resolve(a)})}}const _=new y;var k=_,w=a("2f62");s["default"].use(w["a"]);const x=new w["a"].Store({state(){return{language:"ru",view:"tiles"}},mutations:{initialiseStore(t){const e=localStorage.getItem("tamflow");if(e){const a=Object.assign(t,JSON.parse(null!==e&&void 0!==e?e:""));this.replaceState(a)}},setLanguage(t,e){t.language=e},setView(t,e){t.view=e}}});x.subscribe((t,e)=>{localStorage.setItem("tamflow",JSON.stringify(e))});var j=x;const O={"Март":"Maaliskuu","Апрель":"Huhtikuu","Май":"Toukokuu","Июнь":"Kesäkuu","Июль":"Heinäkuu","Август":"Elokuu","Сентябрь":"Syyskuu"},P={title:{ru:"Цветковые растения города Тампере",fi:"Tampereen kukkivat kasvit"},gallery:{ru:"Галерея",fi:"Galleria"},plants:{ru:"Растения",fi:"Kasvit"},add:{ru:"Добавить",fi:"Lisää"},about:{ru:"О проекте",fi:"Projektista"},next:{ru:"Дальше",fi:"Seuraava"},previous:{ru:"Назад",fi:"Takaisin"},list:{ru:"Список",fi:"Luettelo"},tiles:{ru:"Плитка",fi:"Laatta"},firstFlowers:{ru:"Первое время зацветания",fi:"Ensimmäinen kukitus"}};var $={translate(t){const e=O[t];return e||t.replace(/[^\-]+/g,t=>{const e=O[t];return null!==e&&void 0!==e?e:t})},tr(t){return P[t][j.state.language]}},I=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l};const L=o["c"].config.devtools?"/":"/tamflow/";let R=class extends o["c"]{constructor(){super(...arguments),this.isAuthorized=!1}get plants(){return $.tr("plants")}get add(){return $.tr("add")}get about(){return $.tr("about")}get title(){return $.tr("title")}pathTo(t=""){return L+t}logOut(){k.logOut()}logIn(){p.$emit("show-login")}mounted(){p.$on("login",()=>{this.isAuthorized=!0}),p.$on("logout",()=>{this.isAuthorized=!1});const t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(t=>{const e=t.dataset.target;if(!e)return;const a=document.getElementById(e);a&&(t.addEventListener("click",()=>{t.classList.toggle("is-active"),a.classList.toggle("is-active")}),a.addEventListener("click",()=>{t.classList.remove("is-active"),a.classList.remove("is-active")}))})}};R=I([Object(o["a"])({})],R);var E,N=R,S=N,A=(a("d9eb"),a("2877")),V=Object(A["a"])(S,c,u,!1,null,null,null),D=V.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",class:{"is-danger":!t.ok(t.isEmailValid)},attrs:{type:"email",placeholder:"Email",autofocus:"autofocus"},domProps:{value:t.email},on:{keyup:function(e){return!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0),t.ok(t.isEmailValid)?t._e():a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fa fa-warning"})])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Password")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",class:{"is-danger":!t.ok(t.isPasswordValid)},attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:function(e){return!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(1),t.ok(t.isPasswordValid)?t._e():a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fa fa-warning"})])])]),t.showErrorMessage?a("div",{staticClass:"notification is-danger has-text-centered"},[t._v("Failed to log in")]):t._e(),a("div",{staticClass:"field"},[a("div",{staticClass:"control has-text-centered"},[a("button",{staticClass:"button is-primary",attrs:{disabled:!t.canLogIn},on:{click:t.login}},[t._v("Log in")])])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fa fa-user-secret"})])}],F=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l};(function(t){t[t["INVALID"]=-1]="INVALID",t[t["UNKNOWN"]=0]="UNKNOWN",t[t["VALID"]=1]="VALID"})(E||(E={}));let z=class extends o["c"]{constructor(){super(...arguments),this.email="",this.password="",this.inProgress=!1,this.showErrorMessage=!1}get isEmailValid(){return this.email?/(.{2,})@(\w{2,}\.\w{2,})/.test(this.email)?E.VALID:E.INVALID:E.UNKNOWN}get isPasswordValid(){return this.password?!this.password||this.password.length>5?E.VALID:E.INVALID:E.UNKNOWN}get canLogIn(){return!this.inProgress&&this.isEmailValid===E.VALID&&this.isPasswordValid===E.VALID}ok(t){return t!==E.INVALID}login(t){this.inProgress=!0,k.logIn(this.email,this.password,t=>{this.inProgress=!1,t?this.showErrorMessage=!0:(this.email="",this.password="",this.showErrorMessage=!1,p.$emit("hide-login"))})}};z=F([Object(o["a"])({})],z);var U=z,B=U,K=(a("b435"),Object(A["a"])(B,T,M,!1,null,"6337c132",null)),G=K.exports,J=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l};let q=class extends o["c"]{constructor(){super(...arguments),this.showLogin=!1}closeLogin(){p.$emit("hide-login")}mounted(){p.$on("show-login",()=>{this.showLogin=!0}),p.$on("hide-login",()=>{this.showLogin=!1})}};q=J([Object(o["a"])({components:{Navbar:D,Login:G}})],q);var W=q,H=W,Q=(a("7c55"),Object(A["a"])(H,l,r,!1,null,null,null)),Y=Q.exports,X=a("8c4f"),Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"columns tools"},[a("div",{staticClass:"column is-narrow top-buttons"},[a("a",{staticClass:"button tooltip",attrs:{"data-tooltip":"Русский",disabled:t.isLanguageSelected("ru")},on:{click:function(e){t.setLanguage("ru")}}},[a("span",[t._v("RU")])]),a("a",{staticClass:"button tooltip",attrs:{"data-tooltip":"Suomi",disabled:t.isLanguageSelected("fi")},on:{click:function(e){t.setLanguage("fi")}}},[a("span",[t._v("FI")])])]),a("div",{staticClass:"column is-narrow top-buttons"},[a("a",{staticClass:"button tooltip",attrs:{"data-tooltip":t.listView,disabled:t.isViewSelected("list")},on:{click:function(e){t.setView("list")}}},[t._m(0)]),a("a",{staticClass:"button tooltip",attrs:{"data-tooltip":t.tileView,disabled:t.isViewSelected("tiles")},on:{click:function(e){t.setView("tiles")}}},[t._m(1)])])]),t.isViewSelected("list")?a("plant-list",{attrs:{page:t.page,"page-count":t.pageCount},on:{ready:function(e){t.pageCount=e.pageCount}}}):t.isViewSelected("tiles")?a("plant-tiles"):t._e(),t.isViewSelected("list")?a("div",{staticClass:"section"},[a("nav",{staticClass:"pagination is-centered is-rounded",attrs:{role:"navigation","aria-label":"pagination"}},[a("button",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){t.goto(t.page-1)}}},[t._v(t._s(t.previous))]),a("button",{staticClass:"pagination-next",attrs:{disabled:t.page===t.pageCount},on:{click:function(e){t.goto(t.page+1)}}},[t._v(t._s(t.next))]),a("ul",{staticClass:"pagination-list"},[a("li",[1===t.page?a("a",{staticClass:"pagination-link is-current",attrs:{"aria-label":"Page 1","aria-current":"page"},on:{click:function(e){t.goto(1)}}},[t._v("1")]):a("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 1"},on:{click:function(e){t.goto(1)}}},[t._v("1")])]),t.page>7?a("li",[a("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._l(t.nearestPageIDs,(function(e){return a("li",[e===t.page?a("a",{staticClass:"pagination-link is-current",attrs:{"aria-label":"Page "+e,"aria-current":"page"},on:{click:function(a){t.goto(e)}}},[t._v(t._s(e))]):a("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page "+e},on:{click:function(a){t.goto(e)}}},[t._v(t._s(e))])])})),t.page<t.pageCount-6?a("li",[a("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t.pageCount>1?a("li",[t.page===t.pageCount?a("a",{staticClass:"pagination-link is-current",attrs:{"aria-label":"Page "+t.pageCount,"aria-current":"page"},on:{click:function(e){t.goto(t.pageCount)}}},[t._v(t._s(t.pageCount))]):a("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page "+t.pageCount},on:{click:function(e){t.goto(t.pageCount)}}},[t._v(t._s(t.pageCount))])]):t._e()],2)])]):t._e()],1)},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-large"},[a("i",{staticClass:"fas fa-th-list"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-large"},[a("i",{staticClass:"fas fa-th"})])}],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plant-list"},[t._l(t.pagePlants,(function(e,s){return a("plant-list-item",{key:e.id,attrs:{plant:e,index:t.getPlantIndex(s)},on:{"show-gallery":function(e){t.galleryImages=e.images,t.galleryIndex=e.index},edit:function(a){t.edit(e)}}})})),a("gallery",{attrs:{images:t.galleryImages,index:t.galleryIndex},on:{close:function(e){t.galleryIndex=null}}}),t.editing?a("editor",{attrs:{plant:t.editing},on:{updated:function(e){t.update()},cancel:function(e){t.cancelEditing()}}}):t._e()],2)},at=[],st=a("067c"),it=a.n(st),nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plant columns columns-custom"},[a("div",{staticClass:"column is-narrow"},[a("img",{staticClass:"image-300x200",attrs:{src:t.frontImageURL}})]),a("div",{staticClass:"column info"},[[t.plant.refs[t.mainLanguage]?a("a",{staticClass:"name-main",attrs:{href:t.plant.refs[t.mainLanguage],target:"_blank"}},[t._v(t._s(t.mainName(t.plant)))]):a("div",{staticClass:"name-main"},[t._v(t._s(t.mainName(t.plant)))])],a("div",{staticClass:"is-flex"},[t._l(t.plant.name,(function(e,s){return s!==t.mainLanguage?[t.plant.refs[s]?a("div",{staticClass:"name-others"},[a("a",{attrs:{href:t.plant.refs[s],target:"_blank"}},[t._v(t._s(t.plant.name[s]))])]):a("div",{staticClass:"name-others"},[a("span",[t._v(t._s(t.plant.name[s]))])])]:t._e()}))],2),a("div",{staticClass:"season"},[t._v(t._s(t.firstFlowers)+": "+t._s(t.getPlantSeason(t.plant)))]),"ru"===t.mainLanguage?a("div",{staticClass:"description"},[t._v(t._s(t.plant.description))]):t._e(),t.isExpanded?a("div",{staticClass:"images"},t._l(t.galleryImages,(function(e,s){return a("div",{staticClass:"preview",style:{backgroundImage:"url("+e.href+")"},on:{click:function(e){t.setGalleryIndex(s)}}})}))):a("div",[a("button",{staticClass:"button is-link is-small",on:{click:function(e){return!("button"in e)&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:void(t.isExpanded=!0)}}},[t._v(t._s(t.gallery))])])],2),a("div",{staticClass:"column is-narrow stacked"},[a("div",{staticClass:"tag is-info is-large"},[t._v(t._s(t.index))]),t.isAuthorized?a("button",{staticClass:"button",attrs:{title:"Edit"},on:{click:function(e){t.edit()}}},[t._m(0)]):t._e()])])},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-edit"})])}];class rt{constructor(){this.name={ru:"",la:"",fi:""},this.season="",this.description="",this.imageBase="",this.imageCount=5,this.refs={la:"",fi:""}}static isSubmittable(t){return t.name.ru.length>0&&t.name.la.length>0&&t.season.length>0&&t.imageBase.length>0&&t.imageCount>0}}var ot,ct=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l},ut=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};const dt="https://homepages.tuni.fi/oleg.spakov/tamflow/";let pt=class extends n{constructor(){super(...arguments),this.isExpanded=!1,this.galleryIndex=null,this.isAuthorized=k.isAuthorized}get frontImageURL(){return this.plant?`${dt}${this.plant.imageBase}-front.jpg`:""}get galleryImages(){const t=[];if(!this.plant)return t;for(let e=0;e<this.plant.imageCount;e++)t.push({title:this.mainName(this.plant),description:"",href:`${dt}${this.plant.imageBase}-${e+1}.jpg`});return t}get gallery(){return $.tr("gallery")}get firstFlowers(){return $.tr("firstFlowers")}get mainLanguage(){return this.$store.state.language}mainName(t){return t.name[this.$store.state.language]}getPlantSeason(t){return"ru"===this.mainLanguage?t.season:$.translate(t.season)}setGalleryIndex(t){const e={images:this.galleryImages,index:t};this.$emit("show-gallery",e)}edit(){this.$emit("edit",this.plant)}mounted(){p.$on("login",()=>{this.isAuthorized=!0}),p.$on("logout",()=>{this.isAuthorized=!1})}};ct([Object(o["b"])(),ut("design:type","function"===typeof(ot=!1)?ot:Object)],pt.prototype,"plant",void 0),ct([Object(o["b"])(),ut("design:type",Number)],pt.prototype,"index",void 0),pt=ct([Object(o["a"])({})],pt);var ft,gt=pt,mt=gt,vt=(a("54dd"),Object(A["a"])(mt,nt,lt,!1,null,"f68a5162",null)),ht=vt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editor"},[a("div",{staticClass:"modal",class:{"is-active":!!t.plant}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title has-text-centered"},[t._v("Редактор "+t._s(t.plant?"-- "+t.plant.name.ru:""))])]),a("div",{staticClass:"modal-card-body"},[0!=t.result?a("div",{staticClass:"notification",class:t.resultClass},[a("span",[t._v(t._s(t.resultMessage))])]):a("div",[a("plant-form",{model:{value:t.plant,callback:function(e){t.plant=e},expression:"plant"}})],1)]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.cancel()}}}),0===t.result?a("button",{staticClass:"button is-primary submit",attrs:{disabled:!t.isUpdatable},on:{click:function(e){t.update()}}},[t._v("Сохранить")]):a("button",{staticClass:"button is-primary",attrs:{"aria-label":"close"},on:{click:function(e){t.cancel()}}},[t._v("Закрыть")])])])])])},Ct=[],yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plant-editor"},[a("div",{staticClass:"field"}),a("label",{staticClass:"label"},[t._v("Название")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value.name.ru,expression:"value.name.ru"}],staticClass:"input",attrs:{type:"text",placeholder:"Русское"},domProps:{value:t.value.name.ru},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value.name,"ru",e.target.value)}}}),a("span",{staticClass:"required"})]),a("div",{staticClass:"field"}),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value.name.la,expression:"value.name.la"}],staticClass:"input",attrs:{type:"text",placeholder:"Латинское"},domProps:{value:t.value.name.la},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value.name,"la",e.target.value)}}}),a("span",{staticClass:"required"})]),a("div",{staticClass:"field"}),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value.name.fi,expression:"value.name.fi"}],staticClass:"input",attrs:{type:"text",placeholder:"Финское"},domProps:{value:t.value.name.fi},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value.name,"fi",e.target.value)}}})]),a("div",{staticClass:"field"}),a("label",{staticClass:"label"},[t._v("Сезон цветения")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value.season,expression:"value.season"}],staticClass:"input",attrs:{type:"text",placeholder:"Месяц"},domProps:{value:t.value.season},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value,"season",e.target.value)}}}),a("span",{staticClass:"required"})]),a("div",{staticClass:"field"}),a("label",{staticClass:"label"},[t._v("Описание")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value.description,expression:"value.description"}],ref:"description",staticClass:"textarea",attrs:{type:"text"},domProps:{value:t.value.description},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value,"description",e.target.value)}}})]),a("div",{staticClass:"field"}),a("label",{staticClass:"label"},[t._v("Базовое имя фотографий")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value.imageBase,expression:"value.imageBase"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.value.imageBase},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value,"imageBase",e.target.value)}}}),a("span",{staticClass:"required"})]),a("div",{staticClass:"field"}),a("label",{staticClass:"label"},[t._v("Количество фотографий")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value.imageCount,expression:"value.imageCount"}],staticClass:"input",attrs:{type:"number",min:"0"},domProps:{value:t.value.imageCount},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value,"imageCount",e.target.value)}}}),a("span",{staticClass:"required"})]),a("div",{staticClass:"field"}),a("label",{staticClass:"label"},[t._v("Ссылки")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value.refs.la,expression:"value.refs.la"}],staticClass:"input",attrs:{type:"text",placeholder:"Русская"},domProps:{value:t.value.refs.la},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value.refs,"la",e.target.value)}}})]),a("div",{staticClass:"field"}),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value.refs.fi,expression:"value.refs.fi"}],staticClass:"input",attrs:{type:"text",placeholder:"Финская"},domProps:{value:t.value.refs.fi},on:{blur:function(e){t.update()},input:function(e){e.target.composing||t.$set(t.value.refs,"fi",e.target.value)}}})])])},_t=[],kt=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l},wt=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let xt=class extends o["c"]{update(){this.$emit("input",this.value)}};kt([Object(o["b"])({default:new rt}),wt("design:type","function"===typeof(ft=!1)?ft:Object)],xt.prototype,"value",void 0),xt=kt([Object(o["a"])({})],xt);var jt,Ot=xt,Pt=Ot,$t=(a("4508"),Object(A["a"])(Pt,yt,_t,!1,null,"d73cca74",null)),It=$t.exports,Lt=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l},Rt=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let Et=class extends o["c"]{constructor(){super(...arguments),this.result=0}get resultClass(){return{"is-danger":-1===this.result,"is-success":1===this.result}}get resultMessage(){return this.result>0?"Готово":"Ошибка"}get isUpdatable(){return!!this.plant&&rt.isSubmittable(this.plant)}update(){this.plant&&k.update(this.plant).then((t,e)=>{this.result=e?-1:1,1===this.result&&this.$emit("updated")})}cancel(){this.$emit("cancel")}};Lt([Object(o["b"])({default:null}),Rt("design:type","function"===typeof(jt=!1)?jt:Object)],Et.prototype,"plant",void 0),Et=Lt([Object(o["a"])({components:{PlantForm:It}})],Et);var Nt=Et,St=Nt,At=(a("353f"),Object(A["a"])(St,bt,Ct,!1,null,"785dff5d",null)),Vt=At.exports,Dt=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l},Tt=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};const Mt=20;let Ft=class extends n{constructor(){super(...arguments),this.page=1,this.pageCount=1,this.plants=[],this.editing=null,this.galleryIndex=null,this.galleryImages=[]}get pagePlants(){return this.plants.filter((t,e)=>e>=(this.page-1)*Mt&&e<this.page*Mt)}getPlantIndex(t){return(this.page-1)*Mt+t+1}edit(t){this.editing=t}update(){}cancelEditing(){this.editing=null}sort(t){const e=this.$store.state.language;return t.sort((t,a)=>t.name[e]>a.name[e]?1:-1)}load(){const t=this.$store.state.language;return k.all().then(e=>(this.plants=e.sort((e,a)=>e.name[t]>a.name[t]?1:-1),e))}mounted(){k.all().then(t=>(this.plants=this.sort(t),t)).then(t=>{this.$emit("ready",{pageCount:Math.ceil(t.length/Mt)})}),p.$on("lang",t=>{this.plants=this.sort(this.plants),this.$emit("ready",{pageCount:Math.ceil(this.plants.length/Mt)})})}};Dt([Object(o["b"])({default:1}),Tt("design:type",Number)],Ft.prototype,"page",void 0),Dt([Object(o["b"])({default:1}),Tt("design:type",Number)],Ft.prototype,"pageCount",void 0),Ft=Dt([Object(o["a"])({components:{PlantListItem:ht,Editor:Vt,gallery:it.a}})],Ft);var zt,Ut=Ft,Bt=Ut,Kt=(a("576a"),Object(A["a"])(Bt,et,at,!1,null,"76c3f63d",null)),Gt=Kt.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plant-tiles is-flex"},[t._l(t.plants,(function(e,s){return a("plant-tiles-item",{key:e.id,attrs:{plant:e,index:s+1},on:{"show-gallery":function(e){t.galleryImages=e.images,t.galleryIndex=e.index},edit:function(a){t.edit(e)}}})})),a("gallery",{attrs:{images:t.galleryImages,index:t.galleryIndex},on:{close:function(e){t.galleryIndex=null}}}),t.editing?a("editor",{attrs:{plant:t.editing},on:{updated:function(e){t.update()},cancel:function(e){t.cancelEditing()}}}):t._e()],2)},qt=[],Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plant",style:t.plantStyle},[a("div",{staticClass:"overlay is-flex"},[a("div",{staticClass:"info is-flex"},[a("div",{staticClass:"is-flex"},[[t.plant.refs[t.mainLanguage]?a("a",{staticClass:"name-main tooltip",attrs:{href:t.plant.refs[t.mainLanguage],target:"_blank","data-tooltip":t.firstFlowers+": "+t.getPlantSeason(t.plant)}},[t._v(t._s(t.mainName(t.plant)))]):a("div",{staticClass:"name-main tooltip",attrs:{"data-tooltip":t.firstFlowers+": "+t.getPlantSeason(t.plant)}},[t._v(t._s(t.mainName(t.plant)))])],a("div",{staticClass:"tag is-primary index"},[t._v(t._s(t.index))])],2),t._l(t.plant.name,(function(e,s){return s!==t.mainLanguage?[t.plant.refs[s]?a("div",{staticClass:"name-others"},[a("a",{attrs:{href:t.plant.refs[s],target:"_blank"}},[t._v(t._s(t.plant.name[s]))])]):a("div",{staticClass:"name-others"},[a("span",[t._v(t._s(t.plant.name[s]))])])]:t._e()})),"ru"===t.mainLanguage?a("div",{staticClass:"description"},[t._v(t._s(t.plant.description))]):t._e()],2),a("div",{staticClass:"extras is-flex"},[a("div",{staticClass:"gallery is-flex"},[t.isExpanded?a("div",{staticClass:"images"},t._l(t.galleryImages,(function(e,s){return a("div",{staticClass:"preview",style:{backgroundImage:"url("+e.href+")"},on:{click:function(e){t.setGalleryIndex(s)}}})}))):a("div",[a("button",{staticClass:"button is-link is-small",on:{click:function(e){return!("button"in e)&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:void(t.isExpanded=!0)}}},[t._v(t._s(t.gallery))])])]),t.isAuthorized?a("div",{staticClass:"edit",attrs:{title:"Edit"},on:{click:function(e){t.edit()}}},[t._m(0)]):t._e()])])])},Ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-edit"})])}],Qt=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l},Yt=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};const Xt="https://homepages.tuni.fi/oleg.spakov/tamflow/";let Zt=class extends n{constructor(){super(...arguments),this.isExpanded=!1,this.galleryIndex=null,this.isAuthorized=k.isAuthorized}get plantStyle(){return`background-image: url(${this.frontImageURL})`}get frontImageURL(){return this.plant?`${Xt}${this.plant.imageBase}-front.jpg`:""}get galleryImages(){const t=[];if(!this.plant)return t;for(let e=0;e<this.plant.imageCount;e++)t.push({title:this.plant.name.ru,description:"",href:`${Xt}${this.plant.imageBase}-${e+1}.jpg`});return t}get gallery(){return $.tr("gallery")}get firstFlowers(){return $.tr("firstFlowers")}get mainLanguage(){return this.$store.state.language}mainName(t){return t.name[this.$store.state.language]}getPlantSeason(t){return"ru"===this.mainLanguage?t.season:$.translate(t.season)}setGalleryIndex(t){const e={images:this.galleryImages,index:t};this.$emit("show-gallery",e)}edit(){this.$emit("edit",this.plant)}mounted(){p.$on("login",()=>{this.isAuthorized=!0}),p.$on("logout",()=>{this.isAuthorized=!1})}};Qt([Object(o["b"])(),Yt("design:type","function"===typeof(zt=!1)?zt:Object)],Zt.prototype,"plant",void 0),Qt([Object(o["b"])(),Yt("design:type",Number)],Zt.prototype,"index",void 0),Zt=Qt([Object(o["a"])({})],Zt);var te=Zt,ee=te,ae=(a("00d6"),Object(A["a"])(ee,Wt,Ht,!1,null,"4695908b",null)),se=ae.exports,ie=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l};let ne=class extends n{constructor(){super(...arguments),this.plants=[],this.editing=null,this.galleryIndex=null,this.galleryImages=[]}edit(t){this.editing=t}update(){}cancelEditing(){this.editing=null}sort(t){const e=this.$store.state.language;return t.sort((t,a)=>t.name[e]>a.name[e]?1:-1)}mounted(){k.all().then(t=>{this.plants=this.sort(t)}),p.$on("lang",t=>{this.plants=this.sort(this.plants)})}};ne=ie([Object(o["a"])({components:{PlantTilesItem:se,Editor:Vt,gallery:it.a}})],ne);var le=ne,re=le,oe=(a("32cd"),Object(A["a"])(re,Jt,qt,!1,null,"03e857f6",null)),ce=oe.exports,ue=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l},de=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let pe=class extends n{constructor(){super(...arguments),this.page=1,this.pageCount=1,this.delayedPage=0}get nearestPageIDs(){if(this.pageCount<3)return[];const t=Math.max(2,this.page-5),e=Math.min(this.pageCount-1,this.page+5),a=[];for(let s=t;s<=e;s++)a.push(s);return a}get lang(){return this.$store.state.language}get view(){return this.$store.state.view}get title(){return $.tr("title")}get listView(){return $.tr("list")}get tileView(){return $.tr("tiles")}get next(){return $.tr("next")}get previous(){return $.tr("previous")}goto(t){this.page=t,window.scrollTo(0,0),window.location.hash=""+t}getPageFromHash(){let t=0;try{t=+window.location.hash.split("#")[1]}catch(e){return 0}return Number.isInteger(t)?(t>0&&t<=this.pageCount&&t!==this.page&&(this.page=t),t):0}isViewSelected(t){return this.view===t}setView(t){this.$store.commit("setView",t)}isLanguageSelected(t){return this.lang===t}setLanguage(t){this.$store.commit("setLanguage",t),p.$emit("lang",t)}mounted(){this.delayedPage=this.getPageFromHash(),window.addEventListener("hashchange",t=>{this.getPageFromHash()},!1)}watchPageCount(t){this.delayedPage&&(this.page=this.delayedPage)}};ue([Object(o["d"])("pageCount"),de("design:type",Function),de("design:paramtypes",[Number]),de("design:returntype",void 0)],pe.prototype,"watchPageCount",null),pe=ue([Object(o["a"])({components:{PlantList:Gt,PlantTiles:ce}})],pe);var fe=pe,ge=fe,me=(a("b879"),Object(A["a"])(ge,Z,tt,!1,null,"c5df38a4",null)),ve=me.exports,he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add"},[a("h1",{staticClass:"title is-4"},[t._v("Новое растение")]),0!=t.result?a("div",{staticClass:"notification",class:t.resultClass},[a("button",{staticClass:"delete",on:{click:function(e){t.closeNotification()}}}),a("span",[t._v(t._s(t.resultMessage))])]):[a("plant-form",{model:{value:t.plant,callback:function(e){t.plant=e},expression:"plant"}}),a("div",{staticClass:"field is-grouped buttons"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary submit",attrs:{disabled:!t.isSubmittable},on:{click:function(e){t.add()}}},[t._v("Добавить")])]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-warning clear",on:{click:function(e){t.reset()}}},[t._v("Очистить")])])])]],2)},be=[],Ce=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l};let ye=class extends o["c"]{constructor(){super(...arguments),this.plant=new rt,this.result=0}get isSubmittable(){return rt.isSubmittable(this.plant)}get resultClass(){return{"is-danger":-1===this.result,"is-success":1===this.result}}get resultMessage(){return this.result>0?"Готово":"Ошибка"}closeNotification(){this.result=0}add(){k.put(this.plant).then((t,e)=>{this.result=e?-1:1,this.result>0&&this.reset()})}reset(){this.plant=new rt}};ye=Ce([Object(o["a"])({components:{PlantForm:It}})],ye);var _e=ye,ke=_e,we=(a("5c6c"),Object(A["a"])(ke,he,be,!1,null,"73c3cc8e",null)),xe=we.exports,je=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"container is-max-desktop"},[a("h1",{staticClass:"title is-4"},[t._v(t._s(t.header))]),a("secton",[t._v(t._s(t.content))])],1)])},Oe=[],Pe=function(t,e,a,s){var i,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n<3?i(l):n>3?i(e,a,l):i(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l};let $e=class extends n{get header(){return"ru"===this.$store.state.language?"О TamFlist":"TamFlistista"}get content(){return"ru"===this.$store.state.language?'Однажды я подумал, что мысль "О, какой красивый цветок! Интересно, как же он называется?" слишком часто приходила мне в голову. Да, с десяток названий цветков я знал (например, ромашка, одуванчик, мать-и-мачеха, василёк, лютик, купальница). Но вот в один солнечный день я нарвал незнакомых мне цветов, принёс домой, сел за компьютер, и начал разбираться... Поначалу я делал только закладки веб-страниц на которых было описание тех цветов что лежали предо мной. Но когда их набралось свыше 50, стало понятно, что нужен более наглядный способ чтобы выучить их всех. А заодно разобраться как Vue в 2018 году умеет дружить с TypeScript. Так появился TamFlist, мой каталог цветущих трав в Тампере и его окрестностях.':'Eräänä päivänä ajattelin, että ajatus "Voi, mikä kaunis kukka! Mietin, miten sitä kutsutaan?" tuli mieleeni liian usein. Kyllä, tiesin kymmenkunta kukkanimeä (esimerkiksi kamomilla, voikukka, varsajalka, ruiskukka, leinikki, uimapuku). Mutta sitten eräänä aurinkoisena päivänä poimin tuntemattomia kukkia, toin ne kotiin, istuin tietokoneen ääreen ja aloin pohtimaan sitä... Aluksi laitoin kirjanmerkkeihin vain verkkosivut, joilla oli kuvaus noista kukista. Mutta kun niitä oli yli 50, kävi selväksi, että tarvitsen visuaalisemman tavan oppia ne kaikki. Ja samalla selvitä, kuinka Vue vuonna 2018 voi olla ystävä TypeScriptin kanssa. Näin syntyi TamFlist, kukkien yrttihakemistoni Tampereella ja sen ympäristössä.'}};$e=Pe([Object(o["a"])({})],$e);var Ie=$e,Le=Ie,Re=Object(A["a"])(Le,je,Oe,!1,null,null,null),Ee=Re.exports;s["default"].use(X["a"]);const Ne=s["default"].config.devtools?"/":"/tamflow/";var Se=new X["a"]({routes:[{path:Ne,name:"home",component:ve},{path:Ne+"add",name:"add",component:xe},{path:Ne+"about",name:"about",component:Ee}],linkExactActiveClass:"is-active",mode:"history"});n.config.productionTip=!1,new n({router:Se,store:j,beforeCreate(){j.commit("initialiseStore")},render:t=>t(Y)}).$mount("#app")},d906:function(t,e,a){},d9eb:function(t,e,a){"use strict";a("8e86")},ee0f:function(t,e,a){}});
//# sourceMappingURL=app.1e2f4075.js.map
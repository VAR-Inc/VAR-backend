(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("85ec"),n=r.n(s);n.a},"203a":function(t,e,r){},2472:function(t,e,r){"use strict";var s=r("f088"),n=r.n(s);n.a},2554:function(t,e,r){},4124:function(t,e,r){},"4a7f":function(t,e,r){"use strict";var s=r("fecf"),n=r.n(s);n.a},"4f91":function(t,e){t.exports="data:image/png;base64,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"},5192:function(t,e,r){},5671:function(t,e,r){"use strict";var s=r("a3e6"),n=r.n(s);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var s=r("2b0e"),n=r("bc3a"),a=r.n(n),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("app-header")],1),r("router-view"),r("div",{attrs:{id:"footer"}},[r("app-footer")],1)],1)},i=[],c=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),l=r("2f62"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("nav",[s("img",{attrs:{alt:"Vue logo",src:r("cf05")},on:{click:t.goHome}}),s("p",{directives:[{name:"show",rawName:"v-show",value:t.getUsername,expression:"getUsername"}],staticClass:"logged-in"},[t._v(" Welcome, "),s("span",{staticClass:"user-profile",on:{click:t.profile}},[t._v(" "+t._s(t.getUsername))]),s("span",{staticClass:"logout-btn",on:{click:t.logOut}},[t._v(" logout")])]),t._m(0)]),s("div",{staticClass:"dropdown-divider"},[s("div",{staticClass:"dropdown"},[s("i",{staticClass:"fi-snsuxl-three-bars-solid dropdown-btn"}),s("div",{staticClass:"dropdown-links"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),s("router-link",{attrs:{to:"/about"}},[t._v("About")]),s("router-link",{attrs:{to:"/login"}},[t._v("Login")]),s("router-link",{attrs:{to:"/signup"}},[t._v("Signup")]),s("router-link",{attrs:{to:"/assistants"}},[t._v("Assistants")]),s("router-link",{attrs:{to:"/credits"}},[t._v("Credits")]),s("hr"),s("router-link",{staticClass:"support",attrs:{to:"/support"}},[t._v("Support")])],1)]),s("hr")])])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-btn"},[r("input",{attrs:{type:"text",placeholder:"SEARCH FOR SERVICES"}}),r("button",{staticClass:"btn"},[t._v("search")])])}];function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={computed:d({},Object(l["c"])(["getUsername"]),{},Object(l["b"])(["logout"])),methods:{goHome:function(){this.$router.push("/")},logOut:function(){this.$store.dispatch("logout")},profile:function(){this.$router.push({name:"my-profile-page"})}}},v=m,g=(r("8cb1"),r("2877")),b=Object(g["a"])(v,u,p,!1,null,"0d16bd79",null),h=b.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("hr"),s("div",{staticClass:"support"},[s("img",{attrs:{src:r("d07e")}})]),s("div",{staticClass:"contact"},[s("div",{staticClass:"powered-by"},[s("p",[t._v("POWERED BY:")]),s("span",[t._v("© VAR 2020")]),s("p",[s("a",{staticClass:"icons-by",attrs:{href:"https://friconix.com/",target:"_blank"}},[t._v("Icons by Friconix")])])]),s("div",{staticClass:"contact-us"},[s("span",[t._v("CONTACT US")]),s("img",{staticClass:"contact-img",attrs:{src:r("5bd4")}}),s("span",[t._v("01-23456789")]),s("img",{staticClass:"contact-img",attrs:{src:r("d725")}}),s("span",[t._v("01-23456789")]),s("img",{staticClass:"contact-img",attrs:{src:r("4f91")}}),s("span",[t._v("abc@gmail.com")])])])])}],j={data:function(){return{year:""}}},y=j,E=(r("9f71"),Object(g["a"])(y,O,w,!1,null,"4801de34",null)),A=E.exports;function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S={components:{"app-header":h,"app-footer":A},computed:C({},Object(l["b"])(["persistSession","fetchUsers"])),created:function(){this.$store.dispatch("persistSession"),this.$store.dispatch("fetchUsers")}},P=S,D=(r("034f"),Object(g["a"])(P,o,i,!1,null,null,null)),U=D.exports,x=r("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var k=r("8c4f"),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("p",[r("router-link",{attrs:{to:"/assistants"}},[t._v(t._s(t.getUsers.length)+" Users have registered")])],1),r("Home")],1)},N=[],T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-page"},[s("section",{attrs:{id:"welcome"}},[s("div",{staticClass:"info"},[s("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consectetur quibusdam quidem, earum quae cumque recusandae minima ducimus obcaecati laborum.")]),s("button",[t._v("Call us")])]),s("img",{staticClass:"home-image",attrs:{src:r("fbf5")}})]),s("section",{attrs:{id:"services"}},[s("h2",{staticClass:"title"},[t._v("OUR SERVICES")]),s("div",{staticClass:"services"},[s("div",{staticClass:"service"},[s("img",{attrs:{src:r("7cc6")}}),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi porro consectetur voluptatibus nam nobis consequuntur, repellendus consectetur perspiciatis beatae. Atque! ")]),s("button",[t._v("GET HELP")])])]),s("div",{staticClass:"service"},[s("img",{attrs:{src:r("b2ff")}}),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi porro consectetur voluptatibus nam nobis consequuntur, repellendus consectetur perspiciatis beatae. Atque! ")]),s("button",[t._v("ASSISTANT")])])]),s("div",{staticClass:"service"},[s("img",{attrs:{src:r("e3a5")}}),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nisi porro consectetur voluptatibus nam nobis consequuntur, repellendus consectetur perspiciatis beatae. Atque! ")]),s("button",[t._v("ADVERTISE")])])])])])])}],I=(r("feb0"),{}),G=Object(g["a"])(I,T,R,!1,null,"c6a3d606",null),J=G.exports;function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B={name:"home",components:{Home:J},data:function(){return{users:[]}},computed:z({},Object(l["c"])(["getUsers"])),created:function(){this.$store.dispatch("fetchUsers")}},K=B,F=(r("7491"),Object(g["a"])(K,L,N,!1,null,"33bb3e0c",null)),q=F.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"support"},[r("Support")],1)},Q=[],H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"support"}},[r("h2",[t._v("SUPPORT")]),r("form",[r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"name"}},[t._v("NAME")]),r("br"),r("input",{attrs:{type:"text"}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"contact"}},[t._v("E-MAIL")]),r("br"),r("input",{attrs:{type:"email"}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"title"}},[t._v("TITLE")]),r("br"),r("input",{attrs:{type:"text"}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"message"}},[t._v("MESSAGE")]),r("br"),r("textarea",{attrs:{row:"10"}})]),r("div",{staticClass:"send-btn"},[r("button",[t._v("SEND")])])])])}],X=(r("7319"),{}),V=Object(g["a"])(X,H,Y,!1,null,"e00cb4f8",null),W=V.exports,$={name:"support",components:{Support:W}},tt=$,et=Object(g["a"])(tt,M,Q,!1,null,null,null),rt=et.exports,st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Signup")},nt=[],at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.msg?r("p",[t._v(t._s(t.msg))]):t._e(),r("form",{on:{submit:function(e){return e.preventDefault(),t.signUp(e)}}},[t._m(0),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"username"}},[t._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.username,expression:"fields.username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:t.fields.username},on:{input:function(e){e.target.composing||t.$set(t.fields,"username",e.target.value)}}})]),r("span",{staticStyle:{color:"red"}},[t._v(t._s(t.fieldErrors.username)+" HI")]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.email,expression:"fields.email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.fields.email},on:{input:function(e){e.target.composing||t.$set(t.fields,"email",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.password,expression:"fields.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.fields.password},on:{input:function(e){e.target.composing||t.$set(t.fields,"password",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"firstname"}},[t._v("Firstname")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.firstname,expression:"fields.firstname"}],attrs:{type:"text",placeholder:"Firstname"},domProps:{value:t.fields.firstname},on:{input:function(e){e.target.composing||t.$set(t.fields,"firstname",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"lastname"}},[t._v("Lastname")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.lastname,expression:"fields.lastname"}],attrs:{type:"text",placeholder:"Lastname"},domProps:{value:t.fields.lastname},on:{input:function(e){e.target.composing||t.$set(t.fields,"lastname",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"address"}},[t._v("Home Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.address,expression:"fields.address"}],attrs:{type:"text",placeholder:"Address"},domProps:{value:t.fields.address},on:{input:function(e){e.target.composing||t.$set(t.fields,"address",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"residential LGA"}},[t._v("Residential LGA")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.lga,expression:"fields.lga"}],attrs:{type:"text",placeholder:"Residential LGA"},domProps:{value:t.fields.lga},on:{input:function(e){e.target.composing||t.$set(t.fields,"lga",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"state"}},[t._v("State")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.state,expression:"fields.state"}],attrs:{type:"text",placeholder:"State (e.g Lagos State)"},domProps:{value:t.fields.state},on:{input:function(e){e.target.composing||t.$set(t.fields,"state",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"occupation"}},[t._v("Occupation")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.occupation,expression:"fields.occupation"}],attrs:{type:"text",placeholder:"Occupation (e.g Plumber)"},domProps:{value:t.fields.occupation},on:{input:function(e){e.target.composing||t.$set(t.fields,"occupation",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"phone"}},[t._v("Phone Number")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.phone,expression:"fields.phone"}],attrs:{type:"text",placeholder:"Phone Number"},domProps:{value:t.fields.phone},on:{input:function(e){e.target.composing||t.$set(t.fields,"phone",e.target.value)}}})]),t._m(1)]),r("div",{staticClass:"login-nav"},[r("router-link",{staticClass:"login",attrs:{to:"/login"}},[t._v("LOGIN")])],1)])},ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image"},[s("img",{attrs:{src:r("5d0a")}}),s("p",[t._v("Registration")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"send-btn"},[r("button",[t._v("SIGNUP")])])}];r("d3b7"),r("96cf");function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var lt={name:"signup",data:function(){return{fields:{username:"",email:"",password:"",firstname:"",lastname:"",address:"",lga:"",state:"",occupation:"",phone:"",termsAndConditions:!1},fieldErrors:{username:void 0,email:void 0,password:void 0,firstname:void 0,lastname:void 0,address:void 0,lga:void 0,state:void 0,occupation:void 0,phone:void 0,termsAndConditions:!1},msg:""}},computed:ct({},Object(l["b"])(["signup"])),methods:{validateForm:function(t){var e={};return t.username||(e.username="Username required"),t.email||(e.email="Email required"),t.password||(e.password="Password required"),t.firstname||(e.firstname="Firstname required"),t.lastname||(e.lastname="Lastname required"),t.termsAndConditions||(e.termsAndConditions="Terms and conditions must be accepted"),t.email&&!this.isEmail(t.email)&&(e.email="Invalid Email"),e},isEmail:function(t){var e=/\S+@\S+\.\S+/;return e.test(t)},signUp:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return t={username:this.fields.username,email:this.fields.email,password:this.fields.password,firstname:this.fields.firstname,lastname:this.fields.lastname,address:this.fields.address,lga:this.fields.lga,state:this.fields.state,occupation:this.fields.occupation,phone:this.fields.phone},e.prev=1,e.abrupt("return",this.$store.dispatch("signup",t));case 5:e.prev=5,e.t0=e["catch"](1),this.msg=e.t0.response.data.error;case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),null,this,[[1,5]])}}},ut=lt,pt=(r("d58b"),Object(g["a"])(ut,at,ot,!1,null,"4df13d1f",null)),ft=pt.exports,dt={name:"singup",components:{Signup:ft}},mt=dt,vt=Object(g["a"])(mt,st,nt,!1,null,null,null),gt=vt.exports,bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("Login")],1)},ht=[],Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"login"}},[r("div",{staticClass:"container"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.logIn(e)}}},[r("p",[t._v("ACCOUNT")]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"username"}},[t._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.usernameOrEmail,expression:"formData.usernameOrEmail"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.formData.usernameOrEmail},on:{input:function(e){e.target.composing||t.$set(t.formData,"usernameOrEmail",e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._m(0)]),r("div",{staticClass:"bottom-line"},[r("span",[t._v("FORGOT PASSWORD?")]),r("router-link",{staticClass:"signup",attrs:{to:"/signup"}},[t._v("SIGNUP")])],1)])])},wt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"send-btn"},[r("button",[t._v("LOGIN")])])}];function jt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?jt(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):jt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Et={name:"login",data:function(){return{formData:{usernameOrEmail:"",password:""},msg:""}},computed:yt({},Object(l["c"])(["getUsers"]),{},Object(l["b"])(["login"])),methods:{logIn:function(){this.$store.dispatch("login",this.formData)}}},At=Et,_t=(r("77a7"),Object(g["a"])(At,Ot,wt,!1,null,"fe759c48",null)),Ct=_t.exports,St={name:"login",components:{Login:Ct}},Pt=St,Dt=Object(g["a"])(Pt,bt,ht,!1,null,null,null),Ut=Dt.exports,xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile"},[r("Profile")],1)},kt=[],Lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"profile"}},[r("h2",[t._v("PROFILE")]),r("div",{staticClass:"container-flex"},[r("form",[r("div",{staticClass:"form-row"},[r("input",{attrs:{type:"text",disabled:""},domProps:{value:t.getUser.firstname+" "+t.getUser.lastname}})]),r("div",{staticClass:"form-row"},[r("input",{attrs:{type:"email",disabled:""},domProps:{value:t.getUser.occupation}})]),r("div",{staticClass:"form-row"},[r("input",{attrs:{type:"text",disabled:""},domProps:{value:t.getUser.experience}})]),r("div",{staticClass:"form-row"},[r("textarea",{attrs:{row:"10",disabled:""},domProps:{value:t.getUser.about}})]),r("div",{staticClass:"form-row"},[r("input",{attrs:{type:"text",disabled:""},domProps:{value:t.getUser.phone}})]),t._m(0)]),t._m(1)])])},Nt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"send-btn"},[r("label",{staticClass:"picture-upload"},[r("input",{attrs:{type:"file"}}),t._v(" UPLOAD PHOTO ")]),r("input",{attrs:{type:"file"}}),r("button",[t._v("SAVE")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"summary"},[s("img",{attrs:{src:r("b2ff")}}),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")]),s("button",[t._v("CALL ME")])])])}];function Tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function Rt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Tt(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Tt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var It={computed:Rt({},Object(l["c"])(["getUser"]))},Gt=It,Jt=(r("2472"),Object(g["a"])(Gt,Lt,Nt,!1,null,"0efec61a",null)),Zt=Jt.exports,zt={name:"profile",components:{Profile:Zt}},Bt=zt,Kt=Object(g["a"])(Bt,xt,kt,!1,null,null,null),Ft=Kt.exports,qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Assistants")},Mt=[],Qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"assistants"},[s("p",[t._v(t._s(t.getUsers.length)+" - Assistants are available")]),s("h2",[t._v("AVAILABLE ASSISTANTS")]),s("div",{staticClass:"container"},t._l(t.getUsers,(function(e){return s("div",{key:e.id,staticClass:"summary"},[s("img",{attrs:{src:r("b2ff")}}),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),s("p",[t._v(t._s(e.occupation)+" ")]),s("button",{on:{click:function(r){return t.goToAssistant(e.id)}}},[t._v("CALL ME")])])])})),0)])},Ht=[];function Yt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function Xt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Yt(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Yt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Vt={props:{assts:{type:Array}},computed:Xt({},Object(l["c"])(["getUsers"])),methods:{goToAssistant:function(t){this.$router.push({name:"user",params:{id:t}})}}},Wt=Vt,$t=(r("5671"),Object(g["a"])(Wt,Qt,Ht,!1,null,"50243dce",null)),te=$t.exports,ee={name:"assistants",components:{Assistants:te}},re=ee,se=Object(g["a"])(re,qt,Mt,!1,null,null,null),ne=se.exports,ae=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("User",{attrs:{user:t.userDetail}})},oe=[],ie=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"user"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.reveal,expression:"reveal"}],staticClass:"modal"},[s("div",[s("p",[t._v("Phone Number: "+t._s(t.user.phone))]),s("button",{staticClass:"button",on:{click:t.closeModal}},[t._v("Close")])])]),s("h2",[t._v(t._s(t.user.firstname)+" "+t._s(t.user.lastname))]),s("div",{staticClass:"container"},[s("div",{staticClass:"summary"},[s("img",{attrs:{src:r("b2ff")}}),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. "+t._s(t.user.about))]),s("button",{staticClass:"button",on:{click:function(e){return t.showNumber()}}},[t._v("CALL ME")])]),t._m(0)]),t._m(1)])])},ce=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rating"},[r("h4",[t._v("RATE ME")]),r("div",{staticClass:"rating"},[r("i",{staticClass:"fi-xnsuxl-star-solid"}),r("i",{staticClass:"fi-xwluxl-star-wide"}),r("i",{staticClass:"fi-xwluxl-star-half-wide"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comment"},[r("input",{attrs:{type:"text"}}),r("button",[t._v("SEND")])])}],le={props:["user"],data:function(){return{reveal:!1}},methods:{showNumber:function(){return this.reveal=!this.reveal,!0},closeModal:function(){this.reveal=!this.reveal}}},ue=le,pe=(r("4a7f"),Object(g["a"])(ue,ie,ce,!1,null,"5f3c9e8f",null)),fe=pe.exports;function de(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function me(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?de(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ve={name:"users",props:["id"],components:{User:fe},computed:me({},Object(l["c"])(["userFromId"]),{userDetail:function(){return this.userFromId(this.id)}})},ge=ve,be=Object(g["a"])(ge,ae,oe,!1,null,null,null),he=be.exports,Oe=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NotFound")],1)},we=[],je=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ye=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"not-found"}},[r("div",{attrs:{clas:"container"}},[r("h3",[t._v("Ooops! Page is probably under construction")])])])}],Ee=(r("f552"),{}),Ae=Object(g["a"])(Ee,je,ye,!1,null,"58241517",null),_e=Ae.exports,Ce={name:"not-found",components:{NotFound:_e}},Se=Ce,Pe=Object(g["a"])(Se,Oe,we,!1,null,null,null),De=Pe.exports,Ue=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"credits"}},[r("div",{staticClass:"container"},[r("Credits")],1)])},xe=[],ke=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Le=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),r("th",[t._v("Contributions")])])]),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:""}},[t._v("Joshua Igobo")])]),r("td",[t._v("UI/UX Design")])]),r("tr",[r("td",[r("a",{attrs:{traget:"_blank",href:"https://abdhafizahmed.com"}},[t._v(" Abdulhafiz Ahmed")])]),r("td",[t._v("Full stack (VueJS, NodeJS)")])])])])}],Ne=(r("920b"),{}),Te=Object(g["a"])(Ne,ke,Le,!1,null,"54557c22",null),Re=Te.exports,Ie={name:"credit",components:{Credits:Re}},Ge=Ie,Je=(r("56f4"),Object(g["a"])(Ge,Ue,xe,!1,null,"fa9cf360",null)),Ze=Je.exports,ze=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Be=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{attrs:{id:"about"}},[s("div",[s("div",{staticClass:"info"},[s("h2",[t._v("ABOUT")]),s("p",[t._v("VAR helps connect you to the skills and jobs you've always wanted.")]),s("p",[t._v("Our community is built with a team of seamless, well-behaved and transparent individuals who are up for change, ready to work while in school and as graduates, by boosting their growth and making them financially independent.")]),s("p",[t._v(" In need of assistance on any task, getting things done at the right time, all you need to do is contat us or send an email stating your problem and we will assign skillful persons on the area to get it done ")])]),s("div",{staticClass:"caption"},[s("p",[t._v("ASSISTANCE INDEED IS A CLICK AWAY")])])]),s("img",{attrs:{src:r("fbf5")}})])])}],Ke=(r("56d8"),{}),Fe=Object(g["a"])(Ke,ze,Be,!1,null,"3bbe1308",null),qe=Fe.exports;s["a"].use(k["a"]);var Me=[{path:"/",name:"home-page",component:q},{path:"/signup",name:"signup-page",component:gt},{path:"/login",name:"login-page",component:Ut},{path:"/profile",name:"my-profile-page",component:Ft,props:!0},{path:"/support",name:"support-page",component:rt},{path:"/assistants",name:"assistants-page",component:ne},{name:"user",path:"/users/:id",component:he,props:!0},{path:"/credits",name:"credits-page",component:Ze},{path:"/about",name:"about",component:qe},{path:"*",name:"error-404",component:De}],Qe=new k["a"]({mode:"history",base:"/",routes:Me}),He=Qe,Ye=(r("7db0"),r("0e44")),Xe="http://localhost:7500/api/users",Ve={getUsers:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(a.a.get(Xe));case 2:return t=e.sent,e.abrupt("return",t.data.users);case 4:case"end":return e.stop()}}))}},We="http://localhost:7500/api",$e={login:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(a.a.post("".concat(We,"/auth/login"),t));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}))},signup:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(a.a.post("".concat(We,"/auth/signup"),t));case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}))},getSecretRoute:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(a.a.get("".concat(We,"/secret")));case 2:return t=e.sent,e.abrupt("return",t.data.message);case 4:case"end":return e.stop()}}))}};s["a"].use(l["a"]);var tr=function(){return{isLoggedIn:!1,token:"",user:{username:""},users:[]}},er=new l["a"].Store({strict:!0,plugins:[Object(Ye["a"])()],state:tr(),getters:{isLoggedIn:function(t){return t.isLoggedIn},token:function(t){return t.token},getUsername:function(t){return t.user.username},getUser:function(t){return t.user},getUsers:function(t){return t.users},userFromId:function(t){return function(e){return t.users.find((function(t){return t.id===e}))}}},mutations:{SET_USERS:function(t,e){t.users=e},SET_TOKEN:function(t,e){t.token=e},SET_USER:function(t,e){t.user=e},SET_IS_LOGGED_IN:function(t,e){t.isLoggedIn=e},LOGOUT:function(t){Object.assign(t,tr()),localStorage.clear()}},actions:{signup:function(t,e){var r=t.commit;$e.signup(e).then((function(t){var e=t.token,s=t.user,n=t.isLoggedIn;r("SET_IS_LOGGED_IN",n),r("SET_TOKEN",e),r("SET_USER",s)}))},login:function(t,e){var r=t.commit;$e.login(e).then((function(t){var e=t.token,s=t.user,n=t.isLoggedIn;r("SET_IS_LOGGED_IN",n),r("SET_TOKEN",e),r("SET_USER",s)}))},logout:function(t){var e=t.commit;e("LOGOUT")},persistSession:function(t){var e=t.commit,r=JSON.parse(localStorage.getItem("vuex"));r&&(e("SET_TOKEN",r.token),e("SET_USER",r.user),e("SET_IS_LOGGED_IN",r.isLoggedIn),e("SET_USERS",r.users))},fetchUsers:function(t){var e=t.commit;Ve.getUsers().then((function(t){e("SET_USERS",t)}))}},modules:{}});s["a"].config.productionTip=!1,a.a.defaults.headers.common.Authorization="Bearer ".concat(er.state.token),new s["a"]({router:He,store:er,render:function(t){return t(U)}}).$mount("#app")},"56d8":function(t,e,r){"use strict";var s=r("68aa"),n=r.n(s);n.a},"56f4":function(t,e,r){"use strict";var s=r("a87d"),n=r.n(s);n.a},"5a40":function(t,e,r){},"5bd4":function(t,e,r){t.exports=r.p+"img/footer-phone.a7801a40.png"},"5d0a":function(t,e,r){t.exports=r.p+"img/signup.72820a36.png"},"68aa":function(t,e,r){},7319:function(t,e,r){"use strict";var s=r("5a40"),n=r.n(s);n.a},7491:function(t,e,r){"use strict";var s=r("203a"),n=r.n(s);n.a},"77a7":function(t,e,r){"use strict";var s=r("4124"),n=r.n(s);n.a},"7cc6":function(t,e,r){t.exports=r.p+"img/get-help.e6c22786.png"},"85ec":function(t,e,r){},"8cb1":function(t,e,r){"use strict";var s=r("981c"),n=r.n(s);n.a},"920b":function(t,e,r){"use strict";var s=r("5192"),n=r.n(s);n.a},"981c":function(t,e,r){},"99ca":function(t,e,r){},"9f71":function(t,e,r){"use strict";var s=r("f1f0"),n=r.n(s);n.a},a3e6:function(t,e,r){},a87d:function(t,e,r){},b2ff:function(t,e,r){t.exports=r.p+"img/assistant.5df7439f.png"},cf05:function(t,e,r){t.exports=r.p+"img/logo.c08727b2.png"},d07e:function(t,e,r){t.exports=r.p+"img/footer-help.a018a3bd.png"},d58b:function(t,e,r){"use strict";var s=r("2554"),n=r.n(s);n.a},d725:function(t,e,r){t.exports=r.p+"img/footer-whatsapp.b51c144c.png"},e3a5:function(t,e,r){t.exports=r.p+"img/Gmail-icon.709e5c98.png"},f088:function(t,e,r){},f1f0:function(t,e,r){},f552:function(t,e,r){"use strict";var s=r("99ca"),n=r.n(s);n.a},fbf5:function(t,e,r){t.exports=r.p+"img/home.625550ce.png"},fcfa:function(t,e,r){},feb0:function(t,e,r){"use strict";var s=r("fcfa"),n=r.n(s);n.a},fecf:function(t,e,r){}});
//# sourceMappingURL=app.0f791f97.js.map
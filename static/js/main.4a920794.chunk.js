(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(43),c=n.n(i),s=n(31),l=n(30),o=n(42),u=n(52),d=n.n(u),p=n(15),b="SET_CURRENT_USER",m={currentUser:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload});default:return e}},j={TOOGLE_CART_HIDDEN:"TOOGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM"},g=n(24),O=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(g.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},f={hidden:!0,cartItems:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.TOOGLE_CART_HIDDEN:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case j.ADD_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:O(e.cartItems,t.payload)});default:return e}},x=Object(o.b)({user:h,cart:v}),w=[d.a],y=Object(o.c)(x,o.a.apply(void 0,w)),k=(n(62),n(0)),N=n.n(k),U=n(1),C=n(2),S=n(3),B=n(10),I=n(11),A=n(17),T=(n(64),n(33)),D=(n(65),n(7)),E=function(e){var t=e.placeholder,n=e.handleChange;return Object(D.jsx)("input",{className:"searchBox",type:"search",placeholder:t,onChange:n})},z=(n(67),Object(A.g)((function(e){var t=e.title,n=e.imageUrl,a=e.linkUrl,r=e.size,i=e.history,c=e.match;return Object(D.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return i.push("".concat(c.url).concat(a))},children:[Object(D.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,"?set=set2&size=180x180)")}}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(D.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),P=(n(69),["id"]),M=function(e){Object(B.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(C.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:""},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:""},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:""},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:""}],searchField:""},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state,t=e.sections,n=e.searchField,a=t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return Object(D.jsxs)("div",{children:[Object(D.jsx)(E,{placeholder:"Search sections",handleChange:this.onSearchChange}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("div",{className:"directory-menu",children:a.map((function(e){var t=e.id,n=Object(T.a)(e,P);return Object(D.jsx)(z,Object(p.a)({},n),t)}))})]})}}]),n}(a.Component),G=(n(70),function(e){e.history;return Object(D.jsx)("div",{className:"homepage",children:Object(D.jsx)(M,{})})}),W=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],J=(n(71),n(72),["children","isGoogleSignIn","inverted"]),L=function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,r=Object(T.a)(e,J);return Object(D.jsx)("button",Object(p.a)(Object(p.a)({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},r),{},{children:t}))},R=(n(73),Object(l.b)(null,(function(e){return{addItem:function(t){return e(function(e){return{type:j.ADD_ITEM,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,r=t.price,i=t.imageUrl;return Object(D.jsxs)("div",{className:"collection-item",children:[Object(D.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(D.jsxs)("div",{className:"collection-footer",children:[Object(D.jsx)("span",{className:"name",children:a}),Object(D.jsx)("span",{className:"price",children:r})]}),Object(D.jsx)(L,{onClick:function(){return n(t)},inverted:!0,children:"Add to Cart"})]})}))),F=function(e){var t=e.title,n=e.items.filter((function(e,t){return t<4}));return Object(D.jsxs)("div",{className:"collection-preview",children:[Object(D.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(D.jsx)("div",{className:"preview",children:n.map((function(e){return Object(D.jsx)(R,{item:e},e.id)}))})]})},H=["id"],_=function(e){Object(B.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={collections:W},a}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state.collections;return Object(D.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,n=Object(T.a)(e,H);return Object(D.jsx)(F,Object(p.a)({},n),t)}))})}}]),n}(a.Component),q=(n(74),n(4)),V=(n(75),["handleChange","label"]),Y=function(e){var t=e.handleChange,n=e.label,a=Object(T.a)(e,V);return Object(D.jsxs)("div",{className:"group",children:[Object(D.jsx)("input",Object(p.a)({className:"form-input",onChange:t},a)),n?Object(D.jsx)("label",{className:"".concat(a.value.lenght?"shrink":""," form-input-label"),children:n}):null]})},K=n(38),Q=(n(76),n(85),function(){var e=Object(U.a)(N.a.mark((function e(t,n){var a,r,i,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Z.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,a.set(Object(p.a)({displayName:r,email:i,createAt:c},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());K.a.initializeApp({apiKey:"AIzaSyCFYEKRd1pV2gzWTcoAm3qma6okurGUqhU",authDomain:"crwn-db-f283d.firebaseapp.com",projectId:"crwn-db-f283d",storageBucket:"crwn-db-f283d.appspot.com",messagingSenderId:"524290850249",appId:"1:524290850249:web:0550a799dc52964e83bc18",measurementId:"G-G7BMZYZJEQ"});var X=K.a.auth(),Z=K.a.firestore(),$=new K.a.auth.GoogleAuthProvider;$.setCustomParameters({promt:"select_account"});var ee,te=function(){return X.signInWithPopup($)},ne=(K.a,n(79),function(e){Object(B.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(C.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(U.a)(N.a.mark((function t(n){var a,r,i;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,r=a.email,i=a.password,t.prev=2,t.next=5,X.signInWithEmailAndPassword(r,i);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log("DANG NHAP BI LOI:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(q.a)({},a,r))},e.state={email:"",password:""},e}return Object(S.a)(n,[{key:"render",value:function(){return Object(D.jsxs)("div",{className:"sign-in",children:[Object(D.jsx)("h2",{children:"I already have an account"}),Object(D.jsx)("span",{children:"Sign in with your email and password"}),Object(D.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(D.jsx)(Y,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(D.jsx)(Y,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(D.jsxs)("div",{className:"buttons",children:[Object(D.jsx)(L,{type:"submit",children:"Sign in"}),Object(D.jsx)(L,{isGoogleSignIn:!0,onClick:te,children:"Sign in with Google"})]})]})]})}}]),n}(a.Component)),ae=(n(80),function(e){Object(B.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(C.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(U.a)(N.a.mark((function t(n){var a,r,i,c,s,l,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,i=a.email,c=a.password,s=a.confirmPassword,c===s){t.next=5;break}return alert("DANG KY BI LOI: password don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,X.createUserWithEmailAndPassword(i,c);case 8:return l=t.sent,o=l.user,t.next=12,Q(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log("DANG KY BI LOI:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(q.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,r=e.confirmPassword;return Object(D.jsxs)("div",{className:"sign-up",children:[Object(D.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(D.jsx)("span",{children:"Sign up with your email and password"}),Object(D.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(D.jsx)(Y,{type:"text",name:"displayName",value:t,handleChange:this.handleChange,label:"Display Name",required:!0}),Object(D.jsx)(Y,{type:"email",name:"email",value:n,handleChange:this.handleChange,label:"Your email",required:!0}),Object(D.jsx)(Y,{type:"password",name:"password",value:a,handleChange:this.handleChange,label:"Password",required:!0}),Object(D.jsx)(Y,{type:"password",name:"confirmPassword",value:r,handleChange:this.handleChange,label:"Comfirm Password",required:!0}),Object(D.jsx)(L,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.Component)),re=function(){return Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)(ne,{}),Object(D.jsx)(ae,{})]})},ie=(n(81),Object(l.b)(null,(function(e){return{toggleCartHidden:function(){return e({type:j.TOOGLE_CART_HIDDEN})}}}))((function(e){var t=e.toggleCartHidden;return Object(D.jsxs)("button",{type:"button",onClick:t,className:"cart-icon",children:[Object(D.jsx)("span",{children:"CART"}),Object(D.jsx)("span",{className:"item-count",children:" 0 "})]})}))),ce=(n(82),function(){return Object(D.jsxs)("div",{className:"cart-dropdown",children:[Object(D.jsx)("div",{className:"cart-items",children:"BBBBBB"}),Object(D.jsx)(L,{children:"AAAAA"})]})}),se=["title","titleId"];function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ue(e,t){var n=e.title,r=e.titleId,i=oe(e,se);return a.createElement("svg",le({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,ee||(ee=a.createElement("g",{fill:"#61DAFB"},a.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),a.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),a.createElement("path",{d:"M520.5 78.1z"}))))}var de=a.forwardRef(ue),pe=(n.p,n(83),Object(l.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,n=e.hidden;return Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)(s.b,{className:"logo-container",to:"/",children:Object(D.jsx)(de,{className:"logo",style:{width:50}})}),Object(D.jsxs)("div",{className:"options",children:[Object(D.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(D.jsx)(s.b,{className:"option",to:"/",children:"CONTACT"}),t?Object(D.jsx)("div",{className:"option",onClick:function(){return X.signOut()},children:"SIGN OUT"}):Object(D.jsx)(s.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(D.jsx)(ie,{})]}),n?null:Object(D.jsx)(ce,{})]})}))),be=function(e){Object(B.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){console.log("Start---componentDidMount!");var e=this.props.setCurrentUser;this.unsubscribeFromAuth=X.onAuthStateChanged(function(){var t=Object(U.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,Q(n);case 3:t.sent.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))}));case 5:e(n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){console.log("End---componentWillUnmount!!!"),this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(pe,{}),Object(D.jsxs)(A.d,{children:[Object(D.jsx)(A.b,{exact:!0,path:"/",component:G}),Object(D.jsx)(A.b,{path:"/shop",component:_}),Object(D.jsx)(A.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(D.jsx)(A.a,{to:"/"}):Object(D.jsx)(re,{})}})]})]})}}]),n}(a.Component),me=Object(l.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:b,payload:e}}(t))}}}))(be);c.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(l.a,{store:y,children:Object(D.jsx)(s.a,{children:Object(D.jsx)(me,{})})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.4a920794.chunk.js.map
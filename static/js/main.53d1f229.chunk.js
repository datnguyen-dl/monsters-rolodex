(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(7),r=n.n(s),i=(n(12),n(2)),a=n(3),l=n(5),u=n(4),h=(n(13),n(0)),j=function(e){return Object(h.jsxs)("div",{className:"cardContainer",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,".png?set=set2&size=180x180"),alt:""}),Object(h.jsx)("h2",{children:e.monster.name}),Object(h.jsx)("p",{children:e.monster.email})]})},d=(n(15),function(e){return Object(h.jsx)("div",{className:"cardList",children:e.monsters.map((function(e){return Object(h.jsx)(j,{monster:e},e.id)}))})}),b=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("input",{className:"searchBox",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),e=t.call(this),console.log("============ constructor!! ============"),e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount!")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate!")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount!")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate!",e),!0}},{key:"render",value:function(){return console.log("RENDER!"),Object(h.jsxs)("div",{children:["text: ",this.props.text]})}}]),n}(c.Component),m=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={monsters:[],searchField:"",meaningOfLife:47+e.props.increment,showChild:!0,text:""},e.onSearchChange=function(t){e.setState({searchField:t.target.value})},e.handleClick=function(){e.setState((function(e,t){return{meaningOfLife:e.meaningOfLife+t.increment}}),(function(){return console.log(e.state.meaningOfLife)}))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h2",{children:"Lifecycles Component"}),Object(h.jsx)("button",{onClick:function(){return e.setState((function(e){return{showChild:!e.showChild}}))},children:"Toggle Lifecycles"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return e.setState((function(e){return{text:e.text+"_hello"}}))},children:"Update Text"}),this.state.showChild?Object(h.jsx)(f,{text:this.state.text}):null,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:"======================================="}),Object(h.jsx)("h2",{children:"Asynchronous setState"}),Object(h.jsx)("strong",{children:this.state.meaningOfLife}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:this.handleClick,children:"State"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:"======================================="}),Object(h.jsx)("h1",{children:"Monsters Rolodex List"}),Object(h.jsx)("br",{}),Object(h.jsx)(b,{placeholder:"Search monsters",handleChange:this.onSearchChange}),Object(h.jsx)(d,{monsters:o})]})}}]),n}(c.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(m,{increment:1})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.53d1f229.chunk.js.map
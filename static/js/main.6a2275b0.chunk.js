(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),s=t.n(r),c=(t(12),t(3)),l=t(4),i=t(6),m=t(5),u=(t(13),t(14),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),a.a.createElement("h2",null,e.monster.name),a.a.createElement("p",null,e.monster.email))}),h=function(e){return console.log("Props in Card List Component: ",e),a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(u,{key:e.id,monster:e})})))},d=(t(15),t(16),function(e){var n=e.placeholder,t=e.handleChange;return(a.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t}))}),p=function(e){Object(i.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Component did mount!"),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){console.log("Users: ",n),e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters Rolodex"),a.a.createElement(d,{placeholder:"search monsters",handleChange:this.handleChange}),a.a.createElement(h,{monsters:o}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6a2275b0.chunk.js.map
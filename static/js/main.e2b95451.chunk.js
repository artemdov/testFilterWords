(this.webpackJsonptestovoe=this.webpackJsonptestovoe||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(5),u=n.n(a),o=(n(24),n(25),n(4)),i=n(18),b=n.n(i),j=function(){return b.a.get("https://cors-anywhere.herokuapp.com/http://www.mrsoft.by/data.json")},d={data:[],valueInput:"",valueCheckbox:!1,filterData:[],error:""},s=function(t){return{type:"getDataReducer/SET-FILTER-DATA",filterData:t}},l=n(2),f=n(1),O=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.data.valueInput}));return Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"text",placeholder:"search",onChange:function(e){t(function(t){return{type:"getDataReducer/SET-VALUE-INPUT",valueInput:t}}(e.currentTarget.value))},value:e})})},h=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.data.valueCheckbox})),n=Object(l.c)((function(t){return t.data.data})),c=Object(l.c)((function(t){return t.data.valueInput}));return Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){t(s(e?n.filter((function(t){return t.toLowerCase().includes(c.toLowerCase())})):n.filter((function(t){return t.includes(c)}))))},children:"substring"})})},v=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.data.valueCheckbox}));return Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"checkbox",onChange:function(e){t(function(t){return{type:"getDataReducer/SET-VALUE-CHECKBOX",valueCheckbox:t}}(e.currentTarget.checked))},checked:e})})},p=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.data.valueInput})),n=Object(l.c)((function(t){return t.data.data})),c=Object(l.c)((function(t){return t.data.error})),r=Object(l.c)((function(t){return t.data.filterData}));return Object(f.jsxs)("div",{className:"ButtonLength",children:[Object(f.jsx)("button",{onClick:function(){t(+e?s(n.filter((function(t){return t.length>+e}))):function(t){return{type:"getDataReducer/SET-ERROR",error:t}}("Enter correct data"))},children:"length"}),r.length>0&&r.map((function(t,e){return Object(f.jsx)("div",{children:t},e)})),c]})};var g=function(){var t=Object(l.b)();return Object(c.useEffect)((function(){t((function(t){return j().then((function(e){t({type:"getDataReducer/GET-DATA",data:e.data.data})})).catch((function(t){console.log(t)}))}))}),[t]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(O,{}),Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"Buttons",children:[Object(f.jsx)(h,{}),Object(f.jsx)(p,{})]})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),c(t),r(t),a(t),u(t)}))},E=n(6),T=n(19),D=Object(E.b)({data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"getDataReducer/GET-DATA":return Object(o.a)(Object(o.a)({},t),{},{data:e.data});case"getDataReducer/SET-FILTER-DATA":return Object(o.a)(Object(o.a)({},t),{},{filterData:e.filterData});case"getDataReducer/SET-VALUE-CHECKBOX":return Object(o.a)(Object(o.a)({},t),{},{valueCheckbox:e.valueCheckbox});case"getDataReducer/SET-ERROR":return Object(o.a)(Object(o.a)({},t),{},{error:e.error});case"getDataReducer/SET-VALUE-INPUT":return Object(o.a)(Object(o.a)({},t),{},{valueInput:e.valueInput});default:return t}}}),C=Object(E.c)(D,Object(E.a)(T.a));window.store=C,u.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(l.a,{store:C,children:Object(f.jsx)(g,{})})}),document.getElementById("root")),x()}},[[49,1,2]]]);
//# sourceMappingURL=main.e2b95451.chunk.js.map
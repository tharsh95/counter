(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),a=(n(9),n(10),n(2)),l=(n(11),n(0)),b=function(){var t=Object(c.useState)(0),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(),r=Object(a.a)(s,2),b=r[0],o=r[1],j=Object(c.useState)(0),d=Object(a.a)(j,2),u=d[0],m=d[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"full__container",children:[Object(l.jsxs)("div",{className:"container my-3 timer__container",children:[Object(l.jsx)("h1",{children:"Timer"}),Object(l.jsx)("div",{id:"count",children:n}),Object(l.jsx)("button",{id:"start",className:"btn btn-primary mx-3",onClick:function(t){t.preventDefault();var e=setInterval((function(){i((function(t){return t+1}))}),1e3);o(e)},children:"Start"}),Object(l.jsx)("button",{id:"stop",className:"btn btn-primary mx-3",onClick:function(){clearInterval(b)},disabled:0===n,children:"Stop"}),Object(l.jsx)("button",{id:"reset",className:"btn btn-primary mx-3",onClick:function(){i(0),clearInterval(b)},disabled:0===n,children:"Reset"})]}),Object(l.jsxs)("div",{className:"container my-3 likes__container",children:[Object(l.jsx)("h1",{children:"Likes/Dislikes"}),Object(l.jsx)("div",{id:"likes",children:u}),Object(l.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){m(u+1)},children:"Like"}),Object(l.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){m(u-1)},disabled:0===u,children:"Dislike"})]})]})})};var o=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b,{})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),j()}],[[13,1,2]]]);
//# sourceMappingURL=main.901790c4.chunk.js.map
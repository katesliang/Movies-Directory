(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(11),a=n.n(s),i=(n(16),n(17),n(18),n(0));var o=function(e){return Object(i.jsx)("div",{className:"header",children:e.title})};n(20);var j=function(e){return Object(i.jsx)("div",{className:"footer",children:e.title})},u=n(7),l=n.n(u),b=n(9),d=n(6),h=(n(22),n(23),n(27));var O=function(e){return Object(i.jsx)("div",{class:"movies",children:e.movies.map((function(t){return Object(i.jsxs)(h.a,{onClick:function(n){return e.handleClick(n,t.imdbID)},style:{width:"18rem"},children:[Object(i.jsx)(h.a.Img,{variant:"top",src:t.Poster}),Object(i.jsxs)(h.a.Body,{children:[Object(i.jsx)(h.a.Title,{children:t.Title}),Object(i.jsx)(h.a.Text,{children:t.Year})]})]})}))})},x=(n(24),n(28));var p=function(e){var t=!0;function n(t){return e.page+t}return e.response.length<10&&(t=!1),Object(i.jsxs)(x.a,{class:"pagination",children:[e.page>1&&Object(i.jsx)(x.a.Prev,{onClick:function(t){return e.handleSubmit(t,n(-1))}}),Object(i.jsx)(x.a.Item,{children:e.page}),t&&Object(i.jsx)(x.a.Next,{onClick:function(t){return e.handleSubmit(t,n(1))}})]})};n(25);var f=function(e){return Object(i.jsx)("div",{children:e.details.map((function(e){return Object(i.jsxs)(h.a,{style:{width:"18rem"},children:[Object(i.jsx)(h.a.Img,{variant:"top",src:e.Poster}),Object(i.jsxs)(h.a.Body,{children:[Object(i.jsx)(h.a.Title,{children:Object(i.jsx)("strong",{children:e.Title})}),Object(i.jsxs)(h.a.Text,{children:[Object(i.jsx)("strong",{children:"Genre:"})," ",e.Genre]}),Object(i.jsxs)(h.a.Text,{children:[Object(i.jsx)("strong",{children:"Director:"})," ",e.Director]}),Object(i.jsxs)(h.a.Text,{children:[Object(i.jsx)("strong",{children:"Runtime:"})," ",e.Runtime," "]}),Object(i.jsxs)(h.a.Text,{children:[Object(i.jsx)("strong",{children:"Release Date:"})," ",e.Released]})]})]})}))})};var m=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(d.a)(s,2),o=a[0],j=a[1],u=Object(c.useState)(1),h=Object(d.a)(u,2),x=h[0],m=h[1],v=Object(c.useState)(!1),g=Object(d.a)(v,2),S=g[0],y=g[1],w=Object(c.useState)(!1),C=Object(d.a)(w,2),I=C[0],k=C[1],T=Object(c.useState)([]),F=Object(d.a)(T,2),D=F[0],N=F[1],R=Object(c.useState)(!1),P=Object(d.a)(R,2),B=P[0],M=P[1];function U(e,t){function n(){return(n=Object(b.a)(l.a.mark((function e(){var n,c,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(o),c=encodeURIComponent(t),s="https://www.omdbapi.com/?apikey=".concat("7ad86321","&type=movie&s=").concat(n,"&page=").concat(c,"&r=json"),console.log(s),e.next=6,fetch(s);case 6:return a=e.sent,e.next=9,a.json();case 9:a=e.sent,console.log(a.Search),r(a.Search);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){n.apply(this,arguments)}(),y(!0),m(t),M(!1),k(!0)}return Object(i.jsxs)("div",{className:"searchInfo",children:[Object(i.jsxs)("form",{id:"search",onSubmit:function(e){return U(e,x)},children:[Object(i.jsx)("label",{htmlFor:"queryInput",children:"Search Movie Name:"}),Object(i.jsx)("input",{id:"queryInput",value:o,type:"text",onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("button",{className:"search",children:"Submit"})]}),I?Object(i.jsx)(p,{page:x,response:n,handleSubmit:U}):Object(i.jsx)(i.Fragment,{}),S?Object(i.jsx)(O,{movies:n,handleClick:function(e,t){function n(){return(n=Object(b.a)(l.a.mark((function e(){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),c="https://www.omdbapi.com/?apikey=".concat("7ad86321","&i=").concat(n,"&r=json"),console.log(c),e.next=5,fetch(c);case 5:return r=e.sent,e.next=8,r.json();case 8:r=e.sent,console.log([r]),N([r]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){n.apply(this,arguments)}(),y(!1),M(!0),k(!1)}}):Object(i.jsx)(i.Fragment,{}),B?Object(i.jsx)(f,{details:D}):Object(i.jsx)(i.Fragment,{}),I?Object(i.jsx)(p,{page:x,response:n,handleSubmit:U}):Object(i.jsx)(i.Fragment,{})]})};var v=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{title:"Search for Movies"}),Object(i.jsx)(m,{}),Object(i.jsx)(j,{title:"2021"})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),g()}],[[26,1,2]]]);
//# sourceMappingURL=main.78c70517.chunk.js.map
(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(11),a=n.n(r),o=(n(16),n(17),n(18),n(0));var i=function(e){return Object(o.jsx)("div",{className:"header",children:e.title})};n(20);var j=function(e){return Object(o.jsx)("div",{className:"footer",children:e.title})},l=n(7),u=n.n(l),b=n(9),d=n(5),O=(n(22),n(23),n(27));var h=function(e){return Object(o.jsx)("div",{class:"movies",children:e.movies.map((function(t){return"N/A"===t.Poster&&(t.Poster="https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png",console.log(t.Poster)),Object(o.jsxs)(O.a,{class:"movie",onClick:function(n){return e.handleClick(n,t.imdbID)},style:{width:"18rem"},children:[Object(o.jsx)(O.a.Img,{variant:"top",src:t.Poster}),Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(O.a.Title,{children:t.Title}),Object(o.jsx)(O.a.Text,{children:t.Year})]})]})}))})},p=(n(24),n(28));var x=function(e){var t=!0;function n(t){return e.page+t}return e.response.length<10&&(t=!1),Object(o.jsxs)(p.a,{class:"pagination",children:[e.page>1&&Object(o.jsx)(p.a.Prev,{onClick:function(t){return e.handleSubmit(t,n(-1))}}),Object(o.jsx)(p.a.Item,{children:e.page}),t&&Object(o.jsx)(p.a.Next,{onClick:function(t){return e.handleSubmit(t,n(1))}})]})};n(25);var m=function(e){return Object(o.jsx)("div",{children:e.details.map((function(e){return"N/A"===e.Poster&&(e.Poster="https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png",console.log(e.Poster)),Object(o.jsxs)(O.a,{style:{width:"18rem"},children:[Object(o.jsx)(O.a.Img,{variant:"top",src:e.Poster}),Object(o.jsxs)(O.a.Body,{children:[Object(o.jsx)(O.a.Title,{children:Object(o.jsx)("strong",{children:e.Title})}),Object(o.jsxs)(O.a.Text,{children:[Object(o.jsx)("strong",{children:"Genre:"})," ",e.Genre]}),Object(o.jsxs)(O.a.Text,{children:[Object(o.jsx)("strong",{children:"Director:"})," ",e.Director]}),Object(o.jsxs)(O.a.Text,{children:[Object(o.jsx)("strong",{children:"Runtime:"})," ",e.Runtime," "]}),Object(o.jsxs)(O.a.Text,{children:[Object(o.jsx)("strong",{children:"Release Date:"})," ",e.Released]})]})]})}))})};var f=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(d.a)(r,2),i=a[0],j=a[1],l=Object(c.useState)(0),O=Object(d.a)(l,2),p=O[0],f=O[1],g=Object(c.useState)(!1),v=Object(d.a)(g,2),S=v[0],w=v[1],y=Object(c.useState)(!1),k=Object(d.a)(y,2),C=k[0],I=k[1],F=Object(c.useState)([]),N=Object(d.a)(F,2),P=N[0],T=N[1],R=Object(c.useState)(!1),D=Object(d.a)(R,2),A=D[0],B=D[1],M=Object(c.useState)(!1),U=Object(d.a)(M,2),q=U[0],G=U[1];function J(e,t){function n(){return(n=Object(b.a)(u.a.mark((function e(){var n,c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(i),c=encodeURIComponent(t),r="https://www.omdbapi.com/?apikey=".concat("7ad86321","&type=movie&s=").concat(n,"&page=").concat(c,"&r=json"),console.log(r),e.next=6,fetch(r);case 6:return a=e.sent,e.next=9,a.json();case 9:a=e.sent,console.log(a.Search),s(a.Search);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),0===t&&""!==i&&(t=1),""!==i&&(!function(){n.apply(this,arguments)}(),w(!0),f(t),B(!1),I(!0))}return Object(o.jsxs)("div",{className:"searchInfo",children:[Object(o.jsxs)("form",{id:"search",onSubmit:function(e){return J(e,p)},children:[Object(o.jsx)("label",{htmlFor:"queryInput",children:"Search Movie Name:"}),Object(o.jsx)("input",{id:"queryInput",value:i,type:"text",onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("button",{className:"search",children:"Submit"})]}),S?Object(o.jsx)("p",{id:"instructions",children:" Click a movie to view more details!"}):Object(o.jsx)(o.Fragment,{}),C?Object(o.jsx)(x,{page:p,response:n,handleSubmit:J}):Object(o.jsx)(o.Fragment,{}),S?Object(o.jsx)(h,{movies:n,handleClick:function(e,t){function n(){return(n=Object(b.a)(u.a.mark((function e(){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),c="https://www.omdbapi.com/?apikey=".concat("7ad86321","&i=").concat(n,"&r=json"),console.log(c),e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:s=e.sent,console.log([s]),T([s]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){n.apply(this,arguments)}(),w(!1),B(!0),G(!0),I(!1)}}):Object(o.jsx)(o.Fragment,{}),q?Object(o.jsx)("button",{onClick:function(){B(!1),I(!0),w(!0),G(!1)},children:"Back to Results"}):Object(o.jsx)(o.Fragment,{}),A?Object(o.jsx)(m,{details:P}):Object(o.jsx)(o.Fragment,{}),C?Object(o.jsx)(x,{page:p,response:n,handleSubmit:J}):Object(o.jsx)(o.Fragment,{})]})};var g=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{title:"Search for Movies"}),Object(o.jsx)(f,{}),Object(o.jsx)(j,{title:"2021"})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),v()}],[[26,1,2]]]);
//# sourceMappingURL=main.ee2b6a61.chunk.js.map
(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(5),r=c(6),n=c(10),s=c(9),i=c(1),l=c.n(i),o=c(7),u=c.n(o),j=c(3),b=c.n(j),d=c(8),h=c(4),p=c(0);function m(e){var t=e.movie;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(p.jsxs)("div",{className:"card--content",children:[Object(p.jsx)("h3",{className:"card--title",children:t.title}),Object(p.jsx)("p",{children:Object(p.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(p.jsx)("p",{children:Object(p.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(p.jsx)("p",{className:"card--desc",children:t.overview})]})]})}function v(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(i.useState)([]),n=Object(h.a)(r,2),s=n[0],l=n[1],o=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(a);case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,l(n.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{className:"form",onSubmit:o,children:[Object(p.jsx)("label",{className:"label",htmlFor:"query",children:"Movie Name"}),Object(p.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"i.e. Jurassic Park",value:c,onChange:function(e){return a(e.target.value)}}),Object(p.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(p.jsx)("div",{className:"card-list",children:s.filter((function(e){return e.poster_path})).map((function(e){return Object(p.jsx)(m,{movie:e},e.id)}))})]})}c(17);var O=function(e){Object(n.a)(c,e);var t=Object(s.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(p.jsx)(v,{})]})}}]),c}(l.a.Component);u.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.39840ce8.chunk.js.map
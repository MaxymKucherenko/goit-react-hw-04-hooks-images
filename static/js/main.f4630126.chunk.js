(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{26:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(6),r=a.n(o),s=(a(26),a(11)),i=a(4),l=a(20),u=a.n(l),d=a(21),j=a.n(d).a.create({baseURL:"https://pixabay.com/api"}),b=function(e,t){return j.get("?q=".concat(e,"&page=").concat(t,"&key=").concat("22740436-05bbd607dbbc32bdc3528cde5","&image_type=photo&orientation=horizontal&per_page=").concat(12))},m=a(8),h=(a(66),a(1)),O=function(e){var t=e.search,a=Object(c.useState)(""),n=Object(i.a)(a,2),o=n[0],r=n[1];return Object(h.jsx)("div",{children:Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(o),""!==o.trim()||m.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"on",autoFocus:!0,placeholder:"Search images and photos",name:"searchText",value:o,onChange:function(e){var t=e.target;r(t.value.toLowerCase())}})]})})})},f=function(e){var t=e.image,a=e.onClick;return Object(h.jsx)("li",{className:"ImageGalleryItem",onClick:a,children:Object(h.jsx)("img",{src:t.webformatURL,alt:t.tags,className:"ImageGalleryItem-image"})})},g=function(e){var t=e.images,a=e.onClick;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(h.jsx)(f,{image:e,onClick:a(e.id)},e.id)}))})},p=function(e){var t=e.handleLoadMore,a=e.disabled;return Object(h.jsx)("button",{type:"button",className:"Button",onClick:t,disabled:a,children:"Load more"})},x=function(e){var t=e.image,a=e.onClose,n=function(e){"Escape"===e.code&&a()};return Object(c.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}})),Object(h.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&a()},children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:t.largeImageURL,alt:t.tags})})})};function v(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(!1),r=Object(i.a)(o,2),l=r[0],d=r[1],j=Object(c.useState)(""),f=Object(i.a)(j,2),v=f[0],N=f[1],S=Object(c.useState)(0),C=Object(i.a)(S,2),y=C[0],k=C[1],w=Object(c.useState)(!1),L=Object(i.a)(w,2),F=L[0],I=L[1],B=Object(c.useState)(null),E=Object(i.a)(B,2),M=E[0],G=E[1],R=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},T=a.find((function(e){return e.id===M}));return Object(h.jsxs)("div",{className:"App",children:[l&&Object(h.jsx)(x,{onClose:function(){d(!1),G(null)},image:T}),Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("h1",{children:"Image finder"})}),Object(h.jsx)(m.a,{autoClose:3e3}),Object(h.jsx)(O,{search:function(e){e&&(I(!0),b(e,1).then((function(t){n(t.data.hits),k(2),N(e),I(!1)})))}}),Object(h.jsx)(g,{images:a,onClick:function(e){return function(){d(!0),G(e)}}}),!0===F&&Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)(u.a,{className:"Button-container",type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),0!==a.length&&Object(h.jsx)("div",{className:"Button-container",children:Object(h.jsx)(p,{handleLoadMore:function(){I(!0),b(v,y).then((function(e){n([].concat(Object(s.a)(a),Object(s.a)(e.data.hits))),k((function(e){return e+1})),I(!1),R()}))},disabled:F})})]})}r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f4630126.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{17:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(6),i=n.n(a),c=(n(17),n(10)),s=n(4),p=n(8),l=n(11),d=n.n(l),x=n(2);var b=Object(x.a)("div",{target:"e19merm10"})({name:"1085zez",styles:"position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)"}),g=n(1),u=function(){return Object(g.jsx)(b,{children:Object(g.jsx)(d.a,{type:"Heart",color:"#BA55D3",height:100,width:100,timeout:3e3})})};var f=Object(x.a)("div",{target:"e1d9azhh1"})({name:"138s0om",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.7);z-index:1200"}),h=Object(x.a)("div",{target:"e1d9azhh0"})({name:"16z0rdb",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:800px;min-height:500px;width:100%;padding:12px;background-color:#fff;border-radius:3px;box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)"}),m=document.querySelector("#modal-root");function j(t){var e=this,n=t.onClose,r=t.children;Object(o.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}));var i=function(t){"Escape"===t.code&&e.props.onClose()};return Object(a.createPortal)(Object(g.jsx)(f,{onClick:function(t){t.currentTarget===t.target&&n()},children:Object(g.jsx)(h,{children:r})}),m)}var O=Object(x.a)("header",{target:"e4vzfy63"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),y=Object(x.a)("form",{target:"e4vzfy62"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),v=Object(x.a)("button",{target:"e4vzfy61"})({name:"1f32h4y",styles:'display:inline-block;width:48px;height:48px;border:0;background-image:url("https://image.flaticon.com/icons/svg/149/149852.svg");background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}'}),w=Object(x.a)("input",{target:"e4vzfy60"})({name:"1y1v4jv",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;padding-top:2px;padding-bottom:2px;}"});function k(t){var e=t.onSubmit,n=t.toast,r=Object(o.useState)(""),a=Object(s.a)(r,2),i=a[0],c=a[1];return Object(g.jsx)(O,{children:Object(g.jsxs)(y,{onSubmit:function(t){t.preventDefault(),""===i.trim()&&n.error("Enter a keyword to search images"),e(i),c("")},children:[Object(g.jsx)(v,{type:"submit"}),Object(g.jsx)(w,{type:"text",value:i,onChange:function(t){c(t.target.value.toLowerCase())},autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}var z=Object(x.a)("li",{target:"e1f02xps1"})({name:"sip57c",styles:"border-radius:8px;overflow:hidden;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12);transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.05);cursor:zoom-in;}"}),S=Object(x.a)("img",{target:"e1f02xps0"})({name:"14uytfy",styles:"width:100%;height:230px;object-fit:cover"}),C=function(t){var e=t.id,n=t.imageSrc,o=t.alt,r=t.onClick;return Object(g.jsx)(z,{children:Object(g.jsx)(S,{id:e,src:n,alt:o,onClick:r})})};var L=Object(x.a)("ul",{target:"ehfmf380"})({name:"dz90na",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:20px;margin-top:0;margin-bottom:0;padding:10px 30px 0;list-style:none;margin-left:auto;margin-right:auto"}),E=function(t){var e=t.images,n=t.onImageClick;return Object(g.jsx)(L,{children:e.map((function(t){var e=t.id,o=t.webformatURL,r=t.largeImageURL,a=t.tags;return Object(g.jsx)(C,{id:e,imageSrc:o,onClick:function(){return n({id:e,largeImageURL:r,tags:a})},alt:a},e)}))})};var q=Object(x.a)("button",{target:"e122mgko0"})({name:"1fclqly",styles:"margin-right:auto;margin-left:auto;padding:8px 16px;border-radius:4px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"}),F=function(t){var e=t.onClick;return Object(g.jsx)(q,{type:"button",onClick:e,children:"Load more"})};var I=Object(x.a)("div",{target:"e3brvlq1"})({name:"o9g9bj",styles:"display:inline-block;padding:10px;text-align:center;margin-left:auto;margin-right:auto;border:1px solid #ba55d3"}),R=Object(x.a)("p",{target:"e3brvlq0"})({name:"11ptaxq",styles:"font-size:14px;color:#ba55d3"}),T=function(t){var e=t.text;return Object(g.jsx)(I,{children:Object(g.jsx)(R,{children:e})})};T.defaultProps={text:"Oops! Something wrong! Request error!"};var B="idle",D="pending",P="resolved",U="rejected";function A(){var t=Object(o.useState)(""),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(o.useState)(1),i=Object(s.a)(a,2),l=i[0],d=i[1],x=Object(o.useState)([]),b=Object(s.a)(x,2),f=b[0],h=b[1],m=Object(o.useState)(B),O=Object(s.a)(m,2),y=O[0],v=O[1],w=Object(o.useState)(null),z=Object(s.a)(w,2),S=z[0],C=z[1],L=Object(o.useState)(null),q=Object(s.a)(L,2),I=q[0],R=q[1];Object(o.useEffect)((function(){n&&A(n,l)}),[n,l]);var A=function(t,e){(function(t,e){var n="".concat("https://pixabay.com/api","/?key=").concat("21709633-754ac93ca1acb3d9a26f3f2d1","&q=").concat(t,"&image_type=photo&orientation=horizontal&page=").concat(e,"&per_page=12");return fetch(n).then((function(t){return t.ok?t.json():t.statusText}))})(t,e).then((function(t){var n=t.hits;0===n.length?(v(B),p.b.error("Sorry, we couldn't find any matches")):(h((function(t){return[].concat(Object(c.a)(t),Object(c.a)(n))})),v(P),e>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))})).catch((function(t){R(U)}))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{onSubmit:function(t){r(t),d(1),h([])},toast:p.b}),y===B&&Object(g.jsx)(g.Fragment,{}),y===D&&Object(g.jsx)(u,{}),y===U&&Object(g.jsx)(T,{text:I}),y===P&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(E,{images:f,onImageClick:function(t){return C(t)}}),Object(g.jsx)(F,{onClick:function(){return d((function(t){return t+1}))}}),S&&Object(g.jsx)(j,{onClose:function(){return C(null)},children:Object(g.jsx)("img",{src:S.largeImageURL,alt:S.tags})})]}),Object(g.jsx)(p.a,{position:"top-right",containerClassName:"",containerStyle:{top:100},toastOptions:{style:{borderRadius:"4px",background:"#BA55D3",color:"#fff"}}})]})}var H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),r(t),a(t),i(t)}))};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(A,{hasOverlay:!0})}),document.getElementById("root")),H()}},[[41,1,2]]]);
//# sourceMappingURL=main.d022d239.chunk.js.map
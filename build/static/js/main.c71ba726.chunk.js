(this.webpackJsonpsidebar=this.webpackJsonpsidebar||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(24),i=n.n(s),a=(n(31),n(13)),o=n(2),l=(n(32),n(7)),j=n(46),u=n(47),d=n(48),h=(n(33),n(0)),b=function(e){var t=e.showLoginPanel,n=e.toggleLoginPanel;return Object(h.jsx)("div",{className:n?"loginPanel":"loginPanel--hidden",children:Object(h.jsxs)("div",{className:"loginPanel__Elements",children:[Object(h.jsx)("p",{children:"Login"}),Object(h.jsx)("p",{children:"Password"}),Object(h.jsx)("p",{className:"loginPanel__Elements__button",onClick:t,children:"Submit"}),Object(h.jsx)(a.b,{to:"/UserPage",className:"loginPanel__Elements__register",onClick:t,children:"REGISTER"})]})})},O=(n(40),function(e){var t=e.title,n=e.showLoginPanel,r=Object(c.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1],j=function(){o(!i)};return Object(h.jsxs)("div",{className:"menuElem",children:[Object(h.jsxs)("span",{onClick:j,children:[" ",i?"CLOSE":t," "]}),Object(h.jsx)("div",{className:i?"menuElem__sidebar":"menuElem__sidebar--hidden",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{to:"/",onClick:j,className:"homePageLink",children:"Home Page"})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.b,{to:"/Shop",onClick:j,className:"homePageLink",children:"Shop"})}),Object(h.jsx)("li",{children:"About Us "}),Object(h.jsx)("li",{onClick:function(){j(),n()},children:"User Panel "})]})})]})}),x=(n(41),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=function(){r(!n)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"menuContainer",children:[Object(h.jsx)(j.a,{fluid:!0,children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(d.a,{xs:3,children:Object(h.jsx)(O,{title:"MENU",showLoginPanel:s})}),Object(h.jsx)(d.a,{xs:3,children:Object(h.jsx)(O,{title:"SHOP",showLoginPanel:s})}),Object(h.jsx)(d.a,{xs:3,children:Object(h.jsx)(O,{title:"CAREER",showLoginPanel:s})}),Object(h.jsx)(d.a,{xs:3,children:Object(h.jsx)(O,{title:"ABOUT US",showLoginPanel:s})})]})}),Object(h.jsx)(b,{toggleLoginPanel:n,showLoginPanel:s})]})})}),m=(n(42),n(15)),g=n.n(m),p=n(17),f=n(49),P=function(){var e=Object(p.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof t&&""!=t){e.next=2;break}return e.abrupt("return",{});case 2:return e.next=4,fetch("".concat("http://www.omdbapi.com","/?t=").concat(t,"&apikey=").concat("2eb14caf"));case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.movieTitle,n=Object(c.useState)("green mile"),r=Object(l.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)(Object(p.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)}))),[t]),Object(h.jsx)(d.a,{xs:12,md:6,lg:4,children:Object(h.jsx)(f.a,{src:s.Poster,rounded:!0})})},v=["Shrek","Batman","American Pie","The Godfather","The Shawshank Redemption","Pulp Fiction","Star Wars","Raiders of the Lost Ark","Forrest Gump","Apocalypse Now","Goodfellas","The Silence of the Lambs","Jaws","Blade Runner","The Empire Strikes Back","Fargo","Badlands","Boyz N the Hood","Bullitt","The Cameraman","The Crowd","The Deer Hunter","Easy Rider","The Endless Summer","Field of Dreams","Fury","Ghostbusters","King Kong","Manhattan","The Matrix","Schindler\u2019s List"],w=function(){for(var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],s=[],i=0;i<n;i++)s.push(Object(h.jsx)(S,{movieTitle:v[i]})),console.log(n);return Object(h.jsxs)("div",{className:"List",children:[Object(h.jsx)("button",{className:n<30?"List__button":"List__button--hidden",onClick:function(){r(n+10)},children:n>0?"SHOW MORE":"TOP 10"}),Object(h.jsx)(j.a,{children:Object(h.jsx)(u.a,{children:s})})]})},E=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{}),Object(h.jsx)("h1",{children:"Home Page"}),Object(h.jsx)("p",{children:"Main page of this website."}),Object(h.jsx)(w,{})]})},k=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)("h1",{children:"REGISTER PANEL "}),Object(h.jsx)("p",{children:"Register form and user page. "})]})},L=(n(44),function(e){var t=e.title,n=e.prod,c=e.imgurl,r=e.price;return Object(h.jsx)(d.a,{xs:12,md:6,lg:4,children:Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("p",{children:n}),Object(h.jsx)(f.a,{rounded:!0,src:c,className:"item__image"}),Object(h.jsx)("p",{children:t}),Object(h.jsxs)("p",{children:[r," z\u0142/sztuka "]})]})})}),N=function(){var e=[],t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1];Object(c.useEffect)((function(){fetch("/Data/Opony.xml").then((function(e){return e.text()})).then((function(e){var t=(new window.DOMParser).parseFromString(e,"text/xml").getElementsByTagName("o"),n=Array.from(t).map((function(e,t){return{price:e.getAttribute("price"),desc:e.querySelector("desc").textContent,imgurl:e.querySelector("imgs main").getAttribute("url"),producent:e.querySelector("attrs a[name='Producent']").textContent}}));s(n),console.log(n[0].imgurl),console.log(n[1].imgurl),console.dir(n[0].attr)})).catch((function(e){console.log(e)}))}),[]);for(var i=0;i<7;i++)e.push(Object(h.jsx)(L,{title:r.length>0&&r[i].desc,prod:r.length>0&&r[i].producent,imgurl:r.length>0&&r[i].imgurl,price:r.length>0&&r[i].price}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)(j.a,{children:[Object(h.jsx)(u.a,{children:Object(h.jsx)(d.a,{xs:12,children:"LESS TRACTION MORE ACTION"})}),Object(h.jsx)(u.a,{children:e})]})]})};var _=function(){return Object(h.jsx)(a.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:E}),Object(h.jsx)(o.a,{exact:!0,path:"/UserPage",component:k}),Object(h.jsx)(o.a,{exact:!0,path:"/Shop",component:N})]})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c71ba726.chunk.js.map
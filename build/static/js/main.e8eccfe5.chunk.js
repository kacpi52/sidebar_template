(this.webpackJsonpsidebar=this.webpackJsonpsidebar||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(24),i=n.n(r),a=(n(31),n(14)),o=n(2),l=(n(32),n(8)),j=n(45),d=n(46),u=n(47),b=(n(33),n(0)),h=function(e){var t=e.showLoginPanel,n=e.toggleLoginPanel;return Object(b.jsx)("div",{className:n?"loginPanel":"loginPanel--hidden",children:Object(b.jsxs)("div",{className:"loginPanel__Elements",children:[Object(b.jsx)("p",{children:"Login"}),Object(b.jsx)("p",{children:"Password"}),Object(b.jsx)("p",{className:"loginPanel__Elements__button",onClick:t,children:"Submit"}),Object(b.jsx)(a.b,{to:"/UserPage",className:"loginPanel__Elements__register",onClick:t,children:"REGISTER"})]})})},O=(n(40),function(e){var t=e.title,n=e.showLoginPanel,s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],o=r[1],j=function(){o(!i)};return Object(b.jsxs)("div",{className:"menuElem",children:[Object(b.jsxs)("span",{onClick:j,children:[" ",i?"CLOSE":t," "]}),Object(b.jsx)("div",{className:i?"menuElem__sidebar":"menuElem__sidebar--hidden",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"/",onClick:j,className:"homePageLink",children:"Home Page"})}),Object(b.jsx)("li",{children:"Our projects"}),Object(b.jsx)("li",{children:"About Us "}),Object(b.jsx)("li",{onClick:function(){j(),n()},children:"User Panel "})]})})]})}),x=(n(41),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=function(){s(!n)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"menuContainer",children:[Object(b.jsx)(j.a,{fluid:!0,children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{xs:3,children:Object(b.jsx)(O,{title:"MENU",showLoginPanel:r})}),Object(b.jsx)(u.a,{xs:3,children:Object(b.jsx)(O,{title:"PROJECTS",showLoginPanel:r})}),Object(b.jsx)(u.a,{xs:3,children:Object(b.jsx)(O,{title:"CAREER",showLoginPanel:r})}),Object(b.jsx)(u.a,{xs:3,children:Object(b.jsx)(O,{title:"ABOUT US",showLoginPanel:r})})]})}),Object(b.jsx)(h,{toggleLoginPanel:n,showLoginPanel:r})]})})}),m=(n(42),n(15)),f=n.n(m),p=n(16),g=n(48),P=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof t&&""!=t){e.next=2;break}return e.abrupt("return",{});case 2:return e.next=4,fetch("".concat("http://www.omdbapi.com","/?t=").concat(t,"&apikey=").concat("2eb14caf"));case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.movieTitle,n=Object(c.useState)("green mile"),s=Object(l.a)(n,2),r=s[0],i=s[1];return Object(c.useEffect)(Object(p.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:n=e.sent,i(n),console.log(r);case 5:case"end":return e.stop()}}),e)}))),[t]),Object(b.jsx)(u.a,{xs:12,md:6,lg:4,children:Object(b.jsx)(g.a,{src:r.Poster,rounded:!0})})},w=["Shrek","Batman","American Pie","The Godfather","The Shawshank Redemption","Pulp Fiction","Star Wars","Raiders of the Lost Ark","Forrest Gump","Apocalypse Now","Goodfellas","The Silence of the Lambs","Jaws","Blade Runner","The Empire Strikes Back","Fargo","Badlands","Boyz N the Hood","Bullitt","The Cameraman","The Crowd","The Deer Hunter","Easy Rider","The Endless Summer","Field of Dreams","Fury","Ghostbusters","King Kong","Manhattan","The Matrix","Schindler\u2019s List"],E=function(){for(var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),i=Object(l.a)(r,2),a=i[0],o=i[1],u=[],h=0;h<n;h++)u.push(Object(b.jsx)(v,{movieTitle:w[h]}));var O=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;o(!(e>3500))};return Object(c.useEffect)((function(){return window.addEventListener("scroll",O),function(){window.removeEventListener("scroll",O)}}),[]),Object(b.jsxs)("div",{className:"List",children:[Object(b.jsx)("button",{className:a?"List__button":"List__button--hidden",onClick:function(){s(n+10)},children:n>0?"SHOW MORE":"TOP 10"}),Object(b.jsx)(j.a,{children:Object(b.jsx)(d.a,{children:u})})]})},L=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsx)("h1",{children:"Home Page"}),Object(b.jsx)("p",{children:"Main page of this website."}),Object(b.jsx)(E,{})]})},S=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsx)("h1",{children:"REGISTER PANEL "}),Object(b.jsx)("p",{children:"Register form and user page. "})]})};var k=function(){return Object(b.jsx)(a.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:L}),Object(b.jsx)(o.a,{exact:!0,path:"/UserPage",component:S})]})})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e8eccfe5.chunk.js.map
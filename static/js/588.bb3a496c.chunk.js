"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[588],{588:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var i,o,r,s=t(439),c=t(317),l=t(791),a=t(168),u=t(87),d=t(689),h=t(444),f=t(184),x=function(e){var n=e.movies,t=(0,d.TH)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Today trending movies"}),(0,f.jsx)(m,{children:n.map((function(e){return(0,f.jsx)(v,{children:(0,f.jsx)(Z,{to:"movieDetails/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})]})},m=h.ZP.ul(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),v=h.ZP.li(o||(o=(0,a.Z)(["\n  font-size: 18px;\n  color: darkblue;\n  list-style: none;\n"]))),Z=(0,h.ZP)(u.Link)(r||(r=(0,a.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover{\n    color: tomato;\n  }\n"]))),j="idle",p="pending",_="rejected",g="resolved",k=function(){var e=(0,l.useState)(),n=(0,s.Z)(e,2),t=n[0],i=n[1],o=(0,l.useState)(j),r=(0,s.Z)(o,2),a=r[0],u=r[1],d=(0,l.useState)(""),h=(0,s.Z)(d,2),m=h[0],v=h[1];return(0,l.useEffect)((function(){u(p),(0,c.Z)().then((function(e){i(e.data.results),u(g)})).catch((function(e){u(_),v(e)}))}),[]),a===j?(0,f.jsx)("h1",{children:"LOADING TRENDING MOVIES"}):a===g?(0,f.jsx)(x,{movies:t}):a===_?(0,f.jsxs)("h1",{children:["There is error: ",m.message]}):void 0}}}]);
//# sourceMappingURL=588.bb3a496c.chunk.js.map
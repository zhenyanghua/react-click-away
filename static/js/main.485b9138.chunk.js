(this["webpackJsonpreact-click-away-example"]=this["webpackJsonpreact-click-away-example"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);n(6);var c=n(0),i=n.n(c),r=n(2),u=n.n(r),a=n(3),o=n(4),l=function(e){var t=e.onClickOutside,n=e.children,c=Object(o.a)(e,["onClickOutside","children"]),r=i.a.useRef(null),u=!1,a=function(e){"touchend"===e.type&&(u=!0),"click"===e.type&&u||r.current&&!r.current.contains(e.target)&&t(e)};return i.a.useEffect((function(){return document.addEventListener("touchend",a,!0),document.addEventListener("click",a,!0),function(){document.removeEventListener("touchend",a,!0),document.removeEventListener("click",a,!0)}}),[]),i.a.createElement("div",Object.assign({},c,{ref:r}),n)},d=function(){var e=i.a.useState(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return i.a.createElement("div",null,i.a.createElement(l,{onClickOutside:function(){c((function(e){return!e}))}},i.a.createElement("h1",null,"Click Outside of this Box to Toggle")),n&&i.a.createElement("h1",null,"Clicked Outside Toggled"))};u.a.render(i.a.createElement(d,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)},6:function(e,t,n){}},[[5,1,2]]]);
//# sourceMappingURL=main.485b9138.chunk.js.map
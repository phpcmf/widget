(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const e=cmf.core.compat["site/app"];var n=t.n(e);const r=cmf.core.compat["common/extend"],s=cmf.core.compat["site/components/IndexPage"];var i=t.n(s);function a(t,o){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},a(t,o)}const c=cmf.core.compat["common/Component"];var u=t.n(c);const d=cmf.core.compat["common/helpers/username"];var l=t.n(d);const p=cmf.core.compat["common/utils/formatNumber"];var f=t.n(p);const v=cmf.core.compat["common/components/Link"];var b=t.n(v);const g=cmf.core.compat["common/components/LoadingIndicator"];var y=t.n(g);const _=cmf.core.compat["common/utils/ItemList"];var h=t.n(_),w="widget.site.navbar.",O="widget.",j=function(t){var o,e;function r(){return t.apply(this,arguments)||this}e=t,(o=r).prototype=Object.create(e.prototype),o.prototype.constructor=o,a(o,e);var s=r.prototype;return s.oninit=function(o){var e=this;t.prototype.oninit.call(this,o);var r=n().site.attribute(O+"lastUserId");r&&(this.loading=!0,n().store.find("users",r).then((function(t){e.user=t,e.loading=!1,m.redraw()})))},s.view=function(){if(this.loading)return m(y(),null);var t=this.items().toArray();return 0!==t.length?m("div",{class:"Widget containerNarrow"},m("div",{class:"row"},m("h2",null,m("i",{class:"fas fa-chart-bar"})," ",n().translator.trans(w+"widget_title")),m("div",null,m("ul",{id:"WidgetList"},t)))):void 0},s.items=function(){var t=new(h()),o=n().site.attribute(O+"discussionsCount"),e=n().site.attribute(O+"postsCount"),r=n().site.attribute(O+"usersCount"),s=n().site.attribute(O+"lastUserId");return o&&t.add("discussions_count",m("li",null,n().translator.trans(w+"discussions_count",{discussionsCount:f()(o)}))),e&&t.add("posts_count",m("li",null,n().translator.trans(w+"posts_count",{postsCount:f()(e)}))),r&&t.add("users_count",m("li",null,n().translator.trans(w+"users_count",{usersCount:f()(r)}))),s&&t.add("latest_member",m("li",null,m(b(),{href:n().route.user(this.user)},l()(this.user)),n().translator.trans(w+"latest_member")," ")),t},r}(u());n().initializers.add("cmf/widget",(function(){(0,r.extend)(i().prototype,"sidebarItems",(function(t){t.add("Widget",j.component(),n().site.attribute("widget.widget_order"))}))}))})(),module.exports=o})();
//# sourceMappingURL=site.js.map
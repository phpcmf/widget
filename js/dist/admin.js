(()=>{var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const s=cmf.core.compat["admin/app"];var i=e.n(s),r="widget.admin.";i().initializers.add("widget",(function(){i().extensionData.for("cmf-widget").registerSetting({label:i().translator.trans(r+"settings.widget_ignore_private_discussions_label"),setting:"widget.ignore_private_discussions",type:"switch"}).registerSetting({label:i().translator.trans(r+"settings.widget_order_label"),setting:"widget.widget_order",type:"number",help:i().translator.trans(r+"settings.widget_helper_text")}).registerPermission({icon:"fas fa-chart-bar",label:i().translator.trans(r+"permissions.view_discussions_count_label"),permission:"widget.viewWidget.discussionsCount",allowGuest:!0},"view").registerPermission({icon:"fas fa-chart-bar",label:i().translator.trans(r+"permissions.view_posts_count_label"),permission:"widget.viewWidget.postsCount",allowGuest:!0},"view").registerPermission({icon:"fas fa-chart-bar",label:i().translator.trans(r+"permissions.view_users_count_label"),permission:"widget.viewWidget.usersCount",allowGuest:!0},"view").registerPermission({icon:"fas fa-chart-bar",label:i().translator.trans(r+"permissions.view_lastest_member_label"),permission:"widget.viewWidget.latestMember",allowGuest:!0},"view")}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map
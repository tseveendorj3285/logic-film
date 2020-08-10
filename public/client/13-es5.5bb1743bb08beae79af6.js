!function(){function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{cPR9:function(n,i,o){"use strict";o.r(i),o.d(i,"NotificationsModule",(function(){return tt}));var r,c=o("ofXK"),s=o("tyNb"),u=o("2Vo4"),l=o("nYR2"),b=o("3E0/"),d=o("0EQZ"),g=o("fXoL"),f=o("LRXf"),p=((r=function(){function t(n){e(this,t),this.http=n}return a(t,[{key:"getAll",value:function(t){return this.http.get("notifications/".concat(t,"/subscriptions"))}},{key:"updateUserSubscriptions",value:function(t,n){return this.http.put("notifications/".concat(t,"/subscriptions"),{selections:n})}}]),t}()).\u0275fac=function(t){return new(t||r)(g.bc(f.a))},r.\u0275prov=g.Nb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),h=o("twBr"),m=o("i2dy"),v=o("kmQS"),y=o("N2vX"),P=o("3Pt+"),w=o("bTqV"),k=o("bSwM");function O(t,n){if(1&t){var e=g.Yb();g.Xb(0,"div",11),g.Xb(1,"div",12),g.Mc(2),g.Wb(),g.Xb(3,"mat-checkbox",13),g.ec("change",(function(t){g.Bc(e);var i=n.$implicit,a=g.ic(3);return t?a.toggleAllRowsFor(i):null})),g.Wb(),g.Wb()}if(2&t){var i=n.$implicit,a=g.ic(3);g.Eb(2),g.Nc(i),g.Eb(1),g.qc("checked",a.allRowsSelectedFor(i))("indeterminate",a.selections[i].hasValue()&&!a.allRowsSelectedFor(i))("disabled","browser"===i&&!a.supportsBrowserNotifications)}}function C(t,n){if(1&t&&(g.Vb(0),g.Kc(1,O,4,4,"div",10),g.Ub()),2&t){var e=g.ic(2);g.Eb(1),g.qc("ngForOf",e.availableChannels)}}function x(t,n){if(1&t){var e=g.Yb();g.Xb(0,"div",11),g.Xb(1,"mat-checkbox",16),g.ec("click",(function(t){return g.Bc(e),t.stopPropagation()}))("change",(function(t){g.Bc(e);var i=n.$implicit,a=g.ic().$implicit,o=g.ic(2);return t?o.selections[i].toggle(a.notif_id):null})),g.Wb(),g.Wb()}if(2&t){var i=n.$implicit,a=g.ic().$implicit,o=g.ic(2);g.Eb(1),g.qc("checked",o.selections[i].isSelected(a.notif_id))("disabled","browser"===i&&!o.supportsBrowserNotifications)}}function M(t,n){if(1&t&&(g.Xb(0,"div",14),g.Xb(1,"div",15),g.Mc(2),g.Wb(),g.Kc(3,x,2,2,"div",10),g.Wb()),2&t){var e=n.$implicit,i=n.last,a=g.ic(2);g.Ib("no-border",i),g.Eb(2),g.Nc(e.name),g.Eb(1),g.qc("ngForOf",a.availableChannels)}}function _(t,n){if(1&t&&(g.Xb(0,"div",5),g.Xb(1,"div",6),g.Xb(2,"div",7),g.Mc(3),g.Wb(),g.Kc(4,C,2,1,"ng-container",8),g.Wb(),g.Kc(5,M,4,4,"div",9),g.Wb()),2&t){var e=n.$implicit,i=n.first;g.Eb(3),g.Nc(e.group_name),g.Eb(1),g.qc("ngIf",i),g.Eb(1),g.qc("ngForOf",e.subscriptions)}}var X,E,N=((X=function(){function n(t,i,a,o,r,c){e(this,n),this.route=t,this.api=i,this.currentUser=a,this.toast=o,this.cd=r,this.settings=c,this.loading$=new u.a(!1),this.supportsBrowserNotifications="Notification"in window,this.availableChannels=[],this.selections={},this.allNotifIds=[]}return a(n,[{key:"ngOnInit",value:function(){var t=this;this.route.data.subscribe((function(n){t.subscriptions=n.api.subscriptions,t.availableChannels=n.api.available_channels,t.allNotifIds=n.api.all_notif_ids,t.availableChannels.forEach((function(e){t.selections[e]=new d.c(!0,n.api.selections[e])}))})),"granted"!==Notification.permission&&this.bindToBrowserNotifSubscription()}},{key:"toggleAllRowsFor",value:function(n){var e;this.allRowsSelectedFor(n)?this.selections[n].clear():(e=this.selections[n]).select.apply(e,t(this.allNotifIds))}},{key:"allRowsSelectedFor",value:function(t){return this.selections[t].selected.length===this.allNotifIds.length}},{key:"saveSettings",value:function(){var t=this;this.loading$.next(!0);var n=this.getPayload();this.api.updateUserSubscriptions(this.currentUser.get("id"),n).pipe(Object(l.a)((function(){return t.loading$.next(!1)}))).subscribe((function(){t.toast.open("Notification settings updated.")}))}},{key:"getPayload",value:function(){var t=this,n={};return Object.keys(this.selections).forEach((function(e){n[e]=t.selections[e].selected})),n}},{key:"bindToBrowserNotifSubscription",value:function(){var t=this;this.selections.browser.changed.pipe(Object(b.a)(1)).subscribe((function(n){n.added.length&&!n.removed.length&&("denied"===Notification.permission?(t.toast.open("Notifications blocked. Please enable them for this site from browser settings."),t.selections.browser.clear(),t.cd.markForCheck()):Notification.requestPermission().then((function(n){"granted"!==n&&(t.selections.browser.clear(),t.cd.markForCheck())})))}))}}]),n}()).\u0275fac=function(t){return new(t||X)(g.Rb(s.a),g.Rb(p),g.Rb(h.a),g.Rb(m.b),g.Rb(g.i),g.Rb(v.a))},X.\u0275cmp=g.Lb({type:X,selectors:[["notification-subscriptions"]],decls:7,vars:5,consts:[[1,"box-shadow",3,"menuPosition"],[1,"be-container"],[1,"table","material-panel",3,"ngSubmit"],["class","setting-group",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent","trans","",1,"submit-button",3,"disabled"],[1,"setting-group"],[1,"row"],["trans","",1,"name-column","strong"],[4,"ngIf"],["class","row indent",3,"no-border",4,"ngFor","ngForOf"],["class","channel-column",4,"ngFor","ngForOf"],[1,"channel-column"],["trans","",1,"channel-name"],[3,"checked","indeterminate","disabled","change"],[1,"row","indent"],["trans","",1,"name-column"],[3,"checked","disabled","click","change"]],template:function(t,n){1&t&&(g.Sb(0,"material-navbar",0),g.Xb(1,"div",1),g.Xb(2,"form",2),g.ec("ngSubmit",(function(){return n.saveSettings()})),g.Kc(3,_,6,3,"div",3),g.Xb(4,"button",4),g.jc(5,"async"),g.Mc(6,"Save Settings"),g.Wb(),g.Wb(),g.Wb()),2&t&&(g.qc("menuPosition",n.settings.get("vebto.navbar.defaultPosition")),g.Eb(3),g.qc("ngForOf",n.subscriptions),g.Eb(1),g.qc("disabled",g.kc(5,3,n.loading$)))},directives:[y.a,P.K,P.v,P.w,c.s,w.b,c.t,k.a],pipes:[c.b],styles:["[_nghost-%COMP%]{display:block;background-color:var(--be-background-alternative);min-height:100vh}.be-container[_ngcontent-%COMP%]{padding-top:35px;padding-bottom:35px}.table[_ngcontent-%COMP%]{border-radius:4px}.setting-group[_ngcontent-%COMP%]{margin-bottom:10px}.row[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid var(--be-divider-default);padding:10px}.row.no-border[_ngcontent-%COMP%]{border-bottom:none}.row.indent[_ngcontent-%COMP%]{padding-left:20px}.name-column[_ngcontent-%COMP%]{flex:1 1 auto}.strong[_ngcontent-%COMP%]{font-weight:500;font-size:1.5rem;align-self:flex-end}.channel-name[_ngcontent-%COMP%]{margin-bottom:10px}.channel-column[_ngcontent-%COMP%]{width:75px;text-align:center;text-transform:capitalize}.submit-button[_ngcontent-%COMP%]{margin-top:15px}"],changeDetection:0}),X),R=o("JIr8"),W=o("5+tZ"),S=o("EY2u"),F=o("LRne"),$=((E=function(){function t(n,i,a){e(this,t),this.router=n,this.subscriptions=i,this.currentUser=a}return a(t,[{key:"resolve",value:function(t,n){var e=this;return this.subscriptions.getAll(+this.currentUser.get("id")).pipe(Object(R.a)((function(){return e.router.navigate(["/account/settings"]),S.a})),Object(W.a)((function(t){return t?Object(F.a)(t):(e.router.navigate(["/account/settings"]),S.a)})))}}]),t}()).\u0275fac=function(t){return new(t||E)(g.bc(s.d),g.bc(p),g.bc(h.a))},E.\u0275prov=g.Nb({token:E,factory:E.\u0275fac,providedIn:"root"}),E),j=o("f+iI"),q=o("OnlV"),I=o("WWJw"),A=o("Rd8u");function B(t,n){if(1&t){var e=g.Yb();g.Xb(0,"li"),g.Xb(1,"button",4),g.ec("click",(function(){g.Bc(e);var t=n.$implicit;return g.ic().selectPage(t)})),g.Mc(2),g.Wb(),g.Wb()}if(2&t){var i=n.$implicit,a=g.ic();g.Eb(1),g.Ib("active",a.currentPage===i),g.qc("disabled",a.disabled),g.Eb(1),g.Nc(i)}}var K,U,L,T,V,Y=((K=function(){function t(n){e(this,t),this.router=n,this.pageChanged=new g.p,this.disabled=!0}return a(t,[{key:"selectPage",value:function(t){this.currentPage!==t&&(this.currentPage=t,this.pageChanged.next(t),this.router.navigate([],{queryParams:{page:t},replaceUrl:!0}))}},{key:"nextPage",value:function(){var t=this.currentPage+1;this.selectPage(t<=this.numberOfPages?t:this.currentPage)}},{key:"prevPage",value:function(){var t=this.currentPage-1;this.selectPage(t>=1?t:this.currentPage)}},{key:"shouldHide",get:function(){return this.numberOfPages<2}},{key:"pagination",set:function(t){t&&(this.numberOfPages=t.last_page>10?10:t.last_page,this.numberOfPages>1&&(this.iterator=Array.from(Array(this.numberOfPages).keys()).map((function(t){return t+1})),this.currentPage=t.current_page))}}]),t}()).\u0275fac=function(t){return new(t||K)(g.Rb(s.d))},K.\u0275cmp=g.Lb({type:K,selectors:[["pagination-widget"]],hostVars:2,hostBindings:function(t,n){2&t&&g.Ib("hidden",n.shouldHide)},inputs:{disabled:"disabled",pagination:"pagination"},outputs:{pageChanged:"pageChanged"},decls:8,vars:3,consts:[[1,"page-numbers"],["type","button","mat-button","","trans","",1,"prev",3,"disabled","click"],[4,"ngFor","ngForOf"],["type","button","mat-button","","trans","",1,"next",3,"disabled","click"],["type","button","mat-flat-button","","color","gray",1,"page-number-button",3,"disabled","click"]],template:function(t,n){1&t&&(g.Xb(0,"ul",0),g.Xb(1,"li"),g.Xb(2,"button",1),g.ec("click",(function(){return n.prevPage()})),g.Mc(3,"Previous"),g.Wb(),g.Wb(),g.Kc(4,B,3,4,"li",2),g.Xb(5,"li"),g.Xb(6,"button",3),g.ec("click",(function(){return n.nextPage()})),g.Mc(7,"Next"),g.Wb(),g.Wb(),g.Wb()),2&t&&(g.Eb(2),g.qc("disabled",n.disabled),g.Eb(2),g.qc("ngForOf",n.iterator),g.Eb(2),g.qc("disabled",n.disabled))},directives:[w.b,A.a,c.s],styles:["[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;width:100%}li[_ngcontent-%COMP%]{margin:0 3px 6px}.page-number-button[_ngcontent-%COMP%]{width:40px;height:40px;min-width:40px;line-height:40px;padding:0}.active[_ngcontent-%COMP%]{background-color:var(--be-accent-default);color:var(--be-accent-contrast)}.next[_ngcontent-%COMP%], .prev[_ngcontent-%COMP%]{color:var(--be-accent-default)}"],changeDetection:0}),K),J=[{path:"",component:(U=function(){function t(n,i,a,o){e(this,t),this.settings=n,this.notifications=i,this.breakpoints=a,this.route=o,this.pagination$=new u.a(null)}return a(t,[{key:"ngOnInit",value:function(){this.loadPage(this.route.snapshot.queryParams.page||1)}},{key:"loadPage",value:function(t){var n=this;this.notifications.load({page:t,perPage:25}).subscribe((function(t){n.pagination$.next(t.pagination)}))}},{key:"markAsRead",value:function(t){this.pagination$.value.data.find((function(n){return n.id===t.id})).read_at=t.read_at}}]),t}(),U.\u0275fac=function(t){return new(t||U)(g.Rb(v.a),g.Rb(j.a),g.Rb(q.a),g.Rb(s.a))},U.\u0275cmp=g.Lb({type:U,selectors:[["notification-page"]],decls:8,vars:13,consts:[[3,"menuPosition"],[1,"be-container"],[3,"notifications","compact","markedAsRead"],[3,"pagination","disabled","pageChanged"]],template:function(t,n){if(1&t&&(g.Sb(0,"material-navbar",0),g.Xb(1,"div",1),g.Xb(2,"notification-list",2),g.ec("markedAsRead",(function(t){return n.markAsRead(t)})),g.jc(3,"async"),g.jc(4,"async"),g.Wb(),g.Xb(5,"pagination-widget",3),g.ec("pageChanged",(function(t){return n.loadPage(t)})),g.jc(6,"async"),g.jc(7,"async"),g.Wb(),g.Wb()),2&t){var e,i=null==(e=g.kc(3,5,n.pagination$))?null:e.data;g.qc("menuPosition",n.settings.get("vebto.navbar.defaultPosition")),g.Eb(2),g.qc("notifications",i)("compact",g.kc(4,7,n.breakpoints.isMobile$)),g.Eb(3),g.qc("pagination",g.kc(6,9,n.pagination$))("disabled",g.kc(7,11,n.notifications.loading$))}},directives:[y.a,I.a,Y],pipes:[c.b],styles:["[_nghost-%COMP%]{display:block;min-height:100vh;background-color:var(--be-background-alternative)}.be-container[_ngcontent-%COMP%]{padding-top:25px;padding-bottom:25px}pagination-widget[_ngcontent-%COMP%]{margin-top:35px}"],changeDetection:0}),U)},{path:"settings",component:N,resolve:{api:$},data:{permissions:["notification.subscribe"]}}],D=((L=function t(){e(this,t)}).\u0275mod=g.Pb({type:L}),L.\u0275inj=g.Ob({factory:function(t){return new(t||L)},imports:[[s.h.forChild(J)],s.h]}),L),z=o("MKyN"),H=o("CXWK"),Q=o("gFpt"),Z=o("6rvT"),G=((V=function t(){e(this,t)}).\u0275mod=g.Pb({type:V}),V.\u0275inj=g.Ob({factory:function(t){return new(t||V)},imports:[[c.c,w.c,Z.a]]}),V),tt=((T=function t(){e(this,t)}).\u0275mod=g.Pb({type:T}),T.\u0275inj=g.Ob({factory:function(t){return new(t||T)},imports:[[c.c,P.o,P.E,D,Q.a,z.a,H.a,G,k.b,w.c]]}),T)}}])}();
//# sourceMappingURL=13-es5.5bb1743bb08beae79af6.js.map
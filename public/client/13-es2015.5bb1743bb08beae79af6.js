(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{cPR9:function(t,n,e){"use strict";e.r(n),e.d(n,"NotificationsModule",(function(){return L}));var i=e("ofXK"),s=e("tyNb"),o=e("2Vo4"),a=e("nYR2"),c=e("3E0/"),r=e("0EQZ"),l=e("fXoL"),b=e("LRXf");let d=(()=>{class t{constructor(t){this.http=t}getAll(t){return this.http.get(`notifications/${t}/subscriptions`)}updateUserSubscriptions(t,n){return this.http.put(`notifications/${t}/subscriptions`,{selections:n})}}return t.\u0275fac=function(n){return new(n||t)(l.bc(b.a))},t.\u0275prov=l.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=e("twBr"),u=e("i2dy"),p=e("kmQS"),h=e("N2vX"),f=e("3Pt+"),m=e("bTqV"),v=e("bSwM");function P(t,n){if(1&t){const t=l.Yb();l.Xb(0,"div",11),l.Xb(1,"div",12),l.Mc(2),l.Wb(),l.Xb(3,"mat-checkbox",13),l.ec("change",(function(e){l.Bc(t);const i=n.$implicit,s=l.ic(3);return e?s.toggleAllRowsFor(i):null})),l.Wb(),l.Wb()}if(2&t){const t=n.$implicit,e=l.ic(3);l.Eb(2),l.Nc(t),l.Eb(1),l.qc("checked",e.allRowsSelectedFor(t))("indeterminate",e.selections[t].hasValue()&&!e.allRowsSelectedFor(t))("disabled","browser"===t&&!e.supportsBrowserNotifications)}}function w(t,n){if(1&t&&(l.Vb(0),l.Kc(1,P,4,4,"div",10),l.Ub()),2&t){const t=l.ic(2);l.Eb(1),l.qc("ngForOf",t.availableChannels)}}function O(t,n){if(1&t){const t=l.Yb();l.Xb(0,"div",11),l.Xb(1,"mat-checkbox",16),l.ec("click",(function(n){return l.Bc(t),n.stopPropagation()}))("change",(function(e){l.Bc(t);const i=n.$implicit,s=l.ic().$implicit,o=l.ic(2);return e?o.selections[i].toggle(s.notif_id):null})),l.Wb(),l.Wb()}if(2&t){const t=n.$implicit,e=l.ic().$implicit,i=l.ic(2);l.Eb(1),l.qc("checked",i.selections[t].isSelected(e.notif_id))("disabled","browser"===t&&!i.supportsBrowserNotifications)}}function k(t,n){if(1&t&&(l.Xb(0,"div",14),l.Xb(1,"div",15),l.Mc(2),l.Wb(),l.Kc(3,O,2,2,"div",10),l.Wb()),2&t){const t=n.$implicit,e=n.last,i=l.ic(2);l.Ib("no-border",e),l.Eb(2),l.Nc(t.name),l.Eb(1),l.qc("ngForOf",i.availableChannels)}}function y(t,n){if(1&t&&(l.Xb(0,"div",5),l.Xb(1,"div",6),l.Xb(2,"div",7),l.Mc(3),l.Wb(),l.Kc(4,w,2,1,"ng-container",8),l.Wb(),l.Kc(5,k,4,4,"div",9),l.Wb()),2&t){const t=n.$implicit,e=n.first;l.Eb(3),l.Nc(t.group_name),l.Eb(1),l.qc("ngIf",e),l.Eb(1),l.qc("ngForOf",t.subscriptions)}}let x=(()=>{class t{constructor(t,n,e,i,s,a){this.route=t,this.api=n,this.currentUser=e,this.toast=i,this.cd=s,this.settings=a,this.loading$=new o.a(!1),this.supportsBrowserNotifications="Notification"in window,this.availableChannels=[],this.selections={},this.allNotifIds=[]}ngOnInit(){this.route.data.subscribe(t=>{this.subscriptions=t.api.subscriptions,this.availableChannels=t.api.available_channels,this.allNotifIds=t.api.all_notif_ids,this.availableChannels.forEach(n=>{this.selections[n]=new r.c(!0,t.api.selections[n])})}),"granted"!==Notification.permission&&this.bindToBrowserNotifSubscription()}toggleAllRowsFor(t){this.allRowsSelectedFor(t)?this.selections[t].clear():this.selections[t].select(...this.allNotifIds)}allRowsSelectedFor(t){return this.selections[t].selected.length===this.allNotifIds.length}saveSettings(){this.loading$.next(!0);const t=this.getPayload();this.api.updateUserSubscriptions(this.currentUser.get("id"),t).pipe(Object(a.a)(()=>this.loading$.next(!1))).subscribe(()=>{this.toast.open("Notification settings updated.")})}getPayload(){const t={};return Object.keys(this.selections).forEach(n=>{t[n]=this.selections[n].selected}),t}bindToBrowserNotifSubscription(){this.selections.browser.changed.pipe(Object(c.a)(1)).subscribe(t=>{t.added.length&&!t.removed.length&&("denied"===Notification.permission?(this.toast.open("Notifications blocked. Please enable them for this site from browser settings."),this.selections.browser.clear(),this.cd.markForCheck()):Notification.requestPermission().then(t=>{"granted"!==t&&(this.selections.browser.clear(),this.cd.markForCheck())}))})}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(s.a),l.Rb(d),l.Rb(g.a),l.Rb(u.b),l.Rb(l.i),l.Rb(p.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["notification-subscriptions"]],decls:7,vars:5,consts:[[1,"box-shadow",3,"menuPosition"],[1,"be-container"],[1,"table","material-panel",3,"ngSubmit"],["class","setting-group",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent","trans","",1,"submit-button",3,"disabled"],[1,"setting-group"],[1,"row"],["trans","",1,"name-column","strong"],[4,"ngIf"],["class","row indent",3,"no-border",4,"ngFor","ngForOf"],["class","channel-column",4,"ngFor","ngForOf"],[1,"channel-column"],["trans","",1,"channel-name"],[3,"checked","indeterminate","disabled","change"],[1,"row","indent"],["trans","",1,"name-column"],[3,"checked","disabled","click","change"]],template:function(t,n){1&t&&(l.Sb(0,"material-navbar",0),l.Xb(1,"div",1),l.Xb(2,"form",2),l.ec("ngSubmit",(function(){return n.saveSettings()})),l.Kc(3,y,6,3,"div",3),l.Xb(4,"button",4),l.jc(5,"async"),l.Mc(6,"Save Settings"),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.qc("menuPosition",n.settings.get("vebto.navbar.defaultPosition")),l.Eb(3),l.qc("ngForOf",n.subscriptions),l.Eb(1),l.qc("disabled",l.kc(5,3,n.loading$)))},directives:[h.a,f.K,f.v,f.w,i.s,m.b,i.t,v.a],pipes:[i.b],styles:["[_nghost-%COMP%]{display:block;background-color:var(--be-background-alternative);min-height:100vh}.be-container[_ngcontent-%COMP%]{padding-top:35px;padding-bottom:35px}.table[_ngcontent-%COMP%]{border-radius:4px}.setting-group[_ngcontent-%COMP%]{margin-bottom:10px}.row[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid var(--be-divider-default);padding:10px}.row.no-border[_ngcontent-%COMP%]{border-bottom:none}.row.indent[_ngcontent-%COMP%]{padding-left:20px}.name-column[_ngcontent-%COMP%]{flex:1 1 auto}.strong[_ngcontent-%COMP%]{font-weight:500;font-size:1.5rem;align-self:flex-end}.channel-name[_ngcontent-%COMP%]{margin-bottom:10px}.channel-column[_ngcontent-%COMP%]{width:75px;text-align:center;text-transform:capitalize}.submit-button[_ngcontent-%COMP%]{margin-top:15px}"],changeDetection:0}),t})();var C=e("JIr8"),M=e("5+tZ"),_=e("EY2u"),X=e("LRne");let N=(()=>{class t{constructor(t,n,e){this.router=t,this.subscriptions=n,this.currentUser=e}resolve(t,n){return this.subscriptions.getAll(+this.currentUser.get("id")).pipe(Object(C.a)(()=>(this.router.navigate(["/account/settings"]),_.a)),Object(M.a)(t=>t?Object(X.a)(t):(this.router.navigate(["/account/settings"]),_.a)))}}return t.\u0275fac=function(n){return new(n||t)(l.bc(s.d),l.bc(d),l.bc(g.a))},t.\u0275prov=l.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var R=e("f+iI"),W=e("OnlV"),E=e("WWJw"),$=e("Rd8u");function F(t,n){if(1&t){const t=l.Yb();l.Xb(0,"li"),l.Xb(1,"button",4),l.ec("click",(function(){l.Bc(t);const e=n.$implicit;return l.ic().selectPage(e)})),l.Mc(2),l.Wb(),l.Wb()}if(2&t){const t=n.$implicit,e=l.ic();l.Eb(1),l.Ib("active",e.currentPage===t),l.qc("disabled",e.disabled),l.Eb(1),l.Nc(t)}}let q=(()=>{class t{constructor(t){this.router=t,this.pageChanged=new l.p,this.disabled=!0}get shouldHide(){return this.numberOfPages<2}set pagination(t){t&&(this.numberOfPages=t.last_page>10?10:t.last_page,this.numberOfPages>1&&(this.iterator=Array.from(Array(this.numberOfPages).keys()).map(t=>t+1),this.currentPage=t.current_page))}selectPage(t){this.currentPage!==t&&(this.currentPage=t,this.pageChanged.next(t),this.router.navigate([],{queryParams:{page:t},replaceUrl:!0}))}nextPage(){const t=this.currentPage+1;this.selectPage(t<=this.numberOfPages?t:this.currentPage)}prevPage(){const t=this.currentPage-1;this.selectPage(t>=1?t:this.currentPage)}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(s.d))},t.\u0275cmp=l.Lb({type:t,selectors:[["pagination-widget"]],hostVars:2,hostBindings:function(t,n){2&t&&l.Ib("hidden",n.shouldHide)},inputs:{disabled:"disabled",pagination:"pagination"},outputs:{pageChanged:"pageChanged"},decls:8,vars:3,consts:[[1,"page-numbers"],["type","button","mat-button","","trans","",1,"prev",3,"disabled","click"],[4,"ngFor","ngForOf"],["type","button","mat-button","","trans","",1,"next",3,"disabled","click"],["type","button","mat-flat-button","","color","gray",1,"page-number-button",3,"disabled","click"]],template:function(t,n){1&t&&(l.Xb(0,"ul",0),l.Xb(1,"li"),l.Xb(2,"button",1),l.ec("click",(function(){return n.prevPage()})),l.Mc(3,"Previous"),l.Wb(),l.Wb(),l.Kc(4,F,3,4,"li",2),l.Xb(5,"li"),l.Xb(6,"button",3),l.ec("click",(function(){return n.nextPage()})),l.Mc(7,"Next"),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.Eb(2),l.qc("disabled",n.disabled),l.Eb(2),l.qc("ngForOf",n.iterator),l.Eb(2),l.qc("disabled",n.disabled))},directives:[m.b,$.a,i.s],styles:["[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;width:100%}li[_ngcontent-%COMP%]{margin:0 3px 6px}.page-number-button[_ngcontent-%COMP%]{width:40px;height:40px;min-width:40px;line-height:40px;padding:0}.active[_ngcontent-%COMP%]{background-color:var(--be-accent-default);color:var(--be-accent-contrast)}.next[_ngcontent-%COMP%], .prev[_ngcontent-%COMP%]{color:var(--be-accent-default)}"],changeDetection:0}),t})();const S=[{path:"",component:(()=>{class t{constructor(t,n,e,i){this.settings=t,this.notifications=n,this.breakpoints=e,this.route=i,this.pagination$=new o.a(null)}ngOnInit(){this.loadPage(this.route.snapshot.queryParams.page||1)}loadPage(t){this.notifications.load({page:t,perPage:25}).subscribe(t=>{this.pagination$.next(t.pagination)})}markAsRead(t){this.pagination$.value.data.find(n=>n.id===t.id).read_at=t.read_at}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(p.a),l.Rb(R.a),l.Rb(W.a),l.Rb(s.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["notification-page"]],decls:8,vars:13,consts:[[3,"menuPosition"],[1,"be-container"],[3,"notifications","compact","markedAsRead"],[3,"pagination","disabled","pageChanged"]],template:function(t,n){if(1&t&&(l.Sb(0,"material-navbar",0),l.Xb(1,"div",1),l.Xb(2,"notification-list",2),l.ec("markedAsRead",(function(t){return n.markAsRead(t)})),l.jc(3,"async"),l.jc(4,"async"),l.Wb(),l.Xb(5,"pagination-widget",3),l.ec("pageChanged",(function(t){return n.loadPage(t)})),l.jc(6,"async"),l.jc(7,"async"),l.Wb(),l.Wb()),2&t){var e;const t=null==(e=l.kc(3,5,n.pagination$))?null:e.data;l.qc("menuPosition",n.settings.get("vebto.navbar.defaultPosition")),l.Eb(2),l.qc("notifications",t)("compact",l.kc(4,7,n.breakpoints.isMobile$)),l.Eb(3),l.qc("pagination",l.kc(6,9,n.pagination$))("disabled",l.kc(7,11,n.notifications.loading$))}},directives:[h.a,E.a,q],pipes:[i.b],styles:["[_nghost-%COMP%]{display:block;min-height:100vh;background-color:var(--be-background-alternative)}.be-container[_ngcontent-%COMP%]{padding-top:25px;padding-bottom:25px}pagination-widget[_ngcontent-%COMP%]{margin-top:35px}"],changeDetection:0}),t})()},{path:"settings",component:x,resolve:{api:N},data:{permissions:["notification.subscribe"]}}];let j=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(n){return new(n||t)},imports:[[s.h.forChild(S)],s.h]}),t})();var I=e("MKyN"),B=e("CXWK"),A=e("gFpt"),K=e("6rvT");let U=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(n){return new(n||t)},imports:[[i.c,m.c,K.a]]}),t})(),L=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(n){return new(n||t)},imports:[[i.c,f.o,f.E,j,A.a,I.a,B.a,U,v.b,m.c]]}),t})()}}]);
//# sourceMappingURL=13-es2015.5bb1743bb08beae79af6.js.map
import{A as Oe,B as Se,C as _e,D as De,E as Re,F as ke,a as ae,c as se,d as ce,e as de,f as le,g as pe,h as S,i as me,j as ue,k as ge,l as _,m as he,n as fe,o as D,p as be,r as ye,s as ve,t as we,u as w,v as Ce,w as R,x as xe,y as Me,z as Pe}from"./chunk-DHFMPLAG.js";import{$ as u,A as N,Ab as p,Ea as q,Ha as $,J as z,Ka as f,La as g,Lb as ne,Ma as J,Oa as X,Q as U,Qa as Y,R as H,Rb as B,S as V,Sa as Z,T as F,Ta as K,V as M,Xb as ie,Ya as C,bb as O,cb as Q,da as d,db as ee,dc as h,fb as x,g as j,ha as L,ib as te,k as T,la as G,lb as a,mb as s,nb as l,pa as W,qb as oe,va as P,wb as c,yb as re}from"./chunk-6B2H27QM.js";var Ie=(()=>{let e=class e{constructor(){this.githubRepoUrl=be,this.version=ve}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:13,vars:2,consts:[[1,"container"],["id","copyright"],[1,"flex","gap-1","items-center"],[1,"text-red-400"],["target","_blank",1,"underline",3,"href"],[1,"bg-gray-200","text-xs","font-mono","px-2","py-0.5","rounded-2xl","hover:bg-blue-100"]],template:function(t,i){t&1&&(a(0,"footer")(1,"div",0)(2,"div",1),c(3,"\xA9 Bytebury LLC. All Rights Reserved."),s(),a(4,"div",2),c(5," Developed with "),a(6,"span",3),c(7,"\u2665"),s(),c(8," on "),a(9,"a",4),c(10," GitHub "),s(),a(11,"div",5),c(12),s()()()()),t&2&&(f(9),x("href",i.githubRepoUrl,$),f(3),re(" v",i.version," "))},dependencies:[h],styles:["[_nghost-%COMP%]{margin-top:auto}footer[_ngcontent-%COMP%]{border-top-width:1px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between}@media (min-width: 640px){footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:row;align-items:baseline}}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;padding-top:.5rem;padding-bottom:.5rem}"],changeDetection:0});let o=e;return o})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-navbar"]],standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"container"],["id","Navbar_Branding"],["routerLink","/"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"section",1)(2,"h1")(3,"a",2),c(4,"Retroboard"),s()()()())},dependencies:[h,he],styles:["[_nghost-%COMP%]{position:fixed;top:0;z-index:40;height:3rem;width:100%;border-bottom-width:1px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   h1[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem;font-weight:800}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%]{margin-left:-.75rem;border-radius:1rem;padding:.25rem .75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}"],changeDetection:0});let o=e;return o})();var Be=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:4,vars:0,template:function(t,i){t&1&&(l(0,"app-navbar"),a(1,"main"),l(2,"router-outlet"),s(),l(3,"app-footer"))},dependencies:[ge,Fe,Ie]});let o=e;return o})();var He="@",Ve=(()=>{let e=class e{constructor(r,t,i,m,v){this.doc=r,this.delegate=t,this.zone=i,this.animationType=m,this.moduleImpl=v,this._rendererFactoryPromise=null,this.scheduler=u(X,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-O3JDU54W.js").then(t=>t)).catch(t=>{throw new F(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:i})=>{this._engine=t(this.animationType,this.doc);let m=new i(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(r,t){let i=this.delegate.createRenderer(r,t);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let m=new A(i);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(v=>{let b=v.createRenderer(r,t);m.use(b),this.scheduler?.notify(9)}).catch(v=>{m.use(i)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(t){J()},e.\u0275prov=M({token:e,factory:e.\u0275fac});let o=e;return o})(),A=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,r,t){this.delegate.insertBefore(e,n,r,t)}removeChild(e,n,r){this.delegate.removeChild(e,n,r)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,r,t){this.delegate.setAttribute(e,n,r,t)}removeAttribute(e,n,r){this.delegate.removeAttribute(e,n,r)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,r,t){this.delegate.setStyle(e,n,r,t)}removeStyle(e,n,r){this.delegate.removeStyle(e,n,r)}setProperty(e,n,r){this.shouldReplay(n)&&this.replay.push(t=>t.setProperty(e,n,r)),this.delegate.setProperty(e,n,r)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,r){return this.shouldReplay(n)&&this.replay.push(t=>t.listen(e,n,r)),this.delegate.listen(e,n,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(He)}};function Ae(o="animations"){return Z("NgAsyncAnimations"),L([{provide:Y,useFactory:(e,n,r)=>new Ve(e,n,r,o),deps:[ie,le,K]},{provide:q,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}function E(o){o||(G(E),o=u(P));let e=new j(n=>o.onDestroy(n.next.bind(n)));return n=>n.pipe(H(e))}var k=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-spinner"]],standalone:!0,features:[p],decls:3,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","aria-label","loading...",1,"animate-spin","h-6","w-6"],["cx","12","cy","12","r","10","stroke","currentColor","stroke-width","4",1,"opacity-25"],["fill","currentColor","d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",1,"opacity-75"]],template:function(t,i){t&1&&(W(),a(0,"svg",0),l(1,"circle",1)(2,"path",2),s())},dependencies:[h],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0});let o=e;return o})();var I=(()=>{let e=class e{constructor(){this.board=new T(void 0),this.board$=this.board.asObservable(),this.opened=C(!1)}connect(r){this.ws=new WebSocket(`${ye}/${r}`),this.ws.onopen=t=>{console.log("websocket connection opened",t),this.opened.set(!0)},this.ws.onmessage=t=>{this.board.next(t)},this.ws.onclose=t=>{console.log("websocket connection closed",t),this.opened.set(!1)},this.ws.onerror=t=>{console.error("websocker error",t)}}disconnect(){this.ws?.close()}sendMessage(r){this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(r):console.error("WebSocket is not open. ReadyState:",this.ws?.readyState)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var $e=()=>[import("./chunk-7IXT274K.js").then(o=>o.BoardComponent)];function Je(o,e){o&1&&l(0,"app-board")}function Xe(o,e){o&1&&l(0,"app-spinner")}var Ee=(()=>{let e=class e{constructor(r,t,i,m,v){this.title=r,this.boardService=t,this.activatedRoute=i,this.websocketService=m,this.destroy=v,this.loading=B(()=>!this.boardService.board()),this.activatedRoute.paramMap.pipe(U(b=>this.boardService.get(b.get("id")??""))).subscribe({next:b=>{this.boardService.board.set(b),this.websocketService.connect(b.id),this.title.setTitle(`Retroboard | ${b.name}`)},error:console.error})}ngOnInit(){this.websocketService.board$.pipe(E(this.destroy),N(Boolean)).subscribe(({data:r})=>{this.boardService.board.set(JSON.parse(r))})}ngOnDestroy(){this.websocketService.disconnect(),this.boardService.board.set(void 0)}};e.\u0275fac=function(t){return new(t||e)(g(S),g(w),g(ue),g(I),g(P))},e.\u0275cmp=d({type:e,selectors:[["app-board-page"]],standalone:!0,features:[p],decls:4,vars:1,template:function(t,i){t&1&&(O(0,Je,1,0)(1,Xe,1,0),Q(2,0,$e,null,1)),t&2&&(f(2),ee(!i.loading()))},dependencies:[h,D,k],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-grow:1;flex-direction:column;--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}"],changeDetection:0});let o=e;return o})();function Ye(o,e){o&1&&l(0,"app-spinner")}function Ze(o,e){o&1&&c(0," Create Board ")}var je=(()=>{let e=class e{get boardName(){return this.createBoardForm.get("name")?.value??""}constructor(r,t,i){this.title=r,this.boardService=t,this.router=i,this.createBoardForm=new Pe({name:new Oe("",[R.required,R.minLength(3),R.maxLength(100)])}),this.creatingBoard=C(!1),this.title.setTitle("Retroboard | Your Online Retroboard")}createBoard(){this.creatingBoard.set(!0),this.boardService.create(this.boardName).pipe(z(()=>this.creatingBoard.set(!1))).subscribe({next:r=>{this.boardService.board.set(r),this.router.navigate(["boards",r.id])},error:console.error})}};e.\u0275fac=function(t){return new(t||e)(g(S),g(w),g(_))},e.\u0275cmp=d({type:e,selectors:[["app-home-page"]],standalone:!0,features:[p],decls:22,vars:3,consts:[[1,"container"],[1,"card"],[1,"text-gray-500","text-sm"],[3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-4"],[1,"flex","items-center"],["formControlName","name","type","text","autocomplete","off","placeholder","Name for your board","maxlength","100","autofocus",""],["type","submit",3,"disabled"],[1,"disclaimer"],["href","#"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"section")(3,"h1"),c(4,"Create a Retroboard"),s(),a(5,"p",2),c(6," Create a Retroboard for free and without an account. Just enter the name of the board. Then, share the link with your teammates. "),s()(),a(7,"form",3),oe("ngSubmit",function(){return i.createBoard()}),a(8,"div",4)(9,"div",5),l(10,"input",6),a(11,"button",7),O(12,Ye,1,0,"app-spinner")(13,Ze,1,0),s()()()(),a(14,"div",8),c(15," By creating a board you accept our "),a(16,"a",9),c(17,"privacy policy"),s(),c(18," and "),a(19,"a",9),c(20,"terms"),s(),c(21,". "),s()()()),t&2&&(f(7),x("formGroup",i.createBoardForm),f(4),x("disabled",i.createBoardForm.invalid||i.createBoardForm.disabled),f(),te(i.creatingBoard()?12:13))},dependencies:[h,ke,Se,Ce,xe,Me,Re,_e,De,k,D],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column;--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:column;align-items:flex-start}@media (min-width: 640px){[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:0;justify-content:center}}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:100%;flex-grow:1}@media (min-width: 640px){[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{align-items:center}}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));width:100%;border-radius:1rem;border-width:1px;padding:1rem;--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{max-width:500px}}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{text-align:center;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity));text-decoration-line:underline}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{min-width:.75rem;flex-grow:1;border-top-left-radius:1rem;border-bottom-left-radius:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity));padding:.375rem .75rem;border-right-width:0px;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;border-top-right-radius:1rem;border-bottom-right-radius:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(30 58 138 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(30 58 138 / var(--tw-bg-opacity));font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));flex-shrink:0;cursor:pointer;padding:.375rem .75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(23 37 84 / var(--tw-bg-opacity))}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-color: rgb(30 58 138 / .35) }[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:disabled{cursor:not-allowed;--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}"],changeDetection:0});let o=e;return o})();var Te=[{path:"",pathMatch:"full",component:je},{path:"boards/:id",component:Ee},{path:"**",redirectTo:""}];function Ne(o,e){let n=u(we).whoAmI(),r=o.clone({headers:o.headers.append("X-retro-audit-id",n)});return e(r)}function ze(o,e){let n=u(w),r=u(I),t=u(_);return e(o).pipe(V(i=>{i.type===ae.Response&&n.board()?.id&&Ke(t.url)&&r.opened()&&r.sendMessage(Qe(t.url))}))}function Ke(o){return o.includes("/boards/")}function Qe(o){return o.split("/").at(-1)??""}var Ue={providers:[ne({eventCoalescing:!0}),se(de(),ce([Ne,ze])),fe(Te),me(),Ae()]};pe(Be,Ue).catch(o=>console.error(o));

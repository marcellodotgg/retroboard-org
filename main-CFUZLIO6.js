import{A as Me,B as Pe,C as Oe,D as _e,E as Se,F as De,a as ie,c as ae,d as se,e as ce,f as de,g as le,h as P,i as pe,j as me,k as ue,l as O,m as ge,n as he,o as _,p as fe,r as be,s as ye,t as v,u as S,v as ve,w as D,x as we,y as Ce,z as xe}from"./chunk-NGPVHDZO.js";import{$ as u,A as j,Ab as p,Ea as q,Ha as W,J as T,Ka as f,La as g,Lb as re,Ma as $,Oa as J,Q as N,Qa as X,R as z,Rb as I,S as H,Sa as Y,T as k,Ta as Z,V as U,Xb as ne,Ya as F,bb as M,cb as K,da as d,db as Q,dc as h,fb as C,g as E,ha as V,ib as ee,la as G,lb as a,mb as s,nb as l,pa as L,qb as te,va as x,wb as c,yb as oe}from"./chunk-6B2H27QM.js";var Re=(()=>{let e=class e{constructor(){this.githubRepoUrl=fe,this.version=be}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:13,vars:2,consts:[[1,"container"],["id","copyright"],[1,"flex","gap-1","items-center"],[1,"text-red-400"],["target","_blank",1,"underline",3,"href"],[1,"bg-gray-200","text-xs","font-mono","px-2","py-0.5","rounded-2xl","hover:bg-blue-100"]],template:function(o,i){o&1&&(a(0,"footer")(1,"div",0)(2,"div",1),c(3,"\xA9 Bytebury LLC. All Rights Reserved."),s(),a(4,"div",2),c(5," Developed with "),a(6,"span",3),c(7,"\u2665"),s(),c(8," on "),a(9,"a",4),c(10," GitHub "),s(),a(11,"div",5),c(12),s()()()()),o&2&&(f(9),C("href",i.githubRepoUrl,W),f(3),oe(" v",i.version," "))},dependencies:[h],styles:["[_nghost-%COMP%]{margin-top:auto}footer[_ngcontent-%COMP%]{border-top-width:1px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between}@media (min-width: 640px){footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:row;align-items:baseline}}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;padding-top:.5rem;padding-bottom:.5rem}"],changeDetection:0});let t=e;return t})();var ke=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-navbar"]],standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"container"],["id","Navbar_Branding"],["routerLink","/"]],template:function(o,i){o&1&&(a(0,"div",0)(1,"section",1)(2,"h1")(3,"a",2),c(4,"Retroboard"),s()()()())},dependencies:[h,ge],styles:["[_nghost-%COMP%]{position:fixed;top:0;z-index:40;height:3rem;width:100%;border-bottom-width:1px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   h1[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem;font-weight:800}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%]{margin-left:-.75rem;border-radius:1rem;padding:.25rem .75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}"],changeDetection:0});let t=e;return t})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:4,vars:0,template:function(o,i){o&1&&(l(0,"app-navbar"),a(1,"main"),l(2,"router-outlet"),s(),l(3,"app-footer"))},dependencies:[ue,ke,Re]});let t=e;return t})();var ze="@",He=(()=>{let e=class e{constructor(r,o,i,m,y){this.doc=r,this.delegate=o,this.zone=i,this.animationType=m,this.moduleImpl=y,this._rendererFactoryPromise=null,this.scheduler=u(J,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-O3JDU54W.js").then(o=>o)).catch(o=>{throw new k(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let m=new i(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(r,o){let i=this.delegate.createRenderer(r,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let m=new A(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(y=>{let b=y.createRenderer(r,o);m.use(b),this.scheduler?.notify(9)}).catch(y=>{m.use(i)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){$()},e.\u0275prov=U({token:e,factory:e.\u0275fac});let t=e;return t})(),A=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,r,o){this.delegate.insertBefore(e,n,r,o)}removeChild(e,n,r){this.delegate.removeChild(e,n,r)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,r,o){this.delegate.setAttribute(e,n,r,o)}removeAttribute(e,n,r){this.delegate.removeAttribute(e,n,r)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,r,o){this.delegate.setStyle(e,n,r,o)}removeStyle(e,n,r){this.delegate.removeStyle(e,n,r)}setProperty(e,n,r){this.shouldReplay(n)&&this.replay.push(o=>o.setProperty(e,n,r)),this.delegate.setProperty(e,n,r)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,r){return this.shouldReplay(n)&&this.replay.push(o=>o.listen(e,n,r)),this.delegate.listen(e,n,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(ze)}};function Ie(t="animations"){return Y("NgAsyncAnimations"),V([{provide:X,useFactory:(e,n,r)=>new He(e,n,r,t),deps:[ne,de,Z]},{provide:q,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}function B(t){t||(G(B),t=u(x));let e=new E(n=>t.onDestroy(n.next.bind(n)));return n=>n.pipe(z(e))}var R=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-spinner"]],standalone:!0,features:[p],decls:3,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","aria-label","loading...",1,"animate-spin","h-6","w-6"],["cx","12","cy","12","r","10","stroke","currentColor","stroke-width","4",1,"opacity-25"],["fill","currentColor","d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",1,"opacity-75"]],template:function(o,i){o&1&&(L(),a(0,"svg",0),l(1,"circle",1)(2,"path",2),s())},dependencies:[h],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0});let t=e;return t})();var Le=()=>[import("./chunk-4S3W3YM7.js").then(t=>t.BoardComponent)];function qe(t,e){t&1&&l(0,"app-board")}function We(t,e){t&1&&l(0,"app-spinner")}var Ae=(()=>{let e=class e{constructor(r,o,i,m,y){this.title=r,this.boardService=o,this.activatedRoute=i,this.websocketService=m,this.destroy=y,this.loading=I(()=>!this.boardService.board()),this.activatedRoute.paramMap.pipe(N(b=>this.boardService.get(b.get("id")??""))).subscribe({next:b=>{this.boardService.board.set(b),this.websocketService.connect(b.id),this.title.setTitle(`Retroboard | ${b.name}`)},error:console.error})}ngOnInit(){this.websocketService.board$.pipe(B(this.destroy),j(Boolean)).subscribe(({data:r})=>{this.boardService.board.set(JSON.parse(r))})}ngOnDestroy(){this.websocketService.disconnect(),this.boardService.board.set(void 0)}};e.\u0275fac=function(o){return new(o||e)(g(P),g(v),g(me),g(S),g(x))},e.\u0275cmp=d({type:e,selectors:[["app-board-page"]],standalone:!0,features:[p],decls:4,vars:1,template:function(o,i){o&1&&(M(0,qe,1,0)(1,We,1,0),K(2,0,Le,null,1)),o&2&&(f(2),Q(!i.loading()))},dependencies:[h,_,R],styles:["[_nghost-%COMP%]{display:flex;height:100%;flex-grow:1;flex-direction:column;--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}"],changeDetection:0});let t=e;return t})();function $e(t,e){t&1&&l(0,"app-spinner")}function Je(t,e){t&1&&c(0," Create Board ")}var Be=(()=>{let e=class e{get boardName(){return this.createBoardForm.get("name")?.value??""}constructor(r,o,i){this.title=r,this.boardService=o,this.router=i,this.createBoardForm=new xe({name:new Me("",[D.required,D.minLength(3),D.maxLength(100)])}),this.creatingBoard=F(!1),this.title.setTitle("Retroboard | Your Online Retroboard")}createBoard(){this.creatingBoard.set(!0),this.boardService.create(this.boardName).pipe(T(()=>this.creatingBoard.set(!1))).subscribe({next:r=>{this.boardService.board.set(r),this.router.navigate(["boards",r.id])},error:console.error})}};e.\u0275fac=function(o){return new(o||e)(g(P),g(v),g(O))},e.\u0275cmp=d({type:e,selectors:[["app-home-page"]],standalone:!0,features:[p],decls:22,vars:3,consts:[[1,"container"],[1,"card"],[1,"text-gray-500","text-sm"],[3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-4"],[1,"flex","items-center"],["formControlName","name","type","text","autocomplete","off","placeholder","Name for your board","maxlength","100","autofocus",""],["type","submit",3,"disabled"],[1,"disclaimer"],["href","#"]],template:function(o,i){o&1&&(a(0,"div",0)(1,"div",1)(2,"section")(3,"h1"),c(4,"Create a Retroboard"),s(),a(5,"p",2),c(6," Create a Retroboard for free and without an account. Just enter the name of the board. Then, share the link with your teammates. "),s()(),a(7,"form",3),te("ngSubmit",function(){return i.createBoard()}),a(8,"div",4)(9,"div",5),l(10,"input",6),a(11,"button",7),M(12,$e,1,0,"app-spinner")(13,Je,1,0),s()()()(),a(14,"div",8),c(15," By creating a board you accept our "),a(16,"a",9),c(17,"privacy policy"),s(),c(18," and "),a(19,"a",9),c(20,"terms"),s(),c(21,". "),s()()()),o&2&&(f(7),C("formGroup",i.createBoardForm),f(4),C("disabled",i.createBoardForm.invalid||i.createBoardForm.disabled),f(),ee(i.creatingBoard()?12:13))},dependencies:[h,De,Pe,ve,we,Ce,Se,Oe,_e,R,_],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column;--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:column;align-items:flex-start}@media (min-width: 640px){[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:0;justify-content:center}}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:100%;flex-grow:1}@media (min-width: 640px){[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{align-items:center}}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));width:100%;border-radius:1rem;border-width:1px;padding:1rem;--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{max-width:500px}}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{text-align:center;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity));text-decoration-line:underline}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{min-width:.75rem;flex-grow:1;border-top-left-radius:1rem;border-bottom-left-radius:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity));padding:.375rem .75rem;border-right-width:0px;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;border-top-right-radius:1rem;border-bottom-right-radius:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(30 58 138 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(30 58 138 / var(--tw-bg-opacity));font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));flex-shrink:0;cursor:pointer;padding:.375rem .75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(23 37 84 / var(--tw-bg-opacity))}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-color: rgb(30 58 138 / .35) }[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:disabled{cursor:not-allowed;--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}"],changeDetection:0});let t=e;return t})();var Ee=[{path:"",pathMatch:"full",component:Be},{path:"boards/:id",component:Ae},{path:"**",redirectTo:""}];function je(t,e){let n=u(ye).whoAmI(),r=t.clone({headers:t.headers.append("X-retro-audit-id",n)});return e(r)}function Te(t,e){let n=u(v),r=u(S),o=u(O);return e(t).pipe(H(i=>{i.type===ie.Response&&n.board()?.id&&Xe(o.url)&&r.opened()&&r.sendMessage(Ye(o.url))}))}function Xe(t){return t.includes("/boards/")}function Ye(t){return t.split("/").at(-1)??""}var Ne={providers:[re({eventCoalescing:!0}),ae(ce(),se([je,Te])),he(Ee),pe(),Ie()]};le(Fe,Ne).catch(t=>console.error(t));

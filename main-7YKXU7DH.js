import{A as ue,B as fe,C as be,b as q,c as J,d as Y,e as $,f as K,g as Q,h as ee,i as te,j as oe,k as re,l as ne,m as ie,n as w,o as ae,q as se,r as x,s as de,t as M,u as ce,v as le,w as me,x as pe,y as ge,z as he}from"./chunk-K4ZBNFER.js";import{$ as v,$a as L,Aa as E,Cb as X,Da as I,Ga as h,Ha as u,Ia as N,Ib as O,J as D,Ka as T,Ma as z,Oa as j,Ob as Z,Pa as H,Q as F,T as R,Ua as V,V as A,Vb as g,Za as C,_a as G,bb as y,da as l,db as U,ga as B,gb as a,hb as s,ib as m,lb as W,na as k,qb as d,ub as p}from"./chunk-EZNMGD6S.js";var ye=(()=>{let e=class e{constructor(){this.githubRepoUrl=ae}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:11,vars:1,consts:[[1,"container"],["id","copyright"],[1,"text-red-400"],["target","_blank",1,"underline",3,"href"]],template:function(t,i){t&1&&(a(0,"footer")(1,"div",0)(2,"div",1),d(3,"\xA9 Bytebury LLC. All Rights Reserved."),s(),a(4,"div"),d(5," Developed with "),a(6,"span",2),d(7,"\u2665"),s(),d(8," on "),a(9,"a",3),d(10," GitHub "),s()()()()),t&2&&(h(9),y("href",i.githubRepoUrl,I))},dependencies:[g],styles:["footer[_ngcontent-%COMP%]{border-top-width:1px;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between}@media (min-width: 640px){footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:row;align-items:baseline}}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;padding-top:.5rem;padding-bottom:.5rem}"],changeDetection:0});let r=e;return r})();var ve=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-navbar"]],standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"container"],["id","Navbar_Branding"],["routerLink","/"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"section",1)(2,"h1")(3,"a",2),d(4,"Retroboard"),s()()()())},dependencies:[g,ne],styles:["[_nghost-%COMP%]{position:fixed;top:0;z-index:40;height:3rem;width:100%;border-bottom-width:1px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   h1[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem;font-weight:800}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%]{margin-left:-.75rem;border-radius:1rem;padding:.25rem .75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   section[_ngcontent-%COMP%]:first-of-type   a[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(226 232 240 / var(--tw-bg-opacity))}"],changeDetection:0});let r=e;return r})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:4,vars:0,template:function(t,i){t&1&&(m(0,"app-navbar"),a(1,"main"),m(2,"router-outlet"),s(),m(3,"app-footer"))},dependencies:[oe,ve,ye]});let r=e;return r})();var P=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-spinner"]],standalone:!0,features:[p],decls:3,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","aria-label","loading...",1,"animate-spin","h-6","w-6"],["cx","12","cy","12","r","10","stroke","currentColor","stroke-width","4",1,"opacity-25"],["fill","currentColor","d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",1,"opacity-75"]],template:function(t,i){t&1&&(k(),a(0,"svg",0),m(1,"circle",1)(2,"path",2),s())},dependencies:[g],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0});let r=e;return r})();var Fe=()=>[import("./chunk-5QVHQOPI.js").then(r=>r.BoardComponent)];function Re(r,e){r&1&&m(0,"app-board")}function Ae(r,e){r&1&&m(0,"app-spinner")}var we=(()=>{let e=class e{constructor(o,t,i){this.title=o,this.boardService=t,this.activatedRoute=i,this.loading=O(()=>!this.board()),this.board=O(()=>this.boardService.board()?.columns?.sort((f,_)=>f.display_order-_.display_order)),this.activatedRoute.paramMap.pipe(F(c=>this.boardService.get(c.get("id")??""))).subscribe({next:c=>{this.boardService.board.set(c),this.title.setTitle(`Retroboard | ${c.name}`)},error:console.error})}};e.\u0275fac=function(t){return new(t||e)(u(Q),u(x),u(te))},e.\u0275cmp=l({type:e,selectors:[["app-board-page"]],standalone:!0,features:[p],decls:5,vars:1,consts:[[1,"h-full"]],template:function(t,i){t&1&&(a(0,"div",0),C(1,Re,1,0)(2,Ae,1,0),G(3,1,Fe,null,2),s()),t&2&&(h(3),L(!i.loading()))},dependencies:[g,w,P],styles:["[_nghost-%COMP%]{height:0px;flex-grow:1;--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}"],changeDetection:0});let r=e;return r})();function Be(r,e){r&1&&m(0,"app-spinner")}function ke(r,e){r&1&&(d(0," Create"),a(1,"span",8),d(2,"Board"),s())}var xe=(()=>{let e=class e{get boardName(){return this.createBoardForm.get("name")?.value??""}constructor(o,t){this.boardService=o,this.router=t,this.createBoardForm=new me({name:new pe("",[M.required,M.minLength(3),M.maxLength(100)])}),this.creatingBoard=V(!1)}createBoard(){this.creatingBoard.set(!0),this.boardService.create(this.boardName).pipe(D(()=>this.creatingBoard.set(!1))).subscribe({next:o=>{this.boardService.board.set(o),this.router.navigate(["boards",o.id])},error:console.error})}};e.\u0275fac=function(t){return new(t||e)(u(x),u(re))},e.\u0275cmp=l({type:e,selectors:[["app-home-page"]],standalone:!0,features:[p],decls:22,vars:3,consts:[[1,"container"],[1,"card"],[1,"text-gray-500","text-sm"],[3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-4"],[1,"flex","items-center"],["formControlName","name","type","text","autocomplete","off","placeholder","Name for your board","maxlength","100","autofocus",""],["type","submit",3,"disabled"],[1,"hidden","sm:inline"],[1,"disclaimer"],["href","#"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"section")(3,"h1"),d(4,"Create a Retroboard"),s(),a(5,"p",2),d(6," Create a Retroboard for free and without an account. Just enter the name of the board. Then, share the link with your teammates. "),s()(),a(7,"form",3),W("ngSubmit",function(){return i.createBoard()}),a(8,"div",4)(9,"div",5),m(10,"input",6),a(11,"button",7),C(12,Be,1,0,"app-spinner")(13,ke,3,0,"span",8),s()()()(),a(14,"div",9),d(15," By creating a board you accept our "),a(16,"a",10),d(17,"privacy policy"),s(),d(18," and "),a(19,"a",10),d(20,"terms"),s(),d(21,". "),s()()()),t&2&&(h(7),y("formGroup",i.createBoardForm),h(4),y("disabled",i.createBoardForm.invalid||i.createBoardForm.disabled),h(),U(i.creatingBoard()?12:13))},dependencies:[g,be,ge,de,ce,le,fe,he,ue,P,w],styles:["[_nghost-%COMP%]{height:0px;flex-grow:1}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;height:100%;flex-direction:column;align-items:flex-start}@media (min-width: 640px){[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{margin-top:0;align-items:center;justify-content:center}}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;width:100%;border-radius:1rem;border-width:1px;padding:1rem;--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (min-width: 640px){[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{max-width:500px}}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{text-align:center;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity));text-decoration-line:underline}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{min-width:.75rem;flex-grow:1;border-top-left-radius:1rem;border-bottom-left-radius:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity));padding:.375rem .75rem;border-right-width:0px;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;border-top-right-radius:1rem;border-bottom-right-radius:1rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(30 58 138 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(30 58 138 / var(--tw-bg-opacity));font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity));flex-shrink:0;cursor:pointer;padding:.375rem .75rem;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(23 37 84 / var(--tw-bg-opacity))}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-color: rgb(30 58 138 / .35) }[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:disabled{cursor:not-allowed;--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}"],changeDetection:0});let r=e;return r})();var Me=[{path:"",pathMatch:"full",component:xe},{path:"boards/:id",component:we},{path:"**",redirectTo:""}];function Pe(r,e){let n=v(se).whoAmI(),o=r.clone({headers:r.headers.append("X-retro-audit-id",n)});return e(o)}var Ee="@",Ie=(()=>{let e=class e{constructor(o,t,i,c,f){this.doc=o,this.delegate=t,this.zone=i,this.animationType=c,this.moduleImpl=f,this._rendererFactoryPromise=null,this.scheduler=v(T,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-OYZQOIXH.js").then(t=>t)).catch(t=>{throw new R(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:i})=>{this._engine=t(this.animationType,this.doc);let c=new i(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(o,t){let i=this.delegate.createRenderer(o,t);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let c=new S(i);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(f=>{let _=f.createRenderer(o,t);c.use(_),this.scheduler?.notify(9)}).catch(f=>{c.use(i)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(t){N()},e.\u0275prov=A({token:e,factory:e.\u0275fac});let r=e;return r})(),S=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,o,t){this.delegate.insertBefore(e,n,o,t)}removeChild(e,n,o){this.delegate.removeChild(e,n,o)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,o,t){this.delegate.setAttribute(e,n,o,t)}removeAttribute(e,n,o){this.delegate.removeAttribute(e,n,o)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,o,t){this.delegate.setStyle(e,n,o,t)}removeStyle(e,n,o){this.delegate.removeStyle(e,n,o)}setProperty(e,n,o){this.shouldReplay(n)&&this.replay.push(t=>t.setProperty(e,n,o)),this.delegate.setProperty(e,n,o)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,o){return this.shouldReplay(n)&&this.replay.push(t=>t.listen(e,n,o)),this.delegate.listen(e,n,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(Ee)}};function _e(r="animations"){return j("NgAsyncAnimations"),B([{provide:z,useFactory:(e,n,o)=>new Ie(e,n,o,r),deps:[Z,$,H]},{provide:E,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Oe={providers:[X({eventCoalescing:!0}),q(Y(),J([Pe])),ie(Me),ee(),_e()]};K(Ce,Oe).catch(r=>console.error(r));
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97860],{670:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return f},default:function(){return d}});var r=t(22122),a=t(19756),c=(t(67294),t(3905)),u=t(31137),l=t(71871),i=["components"],s={},o="Function Descriptors",m={unversionedId:"guide/schema/funcdesc",id:"guide/schema/funcdesc",isDocsHomePage:!1,title:"Function Descriptors",description:"The schema tool provides us with an easy way to access to smart contract functions through",source:"@site/external/wasp/documentation/docs/guide/schema/funcdesc.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/funcdesc",permalink:"/wasp/guide/schema/funcdesc",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Token Transfers",permalink:"/wasp/guide/schema/transfers"},next:{title:"Calling Functions",permalink:"/wasp/guide/schema/call"}},f=[],p={toc:f};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"function-descriptors"},"Function Descriptors"),(0,c.kt)("p",null,"The schema tool provides us with an easy way to access to smart contract functions through\nso-called ",(0,c.kt)("em",{parentName:"p"},"function descriptors"),". These are structures that provide access to the optional\nparams and results maps through strict compile-time checked interfaces. They will also\nallow you to initiate the function by calling it synchronously or posting a request to run\nit asynchronously."),(0,c.kt)("p",null,"The schema tool will generate a specific function descriptor for each func and view. It\nwill also generate an interface called ScFuncs that can be used to create and initialize\neach function descriptor. Here is the code generated for the ",(0,c.kt)("inlineCode",{parentName:"p"},"dividend")," example\nin ",(0,c.kt)("inlineCode",{parentName:"p"},"contract.rs"),":"),(0,c.kt)(u.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,c.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package dividend\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib"\n\ntype DivideCall struct {\n    Func *wasmlib.ScFunc\n}\n\ntype InitCall struct {\n    Func   *wasmlib.ScInitFunc\n    Params MutableInitParams\n}\n\ntype MemberCall struct {\n    Func   *wasmlib.ScFunc\n    Params MutableMemberParams\n}\n\ntype SetOwnerCall struct {\n    Func   *wasmlib.ScFunc\n    Params MutableSetOwnerParams\n}\n\ntype GetFactorCall struct {\n    Func    *wasmlib.ScView\n    Params  MutableGetFactorParams\n    Results ImmutableGetFactorResults\n}\n\ntype GetOwnerCall struct {\n    Func    *wasmlib.ScView\n    Results ImmutableGetOwnerResults\n}\n\ntype Funcs struct{}\n\nvar ScFuncs Funcs\n\nfunc (sc Funcs) Divide(ctx wasmlib.ScFuncCallContext) *DivideCall {\n    return &DivideCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncDivide)}\n}\n\nfunc (sc Funcs) Init(ctx wasmlib.ScFuncCallContext) *InitCall {\n    f := &InitCall{Func: wasmlib.NewScInitFunc(ctx, HScName, HFuncInit, keyMap[:], idxMap[:])}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) Member(ctx wasmlib.ScFuncCallContext) *MemberCall {\n    f := &MemberCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncMember)}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) SetOwner(ctx wasmlib.ScFuncCallContext) *SetOwnerCall {\n    f := &SetOwnerCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncSetOwner)}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) GetFactor(ctx wasmlib.ScViewCallContext) *GetFactorCall {\n    f := &GetFactorCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetFactor)}\n    f.Func.SetPtrs(&f.Params.id, &f.Results.id)\n    return f\n}\n\nfunc (sc Funcs) GetOwner(ctx wasmlib.ScViewCallContext) *GetOwnerCall {\n    f := &GetOwnerCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetOwner)}\n    f.Func.SetPtrs(nil, &f.Results.id)\n    return f\n}\n'))),(0,c.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"use std::ptr;\n\nuse wasmlib::*;\n\nuse crate::consts::*;\nuse crate::params::*;\nuse crate::results::*;\n\npub struct DivideCall {\n    pub func: ScFunc,\n}\n\npub struct InitCall {\n    pub func:   ScFunc,\n    pub params: MutableInitParams,\n}\n\npub struct MemberCall {\n    pub func:   ScFunc,\n    pub params: MutableMemberParams,\n}\n\npub struct SetOwnerCall {\n    pub func:   ScFunc,\n    pub params: MutableSetOwnerParams,\n}\n\npub struct GetFactorCall {\n    pub func:    ScView,\n    pub params:  MutableGetFactorParams,\n    pub results: ImmutableGetFactorResults,\n}\n\npub struct ScFuncs {\n}\n\nimpl ScFuncs {\n    pub fn divide(_ctx: & dyn ScFuncCallContext) -> DivideCall {\n        DivideCall {\n            func: ScFunc::new(HSC_NAME, HFUNC_DIVIDE),\n        }\n    }\n    pub fn init(_ctx: & dyn ScFuncCallContext) -> InitCall {\n        let mut f = InitCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_INIT),\n            params: MutableInitParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn member(_ctx: & dyn ScFuncCallContext) -> MemberCall {\n        let mut f = MemberCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_MEMBER),\n            params: MutableMemberParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn set_owner(_ctx: & dyn ScFuncCallContext) -> SetOwnerCall {\n        let mut f = SetOwnerCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_SET_OWNER),\n            params: MutableSetOwnerParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn get_factor(_ctx: & dyn ScViewCallContext) -> GetFactorCall {\n        let mut f = GetFactorCall {\n            func:    ScView::new(HSC_NAME, HVIEW_GET_FACTOR),\n            params:  MutableGetFactorParams { id: 0 },\n            results: ImmutableGetFactorResults { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);\n        f\n    }\n}\n")))),(0,c.kt)("p",null,"As you can see a struct has been generated for each of the funcs and views. Note that the\nstructs only provide access to ",(0,c.kt)("inlineCode",{parentName:"p"},"params")," or ",(0,c.kt)("inlineCode",{parentName:"p"},"results")," when these are specified for the\nfunction. Also note that each struct has a ",(0,c.kt)("inlineCode",{parentName:"p"},"func")," member that can be used to initiate the\nfunction call in certain ways. The ",(0,c.kt)("inlineCode",{parentName:"p"},"func")," member will be of type ScFunc or ScView,\ndepending on whether the function is a func or a view."),(0,c.kt)("p",null,"The ScFuncs struct provides a member function for each func or view that will create their\nrespective function descriptor, initialize it properly, and returns it."),(0,c.kt)("p",null,"In the next section we will look at how to use function descriptors to call a smart\ncontract function synchronously."))}d.isMDXComponent=!0},71871:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},31137:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(67294),a=t(54179);var c=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,a=e.block,s=e.defaultValue,o=e.values,m=e.groupId,f=e.className,p=r.Children.toArray(e.children),d=null!=o?o:p.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(n=p.find((function(e){return e.props.default})))?void 0:n.props.value,w=c(),h=w.tabGroupChoices,v=w.setTabGroupChoices,C=(0,r.useState)(b),F=C[0],y=C[1],S=[];if(null!=m){var g=h[m];null!=g&&g!==F&&d.some((function(e){return e.value===g}))&&y(g)}var x=function(e){var n=e.currentTarget,t=S.indexOf(n),r=d[t].value;y(r),null!=m&&(v(m,r),setTimeout((function(){var e,t,r,a,c,u,l,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,c=e.right,u=window,l=u.innerHeight,s=u.innerWidth,t>=0&&c<=s&&a<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i),setTimeout((function(){return n.classList.remove(i)}),2e3))}),150))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.target)+1;t=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.target)-1;t=S[a]||S[S.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},f)},d.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:F===n?0:-1,"aria-selected":F===n,className:(0,u.Z)("tabs__item",l,{"tabs__item--active":F===n}),key:n,ref:function(e){return S.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=t?t:n)}))),t?(0,r.cloneElement)(p.filter((function(e){return e.props.value===F}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==F})}))))}},54179:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},o=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),f=s(t),p=a,d=f["".concat(i,".").concat(p)]||f[p]||m[p]||c;return t?r.createElement(d,u(u({ref:n},o),{},{components:t})):r.createElement(d,u({ref:n},o))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,u=new Array(c);u[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<c;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);
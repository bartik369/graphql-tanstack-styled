import{r,_ as rt,u as Ne,a as at,c as L,b as Ee,d as it,e as Te,f as B,w as Oe,g as he,m as ke,h as ae,i as k,j as lt,C as K,F as st,D as ct,k as dt,l as ze,T as ut,W as pt,o as Be,n as ie,p as mt,q as Le,s as gt,S as Me,t as ft,v as G,x as vt,y,z as D,A as bt,P as ht}from"./index-BvOn_I18.js";import{C as yt,m as xt,P as Ct,u as St,r as Pe,R as $t,D as Et,a as De,b as Tt,g as _e,B as le,A as Ot,c as Pt,d as _t,e as wt,I as It,M as ee,T as Ve,f as jt,h as we,i as Rt,j as Nt,k as kt,l as zt,y as Z,n as ge,o as Ie,S as Bt,p as Lt,q as fe,N as Mt,s as Dt,t as Vt}from"./ToastStyles-CV-SiTjB.js";var At=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],Gt=r.forwardRef(function(e,t){var n=e.prefixCls,o=n===void 0?"rc-checkbox":n,a=e.className,m=e.style,c=e.checked,f=e.disabled,g=e.defaultChecked,x=g===void 0?!1:g,v=e.type,C=v===void 0?"checkbox":v,h=e.title,u=e.onChange,i=rt(e,At),p=r.useRef(null),l=r.useRef(null),s=Ne(x,{value:c}),E=at(s,2),O=E[0],w=E[1];r.useImperativeHandle(t,function(){return{focus:function(d){var P;(P=p.current)===null||P===void 0||P.focus(d)},blur:function(){var d;(d=p.current)===null||d===void 0||d.blur()},input:p.current,nativeElement:l.current}});var I=L(o,a,Ee(Ee({},"".concat(o,"-checked"),O),"".concat(o,"-disabled"),f)),j=function(d){f||("checked"in e||w(d.target.checked),u?.({target:Te(Te({},e),{},{type:C,checked:d.target.checked}),stopPropagation:function(){d.stopPropagation()},preventDefault:function(){d.preventDefault()},nativeEvent:d.nativeEvent}))};return r.createElement("span",{className:I,title:h,style:m,ref:l},r.createElement("input",it({},i,{className:"".concat(o,"-input"),ref:p,onChange:j,disabled:f,checked:!!O,type:C})),r.createElement("span",{className:"".concat(o,"-inner")}))});function Ht(e){const t=B.useRef(null),n=()=>{Oe.cancel(t.current),t.current=null};return[()=>{n(),t.current=Oe(()=>{t.current=null})},m=>{t.current&&(m.stopPropagation(),n()),e?.(m)}]}const Wt=e=>{const{checkboxCls:t}=e,n=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},ae(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[n]:Object.assign(Object.assign({},ae(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${n}`]:{marginInlineStart:0},[`&${n}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},ae(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},lt(e))},[`${t}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${k(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${k(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${n}:not(${n}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${n}:not(${n}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${n}-checked:not(${n}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{"&":{[`${t}-inner`]:{backgroundColor:`${e.colorBgContainer}`,borderColor:`${e.colorBorder}`,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${t}-inner`]:{backgroundColor:`${e.colorBgContainer}`,borderColor:`${e.colorPrimary}`}}}}},{[`${n}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function Ft(e,t){const n=ke(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[Wt(n)]}const Ae=he("Checkbox",(e,{prefixCls:t})=>[Ft(t,e)]),Ge=B.createContext(null);var qt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Qt=(e,t)=>{var n;const{prefixCls:o,className:a,rootClassName:m,children:c,indeterminate:f=!1,style:g,onMouseEnter:x,onMouseLeave:v,skipGroup:C=!1,disabled:h}=e,u=qt(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:i,direction:p,checkbox:l}=r.useContext(K),s=r.useContext(Ge),{isFormItemInput:E}=r.useContext(st),O=r.useContext(ct),w=(n=s?.disabled||h)!==null&&n!==void 0?n:O,I=r.useRef(u.value),j=r.useRef(null),S=dt(t,j);r.useEffect(()=>{s?.registerValue(u.value)},[]),r.useEffect(()=>{if(!C)return u.value!==I.current&&(s?.cancelValue(I.current),s?.registerValue(u.value),I.current=u.value),()=>s?.cancelValue(u.value)},[u.value]),r.useEffect(()=>{var T;!((T=j.current)===null||T===void 0)&&T.input&&(j.current.input.indeterminate=f)},[f]);const d=i("checkbox",o),P=ze(d),[q,F,Q]=Ae(d,P),M=Object.assign({},u);s&&!C&&(M.onChange=(...T)=>{u.onChange&&u.onChange.apply(u,T),s.toggleOption&&s.toggleOption({label:c,value:u.value})},M.name=s.name,M.checked=s.value.includes(u.value));const X=L(`${d}-wrapper`,{[`${d}-rtl`]:p==="rtl",[`${d}-wrapper-checked`]:M.checked,[`${d}-wrapper-disabled`]:w,[`${d}-wrapper-in-form-item`]:E},l?.className,a,m,Q,P,F),b=L({[`${d}-indeterminate`]:f},ut,F),[A,$]=Ht(M.onClick);return q(r.createElement(pt,{component:"Checkbox",disabled:w},r.createElement("label",{className:X,style:Object.assign(Object.assign({},l?.style),g),onMouseEnter:x,onMouseLeave:v,onClick:A},r.createElement(Gt,Object.assign({},M,{onClick:$,prefixCls:d,className:b,disabled:w,ref:S})),c!=null&&r.createElement("span",{className:`${d}-label`},c))))},He=r.forwardRef(Qt);var Xt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Ut=r.forwardRef((e,t)=>{const{defaultValue:n,children:o,options:a=[],prefixCls:m,className:c,rootClassName:f,style:g,onChange:x}=e,v=Xt(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:C,direction:h}=r.useContext(K),[u,i]=r.useState(v.value||n||[]),[p,l]=r.useState([]);r.useEffect(()=>{"value"in v&&i(v.value||[])},[v.value]);const s=r.useMemo(()=>a.map(b=>typeof b=="string"||typeof b=="number"?{label:b,value:b}:b),[a]),E=b=>{l(A=>A.filter($=>$!==b))},O=b=>{l(A=>[].concat(ie(A),[b]))},w=b=>{const A=u.indexOf(b.value),$=ie(u);A===-1?$.push(b.value):$.splice(A,1),"value"in v||i($),x?.($.filter(T=>p.includes(T)).sort((T,Y)=>{const se=s.findIndex(R=>R.value===T),ce=s.findIndex(R=>R.value===Y);return se-ce}))},I=C("checkbox",m),j=`${I}-group`,S=ze(I),[d,P,q]=Ae(I,S),F=Be(v,["value","disabled"]),Q=a.length?s.map(b=>r.createElement(He,{prefixCls:I,key:b.value.toString(),disabled:"disabled"in b?b.disabled:v.disabled,value:b.value,checked:u.includes(b.value),onChange:b.onChange,className:L(`${j}-item`,b.className),style:b.style,title:b.title,id:b.id,required:b.required},b.label)):o,M=r.useMemo(()=>({toggleOption:w,value:u,disabled:v.disabled,name:v.name,registerValue:O,cancelValue:E}),[w,u,v.disabled,v.name,O,E]),X=L(j,{[`${j}-rtl`]:h==="rtl"},c,f,q,S,P);return d(r.createElement("div",Object.assign({className:X,style:g},F,{ref:t}),r.createElement(Ge.Provider,{value:M},Q)))}),ye=He;ye.Group=Ut;ye.__ANT_CHECKBOX=!0;const xe=B.createContext({});xe.Consumer;var We=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Kt=e=>{var{prefixCls:t,className:n,avatar:o,title:a,description:m}=e,c=We(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:f}=r.useContext(K),g=f("list",t),x=L(`${g}-item-meta`,n),v=B.createElement("div",{className:`${g}-item-meta-content`},a&&B.createElement("h4",{className:`${g}-item-meta-title`},a),m&&B.createElement("div",{className:`${g}-item-meta-description`},m));return B.createElement("div",Object.assign({},c,{className:x}),o&&B.createElement("div",{className:`${g}-item-meta-avatar`},o),(a||m)&&v)},Zt=B.forwardRef((e,t)=>{const{prefixCls:n,children:o,actions:a,extra:m,styles:c,className:f,classNames:g,colStyle:x}=e,v=We(e,["prefixCls","children","actions","extra","styles","className","classNames","colStyle"]),{grid:C,itemLayout:h}=r.useContext(xe),{getPrefixCls:u,list:i}=r.useContext(K),p=S=>{var d,P;return L((P=(d=i?.item)===null||d===void 0?void 0:d.classNames)===null||P===void 0?void 0:P[S],g?.[S])},l=S=>{var d,P;return Object.assign(Object.assign({},(P=(d=i?.item)===null||d===void 0?void 0:d.styles)===null||P===void 0?void 0:P[S]),c?.[S])},s=()=>{let S=!1;return r.Children.forEach(o,d=>{typeof d=="string"&&(S=!0)}),S&&r.Children.count(o)>1},E=()=>h==="vertical"?!!m:!s(),O=u("list",n),w=a&&a.length>0&&B.createElement("ul",{className:L(`${O}-item-action`,p("actions")),key:"actions",style:l("actions")},a.map((S,d)=>B.createElement("li",{key:`${O}-item-action-${d}`},S,d!==a.length-1&&B.createElement("em",{className:`${O}-item-action-split`})))),I=C?"div":"li",j=B.createElement(I,Object.assign({},v,C?{}:{ref:t},{className:L(`${O}-item`,{[`${O}-item-no-flex`]:!E()},f)}),h==="vertical"&&m?[B.createElement("div",{className:`${O}-item-main`,key:"content"},o,w),B.createElement("div",{className:L(`${O}-item-extra`,p("extra")),key:"extra",style:l("extra")},m)]:[o,w,mt(m,{key:"extra"})]);return C?B.createElement(yt,{ref:t,flex:1,style:x},j):j}),Fe=Zt;Fe.Meta=Kt;const Yt=e=>{const{listBorderedCls:t,componentCls:n,paddingLG:o,margin:a,itemPaddingSM:m,itemPaddingLG:c,marginLG:f,borderRadiusLG:g}=e;return{[t]:{border:`${k(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:g,[`${n}-header,${n}-footer,${n}-item`]:{paddingInline:o},[`${n}-pagination`]:{margin:`${k(a)} ${k(f)}`}},[`${t}${n}-sm`]:{[`${n}-item,${n}-header,${n}-footer`]:{padding:m}},[`${t}${n}-lg`]:{[`${n}-item,${n}-header,${n}-footer`]:{padding:c}}}},Jt=e=>{const{componentCls:t,screenSM:n,screenMD:o,marginLG:a,marginSM:m,margin:c}=e;return{[`@media screen and (max-width:${o}px)`]:{[t]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${n}px)`]:{[t]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:m}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${k(c)}`}}}}}},eo=e=>{const{componentCls:t,antCls:n,controlHeight:o,minHeight:a,paddingSM:m,marginLG:c,padding:f,itemPadding:g,colorPrimary:x,itemPaddingSM:v,itemPaddingLG:C,paddingXS:h,margin:u,colorText:i,colorTextDescription:p,motionDurationSlow:l,lineWidth:s,headerBg:E,footerBg:O,emptyTextPadding:w,metaMarginBottom:I,avatarMarginRight:j,titleMarginBottom:S,descriptionFontSize:d}=e;return{[t]:Object.assign(Object.assign({},ae(e)),{position:"relative","--rc-virtual-list-scrollbar-bg":e.colorSplit,"*":{outline:"none"},[`${t}-header`]:{background:E},[`${t}-footer`]:{background:O},[`${t}-header, ${t}-footer`]:{paddingBlock:m},[`${t}-pagination`]:{marginBlockStart:c,[`${n}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:g,color:i,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:j},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:i},[`${t}-item-meta-title`]:{margin:`0 0 ${k(e.marginXXS)} 0`,color:i,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:i,transition:`all ${l}`,"&:hover":{color:x}}},[`${t}-item-meta-description`]:{color:p,fontSize:d,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${k(h)}`,color:p,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:s,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${k(f)} 0`,color:p,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:w,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${n}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:u,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:c},[`${t}-item-meta`]:{marginBlockEnd:I,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:S,color:i,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:f,marginInlineStart:"auto","> li":{padding:`0 ${k(f)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${k(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${k(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${k(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:o},[`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${k(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:C},[`${t}-sm ${t}-item`]:{padding:v},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},to=e=>({contentWidth:220,itemPadding:`${k(e.paddingContentVertical)} 0`,itemPaddingSM:`${k(e.paddingContentVerticalSM)} ${k(e.paddingContentHorizontal)}`,itemPaddingLG:`${k(e.paddingContentVerticalLG)} ${k(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize}),oo=he("List",e=>{const t=ke(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[eo(t),Yt(t),Jt(t)]},to);var no=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};function ro(e,t){const{pagination:n=!1,prefixCls:o,bordered:a=!1,split:m=!0,className:c,rootClassName:f,style:g,children:x,itemLayout:v,loadMore:C,grid:h,dataSource:u=[],size:i,header:p,footer:l,loading:s=!1,rowKey:E,renderItem:O,locale:w}=e,I=no(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),j=n&&typeof n=="object"?n:{},[S,d]=r.useState(j.defaultCurrent||1),[P,q]=r.useState(j.defaultPageSize||10),{getPrefixCls:F,direction:Q,className:M,style:X}=Le("list"),{renderEmpty:b}=r.useContext(K),A={current:1,total:0,position:"bottom"},$=N=>(V,W)=>{var me;d(V),q(W),n&&((me=n?.[N])===null||me===void 0||me.call(n,V,W))},T=$("onChange"),Y=$("onShowSizeChange"),se=(N,V)=>{if(!O)return null;let W;return typeof E=="function"?W=E(N):E?W=N[E]:W=N.key,W||(W=`list-item-${V}`),r.createElement(r.Fragment,{key:W},O(N,V))},ce=!!(C||n||l),R=F("list",o),[Ue,Ke,Ze]=oo(R);let U=s;typeof U=="boolean"&&(U={spinning:U});const de=!!U?.spinning,Ye=gt(i);let te="";switch(Ye){case"large":te="lg";break;case"small":te="sm";break}const Je=L(R,{[`${R}-vertical`]:v==="vertical",[`${R}-${te}`]:te,[`${R}-split`]:m,[`${R}-bordered`]:a,[`${R}-loading`]:de,[`${R}-grid`]:!!h,[`${R}-something-after-last-item`]:ce,[`${R}-rtl`]:Q==="rtl"},M,c,f,Ke,Ze),H=xt(A,{total:u.length,current:S,pageSize:P},n||{}),et=Math.ceil(H.total/H.pageSize);H.current=Math.min(H.current,et);const Se=n&&r.createElement("div",{className:L(`${R}-pagination`)},r.createElement(Ct,Object.assign({align:"end"},H,{onChange:T,onShowSizeChange:Y})));let ue=ie(u);n&&u.length>(H.current-1)*H.pageSize&&(ue=ie(u).splice((H.current-1)*H.pageSize,H.pageSize));const tt=Object.keys(h||{}).some(N=>["xs","sm","md","lg","xl","xxl"].includes(N)),$e=St(tt),oe=r.useMemo(()=>{for(let N=0;N<Pe.length;N+=1){const V=Pe[N];if($e[V])return V}},[$e]),ot=r.useMemo(()=>{if(!h)return;const N=oe&&h[oe]?h[oe]:h.column;if(N)return{width:`${100/N}%`,maxWidth:`${100/N}%`}},[JSON.stringify(h),oe]);let pe=de&&r.createElement("div",{style:{minHeight:53}});if(ue.length>0){const N=ue.map(se);pe=h?r.createElement($t,{gutter:h.gutter},r.Children.map(N,V=>r.createElement("div",{key:V?.key,style:ot},V))):r.createElement("ul",{className:`${R}-items`},N)}else!x&&!de&&(pe=r.createElement("div",{className:`${R}-empty-text`},w?.emptyText||b?.("List")||r.createElement(Et,{componentName:"List"})));const ne=H.position,nt=r.useMemo(()=>({grid:h,itemLayout:v}),[JSON.stringify(h),v]);return Ue(r.createElement(xe.Provider,{value:nt},r.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},X),g),className:Je},I),(ne==="top"||ne==="both")&&Se,p&&r.createElement("div",{className:`${R}-header`},p),r.createElement(Me,Object.assign({},U),pe,x),l&&r.createElement("div",{className:`${R}-footer`},l),C||(ne==="bottom"||ne==="both")&&Se)))}const ao=r.forwardRef(ro),Ce=ao;Ce.Item=Fe;const io=e=>{const{componentCls:t,iconCls:n,antCls:o,zIndexPopup:a,colorText:m,colorWarning:c,marginXXS:f,marginXS:g,fontSize:x,fontWeightStrong:v,colorTextHeading:C}=e;return{[t]:{zIndex:a,[`&${o}-popover`]:{fontSize:x},[`${t}-message`]:{marginBottom:g,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${n}`]:{color:c,fontSize:x,lineHeight:1,marginInlineEnd:g},[`${t}-title`]:{fontWeight:v,color:C,"&:only-child":{fontWeight:"normal"}},[`${t}-description`]:{marginTop:f,color:m}},[`${t}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:g}}}}},lo=e=>{const{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}},qe=he("Popconfirm",e=>io(e),lo,{resetStyle:!1});var so=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Qe=e=>{const{prefixCls:t,okButtonProps:n,cancelButtonProps:o,title:a,description:m,cancelText:c,okText:f,okType:g="primary",icon:x=r.createElement(De,null),showCancel:v=!0,close:C,onConfirm:h,onCancel:u,onPopupClick:i}=e,{getPrefixCls:p}=r.useContext(K),[l]=Tt("Popconfirm",ft.Popconfirm),s=_e(a),E=_e(m);return r.createElement("div",{className:`${t}-inner-content`,onClick:i},r.createElement("div",{className:`${t}-message`},x&&r.createElement("span",{className:`${t}-message-icon`},x),r.createElement("div",{className:`${t}-message-text`},s&&r.createElement("div",{className:`${t}-title`},s),E&&r.createElement("div",{className:`${t}-description`},E))),r.createElement("div",{className:`${t}-buttons`},v&&r.createElement(le,Object.assign({onClick:u,size:"small"},o),c||l?.cancelText),r.createElement(Ot,{buttonProps:Object.assign(Object.assign({size:"small"},Pt(g)),n),actionFn:h,close:C,prefixCls:p("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},f||l?.okText)))},co=e=>{const{prefixCls:t,placement:n,className:o,style:a}=e,m=so(e,["prefixCls","placement","className","style"]),{getPrefixCls:c}=r.useContext(K),f=c("popconfirm",t),[g]=qe(f);return g(r.createElement(_t,{placement:n,className:L(f,o),style:a,content:r.createElement(Qe,Object.assign({prefixCls:f},m))}))};var uo=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const po=r.forwardRef((e,t)=>{var n,o;const{prefixCls:a,placement:m="top",trigger:c="click",okType:f="primary",icon:g=r.createElement(De,null),children:x,overlayClassName:v,onOpenChange:C,onVisibleChange:h,overlayStyle:u,styles:i,classNames:p}=e,l=uo(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange","overlayStyle","styles","classNames"]),{getPrefixCls:s,className:E,style:O,classNames:w,styles:I}=Le("popconfirm"),[j,S]=Ne(!1,{value:(n=e.open)!==null&&n!==void 0?n:e.visible,defaultValue:(o=e.defaultOpen)!==null&&o!==void 0?o:e.defaultVisible}),d=($,T)=>{S($,!0),h?.($),C?.($,T)},P=$=>{d(!1,$)},q=$=>{var T;return(T=e.onConfirm)===null||T===void 0?void 0:T.call(void 0,$)},F=$=>{var T;d(!1,$),(T=e.onCancel)===null||T===void 0||T.call(void 0,$)},Q=($,T)=>{const{disabled:Y=!1}=e;Y||d($,T)},M=s("popconfirm",a),X=L(M,E,v,w.root,p?.root),b=L(w.body,p?.body),[A]=qe(M);return A(r.createElement(wt,Object.assign({},Be(l,["title"]),{trigger:c,placement:m,onOpenChange:Q,open:j,ref:t,classNames:{root:X,body:b},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},I.root),O),u),i?.root),body:Object.assign(Object.assign({},I.body),i?.body)},content:r.createElement(Qe,Object.assign({okType:f,icon:g},e,{prefixCls:M,close:P,onConfirm:q,onCancel:F})),"data-popover-inject":!0}),x))}),Xe=po;Xe._InternalPanelDoNotUseOrYouWillBeFired=co;const mo=G.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  max-width: 450px;
  min-width: 300px;
  margin: 20px 30px 100px;
  padding: 35px;
  border-radius: 30px;
  background-color: var(--color-wrapper);
  box-shadow:var(--color-box-shadow);
`,go=G.h1`
  font-size: 30px;
  color: var(--color-font-primary);
  text-align: center;
  margin-bottom: 25px;
`,fo=G(Ce.Item)`
  height: 60px;
  border: none !important;
`,vo=G.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 8px 14px;
  border-radius: 6px;
  background-color: var(--color-bg-card);
  transition: background-color 0.15s ease-in;
  &:hover {
    background-color: var(--color-bg-card-hover);
    box-shadow: var(--color-card-box-shadow);
  }
`,bo=G.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`,ho=G(It)`
  padding: 12px 14px;
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  border: 2px solid var(--color-border-input);
  background-color: var(--color-bg-input);
  color: var(--color-font-primary);
  &:hover {
    background-color: var(--color-bg-input-hover);
    border-color: var(--color-primary);
  }
  &:focus {
    background-color: var(--color-bg-input-hover);
    outline: none;
    border-color: var(--color-primary);
    box-shadow: var(--color-input-box-shadow);
  }
  &::placeholder {
    color: var(--color-font-ext-name);
  }
`,yo=G(le)`
  padding: 0 11px;
  height: 47px;
  color: var(--color-font-primary-btn);
  font-size: 12px;
  background-color: var(--color-bg-primary-btn);
  border: none !important;
  &:hover {
    color: var(--color-font-primary-btn) !important;
    background-color: var(--color-primary) !important;
    border: none !important;
  }
  &:disabled {
    background-color: var(--color-bg-primary-btn-disabled) !important;
    color: var(--color-font-not-active);
  }
  &:disabled:hover {
    color: var(--color-font-not-active) !important;
  }
`,xo=G.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({$completed:e})=>e?"var(--color-crossed)":"var(--color-font-description)"};
  text-decoration: ${({$completed:e})=>e?"line-through":"none"};
  font-size: 13px;
`,Co=G.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 24px;
`,je=G(le)`
  &&.ant-btn {
    background-color: ${({$isActive:e})=>e?"var(--color-primary)":"var(--color-bg-primary-btn)"};
    color: ${({$isActive:e})=>"var(--color-font)"};
    border: none;
    height: 40px;
    font-size: 13px;
    padding: 0 16px;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({$isActive:e})=>e?"var(--color-primary-hover)":"var(--color-bg-primary-btn-hover)"};
      color: var(--color-font);
    }
  }
`,So=G(le)`
background-color: transparent !important;
  .anticon {
    font-size: 18px !important;
    color: var(--color-icon);
    transition: all 0.3s;
  }
  &:hover {
    .anticon {
      font-size: 18px !important;
      color: var(--color-delete);
    }
  }
`,$o=G(ye)`
  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-checkbox);
    border: 1px solid var(--color-checkbox-border);
    transition: all 0.3s;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    top: 9.5px;
    left: 6px;
    height: 10px;
    width: 6px;
    border-color: var(--color-font-check);
  }

  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: var(--color-primary);
  }

  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--color-primary);
  }
  .ant-checkbox-checked:hover .ant-checkbox-inner {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
}
`,Eo=vt`
  .custom-confirm {
    .ant-popover-inner {
      background-color: var(--color-bg-toast);
    }
    .ant-popconfirm-title {
      color: var(--color-font-name)!important;;
      font-weight: bold;
    }
    .ant-popconfirm-description {
      color: var(--color-font-description) !important;
    }
    .ant-btn-primary {
      background-color: var(--color-delete);
      font-size: 11px;
      &:hover {
        background-color: var(--color-delete-hover) !important;
      }
    }
    .ant-btn-default {
      background-color: var(--color-bg-primary-btn);
      color: #fff !important;
      border: none !important;
      font-size: 11px;
      &:hover {
        background-color: var(--color-bg-primary-btn-hover) !important;
        border: none !important;
      }
    }
    .ant-popover-arrow::before {
    background: var(--color-bg-toast);
    box-shadow: none;
  }
  }

`,To=e=>y.jsxs(y.Fragment,{children:[y.jsx(Eo,{}),y.jsx(Xe,{...e,overlayClassName:`custom-confirm ${e.overlayClassName||""}`})]}),Oo=({todo:e,actions:t})=>y.jsx(fo,{children:y.jsxs(vo,{children:[y.jsx($o,{checked:e.completed||!1,onClick:()=>t.updateTodo(e.id||"")}),y.jsx(xo,{$completed:e.completed||!1,children:e.title}),y.jsx(To,{title:Ve.DELETE_TODO_TITLE,description:ee.DELETE_ITEM,onConfirm:()=>t.deleteTodo(e.id||""),okText:ee.YES,cancelText:ee.NO,children:y.jsx(So,{type:"text",icon:y.jsx(jt,{})})})]})});var re,Po=new Uint8Array(16);function _o(){if(!re&&(re=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!re))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return re(Po)}const wo=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Io(e){return typeof e=="string"&&wo.test(e)}var z=[];for(var ve=0;ve<256;++ve)z.push((ve+256).toString(16).substr(1));function jo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(z[e[t+0]]+z[e[t+1]]+z[e[t+2]]+z[e[t+3]]+"-"+z[e[t+4]]+z[e[t+5]]+"-"+z[e[t+6]]+z[e[t+7]]+"-"+z[e[t+8]]+z[e[t+9]]+"-"+z[e[t+10]]+z[e[t+11]]+z[e[t+12]]+z[e[t+13]]+z[e[t+14]]+z[e[t+15]]).toLowerCase();if(!Io(n))throw TypeError("Stringified UUID is invalid");return n}function Ro(e,t,n){e=e||{};var o=e.random||(e.rng||_o)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,jo(o)}var _;(function(e){e.SET_ERROR="SET_ERROR",e.RESET_ERROR="RESET_ERROR",e.SET_TODO_TITLE="SET_TODO_TITLE",e.RESET_TODO_TITLE="RESET_TODO_TITLE",e.SET_ACTIVE_TODO="SET_ACTIVE_TODO",e.SET_ACTIVE_BUTTON="SET_ACTIVE_BUTTON",e.SET_PAGE="SET_PAGE",e.SET_PAGESIZE="SET_PAGESIZE"})(_||(_={}));const No={mutationError:null,todoTitle:"",activeTodo:"",activeButton:"all",page:1,pageSize:10};function ko(e,t){switch(t.type){case _.SET_TODO_TITLE:return{...e,todoTitle:t.payload};case _.RESET_TODO_TITLE:return{...e,todoTitle:""};case _.SET_ERROR:return{...e,mutationError:t.payload};case _.RESET_ERROR:return{...e,mutationError:null};case _.SET_ACTIVE_TODO:return{...e,activeTodo:t.payload};case _.SET_ACTIVE_BUTTON:return{...e,activeButton:t.payload};case _.SET_PAGE:return{...e,page:t.payload};case _.SET_PAGESIZE:return{...e,pageSize:t.payload};default:return e}}var be;(function(e){e.Gte="GTE",e.Like="LIKE",e.Lte="LTE",e.Ne="NE"})(be||(be={}));var Re;(function(e){e.Asc="ASC",e.Desc="DESC"})(Re||(Re={}));const J={all:"all",completed:"completed"};function zo(){const[e,t]=r.useReducer(ko,No),{data:n,isLoading:o,error:a,isPlaceholderData:m}=we({options:{paginate:{page:e.page,limit:e.pageSize},...e.activeButton===J.completed&&{operators:[{field:"completed",kind:be.Like,value:"true"}]}}},{staleTime:zt.MINUTE,enabled:!0,placeholderData:bt}),c=r.useMemo(()=>we.getKey({options:{paginate:{page:e.page,limit:e.pageSize}}}),[e.page,e.pageSize]),f=Rt({onMutate:async({input:i})=>{t({type:_.RESET_ERROR}),await D.cancelQueries({queryKey:c});const l=D.getQueryData(c)?.todos??[];return D.setQueryData(c,s=>s?.todos?.data?{...s,todos:{...s.todos,data:[{id:Ro(),...i},...s?.todos?.data??[]]}}:s),{previousTodo:l}},onError:(i,p,l)=>{t({type:_.SET_ERROR,payload:i.message}),Z(i.message),l?.previousTodo&&D.setQueryData(c,{todos:l.previousTodo})},onSuccess:()=>{Z.success(ge.added)}}),g=Nt({onMutate:async({id:i})=>{t({type:_.RESET_ERROR}),await D.cancelQueries({queryKey:c});const p=D.getQueryData(c);return D.setQueryData(c,l=>l?.todos?.data?{...l,todos:{...l.todos,data:l?.todos.data.map(s=>s.id===i?{...s,completed:!s.completed}:s)}}:l),{previousTodos:p?.todos??[]}},onError:async(i,p,l)=>{t({type:_.SET_ERROR,payload:i.message}),Z.error(Ie(i).userMessage||"Произошла ошибка"),l?.previousTodos&&D.setQueryData(c,{todos:l.previousTodos})},onSuccess:async()=>{Z.success(ge.updated)}}),x=kt({onMutate:async({id:i})=>{t({type:_.RESET_ERROR}),await D.cancelQueries({queryKey:c});const p=D.getQueryData(c);return D.setQueryData(c,l=>l?.todos?.data?{...l,todos:{...l.todos,data:l.todos.data.filter(s=>s.id!==i)}}:l),{previousTodos:p?.todos?.data??[]}},onError:(i,p,l)=>{Z.error(Ie(i).userMessage||"Произошла ошибка"),t({type:_.SET_ERROR,payload:i.message}),l?.previousTodos&&D.setQueryData(c,{todos:l.previousTodos})},onSuccess:()=>{Z.success(ge.deletedTodo)},onSettled:()=>{D.invalidateQueries({queryKey:c})}}),v=r.useCallback(async()=>{e.todoTitle&&(await f.mutateAsync({input:{title:e.todoTitle,completed:!1}}),t({type:_.RESET_TODO_TITLE}))},[f,e.todoTitle]),C=r.useCallback(async i=>{const s=D.getQueryData(c)?.todos?.data?.find(E=>E?.id===i)?.completed;await g.mutateAsync({id:i,input:{completed:!s}})},[g,c]),h=r.useCallback(async i=>{await x.mutateAsync({id:i})},[x]),u=i=>{t({type:_.SET_TODO_TITLE,payload:i})};return{state:{todos:n?.todos?.data??[],todoTitle:e.todoTitle,totalCount:n?.todos?.meta?.totalCount,page:e.page,pageSize:e.pageSize,activeButton:e.activeButton,activeTodo:e.activeTodo,mutationError:e.mutationError,isLoading:o,fetchError:a,isPlaceholderData:m},actions:{createTodo:v,updateTodo:C,deleteTodo:h,handleInputChange:u},dispatch:t,setters:{setActiveTodo:i=>t({type:_.SET_ACTIVE_TODO,payload:i}),setActiveButton:i=>t({type:_.SET_ACTIVE_BUTTON,payload:i}),setPage:i=>t({type:_.SET_PAGE,payload:i}),setPageSize:i=>t({type:_.SET_PAGESIZE,payload:i})}}}const Bo=()=>{const{state:e,actions:t,setters:n}=zo();return y.jsxs(mo,{children:[y.jsx(Bt,{position:"top-center"}),y.jsx(go,{children:Ve.todo}),y.jsxs(bo,{children:[y.jsx(ho,{value:e.todoTitle,placeholder:Lt.todoTitle,onChange:o=>t.handleInputChange(o.target.value)}),y.jsx(yo,{disabled:!e.todoTitle.length,onClick:t.createTodo,children:fe.add})]}),e.isLoading?y.jsx(Me,{tip:ee.loading,size:"large"}):e.fetchError?y.jsx("span",{children:ee.errorFetchData}):e?.todos.length?y.jsx(Ce,{children:e?.todos?.filter(o=>o!=null).map(o=>y.jsx(Oo,{actions:t,todo:o},o.id))}):y.jsx(Mt,{}),y.jsxs(Co,{children:[y.jsx(je,{$isActive:e.activeButton===J.all,onClick:()=>n.setActiveButton(J.all),children:fe.all}),y.jsx(je,{$isActive:e.activeButton===J.completed,onClick:()=>n.setActiveButton(J.completed),children:fe.done})]}),y.jsx(Dt,{pageSize:e.pageSize,current:e.page,total:e.totalCount??0,pageSizeOptions:Vt,isPlaceholderData:e.isPlaceholderData,onChange:(o,a)=>{n.setPage(o),n.setPageSize(a)}})]})},Do=()=>y.jsx(y.Fragment,{children:y.jsx(ht,{children:y.jsx(Bo,{})})});export{Do as default};

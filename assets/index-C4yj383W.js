import{r,_ as nt,u as je,a as rt,c as L,b as Se,d as at,e as Ee,f as B,w as Te,g as be,m as Re,h as ae,i as z,j as it,C as K,F as lt,D as st,k as ct,l as Ne,T as dt,W as ut,o as ze,n as ie,p as pt,q as ke,s as mt,S as Be,t as gt,v as G,x as ft,y,z as D,P as vt}from"./index-BSrCGk7x.js";import{C as bt,m as ht,P as yt,u as xt,r as Oe,R as Ct,D as $t,a as Le,b as St,g as Pe,B as le,A as Et,c as Tt,d as Ot,e as Pt,I as _t,M as ee,T as Me,f as wt,h as _e,i as It,j as jt,k as Rt,l as Nt,y as Z,n as ge,o as we,S as zt,p as kt,q as fe,N as Bt,s as Lt,t as Mt}from"./ToastStyles-qv8yg1U2.js";var Vt=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],Dt=r.forwardRef(function(e,t){var n=e.prefixCls,o=n===void 0?"rc-checkbox":n,a=e.className,s=e.style,g=e.checked,f=e.disabled,m=e.defaultChecked,x=m===void 0?!1:m,v=e.type,C=v===void 0?"checkbox":v,h=e.title,i=e.onChange,u=nt(e,Vt),l=r.useRef(null),c=r.useRef(null),p=je(x,{value:g}),P=rt(p,2),T=P[0],w=P[1];r.useImperativeHandle(t,function(){return{focus:function(d){var O;(O=l.current)===null||O===void 0||O.focus(d)},blur:function(){var d;(d=l.current)===null||d===void 0||d.blur()},input:l.current,nativeElement:c.current}});var I=L(o,a,Se(Se({},"".concat(o,"-checked"),T),"".concat(o,"-disabled"),f)),j=function(d){f||("checked"in e||w(d.target.checked),i?.({target:Ee(Ee({},e),{},{type:C,checked:d.target.checked}),stopPropagation:function(){d.stopPropagation()},preventDefault:function(){d.preventDefault()},nativeEvent:d.nativeEvent}))};return r.createElement("span",{className:I,title:h,style:s,ref:c},r.createElement("input",at({},u,{className:"".concat(o,"-input"),ref:l,onChange:j,disabled:f,checked:!!T,type:C})),r.createElement("span",{className:"".concat(o,"-inner")}))});function At(e){const t=B.useRef(null),n=()=>{Te.cancel(t.current),t.current=null};return[()=>{n(),t.current=Te(()=>{t.current=null})},s=>{t.current&&(s.stopPropagation(),n()),e?.(s)}]}const Gt=e=>{const{checkboxCls:t}=e,n=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},ae(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[n]:Object.assign(Object.assign({},ae(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${n}`]:{marginInlineStart:0},[`&${n}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},ae(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},it(e))},[`${t}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${z(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${z(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${n}:not(${n}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${n}:not(${n}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${n}-checked:not(${n}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{"&":{[`${t}-inner`]:{backgroundColor:`${e.colorBgContainer}`,borderColor:`${e.colorBorder}`,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${t}-inner`]:{backgroundColor:`${e.colorBgContainer}`,borderColor:`${e.colorPrimary}`}}}}},{[`${n}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function Wt(e,t){const n=Re(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[Gt(n)]}const Ve=be("Checkbox",(e,{prefixCls:t})=>[Wt(t,e)]),De=B.createContext(null);var Ht=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Ft=(e,t)=>{var n;const{prefixCls:o,className:a,rootClassName:s,children:g,indeterminate:f=!1,style:m,onMouseEnter:x,onMouseLeave:v,skipGroup:C=!1,disabled:h}=e,i=Ht(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:u,direction:l,checkbox:c}=r.useContext(K),p=r.useContext(De),{isFormItemInput:P}=r.useContext(lt),T=r.useContext(st),w=(n=p?.disabled||h)!==null&&n!==void 0?n:T,I=r.useRef(i.value),j=r.useRef(null),$=ct(t,j);r.useEffect(()=>{p?.registerValue(i.value)},[]),r.useEffect(()=>{if(!C)return i.value!==I.current&&(p?.cancelValue(I.current),p?.registerValue(i.value),I.current=i.value),()=>p?.cancelValue(i.value)},[i.value]),r.useEffect(()=>{var E;!((E=j.current)===null||E===void 0)&&E.input&&(j.current.input.indeterminate=f)},[f]);const d=u("checkbox",o),O=Ne(d),[X,F,q]=Ve(d,O),M=Object.assign({},i);p&&!C&&(M.onChange=(...E)=>{i.onChange&&i.onChange.apply(i,E),p.toggleOption&&p.toggleOption({label:g,value:i.value})},M.name=p.name,M.checked=p.value.includes(i.value));const Q=L(`${d}-wrapper`,{[`${d}-rtl`]:l==="rtl",[`${d}-wrapper-checked`]:M.checked,[`${d}-wrapper-disabled`]:w,[`${d}-wrapper-in-form-item`]:P},c?.className,a,s,q,O,F),b=L({[`${d}-indeterminate`]:f},dt,F),[A,S]=At(M.onClick);return X(r.createElement(ut,{component:"Checkbox",disabled:w},r.createElement("label",{className:Q,style:Object.assign(Object.assign({},c?.style),m),onMouseEnter:x,onMouseLeave:v,onClick:A},r.createElement(Dt,Object.assign({},M,{onClick:S,prefixCls:d,className:b,disabled:w,ref:$})),g!=null&&r.createElement("span",{className:`${d}-label`},g))))},Ae=r.forwardRef(Ft);var Xt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const qt=r.forwardRef((e,t)=>{const{defaultValue:n,children:o,options:a=[],prefixCls:s,className:g,rootClassName:f,style:m,onChange:x}=e,v=Xt(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:C,direction:h}=r.useContext(K),[i,u]=r.useState(v.value||n||[]),[l,c]=r.useState([]);r.useEffect(()=>{"value"in v&&u(v.value||[])},[v.value]);const p=r.useMemo(()=>a.map(b=>typeof b=="string"||typeof b=="number"?{label:b,value:b}:b),[a]),P=b=>{c(A=>A.filter(S=>S!==b))},T=b=>{c(A=>[].concat(ie(A),[b]))},w=b=>{const A=i.indexOf(b.value),S=ie(i);A===-1?S.push(b.value):S.splice(A,1),"value"in v||u(S),x?.(S.filter(E=>l.includes(E)).sort((E,Y)=>{const se=p.findIndex(R=>R.value===E),ce=p.findIndex(R=>R.value===Y);return se-ce}))},I=C("checkbox",s),j=`${I}-group`,$=Ne(I),[d,O,X]=Ve(I,$),F=ze(v,["value","disabled"]),q=a.length?p.map(b=>r.createElement(Ae,{prefixCls:I,key:b.value.toString(),disabled:"disabled"in b?b.disabled:v.disabled,value:b.value,checked:i.includes(b.value),onChange:b.onChange,className:L(`${j}-item`,b.className),style:b.style,title:b.title,id:b.id,required:b.required},b.label)):o,M=r.useMemo(()=>({toggleOption:w,value:i,disabled:v.disabled,name:v.name,registerValue:T,cancelValue:P}),[w,i,v.disabled,v.name,T,P]),Q=L(j,{[`${j}-rtl`]:h==="rtl"},g,f,X,$,O);return d(r.createElement("div",Object.assign({className:Q,style:m},F,{ref:t}),r.createElement(De.Provider,{value:M},q)))}),he=Ae;he.Group=qt;he.__ANT_CHECKBOX=!0;const ye=B.createContext({});ye.Consumer;var Ge=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Qt=e=>{var{prefixCls:t,className:n,avatar:o,title:a,description:s}=e,g=Ge(e,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:f}=r.useContext(K),m=f("list",t),x=L(`${m}-item-meta`,n),v=B.createElement("div",{className:`${m}-item-meta-content`},a&&B.createElement("h4",{className:`${m}-item-meta-title`},a),s&&B.createElement("div",{className:`${m}-item-meta-description`},s));return B.createElement("div",Object.assign({},g,{className:x}),o&&B.createElement("div",{className:`${m}-item-meta-avatar`},o),(a||s)&&v)},Ut=B.forwardRef((e,t)=>{const{prefixCls:n,children:o,actions:a,extra:s,styles:g,className:f,classNames:m,colStyle:x}=e,v=Ge(e,["prefixCls","children","actions","extra","styles","className","classNames","colStyle"]),{grid:C,itemLayout:h}=r.useContext(ye),{getPrefixCls:i,list:u}=r.useContext(K),l=$=>{var d,O;return L((O=(d=u?.item)===null||d===void 0?void 0:d.classNames)===null||O===void 0?void 0:O[$],m?.[$])},c=$=>{var d,O;return Object.assign(Object.assign({},(O=(d=u?.item)===null||d===void 0?void 0:d.styles)===null||O===void 0?void 0:O[$]),g?.[$])},p=()=>{let $=!1;return r.Children.forEach(o,d=>{typeof d=="string"&&($=!0)}),$&&r.Children.count(o)>1},P=()=>h==="vertical"?!!s:!p(),T=i("list",n),w=a&&a.length>0&&B.createElement("ul",{className:L(`${T}-item-action`,l("actions")),key:"actions",style:c("actions")},a.map(($,d)=>B.createElement("li",{key:`${T}-item-action-${d}`},$,d!==a.length-1&&B.createElement("em",{className:`${T}-item-action-split`})))),I=C?"div":"li",j=B.createElement(I,Object.assign({},v,C?{}:{ref:t},{className:L(`${T}-item`,{[`${T}-item-no-flex`]:!P()},f)}),h==="vertical"&&s?[B.createElement("div",{className:`${T}-item-main`,key:"content"},o,w),B.createElement("div",{className:L(`${T}-item-extra`,l("extra")),key:"extra",style:c("extra")},s)]:[o,w,pt(s,{key:"extra"})]);return C?B.createElement(bt,{ref:t,flex:1,style:x},j):j}),We=Ut;We.Meta=Qt;const Kt=e=>{const{listBorderedCls:t,componentCls:n,paddingLG:o,margin:a,itemPaddingSM:s,itemPaddingLG:g,marginLG:f,borderRadiusLG:m}=e;return{[t]:{border:`${z(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:m,[`${n}-header,${n}-footer,${n}-item`]:{paddingInline:o},[`${n}-pagination`]:{margin:`${z(a)} ${z(f)}`}},[`${t}${n}-sm`]:{[`${n}-item,${n}-header,${n}-footer`]:{padding:s}},[`${t}${n}-lg`]:{[`${n}-item,${n}-header,${n}-footer`]:{padding:g}}}},Zt=e=>{const{componentCls:t,screenSM:n,screenMD:o,marginLG:a,marginSM:s,margin:g}=e;return{[`@media screen and (max-width:${o}px)`]:{[t]:{[`${t}-item`]:{[`${t}-item-action`]:{marginInlineStart:a}}},[`${t}-vertical`]:{[`${t}-item`]:{[`${t}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${n}px)`]:{[t]:{[`${t}-item`]:{flexWrap:"wrap",[`${t}-action`]:{marginInlineStart:s}}},[`${t}-vertical`]:{[`${t}-item`]:{flexWrap:"wrap-reverse",[`${t}-item-main`]:{minWidth:e.contentWidth},[`${t}-item-extra`]:{margin:`auto auto ${z(g)}`}}}}}},Yt=e=>{const{componentCls:t,antCls:n,controlHeight:o,minHeight:a,paddingSM:s,marginLG:g,padding:f,itemPadding:m,colorPrimary:x,itemPaddingSM:v,itemPaddingLG:C,paddingXS:h,margin:i,colorText:u,colorTextDescription:l,motionDurationSlow:c,lineWidth:p,headerBg:P,footerBg:T,emptyTextPadding:w,metaMarginBottom:I,avatarMarginRight:j,titleMarginBottom:$,descriptionFontSize:d}=e;return{[t]:Object.assign(Object.assign({},ae(e)),{position:"relative","--rc-virtual-list-scrollbar-bg":e.colorSplit,"*":{outline:"none"},[`${t}-header`]:{background:P},[`${t}-footer`]:{background:T},[`${t}-header, ${t}-footer`]:{paddingBlock:s},[`${t}-pagination`]:{marginBlockStart:g,[`${n}-pagination-options`]:{textAlign:"start"}},[`${t}-spin`]:{minHeight:a,textAlign:"center"},[`${t}-items`]:{margin:0,padding:0,listStyle:"none"},[`${t}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:m,color:u,[`${t}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${t}-item-meta-avatar`]:{marginInlineEnd:j},[`${t}-item-meta-content`]:{flex:"1 0",width:0,color:u},[`${t}-item-meta-title`]:{margin:`0 0 ${z(e.marginXXS)} 0`,color:u,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":{color:u,transition:`all ${c}`,"&:hover":{color:x}}},[`${t}-item-meta-description`]:{color:l,fontSize:d,lineHeight:e.lineHeight}},[`${t}-item-action`]:{flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${z(h)}`,color:l,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${t}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:p,height:e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),transform:"translateY(-50%)",backgroundColor:e.colorSplit}}},[`${t}-empty`]:{padding:`${z(f)} 0`,color:l,fontSize:e.fontSizeSM,textAlign:"center"},[`${t}-empty-text`]:{padding:w,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"},[`${t}-item-no-flex`]:{display:"block"}}),[`${t}-grid ${n}-col > ${t}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:i,paddingBlock:0,borderBlockEnd:"none"},[`${t}-vertical ${t}-item`]:{alignItems:"initial",[`${t}-item-main`]:{display:"block",flex:1},[`${t}-item-extra`]:{marginInlineStart:g},[`${t}-item-meta`]:{marginBlockEnd:I,[`${t}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:$,color:u,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}},[`${t}-item-action`]:{marginBlockStart:f,marginInlineStart:"auto","> li":{padding:`0 ${z(f)}`,"&:first-child":{paddingInlineStart:0}}}},[`${t}-split ${t}-item`]:{borderBlockEnd:`${z(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${t}-split ${t}-header`]:{borderBlockEnd:`${z(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-split${t}-empty ${t}-footer`]:{borderTop:`${z(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-loading ${t}-spin-nested-loading`]:{minHeight:o},[`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]:{borderBlockEnd:`${z(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},[`${t}-lg ${t}-item`]:{padding:C},[`${t}-sm ${t}-item`]:{padding:v},[`${t}:not(${t}-vertical)`]:{[`${t}-item-no-flex`]:{[`${t}-item-action`]:{float:"right"}}}}},Jt=e=>({contentWidth:220,itemPadding:`${z(e.paddingContentVertical)} 0`,itemPaddingSM:`${z(e.paddingContentVerticalSM)} ${z(e.paddingContentHorizontal)}`,itemPaddingLG:`${z(e.paddingContentVerticalLG)} ${z(e.paddingContentHorizontalLG)}`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:e.padding,metaMarginBottom:e.padding,avatarMarginRight:e.padding,titleMarginBottom:e.paddingSM,descriptionFontSize:e.fontSize}),eo=be("List",e=>{const t=Re(e,{listBorderedCls:`${e.componentCls}-bordered`,minHeight:e.controlHeightLG});return[Yt(t),Kt(t),Zt(t)]},Jt);var to=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};function oo(e,t){const{pagination:n=!1,prefixCls:o,bordered:a=!1,split:s=!0,className:g,rootClassName:f,style:m,children:x,itemLayout:v,loadMore:C,grid:h,dataSource:i=[],size:u,header:l,footer:c,loading:p=!1,rowKey:P,renderItem:T,locale:w}=e,I=to(e,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),j=n&&typeof n=="object"?n:{},[$,d]=r.useState(j.defaultCurrent||1),[O,X]=r.useState(j.defaultPageSize||10),{getPrefixCls:F,direction:q,className:M,style:Q}=ke("list"),{renderEmpty:b}=r.useContext(K),A={current:1,total:0,position:"bottom"},S=N=>(V,H)=>{var me;d(V),X(H),n&&((me=n?.[N])===null||me===void 0||me.call(n,V,H))},E=S("onChange"),Y=S("onShowSizeChange"),se=(N,V)=>{if(!T)return null;let H;return typeof P=="function"?H=P(N):P?H=N[P]:H=N.key,H||(H=`list-item-${V}`),r.createElement(r.Fragment,{key:H},T(N,V))},ce=!!(C||n||c),R=F("list",o),[Qe,Ue,Ke]=eo(R);let U=p;typeof U=="boolean"&&(U={spinning:U});const de=!!U?.spinning,Ze=mt(u);let te="";switch(Ze){case"large":te="lg";break;case"small":te="sm";break}const Ye=L(R,{[`${R}-vertical`]:v==="vertical",[`${R}-${te}`]:te,[`${R}-split`]:s,[`${R}-bordered`]:a,[`${R}-loading`]:de,[`${R}-grid`]:!!h,[`${R}-something-after-last-item`]:ce,[`${R}-rtl`]:q==="rtl"},M,g,f,Ue,Ke),W=ht(A,{total:i.length,current:$,pageSize:O},n||{}),Je=Math.ceil(W.total/W.pageSize);W.current=Math.min(W.current,Je);const Ce=n&&r.createElement("div",{className:L(`${R}-pagination`)},r.createElement(yt,Object.assign({align:"end"},W,{onChange:E,onShowSizeChange:Y})));let ue=ie(i);n&&i.length>(W.current-1)*W.pageSize&&(ue=ie(i).splice((W.current-1)*W.pageSize,W.pageSize));const et=Object.keys(h||{}).some(N=>["xs","sm","md","lg","xl","xxl"].includes(N)),$e=xt(et),oe=r.useMemo(()=>{for(let N=0;N<Oe.length;N+=1){const V=Oe[N];if($e[V])return V}},[$e]),tt=r.useMemo(()=>{if(!h)return;const N=oe&&h[oe]?h[oe]:h.column;if(N)return{width:`${100/N}%`,maxWidth:`${100/N}%`}},[JSON.stringify(h),oe]);let pe=de&&r.createElement("div",{style:{minHeight:53}});if(ue.length>0){const N=ue.map(se);pe=h?r.createElement(Ct,{gutter:h.gutter},r.Children.map(N,V=>r.createElement("div",{key:V?.key,style:tt},V))):r.createElement("ul",{className:`${R}-items`},N)}else!x&&!de&&(pe=r.createElement("div",{className:`${R}-empty-text`},w?.emptyText||b?.("List")||r.createElement($t,{componentName:"List"})));const ne=W.position,ot=r.useMemo(()=>({grid:h,itemLayout:v}),[JSON.stringify(h),v]);return Qe(r.createElement(ye.Provider,{value:ot},r.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},Q),m),className:Ye},I),(ne==="top"||ne==="both")&&Ce,l&&r.createElement("div",{className:`${R}-header`},l),r.createElement(Be,Object.assign({},U),pe,x),c&&r.createElement("div",{className:`${R}-footer`},c),C||(ne==="bottom"||ne==="both")&&Ce)))}const no=r.forwardRef(oo),xe=no;xe.Item=We;const ro=e=>{const{componentCls:t,iconCls:n,antCls:o,zIndexPopup:a,colorText:s,colorWarning:g,marginXXS:f,marginXS:m,fontSize:x,fontWeightStrong:v,colorTextHeading:C}=e;return{[t]:{zIndex:a,[`&${o}-popover`]:{fontSize:x},[`${t}-message`]:{marginBottom:m,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${n}`]:{color:g,fontSize:x,lineHeight:1,marginInlineEnd:m},[`${t}-title`]:{fontWeight:v,color:C,"&:only-child":{fontWeight:"normal"}},[`${t}-description`]:{marginTop:f,color:s}},[`${t}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:m}}}}},ao=e=>{const{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}},He=be("Popconfirm",e=>ro(e),ao,{resetStyle:!1});var io=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Fe=e=>{const{prefixCls:t,okButtonProps:n,cancelButtonProps:o,title:a,description:s,cancelText:g,okText:f,okType:m="primary",icon:x=r.createElement(Le,null),showCancel:v=!0,close:C,onConfirm:h,onCancel:i,onPopupClick:u}=e,{getPrefixCls:l}=r.useContext(K),[c]=St("Popconfirm",gt.Popconfirm),p=Pe(a),P=Pe(s);return r.createElement("div",{className:`${t}-inner-content`,onClick:u},r.createElement("div",{className:`${t}-message`},x&&r.createElement("span",{className:`${t}-message-icon`},x),r.createElement("div",{className:`${t}-message-text`},p&&r.createElement("div",{className:`${t}-title`},p),P&&r.createElement("div",{className:`${t}-description`},P))),r.createElement("div",{className:`${t}-buttons`},v&&r.createElement(le,Object.assign({onClick:i,size:"small"},o),g||c?.cancelText),r.createElement(Et,{buttonProps:Object.assign(Object.assign({size:"small"},Tt(m)),n),actionFn:h,close:C,prefixCls:l("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},f||c?.okText)))},lo=e=>{const{prefixCls:t,placement:n,className:o,style:a}=e,s=io(e,["prefixCls","placement","className","style"]),{getPrefixCls:g}=r.useContext(K),f=g("popconfirm",t),[m]=He(f);return m(r.createElement(Ot,{placement:n,className:L(f,o),style:a,content:r.createElement(Fe,Object.assign({prefixCls:f},s))}))};var so=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const co=r.forwardRef((e,t)=>{var n,o;const{prefixCls:a,placement:s="top",trigger:g="click",okType:f="primary",icon:m=r.createElement(Le,null),children:x,overlayClassName:v,onOpenChange:C,onVisibleChange:h,overlayStyle:i,styles:u,classNames:l}=e,c=so(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange","overlayStyle","styles","classNames"]),{getPrefixCls:p,className:P,style:T,classNames:w,styles:I}=ke("popconfirm"),[j,$]=je(!1,{value:(n=e.open)!==null&&n!==void 0?n:e.visible,defaultValue:(o=e.defaultOpen)!==null&&o!==void 0?o:e.defaultVisible}),d=(S,E)=>{$(S,!0),h?.(S),C?.(S,E)},O=S=>{d(!1,S)},X=S=>{var E;return(E=e.onConfirm)===null||E===void 0?void 0:E.call(void 0,S)},F=S=>{var E;d(!1,S),(E=e.onCancel)===null||E===void 0||E.call(void 0,S)},q=(S,E)=>{const{disabled:Y=!1}=e;Y||d(S,E)},M=p("popconfirm",a),Q=L(M,P,v,w.root,l?.root),b=L(w.body,l?.body),[A]=He(M);return A(r.createElement(Pt,Object.assign({},ze(c,["title"]),{trigger:g,placement:s,onOpenChange:q,open:j,ref:t,classNames:{root:Q,body:b},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},I.root),T),i),u?.root),body:Object.assign(Object.assign({},I.body),u?.body)},content:r.createElement(Fe,Object.assign({okType:f,icon:m},e,{prefixCls:M,close:O,onConfirm:X,onCancel:F})),"data-popover-inject":!0}),x))}),Xe=co;Xe._InternalPanelDoNotUseOrYouWillBeFired=lo;const uo=G.div`
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
`,po=G.h1`
  font-size: 30px;
  color: var(--color-font-primary);
  text-align: center;
  margin-bottom: 25px;
`,mo=G(xe.Item)`
  height: 60px;
  border: none !important;
`,go=G.div`
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
`,fo=G.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`,vo=G(_t)`
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
`,bo=G(le)`
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
`,ho=G.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({$completed:e})=>e?"var(--color-crossed)":"var(--color-font-description)"};
  text-decoration: ${({$completed:e})=>e?"line-through":"none"};
  font-size: 13px;
`,yo=G.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 24px;
`,Ie=G(le)`
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
`,xo=G(le)`
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
`,Co=G(he)`
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
`,$o=ft`
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

`,So=e=>y.jsxs(y.Fragment,{children:[y.jsx($o,{}),y.jsx(Xe,{...e,overlayClassName:`custom-confirm ${e.overlayClassName||""}`})]}),Eo=({todo:e,actions:t})=>y.jsx(mo,{children:y.jsxs(go,{children:[y.jsx(Co,{checked:e.completed||!1,onClick:()=>t.updateTodo(e.id||"")}),y.jsx(ho,{$completed:e.completed||!1,children:e.title}),y.jsx(So,{title:Me.DELETE_TODO_TITLE,description:ee.DELETE_ITEM,onConfirm:()=>t.deleteTodo(e.id||""),okText:ee.YES,cancelText:ee.NO,children:y.jsx(xo,{type:"text",icon:y.jsx(wt,{})})})]})});var re,To=new Uint8Array(16);function Oo(){if(!re&&(re=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!re))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return re(To)}const Po=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function _o(e){return typeof e=="string"&&Po.test(e)}var k=[];for(var ve=0;ve<256;++ve)k.push((ve+256).toString(16).substr(1));function wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(k[e[t+0]]+k[e[t+1]]+k[e[t+2]]+k[e[t+3]]+"-"+k[e[t+4]]+k[e[t+5]]+"-"+k[e[t+6]]+k[e[t+7]]+"-"+k[e[t+8]]+k[e[t+9]]+"-"+k[e[t+10]]+k[e[t+11]]+k[e[t+12]]+k[e[t+13]]+k[e[t+14]]+k[e[t+15]]).toLowerCase();if(!_o(n))throw TypeError("Stringified UUID is invalid");return n}function Io(e,t,n){e=e||{};var o=e.random||(e.rng||Oo)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,wo(o)}var _=(e=>(e.SET_ERROR="SET_ERROR",e.RESET_ERROR="RESET_ERROR",e.SET_TODO_TITLE="SET_TODO_TITLE",e.RESET_TODO_TITLE="RESET_TODO_TITLE",e.SET_ACTIVE_TODO="SET_ACTIVE_TODO",e.SET_ACTIVE_BUTTON="SET_ACTIVE_BUTTON",e.SET_PAGE="SET_PAGE",e.SET_PAGESIZE="SET_PAGESIZE",e))(_||{});const jo={mutationError:null,todoTitle:"",activeTodo:"",activeButton:"all",page:1,pageSize:10};function Ro(e,t){switch(t.type){case _.SET_TODO_TITLE:return{...e,todoTitle:t.payload};case _.RESET_TODO_TITLE:return{...e,todoTitle:""};case _.SET_ERROR:return{...e,mutationError:t.payload};case _.RESET_ERROR:return{...e,mutationError:null};case _.SET_ACTIVE_TODO:return{...e,activeTodo:t.payload};case _.SET_ACTIVE_BUTTON:return{...e,activeButton:t.payload};case _.SET_PAGE:return{...e,page:t.payload};case _.SET_PAGESIZE:return{...e,pageSize:t.payload};default:return e}}var qe=(e=>(e.Gte="GTE",e.Like="LIKE",e.Lte="LTE",e.Ne="NE",e))(qe||{});const J={all:"all",completed:"completed"};function No(){const[e,t]=r.useReducer(Ro,jo),{data:n,isLoading:o,error:a}=_e({options:{paginate:{page:e.page,limit:e.pageSize},...e.activeButton===J.completed&&{operators:[{field:"completed",kind:qe.Like,value:"true"}]}}},{staleTime:Nt.MINUTE,enabled:!0}),s=r.useMemo(()=>_e.getKey({options:{paginate:{page:e.page,limit:e.pageSize}}}),[e.page,e.pageSize]),g=It({onMutate:async({input:i})=>{t({type:_.RESET_ERROR}),await D.cancelQueries({queryKey:s});const l=D.getQueryData(s)?.todos??[];return D.setQueryData(s,c=>c?.todos?.data?{...c,todos:{...c.todos,data:[{id:Io(),...i},...c?.todos?.data??[]]}}:c),{previousTodo:l}},onError:(i,u,l)=>{t({type:_.SET_ERROR,payload:i.message}),Z(i.message),l?.previousTodo&&D.setQueryData(s,{todos:l.previousTodo})},onSuccess:()=>{Z.success(ge.added)}}),f=jt({onMutate:async({id:i})=>{t({type:_.RESET_ERROR}),await D.cancelQueries({queryKey:s});const u=D.getQueryData(s);return D.setQueryData(s,l=>l?.todos?.data?{...l,todos:{...l.todos,data:l?.todos.data.map(c=>c.id===i?{...c,completed:!c.completed}:c)}}:l),{previousTodos:u?.todos??[]}},onError:async(i,u,l)=>{t({type:_.SET_ERROR,payload:i.message}),Z.error(we(i)),l?.previousTodos&&D.setQueryData(s,{todos:l.previousTodos})},onSuccess:async()=>{Z.success(ge.updated)}}),m=Rt({onMutate:async({id:i})=>{t({type:_.RESET_ERROR}),await D.cancelQueries({queryKey:s});const u=D.getQueryData(s);return D.setQueryData(s,l=>l?.todos?.data?{...l,todos:{...l.todos,data:l.todos.data.filter(c=>c.id!==i)}}:l),{previousTodos:u?.todos?.data??[]}},onError:(i,u,l)=>{Z.error(we(i)),t({type:_.SET_ERROR,payload:i.message}),l?.previousTodos&&D.setQueryData(s,{todos:l.previousTodos})},onSuccess:()=>{Z.success(ge.deletedTodo)}}),x=r.useCallback(async()=>{e.todoTitle&&(await g.mutateAsync({input:{title:e.todoTitle,completed:!1}}),t({type:_.RESET_TODO_TITLE}))},[g,e.todoTitle]),v=r.useCallback(async i=>{const c=D.getQueryData(s)?.todos?.data?.find(p=>p?.id===i)?.completed;await f.mutateAsync({id:i,input:{completed:!c}})},[f,s]),C=r.useCallback(async i=>{await m.mutateAsync({id:i})},[m]),h=i=>{t({type:_.SET_TODO_TITLE,payload:i})};return{state:{todos:n?.todos?.data??[],todoTitle:e.todoTitle,totalCount:n?.todos?.meta?.totalCount,page:e.page,pageSize:e.pageSize,activeButton:e.activeButton,activeTodo:e.activeTodo,mutationError:e.mutationError,isLoading:o,fetchError:a},actions:{createTodo:x,updateTodo:v,deleteTodo:C,handleInputChange:h},dispatch:t,setters:{setActiveTodo:i=>t({type:_.SET_ACTIVE_TODO,payload:i}),setActiveButton:i=>t({type:_.SET_ACTIVE_BUTTON,payload:i}),setPage:i=>t({type:_.SET_PAGE,payload:i}),setPageSize:i=>t({type:_.SET_PAGESIZE,payload:i})}}}const zo=()=>{const{state:e,actions:t,setters:n}=No();return y.jsxs(uo,{children:[y.jsx(zt,{position:"top-center"}),y.jsx(po,{children:Me.todo}),y.jsxs(fo,{children:[y.jsx(vo,{value:e.todoTitle,placeholder:kt.todoTitle,onChange:o=>t.handleInputChange(o.target.value)}),y.jsx(bo,{disabled:!e.todoTitle.length,onClick:t.createTodo,children:fe.add})]}),e.isLoading?y.jsx(Be,{tip:ee.loading,size:"large"}):e.fetchError?y.jsx("span",{children:ee.errorFetchData}):e?.todos.length?y.jsx(xe,{children:e?.todos?.filter(o=>o!=null).map(o=>y.jsx(Eo,{actions:t,todo:o},o.id))}):y.jsx(Bt,{}),y.jsxs(yo,{children:[y.jsx(Ie,{$isActive:e.activeButton===J.all,onClick:()=>n.setActiveButton(J.all),children:fe.all}),y.jsx(Ie,{$isActive:e.activeButton===J.completed,onClick:()=>n.setActiveButton(J.completed),children:fe.done})]}),y.jsx(Lt,{pageSize:e.pageSize,current:e.page,total:e.totalCount??0,pageSizeOptions:Mt,onChange:(o,a)=>{n.setPage(o),n.setPageSize(a)}})]})},Lo=()=>y.jsx(y.Fragment,{children:y.jsx(vt,{children:y.jsx(zo,{})})});export{Lo as default};

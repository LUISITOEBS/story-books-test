import{j as v}from"./jsx-runtime-BnIj46N_.js";import"./index-CsdIBAqE.js";const C=({label:l,size:g="normal",AllCaps:x=!1,color:h="text-primary",fontColor:L})=>v.jsx("span",{className:`${g} ${h}`,style:{color:L},children:x?l.toUpperCase():l});C.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label Size",defaultValue:{value:"'normal'",computed:!1}},AllCaps:{required:!1,tsType:{name:"boolean"},description:"if true convert to Uppercase",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label color",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const A={title:"UI/labels/MyLabel",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"}}},e={args:{label:"Basic Label"}},a={args:{label:"Secondary Label",size:"h2",color:"text-secondary"}},r={args:{label:"AllCaps Label",size:"h1",AllCaps:!0}},s={args:{label:"CustomColor Label",size:"h1",fontColor:"#FE3E43"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    size: 'h2',
    color: 'text-secondary'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps Label',
    size: 'h1',
    AllCaps: true
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor Label',
    size: 'h1',
    fontColor: '#FE3E43'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const T=["Basic","Secondary","AllCaps","CustomColor"];export{r as AllCaps,e as Basic,s as CustomColor,a as Secondary,T as __namedExportsOrder,A as default};

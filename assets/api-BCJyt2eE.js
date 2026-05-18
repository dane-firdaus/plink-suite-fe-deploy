import{k as U,n as z,aM as D,s as g,o as c,_ as o,aN as M,r as I,u as w,a as E,j as k,c as B,b as F,b5 as K,b6 as L,a6 as T}from"./index-BMP161an.js";function W(r){return U("MuiCircularProgress",r)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const q=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,b,S,$;const a=44,A=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=D(b||(b=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),V=r=>{const{classes:e,variant:s,color:t,disableShrink:u}=r,d={root:["root",s,`color${c(t)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,u&&"circleDisableShrink"]};return F(d,W,e)},Z=g("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${c(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&M(S||(S=l`
      animation: ${0} 1.4s linear infinite;
    `),A)),H=g("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),J=g("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${c(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&M($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),Q=I.forwardRef(function(e,s){const t=w({props:e,name:"MuiCircularProgress"}),{className:u,color:d="primary",disableShrink:_=!1,size:m=40,style:j,thickness:i=3.6,value:p=0,variant:v="indeterminate"}=t,N=E(t,q),n=o({},t,{color:d,disableShrink:_,size:m,thickness:i,value:p,variant:v}),h=V(n),f={},x={},y={};if(v==="determinate"){const C=2*Math.PI*((a-i)/2);f.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(p),f.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return k.jsx(Z,o({className:B(h.root,u),style:o({width:m,height:m},x,j),ownerState:n,ref:s,role:"progressbar"},y,N,{children:k.jsx(H,{className:h.svg,ownerState:n,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:k.jsx(J,{className:h.circle,style:f,ownerState:n,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))}),R=K.create({baseURL:"/api",timeout:1e5});R.interceptors.request.use(r=>{var s,t;const e=(t=(s=L.getState())==null?void 0:s.auth)==null?void 0:t.accessToken;return e&&(r.headers.Authorization=`Bearer ${e}`),r},r=>Promise.reject(r));R.interceptors.response.use(r=>r,r=>{var e;return((e=r==null?void 0:r.response)==null?void 0:e.status)===401&&T(),Promise.reject(r)});export{Q as C,R as a};

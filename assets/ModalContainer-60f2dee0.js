import{d as m,I as p,a as c,_,r as i,w as f,b as u,c as v,o as l,e as d,f as M,g as C}from"./index-b8c88cd9.js";const D=m({components:{IonModal:p,ZebraModal:c(()=>_(()=>import("./ZebraPrinterImage-e73fa36c.js"),["assets/ZebraPrinterImage-e73fa36c.js","assets/index-b8c88cd9.js","assets/index-37e35a8c.css","assets/ZebraPrinterImage-2c18ad09.css"]))},emits:["modalDismissed"],props:{modalName:{type:String}},setup(e,{emit:n}){const o=i(!1),s=i("");function t(){o.value=!1,n("modalDismissed")}return f(e,({modalName:a})=>{a?(s.value=a,o.value=!0):o.value=!1},{deep:!0}),{dismissModal:t,modalIsOpen:o,activeModal:s}}});function I(e,n,o,s,t,a){const r=v("ion-modal");return l(),d(r,{"is-open":e.modalIsOpen},{default:M(()=>[(l(),d(C(e.activeModal),{onOnDismissModal:e.dismissModal},null,40,["onOnDismissModal"]))]),_:1},8,["is-open"])}const $=u(D,[["render",I]]);export{$ as default};
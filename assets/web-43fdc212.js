import{W as n,U as t}from"./index-f9006b3d.js";class l extends n{async write(e){if(e.url)return t.expandPath(e.url).then(r=>{document.location=r});throw new TypeError("Undefined url")}async discover(){return{devices:["webPrinter"]}}}export{l as LabelPrinterWeb};
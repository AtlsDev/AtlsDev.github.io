import{s as b}from"./fileupload.esm-CZ9uIzDH.js";import{d as h,g as x,p as g,q as v,o as c,c as i,e,F as w,i as k,b as l,f as a,a1 as p,t as B,K as y}from"./app-JuXS6bLS.js";import{s as F}from"./image.esm-Egj_XVbG.js";import"./index.esm-BAmTCnxn.js";const S={class:"w-full flex flex-column gap-4 p-3"},U={class:"w-full flex flex-wrap gap-6 border-1 border-round border-blue-400 p-3"},W=e("label",{class:"text-2xl w-full"},B("En İyi İşler"),-1),E={class:"w-full h-20rem"},R={class:"flex gap-4"},C={class:"flex flex-column gap-2"},L=e("label",null," Yeni Ekle ",-1),$={class:"flex align-items-end h-full"},Y=h({__name:"bestWorks",setup(j){const d=x(),t=g(),f=v(()=>d.bestWorks.length===1),_=async u=>{const m=u.files[0],s=new FileReader,n=await fetch(m.objectURL).then(o=>o.blob());s.readAsDataURL(n),s.onloadend=function(){const o=s.result;o&&(t.value=o,p().addBestWork(t.value),t.value=void 0)}};return(u,m)=>{const s=F,n=y,o=b;return c(),i("div",S,[e("div",U,[W,(c(!0),i(w,null,k(a(d).bestWorks,r=>(c(),i("div",{key:r.id,class:"border-1 h-20rem w-20rem border-gray-500 border-round flex flex-column justify-content-between gap-3"},[l(s,{"image-class":"w-20rem",src:r.img},null,8,["src"]),l(n,{disabled:a(f),class:"mb-2 mx-3 text-xl",icon:"pi pi-trash",label:"Sil",onClick:A=>a(p)().deleteBestWork(r.id)},null,8,["disabled","onClick"])]))),128)),e("div",E,[e("div",R,[e("div",C,[L,l(s,{preview:"",src:a(t),width:"200"},null,8,["src"])]),e("div",$,[l(o,{"choose-label":"Yeni Resim Ekle",mode:"basic",name:"demo[]",url:"/api/upload",accept:"image/*","custom-upload":"",onUploader:_})])])])])])}}});export{Y as default};
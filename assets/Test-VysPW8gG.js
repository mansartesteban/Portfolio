import{f as i,d as l,o as r,c as o,h as d}from"./index-DDkCRDe2.js";const p={__name:"Hero",props:{text:String},setup(a){const t=a,s=i();return l(()=>{t.text&&[...t.text].forEach((n,_)=>{let e=document.createElement("span");e.classList.add("char","animate__animated","animate__bounceInDown","animate__faster"),e.style.setProperty("--index",_),e.innerText=n,n===" "&&(e.style.padding="0 1rem"),s.value.appendChild(e)})}),(c,n)=>(r(),o("div",{ref_key:"hero",ref:s,class:"hero"},null,512))}},f={class:"flex flex-col flex-1 items-center justify-center"},u={__name:"Test",setup(a){return(t,s)=>(r(),o("div",f,[d(p,{text:"Esteban Mansart"})]))}};export{u as default};

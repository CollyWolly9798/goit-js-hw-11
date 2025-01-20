import{S as h,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=async a=>{const o=new URLSearchParams({key:"48318728-33e02a537f20daf55b07c1f54",q:a.trim(),image_type:"photo",orientation:"horizontal",safesearch:"true"});try{const r=await fetch(`https://pixabay.com/api/?${o}`);if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);const s=await r.json();if(!s.hits||s.hits.length===0)throw new Error("No images found for your search query.");return s}catch(r){throw console.error("Error fetching data:",r),r}},m=({webformatURL:a,largeImageURL:o,tags:r,likes:s,views:e,comments:t,downloads:i})=>`
  <div class="photo-card">
    <a href="${o}" class="photo-link">
      <img src="${a}" alt="${r}" loading="lazy" />
    </a>
    <div class="info">
      <p><b>Likes:</b> ${s}</p>
      <p><b>Views:</b> ${e}</p>
      <p><b>Comments:</b> ${t}</p>
      <p><b>Downloads:</b> ${i}</p>
    </div>
  </div>`,c=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),p=new h(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d=a=>{a.preventDefault(),l.innerHTML="";const o=a.currentTarget.elements.user_query.value.trim();if(o===""){n.error({title:"Error",message:"Please fill in the search form!"});return}u.style.display="block",f(o).then(r=>{if(!r.hits||r.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset();return}const s=r.hits.map(e=>m(e)).join("");l.innerHTML=s,p.refresh(),n.success({title:"Success",message:`Found ${r.totalHits||0} images.`}),c.reset()}).catch(r=>{console.error("Error fetching photos:",r),n.error({title:"Error",message:"Something went wrong. Please try again later!"})}).finally(()=>{u.style.display="none"})};c.addEventListener("submit",d);
//# sourceMappingURL=index.js.map

import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=async s=>{const o=new URLSearchParams({key:"48318728-33e02a537f20daf55b07c1f54",q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:"true"});try{const r=await fetch(`https://pixabay.com/api/?${o}`);if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return await r.json()}catch(r){throw console.error("Error fetching data:",r.message),r}},h=({webformatURL:s,largeImageURL:o,tags:r,likes:a,views:e,comments:t,downloads:i})=>`
  <div class="photo-card">
    <a href="${o}" class="photo-link">
      <img src="${s}" alt="${r}" loading="lazy" />
    </a>
    <div class="info">
      <p><b>Likes:</b> ${a}</p>
      <p><b>Views:</b> ${e}</p>
      <p><b>Comments:</b> ${t}</p>
      <p><b>Downloads:</b> ${i}</p>
    </div>
  </div>`,c=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),p=new m(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d=s=>{s.preventDefault(),l.innerHTML="";const o=s.currentTarget.elements.user_query.value.trim();if(o===""){n.error({title:"Error",message:"Please fill in the search form!"});return}u.style.display="block",f(o).then(r=>{if(!r.hits||r.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset();return}const a=r.hits.map(e=>h(e)).join("");l.innerHTML=a,p.refresh(),n.success({title:"Success",message:`Found ${r.totalHits||0} images.`}),c.reset()}).catch(r=>{console.error("Error fetching photos:",r),n.error({title:"Error",message:"Something went wrong. Please try again later!"})}).finally(()=>{u.style.display="none"})};c.addEventListener("submit",d);
//# sourceMappingURL=index.js.map

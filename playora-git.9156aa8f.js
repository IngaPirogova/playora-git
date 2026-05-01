let e;import"./library.a8f3ea45.js";var t=globalThis,a={},n={},i=t.parcelRequire3f2b;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire3f2b=i),i.register;let r="31c63af0eea54975ac5ac0e9f5f9d2e1",o="https://api.rawg.io/api/games";class s{constructor(){this.page=1,this.query=""}async fetchTrending(){let e=await fetch(`${o}?key=${r}&page=${this.page}&page_size=20`);return await e.json()}async fetchSearch(){let e=await fetch(`${o}?key=${r}&search=${this.query}&page=${this.page}&page_size=20`);return await e.json()}async fetchById(e){let t=await fetch(`${o}/${e}?key=${r}`);return await t.json()}nextPage(){this.page+=1}prevPage(){this.page>1&&(this.page-=1)}resetPage(){this.page=1}}var d=i("hZ3vH");let c=document.querySelector("#loader");function l(){c.classList.remove("hidden")}function u(){c.classList.add("hidden")}var m=(i("3nLdO"),i("3nLdO"));let g=document.querySelector("#auth-btn"),h=document.querySelector("#auth-close"),p=document.querySelector("#auth-modal"),f=document.querySelector("#auth-btn"),y=document.querySelector("#user-email"),v=document.querySelector("#logout-btn");function b(){let e=(0,m.getCurrentUser)();e?(f.classList.add("hidden"),y.classList.remove("hidden"),v.classList.remove("hidden"),y.textContent=e.email):(f.classList.remove("hidden"),y.classList.add("hidden"),v.classList.add("hidden"))}var L=i("6VaiA"),m=i("3nLdO");function w(e,t="success"){let a=document.createElement("div");a.innerText=e,Object.assign(a.style,{position:"fixed",top:"20px",right:"20px",background:"error"===t?"#ef4444":"#22c55e",color:"#fff",padding:"10px 15px",zIndex:99999,borderRadius:"8px"}),document.body.appendChild(a),setTimeout(()=>a.remove(),4e3)}let x=document.querySelector("#auth-form"),q=document.querySelector("#auth-modal"),S=document.querySelector("#logout-btn"),E=!0;var $=i("a1EWb");let C=new s,k=1;async function R(){l();try{let e=C.query?await C.fetchSearch():await C.fetchTrending(),t=(0,$.getFavorites)();!function(e,t=[]){let a=document.querySelector("#list");a.innerHTML=e.filter(e=>e&&e.id).map(e=>{let a=t.some(t=>t.id===e.id);return`
<li class="card" data-id="${e.id}">
    <img src="${e.background_image||"./images/placeholder.png"}" />
    <h3>${e.name}</h3>
    <p>\u{2B50} ${e.rating}</p>

    <button class="fav-btn ${a?"active":""}">
        \u{2764}\u{FE0F}
    </button>
</li>
`}).join(""),a.onclick=t=>{let a=t.target.closest(".fav-btn");if(!a)return;let n=Number(a.closest(".card").dataset.id),i=e.find(e=>e.id===n);(0,d.toggleFavorite)(i),a.classList.toggle("active")}}(e.results,t),k=Math.min(500,Math.ceil(e.count/20)),function(e,t,a){let n=document.querySelector("#pagination");n.innerHTML="",s("←",t>1,t-1);let i=Math.max(1,t-2),r=Math.min(e,t+2);t<=3&&(i=1,r=Math.min(e,5)),t>=e-2&&(i=Math.max(1,e-5+1),r=e),i>1&&(o(1),i>2&&d());for(let e=i;e<=r;e++)o(e);function o(e){let i=document.createElement("button");i.textContent=e,i.classList.add("dot"),e===t&&i.classList.add("active"),i.addEventListener("click",()=>{a(e)}),n.appendChild(i)}function s(e,t,i){let r=document.createElement("button");r.textContent=e,r.classList.add("arrow"),t?r.addEventListener("click",()=>{a(i)}):r.disabled=!0,n.appendChild(r)}function d(){let e=document.createElement("span");e.textContent="...",n.appendChild(e)}r<e&&(r<e-1&&d(),o(e)),s("→",t<e,t+1)}(k,C.page,M)}catch(e){console.error(e)}finally{u()}}async function M(e){C.page=e,await R()}document.querySelector("#search-input").addEventListener("input",t=>{clearTimeout(e),e=setTimeout(async()=>{let e=t.target.value.trim();if(C.page=1,""===e){C.query="",await R();return}C.query=e,await R()},500)}),async function(){let e,t,a;await (0,m.initUser)(),g.addEventListener("click",()=>{p.classList.remove("hidden")}),h.addEventListener("click",()=>{p.classList.add("hidden")}),e=document.querySelector("#switch-mode"),t=document.querySelector("#auth-title"),a=document.querySelector(".auth-submit"),e.addEventListener("click",()=>{(E=!E)?(t.textContent="Login",a.textContent="Login",e.textContent="Register"):(t.textContent="Register",a.textContent="Register",e.textContent="Login")}),x.addEventListener("submit",async e=>{e.preventDefault();let t=document.querySelector("#auth-email").value,a=document.querySelector("#auth-password").value;try{E?(await (0,L.login)(t,a),w("Logged in!","success")):(await (0,L.register)(t,a),w("Registered! Check email","success")),await (0,m.initUser)(),b(),q.classList.add("hidden")}catch(e){console.log("CATCH WORKS",e),w(e.message,"error")}}),S.addEventListener("click",async()=>{await (0,L.logout)(),await (0,m.initUser)(),b()}),b(),C.resetPage(),await R()}();var d=i("hZ3vH"),T=i("8Fdbh");let F=new s,_=document.querySelector("#modal"),H=document.querySelector("#modal-content"),P=null;function O(){_.classList.remove("open"),document.body.style.overflow="",P=null}document.addEventListener("click",async e=>{let t=e.target.closest(".card");if(t){if(e.target.closest(".fav-btn"))return void e.stopPropagation();let a=t.dataset.id;_.classList.add("open"),document.body.style.overflow="hidden",l();try{let e=await F.fetchById(a);P=e;let t=e.stores?.[0]?.store?.domain,n=e.website||(t?`https://${t}`:null),i=await (0,d.isFavorite)(e.id),r=await (0,T.isPlayed)(e.id);H.innerHTML=`
<button class="modal-close">\u{2716}</button>

<h2>${e.name}</h2>
<img src="${e.background_image}" width="300" />
<p>${e.description_raw?.slice(0,200)}...</p>

<div class="modal-actions">

${n?`<a href="${n}" target="_blank" class="btn btn-play">
\u{25B6} Play
</a>`:'<button class="btn btn-disabled">Not available</button>'}

<button id="add-fav" class="btn btn-fav">
    ${i?"💔 Remove from favorites":"❤ Add to favorites"}
</button>

<button id="add-played" class="btn btn-played">
    ${r?"✔ Remove from played":"✅ Mark as played"}
</button>

</div>
`}catch(e){console.error(e),H.innerHTML="<p>Failed to load game 😢</p>"}finally{u()}return}if("add-fav"===e.target.id){if(!P)return;await (0,d.toggleFavorite)(P);let t=await (0,d.isFavorite)(P.id);e.target.textContent=t?"💔 Remove from favorites":"❤ Add to favorites"}if("add-played"===e.target.id){if(!P)return;console.log("CURRENT GAME:",P),await (0,T.togglePlayed)(P);let t=await (0,T.isPlayed)(P.id);e.target.textContent=t?"✔ Remove from played":"✅ Mark as played"}e.target.classList.contains("modal-close")&&O()}),_.addEventListener("click",e=>{e.target===_&&O()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&O()}),i("lWBh6");
//# sourceMappingURL=playora-git.9156aa8f.js.map

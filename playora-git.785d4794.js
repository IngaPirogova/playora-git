let e;import"./library.a8f3ea45.js";var t=globalThis,a={},n={},i=t.parcelRequire3f2b;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire3f2b=i),i.register;let o="31c63af0eea54975ac5ac0e9f5f9d2e1",r="https://api.rawg.io/api/games";class s{constructor(){this.page=1,this.query=""}async fetchTrending(){let e=await fetch(`${r}?key=${o}&page=${this.page}&page_size=20`);return await e.json()}async fetchSearch(){let e=await fetch(`${r}?key=${o}&search=${this.query}&page=${this.page}&page_size=20`);return await e.json()}async fetchById(e){let t=await fetch(`${r}/${e}?key=${o}`);return await t.json()}nextPage(){this.page+=1}prevPage(){this.page>1&&(this.page-=1)}resetPage(){this.page=1}}var d=i("hZ3vH");let l=document.querySelector("#loader");function c(){l.classList.remove("hidden")}function u(){l.classList.add("hidden")}var m=(i("3nLdO"),i("3nLdO"));let h=document.querySelector("#auth-btn"),g=document.querySelector("#auth-close"),y=document.querySelector("#auth-modal"),f=document.querySelector("#auth-btn"),p=document.querySelector("#user-email"),v=document.querySelector("#logout-btn");function b(){let e=(0,m.getCurrentUser)();e?(f.classList.add("hidden"),p.classList.remove("hidden"),v.classList.remove("hidden"),p.textContent=e.email):(f.classList.remove("hidden"),p.classList.add("hidden"),v.classList.add("hidden"))}var L=i("6VaiA"),m=i("3nLdO");function w(e,t="success"){let a=document.createElement("div");a.textContent=e,a.className=`toast toast--${t}`,document.body.appendChild(a),setTimeout(()=>{a.classList.add("show")},10),setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>a.remove(),300)},3e3)}let q=document.querySelector("#auth-form"),$=document.querySelector("#auth-modal"),E=document.querySelector("#logout-btn"),S=!0;var x=i("a1EWb");let C=new s,k=1;async function M(){c();try{let e=C.query?await C.fetchSearch():await C.fetchTrending(),t=(0,x.getFavorites)();!function(e,t=[]){let a=document.querySelector("#list");a.innerHTML=e.filter(e=>e&&e.id).map(e=>{let a=t.some(t=>t.id===e.id);return`
<li class="card" data-id="${e.id}">
    <img src="${e.background_image||"./images/placeholder.png"}" />
    <h3>${e.name}</h3>
    <p>\u{2B50} ${e.rating}</p>

    <button class="fav-btn ${a?"active":""}">
        \u{2764}\u{FE0F}
    </button>
</li>
`}).join(""),a.onclick=t=>{let a=t.target.closest(".fav-btn");if(!a)return;let n=Number(a.closest(".card").dataset.id),i=e.find(e=>e.id===n);(0,d.toggleFavorite)(i),a.classList.toggle("active")}}(e.results,t),k=Math.min(500,Math.ceil(e.count/20)),function(e,t,a){let n=document.querySelector("#pagination");n.innerHTML="",s("←",t>1,t-1);let i=Math.max(1,t-2),o=Math.min(e,t+2);t<=3&&(i=1,o=Math.min(e,5)),t>=e-2&&(i=Math.max(1,e-5+1),o=e),i>1&&(r(1),i>2&&d());for(let e=i;e<=o;e++)r(e);function r(e){let i=document.createElement("button");i.textContent=e,i.classList.add("dot"),e===t&&i.classList.add("active"),i.addEventListener("click",()=>{a(e)}),n.appendChild(i)}function s(e,t,i){let o=document.createElement("button");o.textContent=e,o.classList.add("arrow"),t?o.addEventListener("click",()=>{a(i)}):o.disabled=!0,n.appendChild(o)}function d(){let e=document.createElement("span");e.textContent="...",n.appendChild(e)}o<e&&(o<e-1&&d(),r(e)),s("→",t<e,t+1)}(k,C.page,T)}catch(e){console.error(e)}finally{u()}}async function T(e){C.page=e,await M()}document.querySelector("#search-input").addEventListener("input",t=>{clearTimeout(e),e=setTimeout(async()=>{let e=t.target.value.trim();if(C.page=1,""===e){C.query="",await M();return}C.query=e,await M()},500)}),async function(){let e,t,a;await (0,m.initUser)(),h.addEventListener("click",()=>{y.classList.remove("hidden")}),g.addEventListener("click",()=>{y.classList.add("hidden")}),e=document.querySelector("#switch-mode"),t=document.querySelector("#auth-title"),a=document.querySelector(".auth-submit"),e.addEventListener("click",()=>{(S=!S)?(t.textContent="Login",a.textContent="Login",e.textContent="Register"):(t.textContent="Register",a.textContent="Register",e.textContent="Login")}),q.addEventListener("submit",async e=>{e.preventDefault();let t=document.querySelector("#auth-email").value,a=document.querySelector("#auth-password").value;try{S?(await (0,L.login)(t,a),w("Logged in!")):(await (0,L.register)(t,a),w("Registered! Check email")),await (0,m.initUser)(),b(),$.classList.add("hidden")}catch(e){w(e.message)}}),E.addEventListener("click",async()=>{await (0,L.logout)(),await (0,m.initUser)(),b()}),b(),C.resetPage(),await M()}();var d=i("hZ3vH"),R=i("8Fdbh");let F=new s,_=document.querySelector("#modal"),P=document.querySelector("#modal-content"),H=null;function U(){_.classList.remove("open"),document.body.style.overflow="",H=null}document.addEventListener("click",async e=>{let t=e.target.closest(".card");if(t){if(e.target.closest(".fav-btn"))return void e.stopPropagation();let a=t.dataset.id;_.classList.add("open"),document.body.style.overflow="hidden",c();try{let e=await F.fetchById(a);H=e;let t=e.stores?.[0]?.store?.domain,n=e.website||(t?`https://${t}`:null),i=await (0,d.isFavorite)(e.id),o=await (0,R.isPlayed)(e.id);P.innerHTML=`
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
    ${o?"✔ Remove from played":"✅ Mark as played"}
</button>

</div>
`}catch(e){console.error(e),P.innerHTML="<p>Failed to load game 😢</p>"}finally{u()}return}if("add-fav"===e.target.id){if(!H)return;await (0,d.toggleFavorite)(H);let t=await (0,d.isFavorite)(H.id);e.target.textContent=t?"💔 Remove from favorites":"❤ Add to favorites"}if("add-played"===e.target.id){if(!H)return;console.log("CURRENT GAME:",H),await (0,R.togglePlayed)(H);let t=await (0,R.isPlayed)(H.id);e.target.textContent=t?"✔ Remove from played":"✅ Mark as played"}e.target.classList.contains("modal-close")&&U()}),_.addEventListener("click",e=>{e.target===_&&U()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&U()}),i("lWBh6");
//# sourceMappingURL=playora-git.785d4794.js.map

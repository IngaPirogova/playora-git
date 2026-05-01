import"./library.a8f3ea45.js";var e=globalThis,t={},r={},i=e.parcelRequire3f2b;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire3f2b=i),i.register;var a=i("a1EWb"),n=i("hZ3vH"),l=i("8Fdbh"),o=i("3nLdO");let s=document.querySelector("#library-list"),d=document.querySelector("#favorites-btn"),c=document.querySelector("#played-btn"),u="favorites";function g(){((0,o.getCurrentUser)()||(s.innerHTML=`
            <div class="empty">
                <p>Please login to view your library \u{1F512}</p>
                <a id="go-login" class="go-login" href="./index.html">Login</a>
            </div>
        `,0))&&function(e,t,r){if(!t.length){e.innerHTML='<p class="empty">Nothing here yet 😢</p>';return}e.innerHTML=t.filter(e=>e&&e.id).map(e=>{let t=e.website||`https://rawg.io/games/${e.slug||e.id}`;return`
<li class="card" data-id="${e.id}">

    <img src="${e.background_image||"./images/placeholder.png"}" />

    <h3>${e.name}</h3>

    <p>\u{2B50} ${e.rating??""}</p>

    <div class="btns-wrapper">

        <a href="${t}" target="_blank" class="btn btn-play">
            \u{25B6} Play
        </a>

        <button class="remove-btn" data-type="${r}">
            \u{274C}
        </button>

    </div>
</li>
`}).join("")}(s,"favorites"===u?(0,a.getFavorites)():(0,a.getPlayed)(),u)}function v(e){d.classList.remove("active"),c.classList.remove("active"),e.classList.add("active")}d.addEventListener("click",()=>{u="favorites",v(d),g()}),c.addEventListener("click",()=>{u="played",v(c),g()}),s.addEventListener("click",e=>{if("go-login"===e.target.id)return void document.querySelector("#auth-modal")?.classList.add("open");if(!e.target.closest(".remove-btn"))return;let t=Number(e.target.closest(".card").dataset.id);if("favorites"===u){let e=(0,a.getFavorites)().find(e=>e.id===t);(0,n.toggleFavorite)(e)}if("played"===u){let e=(0,a.getPlayed)().find(e=>e.id===t);(0,l.togglePlayed)(e)}g()}),async function(){await (0,o.initUser)(),v(d),g()}(),i("lWBh6");
//# sourceMappingURL=library.57748bc8.js.map

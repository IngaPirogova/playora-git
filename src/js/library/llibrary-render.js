export function renderLibrary(list, games, type) {
    if (!games.length) {
        list.innerHTML = `
            <p class="empty">
                Nothing here yet 😢
            </p>
        `;
        return;
    }


        list.innerHTML = games
 .filter(game => game && game.id) //защита
    .map(game => `
        <li class="card" data-id="${game.id}" >
        <img src="${game.background_image || './images/placeholder.png'}" 
        alt="${game.name}"
        width="200" />
        <h3>${game.name}</h3>
        <p>⭐ ${game.rating}</p>
<div class="btns-wrapper">
          ${game.website || game.stores?.[0]?.store?.domain
            ? `<a href="${game.website
                ? game.website
                : `https://${game.stores?.[0]?.store?.domain}`
            }" 
              target="_blank" 
              class="play-btn">
              ▶ Play
              </a>`
            : `<span class="no-play">Not available</span>`
    }

        <button class="remove-btn" data-type="${type}">
                ❌
            </button>
            </div>
</li>
`).join('');
}



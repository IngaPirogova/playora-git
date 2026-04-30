export function renderLibrary(list, games, type) {

    if (!games.length) {
        list.innerHTML = `<p class="empty">Nothing here yet 😢</p>`;
        return;
    }

    list.innerHTML = games
        .filter(game => game && game.id)
        .map(game => {

            // 🔥 fallback как в реальном проде
            const playLink =
                game.website ||
                `https://rawg.io/games/${game.slug || game.id}`;

            return `
<li class="card" data-id="${game.id}">

    <img src="${game.background_image || './images/placeholder.png'}" />

    <h3>${game.name}</h3>

    <p>⭐ ${game.rating ?? ''}</p>

    <div class="btns-wrapper">

        <a href="${playLink}" target="_blank" class="btn btn-play">
            ▶ Play
        </a>

        <button class="remove-btn" data-type="${type}">
            ❌
        </button>

    </div>
</li>
`;
        })
        .join('');
}
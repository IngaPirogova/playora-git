export function renderLibrary(list, games) {

    if (!games.length) {
        list.innerHTML = `<p class="empty">Nothing here yet 😢</p>`;
        return;
    }

    list.innerHTML = games
        .filter(game => game && game.id)
        .map(game => `
            <li class="card" data-id="${game.id}">
                <img src="${game.background_image || './images/placeholder.png'}" />
                <h3>${game.name}</h3>

                <button class="remove-btn">❌</button>
            </li>
        `).join('');
}
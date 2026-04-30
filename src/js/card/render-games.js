// import { toggleFavorite } from "../modal/favorites";

// export default function renderGames(games, favorites = []) {
//     const list = document.querySelector('#list');

//     const markup = games
//         .filter(game => game && game.id)
//         .map(game => {

//             // 🔥 favorites = [1,2,3]
//             const isFav = favorites.includes(game.id);

//             return `
// <li class="card" data-id="${game.id}">
//     <img src="${game.background_image || './images/placeholder.png'}"
//          alt="${game.name}"
//          width="200" />

//     <h3>${game.name}</h3>
//     <p>⭐ ${game.rating}</p>

//     <button class="fav-btn ${isFav ? 'active' : ''}">
//         ❤️
//     </button>
// </li>
// `;
//         }).join('');

//     list.innerHTML = markup;

//     // 🔥 ВАЖНО: не addEventListener (иначе дубли), а onclick
//     list.onclick = (e) => {
//         const btn = e.target.closest('.fav-btn');
//         if (!btn) return;

//         e.stopPropagation();

//         const card = e.target.closest('.card');
//         const gameId = Number(card.dataset.id);

//         const game = games.find(g => g.id === gameId);

//         toggleFavorite(game);

//         btn.classList.toggle('active');
//     };
// }

import { toggleFavorite } from "../modal/favorites.js";

export default function renderGames(games, favorites = []) {
    const list = document.querySelector('#list');

    const markup = games
        .filter(game => game && game.id)
        .map(game => {

            const isFav = favorites.some(f => f.id === game.id);

            return `
<li class="card" data-id="${game.id}">
    <img src="${game.background_image || './images/placeholder.png'}" />
    <h3>${game.name}</h3>
    <p>⭐ ${game.rating}</p>

    <button class="fav-btn ${isFav ? 'active' : ''}">
        ❤️
    </button>
</li>
`;
        }).join('');

    list.innerHTML = markup;

    list.onclick = (e) => {
        const btn = e.target.closest('.fav-btn');
        if (!btn) return;

        const card = btn.closest('.card');
        const gameId = Number(card.dataset.id);

        const game = games.find(g => g.id === gameId);

        toggleFavorite(game);

        btn.classList.toggle('active');
    };
}
//import { addToFavorites } from "../favorites/favorites";
import { toggleFavorite } from "../favorites/favorites";


export default function renderGames(games, favorites = []) {
    const list = document.querySelector('#list');
    
    const markup = games
        .filter(game => game && game.id) //защита
        .map(game => {

            const isFav = favorites.includes(game.id);

            return `
<li class="card" data-id="${game.id}">
        <img src="${game.background_image || './images/placeholder.png'}" 
        alt="${game.name}"
        width="200" />
        <h3>${game.name}</h3>
        <p>⭐ ${game.rating}</p>
        <button class="fav-btn ${isFav ? 'active' : ''}">
                ❤️
        </button>
</li>
`;
}).join('');
    
    list.innerHTML = markup;

    // const cards = document.querySelectorAll('.card');

    // cards.forEach((card, index) => {
    //     const game = games[index];
    //     const favBtn = card.querySelector('.fav-btn');

    // favBtn.addEventListener('click', (e) => {
    //     e.stopPropagation(); // 🔥 важно!
    //     addToFavorites(game);
    // });
        
    //     // 🪟 карточка (модалка)
    //     card.addEventListener('click', () => {
    //         // твоя функция открытия модалки
    //         console.log('open modal', game.id);
    //     });
    // });


    list.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;

        const gameId = Number(card.dataset.id);

        const game = games.find(g => g.id === gameId);

        // ❤️ клик по сердцу
        if (e.target.classList.contains('fav-btn')) {
            e.stopPropagation();

            toggleFavorite(game);

            e.target.classList.toggle('active');

            return;
        }        
    });
}


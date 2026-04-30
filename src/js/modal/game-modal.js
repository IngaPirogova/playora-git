import GamesApi from '../api-service/games-api.js';
import { toggleFavorite } from './favorites.js';
import { togglePlayed } from './played.js';
import { isFavorite } from './favorites.js';
import { isPlayed } from './played.js';
import { showLoader, hideLoader } from '../loader/loader.js';

const api = new GamesApi();

const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');

let currentGame = null; // 🔥 важная переменная состояния

export function setupModal() {

    document.addEventListener('click', async (e) => {

        // =========================
        // 1. КЛИК ПО КАРТОЧКЕ
        // =========================
        const card = e.target.closest('.card');

        if (card) {
            const id = card.dataset.id;

            // открыть модалку
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';

            // modalContent.innerHTML = 'Loading...';
            showLoader();
            try {

                // загрузка 1 игры
                const game = await api.fetchById(id);

                currentGame = game; // сохраняем текущую игру

                const storeUrl = game.stores?.[0]?.store?.domain;
                const website = game.website;

                const playLink = website
                    ? website
                    : storeUrl
                        ? `https://${storeUrl}`
                        : null;

                //текст при открытии модалки делаем динамически
                const isFav = isFavorite(game.id);
                const isPlayedGame = isPlayed(game.id);

                // рендер
                modalContent.innerHTML = `
<button class="modal-close">✖</button>

<h2>${game.name}</h2>
<img src="${game.background_image}" width="300" />
<p>${game.description_raw?.slice(0, 200)}...</p>
<div class="modal-actions">

${playLink
? `<a href="${playLink}" target="_blank" class="btn btn-play">
▶ Play
</a>`
: `<button class="btn btn-disabled">Not available</button>`
}

 <button id="add-fav" class="btn btn-fav">
        ${isFav ? '💔 Remove from favorites' : '❤ Add to favorites'}
</button>

<button id="add-played"  class="btn btn-played">
        ${isPlayedGame ? '✔ Remove from played' : '✅ Mark as played'}
</button>
</div>
`;
            } catch (err) {
                modalContent.innerHTML = `<p>Failed to load game 😢</p>`;
            } finally {
                hideLoader();
            
}
//<button id="add-fav">❤ Add to favorites</button>
//<button id="add-played">✔ Mark as played</button>
            
            
            return; // 🔥 важно: дальше не идем
        }

        // =========================
        // 2. ДОБАВИТЬ В ИЗБРАННОЕ
        // =========================
        // if (e.target.id === 'add-fav') {
        //     console.log('favorites click');

        //     toggleFavorite(currentGame)
        // }

        if (e.target.id === 'add-fav') {
            toggleFavorite(currentGame);

            const isFav = isFavorite(currentGame.id);

            e.target.textContent = isFav
                ? '💔 Remove from favorites'
                : '❤ Add to favorites';
        }

        // =========================
        // 3. ДОБАВИТЬ В PLAYED
        // =========================
        // if (e.target.id === 'add-played') {
        //     console.log('played click');

        //     togglePlayed(currentGame)
        // }

        if (e.target.id === 'add-played') {
            togglePlayed(currentGame);

            const isPlayedGame = isPlayed(currentGame.id);

            e.target.textContent = isPlayedGame
                ? '✔ Remove from played'
                : '✅ Mark as played';
        }

        
        // =========================
        // 4. ЗАКРЫТИЕ ПО КРЕСТИКУ
        // =========================
        if (e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });

    // =========================
    // 5. BACKDROP
    // =========================
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // =========================
    // 6. ESC
    // =========================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// =========================
// ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ
// =========================
function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';

}

setupModal();
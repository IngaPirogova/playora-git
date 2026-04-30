import GamesApi from '../api-service/games-api.js';
import { toggleFavorite } from './favorites.js';
import { togglePlayed } from './played.js';
import { isFavorite } from './favorites.js';
import { isPlayed } from './played.js';
import { showLoader, hideLoader } from '../loader/loader.js';

const api = new GamesApi();

const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');

let currentGame = null;

export function setupModal() {

    document.addEventListener('click', async (e) => {

        // =========================
        // OPEN MODAL
        // =========================
        const card = e.target.closest('.card');

        if (card) {

            if (e.target.closest('.fav-btn')) {
                e.stopPropagation();
                return;
            }


            const id = card.dataset.id;

            modal.classList.add('open');
            document.body.style.overflow = 'hidden';

            showLoader();

            try {
                const game = await api.fetchById(id);
                currentGame = game;

                const storeUrl = game.stores?.[0]?.store?.domain;
                const website = game.website;

                const playLink = website
                    ? website
                    : storeUrl
                        ? `https://${storeUrl}`
                        : null;

                const favState = await isFavorite(game.id);
                const playedState = await isPlayed(game.id);

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
    ${favState ? '💔 Remove from favorites' : '❤ Add to favorites'}
</button>

<button id="add-played" class="btn btn-played">
    ${playedState ? '✔ Remove from played' : '✅ Mark as played'}
</button>

</div>
`;
            } catch (err) {
                console.error(err);
                modalContent.innerHTML = `<p>Failed to load game 😢</p>`;
            } finally {
                hideLoader();
            }

            return;
        }

        // =========================
        // FAVORITES TOGGLE
        // =========================
        if (e.target.id === 'add-fav') {
            if (!currentGame) return;

            await toggleFavorite(currentGame);

            const newState = await isFavorite(currentGame.id);

            e.target.textContent = newState
                ? '💔 Remove from favorites'
                : '❤ Add to favorites';
        }

        // =========================
        // PLAYED TOGGLE
        // =========================
        if (e.target.id === 'add-played') {
            if (!currentGame) return;
            console.log('CURRENT GAME:', currentGame);
            await togglePlayed(currentGame);

            const newState = await isPlayed(currentGame.id);

            e.target.textContent = newState
                ? '✔ Remove from played'
                : '✅ Mark as played';
        }

        // =========================
        // CLOSE
        // =========================
        if (e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    currentGame = null;
}

setupModal();
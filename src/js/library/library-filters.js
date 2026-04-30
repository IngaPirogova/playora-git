import { getFavorites, getPlayed } from './library-storage.js';
import { renderLibrary } from './llibrary-render.js';

import { toggleFavorite } from '../modal/favorites.js';
import { togglePlayed } from '../modal/played.js';

const list = document.querySelector('#library-list');

const favBtn = document.querySelector('#favorites-btn');
const playedBtn = document.querySelector('#played-btn');

let current = 'favorites';

// 🔥 функция рендера
function render() {
    const data =
        current === 'favorites'
            ? getFavorites()
            : getPlayed();

    renderLibrary(list, data, current);
}

// 🔥 обработчики (сразу вешаются)
// document.querySelector('#favorites-btn').addEventListener('click', () => {
//     current = 'favorites';
//     render();
// });

favBtn.addEventListener('click', () => {
    current = 'favorites';
    render();
    setActiveBtn(favBtn);
});

// document.querySelector('#played-btn').addEventListener('click', () => {
//     current = 'played';
//     render();
// });

playedBtn.addEventListener('click', () => {
    current = 'played';
    render();
    setActiveBtn(playedBtn);
});

function setActiveBtn(activeBtn) {
    favBtn.classList.remove('active');
    playedBtn.classList.remove('active');    
    activeBtn.classList.add('active');
}

list.addEventListener('click', (e) => {
    const btn = e.target.closest('.remove-btn');
    if (!btn) return;

    const card = e.target.closest('.card');
    const id = Number(card.dataset.id);

    if (current === 'favorites') {
        const game = getFavorites().find(g => g.id === id);
        toggleFavorite(game);
    }

    if (current === 'played') {
        const game = getPlayed().find(g => g.id === id);
        togglePlayed(game);
    }

    render(); // 🔥 перерисовка
});


//старт
setActiveBtn(favBtn);
// 🔥 СРАЗУ рендер при загрузке файла
render();

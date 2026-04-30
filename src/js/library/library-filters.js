// import { getFavorites, getPlayed } from './library-storage.js';
// import { renderLibrary } from './llibrary-render.js';

// import { toggleFavorite } from '../modal/favorites.js';
// import { togglePlayed } from '../modal/played.js';

// const list = document.querySelector('#library-list');

// const favBtn = document.querySelector('#favorites-btn');
// const playedBtn = document.querySelector('#played-btn');

// let current = 'favorites';

// // 🔥 функция рендера
// function render() {
//     const data =
//         current === 'favorites'
//             ? getFavorites()
//             : getPlayed();

//     renderLibrary(list, data, current);
// }

// // 🔥 обработчики (сразу вешаются)
// // document.querySelector('#favorites-btn').addEventListener('click', () => {
// //     current = 'favorites';
// //     render();
// // });

// favBtn.addEventListener('click', () => {
//     current = 'favorites';
//     render();
//     setActiveBtn(favBtn);
// });

// // document.querySelector('#played-btn').addEventListener('click', () => {
// //     current = 'played';
// //     render();
// // });

// playedBtn.addEventListener('click', () => {
//     current = 'played';
//     render();
//     setActiveBtn(playedBtn);
// });

// function setActiveBtn(activeBtn) {
//     favBtn.classList.remove('active');
//     playedBtn.classList.remove('active');
//     activeBtn.classList.add('active');
// }

// list.addEventListener('click', (e) => {
//     const btn = e.target.closest('.remove-btn');
//     if (!btn) return;

//     const card = e.target.closest('.card');
//     const id = Number(card.dataset.id);

//     if (current === 'favorites') {
//         const game = getFavorites().find(g => g.id === id);
//         toggleFavorite(game);
//     }

//     if (current === 'played') {
//         const game = getPlayed().find(g => g.id === id);
//         togglePlayed(game);
//     }

//     render(); // 🔥 перерисовка
// });


// //старт
// setActiveBtn(favBtn);
// // 🔥 СРАЗУ рендер при загрузке файла
// render();




import { getFavorites, getPlayed } from './library-storage.js';
import { renderLibrary } from './llibrary-render.js';

import { toggleFavorite } from '../modal/favorites.js';
import { togglePlayed } from '../modal/played.js';

import { initUser, getCurrentUser } from '../auth/user.js'; // 🔥 важно

const list = document.querySelector('#library-list');

const favBtn = document.querySelector('#favorites-btn');
const playedBtn = document.querySelector('#played-btn');

let current = 'favorites';

// =========================
// 🔐 ПРОВЕРКА ЛОГИНА
// =========================
function checkAuth() {
    const user = getCurrentUser();

    if (!user) {
        list.innerHTML = `
            <div class="empty">
                <p>Please login to view your library 🔒</p>
                <button id="go-login" class="btn">Login</button>
            </div>
        `;
        return false;
    }

    return true;
}

// =========================
// 🔥 РЕНДЕР
// =========================
function render() {

    if (!checkAuth()) return;

    const data =
        current === 'favorites'
            ? getFavorites()
            : getPlayed();

    renderLibrary(list, data, current);
}

// =========================
// TABS
// =========================
favBtn.addEventListener('click', () => {
    current = 'favorites';
    setActiveBtn(favBtn);
    render();
});

playedBtn.addEventListener('click', () => {
    current = 'played';
    setActiveBtn(playedBtn);
    render();
});

function setActiveBtn(activeBtn) {
    favBtn.classList.remove('active');
    playedBtn.classList.remove('active');
    activeBtn.classList.add('active');
}

// =========================
// ACTIONS
// =========================
list.addEventListener('click', (e) => {

    // 🔥 открыть модалку логина
    if (e.target.id === 'go-login') {
        document.querySelector('#auth-modal')?.classList.add('open');
        return;
    }

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

    render(); // 🔥 обновляем
});

// =========================
// 🚀 СТАРТ (ВАЖНО)
// =========================
async function initLibrary() {
    await initUser(); // 🔥 вот что решает проблему
    setActiveBtn(favBtn);
    render();
}

initLibrary();
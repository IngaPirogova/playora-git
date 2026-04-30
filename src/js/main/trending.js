// import GamesApi from "../api-service/games-api.js";
// import renderGames from "../card/render-games.js";
// import { setupSearch } from "./search.js";
// import { renderPagination } from "../pagination/pagination.js";
// import { showLoader, hideLoader } from '../loader/loader.js';

// import { initUser } from '../auth/user.js';
// import { initAuthUI, updateAuthUI } from '../auth/auth-ui.js';
// import { initAuthController } from "../auth/auth-controller.js";

// import { getFavorites } from "../library/library-storage.js";

// const api = new GamesApi();
// let totalPages = 1;

// // 🔥 ГЛАВНАЯ ФУНКЦИЯ
// async function loadTrending() {
//     showLoader();

//     try {
//         const games = api.query
//             ? await api.fetchSearch()
//             : await api.fetchTrending();

//         // renderGames(games.results);

//         const favorites = getFavorites();
//         renderGames(games.results, favorites);

//         // защита от слишком большого числа
//         totalPages = Math.min(500, Math.ceil(games.count / 20));
//         renderPagination(totalPages, api.page, onPageClick);

//     } catch (err) {
//         console.error('LOAD ERROR:', err);
//     } finally {
//         hideLoader();
//     }

    
// }

// // 🔥 что делать при клике на страницу
// async function onPageClick(page) {
//     api.page = page;
//     await loadTrending();
// }

// // 🔥 подключаем поиск
// setupSearch(api, loadTrending);

// // 🚀 НОВЫЙ ПРАВИЛЬНЫЙ СТАРТ
// async function initApp() {
//     await initUser();   // 🔥 сначала узнаём пользователя,получаем пользователя

//     initAuthUI();         // UI (модалка)
//     initAuthController(); // логика
//     updateAuthUI(); // обновляем UI

//     api.resetPage();    // потом логика страницы
//     await loadTrending();
// }

// initApp();

import GamesApi from "../api-service/games-api.js";
import renderGames from "../card/render-games.js";
import { setupSearch } from "./search.js";
import { renderPagination } from "../pagination/pagination.js";
import { showLoader, hideLoader } from '../loader/loader.js';

import { initUser } from '../auth/user.js';
import { initAuthUI, updateAuthUI } from '../auth/auth-ui.js';
import { initAuthController } from "../auth/auth-controller.js";

import { getFavorites } from "../library/library-storage.js";

const api = new GamesApi();
let totalPages = 1;

async function loadTrending() {
    showLoader();

    try {
        const games = api.query
            ? await api.fetchSearch()
            : await api.fetchTrending();

        const favorites = getFavorites(); // localStorage

        renderGames(games.results, favorites);

        totalPages = Math.min(500, Math.ceil(games.count / 20));
        renderPagination(totalPages, api.page, onPageClick);

    } catch (err) {
        console.error(err);
    } finally {
        hideLoader();
    }
}

async function onPageClick(page) {
    api.page = page;
    await loadTrending();
}

setupSearch(api, loadTrending);

async function initApp() {
    await initUser();   // только логин
    initAuthUI();
    initAuthController();
    updateAuthUI();

    api.resetPage();
    await loadTrending();
}

initApp();
import { getCurrentUser } from './user.js';

const openBtn = document.querySelector('#auth-btn'); // Login кнопка
const closeBtn = document.querySelector('#auth-close');
const modal = document.querySelector('#auth-modal');

const authBtn = document.querySelector('#auth-btn');
const emailEl = document.querySelector('#user-email');
const logoutBtn = document.querySelector('#logout-btn');


export function initAuthUI() {
    // открыть
    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    // закрыть
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

 //функция обновления интерфейса
export function updateAuthUI() {
    const user = getCurrentUser();

    if (user) {
        authBtn.classList.add('hidden');
        emailEl.classList.remove('hidden');
        logoutBtn.classList.remove('hidden');

        emailEl.textContent = user.email;

    } else {
        authBtn.classList.remove('hidden');
        emailEl.classList.add('hidden');
        logoutBtn.classList.add('hidden');
    }
}


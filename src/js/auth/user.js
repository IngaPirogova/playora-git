// будет отвечать за текущего пользователя (state)

import { getUser } from './auth.js';

let currentUser = null;

// получить пользователя и сохранить
export async function initUser() {
    currentUser = await getUser();
    return currentUser;
}

// получить уже сохранённого
export function getCurrentUser() {
    return currentUser;
}


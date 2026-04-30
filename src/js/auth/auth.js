import { supabase } from './supabase.js';

// регистрация
export async function register(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) throw error;
    return data;
}

// логин
export async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) throw error;
    return data;
}

// logout
export async function logout() {
    await supabase.auth.signOut();
}

// текущий пользователь, получить пользователя (один раз)
export async function getUser() {
    const { data } = await supabase.auth.getUser();
    return data.user;
}
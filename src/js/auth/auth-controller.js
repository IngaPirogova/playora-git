import { login, register, logout } from './auth.js';
import { initUser } from './user.js';
import { updateAuthUI } from './auth-ui.js';

const form = document.querySelector('#auth-form');
const modal = document.querySelector('#auth-modal');
const logoutBtn = document.querySelector('#logout-btn');

let isLogin = true;

// переключение режима (login/register)
export function initAuthController() {
    const switchBtn = document.querySelector('#switch-mode');
    const title = document.querySelector('#auth-title');
    const submitBtn = document.querySelector('.auth-submit');

    switchBtn.addEventListener('click', () => {
        isLogin = !isLogin;

        if (isLogin) {
            title.textContent = 'Login';
            submitBtn.textContent = 'Login';
            switchBtn.textContent = 'Register';
        } else {
            title.textContent = 'Register';
            submitBtn.textContent = 'Register';
            switchBtn.textContent = 'Login';
        }
    });

    //сабмит формы
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const email = document.querySelector('#auth-email').value;
        const password = document.querySelector('#auth-password').value;
    
        try {
            if (isLogin) {
                await login(email, password);
                alert('Logged in!');
            } else {
                await register(email, password);
                alert('Registered! Check email');
            }
    
            await initUser();   // 🔥 обновляем user state
            updateAuthUI();     // 🔥 обновляем интерфейс
    
            modal.classList.add('hidden');
    
        } catch (err) {
            alert(err.message);
        }
    });
    
    //logout
    logoutBtn.addEventListener('click', async () => {
        await logout();

        await initUser();
        updateAuthUI();
    });



}
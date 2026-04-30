// export const btn = document.querySelector('#theme-toggle');

// btn.addEventListener('click', () => {
//     document.body.classList.toggle('light');
// });


export const toggleBtn = document.getElementById('theme-toggle');

// применяем сразу при загрузке
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light');
} else {
    document.body.classList.remove('light');
}

// обработчик кнопки 
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');

        localStorage.setItem(
            'theme',
            document.body.classList.contains('light') ? 'light' : 'dark'
        );
    });
}


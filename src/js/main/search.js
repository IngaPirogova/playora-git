export function setupSearch(api, loadTrending) {
    const input = document.querySelector('#search-input');

    let timeout;

    input.addEventListener('input', (e) => {
        clearTimeout(timeout);

        timeout = setTimeout(async () => {
            const value = e.target.value.trim(); // 🔥 чистим ввод

            api.page = 1;

            // =========================
            // 🧠 ЗАЩИТА ОТ ПУСТОГО ВВОДА
            // =========================
            if (value === '') {
                api.query = '';
                await loadTrending(); // показываем популярные
                return;
            }

            // =========================
            // 🔍 ОБЫЧНЫЙ ПОИСК
            // =========================
            api.query = value;
            await loadTrending();

        }, 500); // debounce
    });
}
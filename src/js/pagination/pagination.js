export function renderPagination(totalPages, currentPage, onPageClick) {
    const container = document.querySelector('#pagination');
    container.innerHTML = '';

    const maxButtons = 5;

    // =========================
    // 1. КНОПКА НАЗАД
    // =========================
    createArrow('←', currentPage > 1, currentPage - 1);

    // =========================
    // 2. ДИАПАЗОН СТРАНИЦ
    // =========================
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    // если близко к началу
    if (currentPage <= 3) {
        start = 1;
        end = Math.min(totalPages, maxButtons);
    }

    // если близко к концу
    if (currentPage >= totalPages - 2) {
        start = Math.max(1, totalPages - maxButtons + 1);
        end = totalPages;
    }

    // =========================
    // 3. ПЕРВАЯ СТРАНИЦА И ...
    // =========================
    if (start > 1) {
        createButton(1);

        if (start > 2) {
            addDots();
        }
    }

    // =========================
    // 4. ОСНОВНЫЕ СТРАНИЦЫ
    // =========================
    for (let i = start; i <= end; i++) {
        createButton(i);
    }

    // =========================
    // 5. ... И ПОСЛЕДНЯЯ
    // =========================
    if (end < totalPages) {
        if (end < totalPages - 1) {
            addDots();
        }

        createButton(totalPages);
    }

    // =========================
    // 6. КНОПКА ВПЕРЁД
    // =========================
    createArrow('→', currentPage < totalPages, currentPage + 1);

    // =========================
    // СОЗДАНИЕ КНОПКИ СТРАНИЦЫ
    // =========================
    function createButton(page) {
        const btn = document.createElement('button');

        btn.textContent = page;
        btn.classList.add('dot');

        if (page === currentPage) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            onPageClick(page);
        });

        container.appendChild(btn);
    }

    // =========================
    // СОЗДАНИЕ СТРЕЛКИ
    // =========================
    function createArrow(symbol, enabled, page) {
        const btn = document.createElement('button');

        btn.textContent = symbol;
        btn.classList.add('arrow');

        if (!enabled) {
            btn.disabled = true;
        } else {
            btn.addEventListener('click', () => {
                onPageClick(page);
            });
        }

        container.appendChild(btn);
    }

    // =========================
    // ТОЧКИ ...
    // =========================
    function addDots() {
        const span = document.createElement('span');
        span.textContent = '...';
        container.appendChild(span);
    }
}
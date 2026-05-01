export function showToast(message, type = 'success') {
    const toast = document.createElement('div');

    toast.innerText = message;

    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'error' ? '#ef4444' : '#22c55e',
        color: '#fff',
        padding: '10px 15px',
        zIndex: 99999,
        borderRadius: '8px'
    });

    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 4000);
}


export function toggleFavorite(game) {
    let fav = JSON.parse(localStorage.getItem('favorites')) || [];
    let played = JSON.parse(localStorage.getItem('played')) || [];

    const exists = fav.some(item => item.id === game.id);

    if (exists) {
        fav = fav.filter(item => item.id !== game.id);
    } else {
        fav.push({
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            rating: game.rating
        });

        // если добавили в favorites — убираем из played
        played = played.filter(item => item.id !== game.id);
    }

    localStorage.setItem('favorites', JSON.stringify(fav));
    localStorage.setItem('played', JSON.stringify(played));
}

export function isFavorite(id) {
    const fav = JSON.parse(localStorage.getItem('favorites')) || [];
    return fav.some(item => item.id === id);
}
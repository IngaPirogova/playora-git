export function togglePlayed(game) {
    let played = JSON.parse(localStorage.getItem('played')) || [];
    let fav = JSON.parse(localStorage.getItem('favorites')) || [];

    const exists = played.some(item => item.id === game.id);

    if (exists) {
        played = played.filter(item => item.id !== game.id);
    } else {
        played.push({
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            rating: game.rating
        });

        fav = fav.filter(item => item.id !== game.id);
    }

    localStorage.setItem('played', JSON.stringify(played));
    localStorage.setItem('favorites', JSON.stringify(fav));
}

export function isPlayed(id) {
    const data = JSON.parse(localStorage.getItem('played')) || [];
    return data.some(item => item.id === id);
}
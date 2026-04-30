export function toggleFavorite(game) {

   
    let fav = JSON.parse(localStorage.getItem('favorites')) || [];
    let played = JSON.parse(localStorage.getItem('played')) || [];

    const exists = fav.some(item => item.id === game.id);

    console.log('SAVING FAVORITES:', fav);
    
    if (exists) {
        // удалить из favorites
        fav = fav.filter(item => item.id !== game.id);
    } else {
        // добавить в favorites
        fav.push(game);

        // ❗ удалить из played
        played = played.filter(item => item.id !== game.id);
    }

    localStorage.setItem('favorites', JSON.stringify(fav));
    localStorage.setItem('played', JSON.stringify(played));
}

export function isFavorite(id) {
    const data = JSON.parse(localStorage.getItem('favorites')) || [];
    return data.some(item => item.id === id);
}


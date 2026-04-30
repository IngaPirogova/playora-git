export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

export function getPlayed() {
    return JSON.parse(localStorage.getItem('played')) || [];
}
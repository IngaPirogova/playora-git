// class FavoritesManager {
//     constructor() {
//         this.favKey = 'favorites';
//         this.playedKey = 'played';
//     }

//     // =========================
//     // GET DATA
//     // =========================
//     getFavorites() {
//         return JSON.parse(localStorage.getItem(this.favKey)) || [];
//     }

//     getPlayed() {
//         return JSON.parse(localStorage.getItem(this.playedKey)) || [];
//     }

//     // =========================
//     // CHECK
//     // =========================
//     isFavorite(id) {
//         return this.getFavorites().some(item => item.id === id);
//     }

//     isPlayed(id) {
//         return this.getPlayed().some(item => item.id === id);
//     }

//     // =========================
//     // FAVORITE TOGGLE
//     // =========================
//     toggleFavorite(game) {
//         let fav = this.getFavorites();
//         let played = this.getPlayed();

//         const exists = fav.some(item => item.id === game.id);

//         if (exists) {
//             fav = fav.filter(item => item.id !== game.id);
//         } else {
//             fav.push({
//                 id: game.id,
//                 name: game.name,
//                 background_image: game.background_image,
//                 rating: game.rating
//             });

//             played = played.filter(item => item.id !== game.id);
//         }

//         this.save(fav, played);
//     }

//     // =========================
//     // PLAYED TOGGLE
//     // =========================
//     togglePlayed(game) {
//         let played = this.getPlayed();
//         let fav = this.getFavorites();

//         const exists = played.some(item => item.id === game.id);

//         if (exists) {
//             played = played.filter(item => item.id !== game.id);
//         } else {
//             played.push({
//                 id: game.id,
//                 name: game.name,
//                 background_image: game.background_image,
//                 rating: game.rating
//             });

//             fav = fav.filter(item => item.id !== game.id);
//         }

//         this.save(fav, played);
//     }

//     // =========================
//     // SAVE
//     // =========================
//     save(fav, played) {
//         localStorage.setItem(this.favKey, JSON.stringify(fav));
//         localStorage.setItem(this.playedKey, JSON.stringify(played));
//     }
// }

// export const favoritesManager = new FavoritesManager();
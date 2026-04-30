const API_KEY = '31c63af0eea54975ac5ac0e9f5f9d2e1';
const BASE_URL = 'https://api.rawg.io/api/games'

export default class GamesApi {
    constructor() {
        this.page = 1;
        this.query = '';
    }

    async fetchTrending() {
        const resp = await fetch(`${BASE_URL}?key=${API_KEY}&page=${this.page}&page_size=20`);

        // console.log('STATUS:', resp.status);
        // console.log('OK:', resp.ok);


        const data = await resp.json();
        
        return data;
        
    }
   
    async fetchSearch() {
        const resp = await fetch(
            `${BASE_URL}?key=${API_KEY}&search=${this.query}&page=${this.page}&page_size=20`
        );

        const data = await resp.json();

        return data;
    }

    


    async fetchById(id) {
        const resp = await fetch(
            `${BASE_URL}/${id}?key=${API_KEY}`
        );
        const data = await resp.json();

        return data;
    }

    nextPage() {
        this.page += 1;// увеличить страницу
    }

    prevPage() {
        if (this.page > 1) {
            this.page -= 1;// уменьшить
        }
    }

    resetPage() {
        this.page = 1;// сброс на 1
    }
}

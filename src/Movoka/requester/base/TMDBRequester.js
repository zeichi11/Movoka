import axios from 'axios';

const apiKey = 'c61dce6db69ba0930f6f86f8af17f1ba';

export default {
    get: async (url) => {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch(e) {
            console.log(e);
        }
    },

    getUpcoming: async function () {
        return await this.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ko`);
    },

    getTopRated: async function () {
        return await this.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko`);
    },

    getPopular: async function () {
        return await this.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko`);
    },

    getNowPlaying: async function () {
        return await this.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko`);
    },
    
    getDetails: async function (tmdb_id) {
        return await this.get(`https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=${apiKey}&language=ko`);
    },

    getCredits: async function (tmdb_id) {
        return await this.get(`https://api.themoviedb.org/3/movie/${tmdb_id}/credits?api_key=${apiKey}&language=ko`);
    },

    getProviders: async function (tmdb_id) {
        return await this.get(`https://api.themoviedb.org/3/movie/${tmdb_id}/watch/providers?api_key=${apiKey}`);
    },

    getRecommandMovies: async function (tmdb_id) {
        return await this.get(`https://api.themoviedb.org/3/movie/${tmdb_id}/recommendations?api_key=${apiKey}&language=ko`);
    }
}
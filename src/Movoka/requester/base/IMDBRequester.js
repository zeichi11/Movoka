import axios from 'axios';

const _apikey = 'k_286kf28g';

export default {
    get: async (url) => {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (e) {
            console.log(e);
        }
    },

    getYtTrailer: async function (imdb_id) {
        const data = await this.get(`https://imdb-api.com/en/API/YouTubeTrailer/${_apikey}/${imdb_id}`);
        if (data && data.videoId) {
            return `https://www.youtube.com/embed/${data.videoId}`;
        }
        return null;
    },

    getDetails: async function (imdb_id) {
        return await this.get(`https://imdb-api.com/en/API/Title/${_apikey}/${imdb_id}/Posters,Images,Trailer,Ratings`);
    }
};
import TMDBRequester from './base/TMDBRequester';
import IMDBRequester from './base/IMDBRequester';
import { MODEL } from '../common/Constants';
import MovieGenerator from '../model/MovieGenerator';

export default {
    getMovieDetails: async (tmdb_id) => {
        const tmdbDetails = await TMDBRequester.getDetails(tmdb_id);
        const tmdbCredits = await TMDBRequester.getCredits(tmdb_id);
        const tmdbProviders = await TMDBRequester.getProviders(tmdb_id);
        const tmdbRecommend = await TMDBRequester.getRecommandMovies(tmdb_id);
        
        if (!tmdbDetails || !tmdbCredits) {
            return null;
        }

        if (tmdbDetails.imdb_id) {
            const imdbDetails = await IMDBRequester.getDetails(tmdbDetails.imdb_id);
            const ytTrailerURL = await IMDBRequester.getYtTrailer(tmdbDetails.imdb_id)
            
            if (!imdbDetails) {
                return null;
            }
            
            return MovieGenerator.getMovieDetails(tmdbDetails, tmdbCredits, tmdbProviders, tmdbRecommend, imdbDetails, ytTrailerURL);
        }

        return null;
    },

    getMovieTrend: async () => {
        const upComing = await TMDBRequester.getUpcoming();
        const nowPlaying = await TMDBRequester.getNowPlaying();
        const topRated = await TMDBRequester.getTopRated();
        const popular = await TMDBRequester.getPopular();

        return { upComing, nowPlaying, topRated, popular };
    }
}
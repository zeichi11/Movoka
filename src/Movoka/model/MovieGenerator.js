import { MODEL } from '../common/Constants';

const _getTMDBResourcePath = (path, w) => {
    return `https://www.themoviedb.org/t/p/${w ? 'w' + w : 'original'}${path}`;
}

export default {
    generateTMDBPosterPath: function (path) {
        return _getTMDBResourcePath(path, "300");
    },

    generateTMDBBackdropPath: function (path) {
        return _getTMDBResourcePath(path);
    },

    getMovieDetails: function (tmdbDetails, tmdbCredits, tmdbProviders, tmdbRecommend, imdbDetails, ytTrailer) {
        const movieDetails = {}

        console.log(tmdbDetails);
        console.log(tmdbProviders);
        console.log(tmdbRecommend);

        movieDetails[MODEL.MOVIE_TITLE] = tmdbDetails.title;
        movieDetails[MODEL.MOVIE_ORIGINAL_TITLE] = tmdbDetails.original_title;
        movieDetails[MODEL.MOVIE_PRODUCTION_COMPANY] = tmdbDetails.production_companies;
        movieDetails[MODEL.MOVIE_RELEASE_DATE] = tmdbDetails.release_date;
        movieDetails[MODEL.MOVIE_LANG] = tmdbDetails.spoken_languages.map((item) => {
            return item.english_name;
        });

        movieDetails[MODEL.MOVIE_ORIGINAL_LANG] = tmdbDetails.original_language;
        movieDetails[MODEL.MOVIE_GENRES] = tmdbDetails.genres;
        movieDetails[MODEL.MOVIE_TAGLINE] = tmdbDetails.tagline;
        movieDetails[MODEL.MOVIE_DESC] = tmdbDetails.overview;
        movieDetails[MODEL.MOVIE_RUNTIME_MIN] = tmdbDetails.runtime;

        console.log(imdbDetails);

        movieDetails[MODEL.MOVIE_ACTORS] = tmdbCredits.cast;
        movieDetails[MODEL.MOVIE_CREW] = tmdbCredits.crew;
        movieDetails[MODEL.MOVIE_DIRECTORS] = tmdbCredits.crew.filter((item) => {
            return item.job === "Director";
        });

        movieDetails[MODEL.MOVIE_BACKDROP] = this.generateTMDBBackdropPath(tmdbDetails.backdrop_path);
        movieDetails[MODEL.MOVIE_POSTER] = this.generateTMDBPosterPath(tmdbDetails.poster_path);

        movieDetails[MODEL.MOVIE_TRAILER] = ytTrailer || imdbDetails.trailer.linkEmbed;
        movieDetails[MODEL.MOVIE_LOAD_YT_TRAILER] = Boolean(ytTrailer);
        movieDetails[MODEL.MOVIE_YEAR] = imdbDetails.year;
        movieDetails[MODEL.MOVIE_RATING] = imdbDetails.ratings;
        movieDetails[MODEL.MOVIE_IMAGES] = imdbDetails.posters.backdrops || [];
        movieDetails[MODEL.MOVIE_SIMILARS] = imdbDetails.similars;
        movieDetails[MODEL.MOVIE_CONTENT_RATING] = imdbDetails.contentRating;

        movieDetails[MODEL.MOVIE_TMDB_ID] = tmdbDetails.id;
        movieDetails[MODEL.MOVIE_IMDB_ID] = imdbDetails.id;

        movieDetails[MODEL.MOVIE_PROVIDERS] = tmdbProviders.results;
        movieDetails[MODEL.MOVIE_RECOMMAND] = tmdbRecommend.results;

        console.log(movieDetails);

        return movieDetails;
    }
};
import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
import { MODEL } from '../common/Constants';
import Requester from '../requester/Requester';
import Utils from '../common/Utils';

import Header from '../pages/details/Header';
import Summary from '../pages/details/Summary';
import Details from '../pages/details/Details';

function Contents({ match }) {
    const [isLoading, setIsLoading] = useState(true);
    const [movieId, setMovieId] = useState('none');
    const [ movieDetails, setMovieDetails ] = useState({});
    const { m_id } = match.params;

    if (movieId === 'none' || movieId !== m_id) {
        setMovieId(m_id);
    }

    const _getMovieDetails = async (tmdb_id) => {
        const details = await Requester.getMovieDetails(tmdb_id);
        if (details) {
            setMovieDetails(details);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        _getMovieDetails(m_id);
        // _getMovieDetails('27205-inception');
        // _getMovieDetails('13996-bottle-shock');
    }, []);

    return isLoading ? 'loading' :
        (
            <>
                <Header
                    imgSrc={movieDetails[MODEL.MOVIE_BACKDROP]}
                    poster={movieDetails[MODEL.MOVIE_POSTER]}
                />
                <Summary
                    title={movieDetails[MODEL.MOVIE_TITLE]}
                    languages={movieDetails[MODEL.MOVIE_LANG]}
                    year={movieDetails[MODEL.MOVIE_YEAR]}
                    contentRating={movieDetails[MODEL.MOVIE_CONTENT_RATING]}
                    releaseDate={movieDetails[MODEL.MOVIE_RELEASE_DATE]}
                    genres={movieDetails[MODEL.MOVIE_GENRES]}
                    ratings={movieDetails[MODEL.MOVIE_RATING]}
                    runtime={movieDetails[MODEL.MOVIE_RUNTIME_MIN]}
                />
                <Details
                    imdbId={movieDetails[MODEL.MOVIE_IMDB_ID]}
                    tmdbId={movieDetails[MODEL.MOVIE_TMDB_ID]}
                    title={movieDetails[MODEL.MOVIE_TITLE]}
                    languages={movieDetails[MODEL.MOVIE_LANG]}
                    originLang={movieDetails[MODEL.MOVIE_ORIGINAL_LANG]}
                    year={movieDetails[MODEL.MOVIE_YEAR]}
                    tagline={movieDetails[MODEL.MOVIE_TAGLINE]}
                    description={movieDetails[MODEL.MOVIE_DESC]}
                    runtime={movieDetails[MODEL.MOVIE_RUNTIME_MIN]}
                    trailer={movieDetails[MODEL.MOVIE_TRAILER]}
                    loadYtTrailer={movieDetails[MODEL.MOVIE_LOAD_YT_TRAILER]}
                    directors={movieDetails[MODEL.MOVIE_DIRECTORS]}
                    actors={movieDetails[MODEL.MOVIE_ACTORS]}
                    recommand={movieDetails[MODEL.MOVIE_RECOMMAND]}
                    similars={movieDetails[MODEL.MOVIE_SIMILARS]}
                    images={movieDetails[MODEL.MOVIE_IMAGES]}
                    providers={movieDetails[MODEL.MOVIE_PROVIDERS]}
                />
            </>
        )
}

export default Contents;
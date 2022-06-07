import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../components/movie/Movie';
import FlexibleMovieList from '../components/movie/FlexibleMovieList';
import CarouselScroll from '../components/ui/carousel/CarouselScroll';

function SimilarMovies(props) {
    const _renderMovie = function (movie) {
        return (
            <Movie
                id={movie.id}
                year={new Date(movie.release_date).getFullYear()}
                title={movie.title}
                rating={movie.vote_average}
                genres={movie.genre_ids}
                language={movie.original_language}
                summary={movie.overview}
                poster={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
            />
        );
    }

    const _renderMovieList = function (movies) {
        const movieList = [];

        movies.forEach((movie, index) => {
            movieList.push((<li key={index}>{_renderMovie(movie)}</li>));
        });

        return (<FlexibleMovieList movieList={movieList} />);
    }

    return (
        <CarouselScroll carouselList={_renderMovieList(props.movies)} scrollWidth={590}/>
    );
}

export default SimilarMovies;
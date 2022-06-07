import React from 'react';
import PropTypes from 'prop-types';
import MovieSimple from '../components/movie/MovieSimple';
import FlexibleMovieList from '../components/movie/FlexibleMovieList';
import CarouselScroll from '../components/ui/carousel/CarouselScroll';

function RecommandMovies(props) {
    const _renderMovie = function (movie) {
        return (
            <MovieSimple
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
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

export default RecommandMovies;
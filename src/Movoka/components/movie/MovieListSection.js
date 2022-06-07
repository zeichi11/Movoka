import React from "react";
import PropTypes from "prop-types";
import MovieList from "./MovieList";
import Movie from "./Movie";

function MovieListSection(props) {
	const _renderMovie = function (movie) {
		return (
			<Movie
				key={movie.id}
				id={movie.id}
				year={movie.year}
				title={movie.title}
				rating={movie.imDbRating}
				genres={movie.genres}
				language={movie.language}
				summary={movie.summary}
				poster={movie.image}
			/>
		);
	};

	const _renderMovieList = function (movies) {
		const LIST_ITEM_COUNT = 5;
		const moviePageList = [];

		// pagenation
		movies.forEach((movie, index) => {
			let page = parseInt(index / LIST_ITEM_COUNT, 10);
			if (!moviePageList[page]) {
				moviePageList[page] = [];
			}
			moviePageList[page].push(_renderMovie(movie));
		});

		return moviePageList.map((moviePage, index) => {
			return <MovieList key={index} movieList={movieList} />;
		});
	};

	return (
		<div className="movie_list_section">
			<ul className="movie_list">{/* { _renderMovieList(props.movies) } */}</ul>
		</div>
	);
}

export default MovieListSection;

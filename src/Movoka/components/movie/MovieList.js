import React from "react";
import PropTypes from "prop-types";

function MovieList(props) {
	return <li className="movie_list_item">{props.movieList}</li>;
}

MovieList.propTypes = {
	movieList: PropTypes.array.isRequired,
};

export default MovieList;

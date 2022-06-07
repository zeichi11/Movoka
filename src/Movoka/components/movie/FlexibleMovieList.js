import React from "react";
import PropTypes from "prop-types";

function FlexibleMovieList(props) {
	return <ul className="flexible_movie_list">{props.movieList}</ul>;
}

FlexibleMovieList.propTypes = {
	movieList: PropTypes.array.isRequired,
};

export default FlexibleMovieList;

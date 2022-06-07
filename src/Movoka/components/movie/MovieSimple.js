import UrlPathMap from "../../common/UrlPathMap";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LANGUAGE } from "../../common/Constants";

function Movie(props) {
	return (
		<div className="movie">
			<Link to={`${UrlPathMap.DETAILS}/${props.id}`}>
				<div>
					<img
						className="movie_poster"
						src={props.poster}
						alt={props.title}
						title={props.title}
					></img>
				</div>
				<div>
					<div className="movie_title" alt={props.title}>
						{props.title}
					</div>
					<div className="movie_oepn_info">
						<div className="movie_rating">
							✭ {parseFloat(props.rating).toFixed(1)}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Movie;

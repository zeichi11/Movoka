import UrlPathMap from "../../common/UrlPathMap";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LANGUAGE } from "../../common/Constants";

function Movie(props) {
	return (
		<div className="movie">
			<Link to={`${UrlPathMap.DETAILS}/${props.id}`}>
				<div className="movie_poster">
					<img src={props.poster} alt={props.title} title={props.title}></img>
				</div>
				<div className="movie_information">
					<div className="movie_title" alt={props.title}>
						{props.title}
					</div>
					{/* <div className="movie_genre">{props.genres}</div> */}
					<div className="movie_oepn_info">
						<div className="movie_year_lang">
							{props.year} ・ {LANGUAGE[props.language] || ""}
						</div>
						<div className="movie_rating">✭ {props.rating}</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Movie;

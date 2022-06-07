import UrlPathMap from "../../common/UrlPathMap";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LANGUAGE } from "../../common/Constants";

function ScreenShot(props) {
	return (
		<div className="movie_screen_shot">
			{/* <Link to={`${UrlPathMap.DETAILS}/${props.id}`}> */}
			<img className="screen_shot" src={props.src} alt={props.alt}></img>
			{/* </Link> */}
		</div>
	);
}

export default ScreenShot;

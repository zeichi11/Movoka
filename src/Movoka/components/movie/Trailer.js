import React, { useState, useEffect } from "react";
import axios from "axios";

function Trailer(props) {
	return props.loadYtTrailer ? (
		<iframe
			src={`${props.trailer}?modestbranding&rel=1`}
			width="330px"
			height="185px"
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	) : (
		<iframe
			src={`${props.trailer}?autoplay=false&width=400`}
			width="330px"
			height="185px"
			allowFullScreen={true}
			mozallowfullscreen="true"
			webkitallowfullscreen="true"
			frameBorder="0"
			scrolling="no"
			style={{
				display: "block",
			}}
		></iframe>
	);
}

export default Trailer;

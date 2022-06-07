import React, { useState, useEffect } from "react";

function Background(props) {
	const { isLoading, setIsLoading } = useState(null);
	const _getSampleColor = function () {
		const colorThief = new Color();
		const color = setIsLoading(true);
	};

	useEffect(() => {
		_getSampleColorOfPic();
	}, []);

	return (
		<div
			className="background_container"
			style={{
				background: `url(${details.background_image}) center center / cover no-repeat`,
			}}
		></div>
	);
}

export default Background;

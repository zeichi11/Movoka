import React, { useState, useEffect, useRef } from "react";
import Banner from "../pages/trend/Banner";
import TrendSection from "../pages/trend/TrendSection";
import Requester from "../requester/Requester";
import "./Home.scss";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [movieTrend, setMovieTrend] = useState({});

	const _getMovieTrend = async () => {
		const movieTrend = await Requester.getMovieTrend();
		if (movieTrend) {
			console.log(movieTrend);
			setMovieTrend(movieTrend);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		_getMovieTrend();
	}, []);

	return isLoading ? (
		"loading"
	) : (
		<div className="container">
			<Banner movie={movieTrend.nowPlaying.results[3]} />
			<TrendSection movieTrend={movieTrend} />
		</div>
	);
}

export default Home;
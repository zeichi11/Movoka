import React from "react";

function Rating(props) {
	const _generateRatingStr = function (rating, maxRating = 10) {
		const _calcRating = (r, m) => {
			return ` ✭ ${(r * m) / 10}`;
		};
		if (typeof rating === "String") {
			return _calcRating(parseInt(rating, 10), maxRating);
		}
		return _calcRating(rating, maxRating);
	};

	return (
		<div className="movie_rating">
			{_generateRatingStr(props.ratings.imDb, props.maxRating)}
		</div>
	);
}

export default Rating;

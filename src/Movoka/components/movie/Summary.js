import React from "react";
import Utils from "../../common/Utils";

function Summary(props) {
	const _arrayToString = function (languages) {
		return languages.join(", ");
	};

	const _getGenreString = function (genres) {
		return _arrayToString(
			genres.map((genre) => {
				return genre.name;
			})
		);
	};

	const _renderInfoList = function (infos) {
		return infos.map((info, index) => {
			return <li key={index}>{info}</li>;
		});
	};

	return (
		<div className="movie_summary">
			<div className="summary">
				<h1>
					{props.title}
					<span className="summary_year">{` (${props.year})`}</span>
				</h1>
				<ul>
					{_renderInfoList([
						`${props.releaseDate.replaceAll("-", "/")} ・ ${_getGenreString(
							props.genres
						)}`,
						_arrayToString(props.languages),
						Utils.getPlayTime(props.runtime),
					])}
				</ul>
			</div>
		</div>
	);
}

export default Summary;

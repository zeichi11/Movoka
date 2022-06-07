import React from "react";
import PeopleList from "./PeopleList";
import "./DirectorList.scss";

function ActorList(props) {
	const _generatePeopleList = function (directors) {
		return directors.map((director) => {
			return {
				name: director.name,
				image: `https://www.themoviedb.org/t/p/w200/${director.profile_path}`,
				asRole: director.job,
			};
		});
	};

	return (
		<>
			<h2>Directors</h2>
			<PeopleList
				peopleList={_generatePeopleList(props.directors)}
				listName="director"
			/>
		</>
	);
}

export default ActorList;

import React from "react";
import PeopleList from "./PeopleList";
import "./ActorList.scss";

function ActorList(props) {
	const _generatePeopleList = function (actors) {
		return actors.map((actor) => {
			return {
				name: actor.name,
				image: `https://www.themoviedb.org/t/p/w200/${actor.profile_path}`,
				asRole: actor.character,
			};
		});
	};

	return (
		<>
			<h2>Cast</h2>
			<PeopleList
				peopleList={_generatePeopleList(props.actors)}
				listName="actor"
			/>
		</>
	);
}

export default ActorList;

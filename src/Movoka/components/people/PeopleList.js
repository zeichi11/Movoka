import React from "react";
import "./PeopleList.scss";

function PeopleList(props) {
	const _getActorInfo = function (peopleList, listName, count) {
		console.log(peopleList);
		console.log(props);
		return peopleList.slice(0, count - 1).map((people, index) => {
			return (
				<li key={index}>
					<div className="cast_list_item">
						<div className={`${listName}_image`}>
							<img src={people.image}></img>
						</div>
						<div className={`${listName}_info`}>
							<ul>
								<li className={`${listName}_name`}>{people.name}</li>
								<li className={`${listName}_character`}>{people.asRole}</li>
							</ul>
						</div>
					</div>
				</li>
			);
		});
	};

	return <ul>{_getActorInfo(props.peopleList, props.listName, 5)}</ul>;
}

export default PeopleList;

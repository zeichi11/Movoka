import React, { useRef } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.scss";

function SearchBtn(props) {
	return (
		<div className="icon_box" onClick={_handleSearchIconClick}>
			<div className="icon">
				<FontAwesomeIcon icon={faSearch} size="lg" />
			</div>
		</div>
	);
}

export default SearchBtn;

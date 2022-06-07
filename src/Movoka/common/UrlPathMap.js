const PATH_SEP = "/";

function _generatePath(pathList) {
	return PATH_SEP + pathList.join(PATH_SEP);
}

export default {
	HOME: _generatePath([]),
	DETAILS: _generatePath(["details"]),
	ABOUT: _generatePath(["about"]),
	SEARCH: _generatePath(["search"]),
	USER: _generatePath(["user"]),
};

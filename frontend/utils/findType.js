const findType = object => {
	let type = "";

	if (!object) return null;

	switch (object) {
		case object.nature:
			type = "nature";
			break;
		case object.food:
			type = "food";
			break;
		case object.people:
			type = "people";
			break;
		case object.city:
			type = "city";
			break;
		default:
	}

	return type;
};

export default findType;

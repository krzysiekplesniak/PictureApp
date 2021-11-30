import React from "react";
import upperCase from "@/utils/upperCase";

const FilterItem = ({ name, value, filterChange }) => {
	return (
		<div>
			<input type='checkbox' name={name} id={name} value={value} checked={value} onChange={filterChange} />
			<label htmlFor={name}>{upperCase(name)}</label>
		</div>
	);
};

export default FilterItem;

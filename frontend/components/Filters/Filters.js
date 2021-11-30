import { useContext } from "react";
import FiltersContext from "@/context/FiltersContext";
import FilterItem from "./FilterItem";

const Filters = () => {
	const {
		filters: { people, nature, city, food },
		changeFilters,
		clearAllFilters
	} = useContext(FiltersContext);

	const handleClearFilters = e => {
		e.preventDefault();
		clearAllFilters();
	};

	const filterChange = e => {
		changeFilters(e.target.name);
	};

	return (
		<section>
			<form>
				<button onClick={handleClearFilters}>Clear filters</button>
				<br />

				<FilterItem name='people' value={people} filterChange={filterChange} />
				<FilterItem name='nature' value={nature} filterChange={filterChange} />
				<FilterItem name='city' value={city} filterChange={filterChange} />
				<FilterItem name='food' value={food} filterChange={filterChange} />
			</form>
		</section>
	);
};

export default Filters;

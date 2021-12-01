import { useContext } from "react";
import FiltersContext from "@/context/FiltersContext";
import FilterItem from "./FilterItem";
import styles from "@/styles/Filters.module.scss";

const Filters = () => {
	const {
		filters: { people, nature, city, food, pets, landmark, premium },
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
		<section className='container'>
			<form>
				<button className={styles.button} onClick={handleClearFilters}>
					CLEAR
				</button>
				<div className={styles.filters}>
					<FilterItem name='people' value={people} filterChange={filterChange} />
					<FilterItem name='nature' value={nature} filterChange={filterChange} />
					<FilterItem name='city' value={city} filterChange={filterChange} />
					<FilterItem name='food' value={food} filterChange={filterChange} />
					<FilterItem name='pets' value={pets} filterChange={filterChange} />
					<FilterItem name='landmark' value={landmark} filterChange={filterChange} />
					<FilterItem name='premium' value={premium} filterChange={filterChange} />
				</div>
			</form>
		</section>
	);
};

export default Filters;

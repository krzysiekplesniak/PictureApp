import { useContext } from "react";
import FiltersContext from "@/context/FiltersContext";
import FilterItem from "./FilterItem";
import styles from "@/styles/Filters.module.scss";

const Filters = () => {
	const { filters, changeFilters, clearAllFilters } = useContext(FiltersContext);

	const {
		people = false,
		nature = false,
		city = false,
		food = false,
		pets = false,
		landmark = false,
		premium = false
	} = filters;

	const filterItems = [
		{ name: "people", value: people },
		{ name: "nature", value: nature },
		{ name: "city", value: city },
		{ name: "food", value: food },
		{ name: "pets", value: pets },
		{ name: "landmark", value: landmark },
		{ name: "premium", value: premium },
		{ name: "Lower than $20", value: false },
		{ name: "$20 - $100", value: false },
		{ name: "$100 - $200", value: false },
		{ name: "More than $200", value: false }
	];

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
					<h2 className={styles.heading}>Category</h2>

					{filterItems.map((item, index) =>
						index < 7 ? (
							<FilterItem key={index} name={item.name} value={item.value} filterChange={filterChange} />
						) : null
					)}
					{/* <FilterItem name='people' value={people} filterChange={filterChange} />
					<FilterItem name='nature' value={nature} filterChange={filterChange} />
					<FilterItem name='city' value={city} filterChange={filterChange} />
					<FilterItem name='food' value={food} filterChange={filterChange} />
					<FilterItem name='pets' value={pets} filterChange={filterChange} />
					<FilterItem name='landmark' value={landmark} filterChange={filterChange} />
					<FilterItem name='premium' value={premium} filterChange={filterChange} /> */}
				</div>

				<hr className='hr2' />

				<div className={styles.filters}>
					<h2 className={styles.heading}>Price range</h2>
					{filterItems.map((item, index) =>
						index > 6 ? (
							<FilterItem key={index} name={item.name} value={item.value} filterChange={filterChange} />
						) : null
					)}
				</div>
			</form>
		</section>
	);
};

export default Filters;

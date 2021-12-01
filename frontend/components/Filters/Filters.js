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

					{filterItems.slice(0, 7).map((item, index) => (
						<FilterItem key={index} name={item.name} value={item.value} filterChange={filterChange} />
					))}
				</div>

				<hr className='hr2' />

				<div className={styles.filters}>
					<h2 className={styles.heading}>Price range</h2>
					{filterItems.slice(7, 11).map((item, index) => (
						<FilterItem key={index} name={item.name} value={item.value} filterChange={filterChange} />
					))}
				</div>
			</form>
		</section>
	);
};

export default Filters;

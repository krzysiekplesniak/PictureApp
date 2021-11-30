import { useContext } from "react";
import FiltersContext from "@/context/FiltersContext";
import FilterItem from "./FilterItem";

const Sort = () => {
	const {
		filters: { sort },
		changeFilters
	} = useContext(FiltersContext);

	const sortChange = e => {
		changeFilters(e.target.name);
	};

	return (
		<section className='container'>
			<FilterItem name='sort' value={sort} filterChange={sortChange} />
		</section>
	);
};

export default Sort;

import { useContext } from "react";
import FiltersContext from "@/context/FiltersContext";
import SortItem from "./SortItem";
import styles from "@/styles/Sort.module.scss";

const Sort = () => {
	const {
		filters: { sort },
		changeFilters
	} = useContext(FiltersContext);

	const sortChange = e => {
		changeFilters(e.target.name);
	};

	return (
		<section>
			<div className={styles.sort}>
				<SortItem name='sort' value={sort} filterChange={sortChange} />
			</div>
		</section>
	);
};

export default Sort;

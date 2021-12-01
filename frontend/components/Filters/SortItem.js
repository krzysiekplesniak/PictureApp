import React from "react";
import upperCase from "@/utils/upperCase";
import styles from "@/styles/FilterItem.module.scss";

const SortItem = ({ name, value, filterChange }) => {
	return (
		<div className={styles.item}>
			<input
				className={styles.item__input}
				type='checkbox'
				name={name}
				id={name}
				value={value}
				checked={value}
				onChange={filterChange}
			/>
			<label className={styles.item__label} htmlFor={name}>
				Sort by Date
                {/* TODO:  dodać zapodowanie sortowania po dacie lub cenie */}
			</label>
		</div>
	);
};

export default SortItem;

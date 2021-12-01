import React from "react";
import upperCase from "@/utils/upperCase";
import styles from "@/styles/FilterItem.module.scss";

const FilterItem = ({ name, value, filterChange }) => {
	return (
		<div className={styles.item}>
			<div className={styles.item__input}>
				<input
					className='input'
					type='checkbox'
					name={name}
					id={name}
					value={value}
					checked={value}
					onChange={filterChange}
				/>
			</div>

			<label className={styles.item__label} htmlFor={name}>
				{upperCase(name)}
			</label>

			{/* <label classNames={styles.formcontrol}>
				<input className={styles.item__input} type='checkbox' name='checkbox' />
				Checkbox
			</label> */}
		</div>
	);
};

export default FilterItem;

import { createContext, useState, useEffect } from "react";

import { useRouter } from "next/router";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
	const router = useRouter();

	const [filters, setFilters] = useState({
		people: false,
		nature: false,
		city: false,
		food: false,
		sort: false,
		pets: false,
		landmark: false,
		premium: false,
	});

	useEffect(() => {
		let query = "?";

		const { people, nature, city, food, sort, pets, landmark, premium } = filters;

		if (people) query += "people=true";
		if (nature) query ? (query += "&nature=true") : (query += "nature=true");
		if (city) query ? (query += "&city=true") : (query += "city=true");
		if (food) query ? (query += "&food=true") : (query += "food=true");
		if (pets) query ? (query += "&pets=true") : (query += "pets=true");
		if (landmark) query ? (query += "&landmark=true") : (query += "landmark=true");
		if (premium) query ? (query += "&premium=true") : (query += "premium=true");

		if (sort) query ? (query += "&sort=true") : (query += "sort=true");

		if (query.length > 1) {
			
			router.push(`${query}`);
		} else {
			router.push("/");
		}
	}, [filters]);

	const changeFilters = filter => {
		setFilters({ ...filters, [filter]: !filters[filter] });
	};

	const clearAllFilters = () => {
		console.log("filters", filters);
		setFilters({
			people: false,
			nature: false,
			city: false,
			food: false,
			pets: false,
			landmark: false,
			premium: false,
			sort: false
		});
	};

	return (
		<FiltersContext.Provider value={{ filters, changeFilters, clearAllFilters }}>
			{children}
		</FiltersContext.Provider>
	);
};

export default FiltersContext;

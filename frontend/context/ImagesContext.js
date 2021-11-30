import { createContext, useState } from "react";

import { NEXT_URL } from "@/config/index";

const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
	const [picturesInStock, setPicturesInStock] = useState(null);

	const addPicture = async id => {
		setPicturesInStock(picturesInStock + 1);

		console.log("dodano zdjęcie do koszyka");

		// funkcje dla pózniejszego dodania obługi żywego backednuStrapi
		// const res = await fetch(`${NEXT_URL}/api/checkout${id}`, {
		//   method: 'POST',
		// })

		// if (res.ok) {
		//   console.log('dodano zdjęcie do koszyka')
		// }
	};

	const deletePicture = async id => {
		setPicturesInStock(0);

		console.log("skasowano zdjęcie w koszyku");

		// funkcje dla pózniejszego dodania obługi żywego backednu w Strapi
		// const res = await fetch(`${NEXT_URL}/api/checkout${id}`, {
		//   method: 'POST',
		// })

		// if (res.ok) {
		//   console.log('skasowano zdjęcie w koszyku')
		// }
	};

	return (
		<ImagesContext.Provider value={{ picturesInStock, addPicture, deletePicture }}>
			{children}
		</ImagesContext.Provider>
	);
};

export default ImagesContext;

import ImagesContext from "@/context/ImagesContext";
import { useContext } from "react";
import styles from "@/styles/NumberPictures.module.css";

const NumberPictures = () => {

	const { picturesInStock } = useContext(ImagesContext);

	return (
		<div className={styles.numberPictures}>
			<div className={styles.numberPictures__items}>{picturesInStock}</div>
		</div>
	);
};

export default NumberPictures;

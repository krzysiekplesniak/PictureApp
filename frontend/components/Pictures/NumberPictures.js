import ImagesContext from "@/context/ImagesContext";
import { useContext } from "react";

const NumberPictures = () => {
	const { picturesInStock, deletePicture } = useContext(ImagesContext);

	return (
		<>
			#{picturesInStock}
			<button onClick={() => deletePicture()}>X</button>
		</>
	);
};

export default NumberPictures;

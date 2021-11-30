import Image from "next/image";
import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";

const PictureItem = ({ picture }) => {
	const { addPicture } = useContext(ImagesContext);

	return (
		<>
			<p>{picture.name}</p>
			<p>{picture.description}</p>
			<div>
				<button onClick={() => addPicture(picture.id)}>DODAJ</button>
				<Image
					src={picture.image ? picture.image.formats.thumbnail.url : `/images/pexel.jpeg`}
					width='250'
					height='200'
				/>
			</div>
		</>
	);
};

export default PictureItem;

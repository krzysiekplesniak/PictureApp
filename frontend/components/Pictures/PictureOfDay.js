import Image from "next/image";
import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";
import styles from "@/styles/PictureOfDay.module.scss";

export default function PictureOfDay({ featuredArtwork }) {
	// FIXME: zmienić domyślne wartości z null po użyciu TS

	const { addPicture } = useContext(ImagesContext);

	return (
		<section className='container'>
			<h1>Picture of the day</h1>
			<div>
				<p>{featuredArtwork.name}</p>
				<p>{featuredArtwork.description}</p>

				<button onClick={() => addPicture(featuredArtwork.id)}>DODAJ</button>

				<Image
					src={featuredArtwork.image ? featuredArtwork.image.formats.thumbnail.url : `/images/pexel.jpeg`}
					alt='Picture featured artwork'
					layout='responsive'
					objectFit='cover'
					width='1300'
					height='550'
					priority
					quality={50}
				/>
			</div>
			<hr className='hr2' />
		</section>
	);
}

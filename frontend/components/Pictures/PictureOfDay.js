import Image from "next/image";
import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";
import styles from "@/styles/PictureOfDay.module.scss";

export default function PictureOfDay({ featuredArtwork }) {
	// FIXME: zmienić domyślne wartości z null po użyciu TS

	const { addPicture } = useContext(ImagesContext);

	return (
		<section className='container'>
			<div className={styles.pictureofDay}>
				<div className={styles.pictureofDay__info}>
					<h1 className={styles.pictureofDay__h1}>{featuredArtwork.name}aasdsdsd</h1>
					<button className={styles.pictureofDay__button} onClick={() => addPicture(featuredArtwork.id)}>
						ADD TO CART
					</button>
				</div>

				<div className={styles.pictureofDay__image}>
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
					<div className={styles.pictureofDay__imageText}>Photo of the day</div>
				</div>
			</div>

			<div className={styles.description}>
				<div className={styles.description__titles}>
					<h2 className={styles.description__about}>About pictures</h2>
					<h2 className={styles.description__alsobuy}>People also buy</h2>
				</div>

				<div className={styles.description__info}>
					<div>
						<p>
							{featuredArtwork.description}
							sdasdsdsd sddddddddddddddddd dddddddddddddddd ddddddddddddddd ddddddddddddddd dddddddddddddd
							ddddddddddd
						</p>
					</div>
					<div className={styles.description__3pictures}>
						<div>1111</div>
						<div>22222</div>
						<div>33333</div>
					</div>
				</div>
			</div>
		</section>
	);
}

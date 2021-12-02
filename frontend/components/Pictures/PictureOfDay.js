import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";
import ImageTile from "@/components/Pictures/ImageTile";
import Image from "next/image";
import upperCase from "@/utils/upperCase";
import styles from "@/styles/PictureOfDay.module.scss";

export default function PictureOfDay({ pictures, picturePhotoDay }) {
	// FIXME: zmienić domyślne wartości z null po użyciu TS

	const { addPicture } = useContext(ImagesContext);

	return (
		<section>
			<div className={styles.pictureofDay}>
				<div className={styles.pictureofDay__info}>
					<h1 className={styles.pictureofDay__h1}>{upperCase(picturePhotoDay.name)}</h1>
					<button className={styles.pictureofDay__button} onClick={() => addPicture(picturePhotoDay.id)}>
						ADD TO CART
					</button>
				</div>

				<div className={styles.pictureofDay__image}>
					<Image
						src={picturePhotoDay.image ? picturePhotoDay.image.url : `/images/pexel.jpeg`}
						alt='Picture featured artwork'
						layout='responsive'
						objectFit='cover'
						width=' 650'
						height='275'
						priority
						quality={100}
					/>
					<div className={styles.pictureofDay__imageText}>Photo of the day</div>
				</div>
			</div>

			<div className={styles.description}>
				<div className={styles.description__info}>
					<div className={styles.description___aside_left}>
						<h1>About pictures</h1>
						<p className={styles.description__text}>{picturePhotoDay.description}</p>
					</div>
					<div className={styles.description__aside_right}>
						<div>
							<h1>People also buy</h1>
						</div>
						<div className={styles.description__3pictures}>
							{pictures.slice(0, 3).map((picture, index) => (
								<ImageTile key={index} source={picture} width={150} height={200} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

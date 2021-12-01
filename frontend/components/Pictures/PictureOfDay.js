import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";
import ImageTile from "@/components/Pictures/ImageTile";
import Image from "next/image";
import upperCase from "@/utils/upperCase";
import styles from "@/styles/PictureOfDay.module.scss";

export default function PictureOfDay({ fea, pictures }) {
	// FIXME: zmienić domyślne wartości z null po użyciu TS

	const { addPicture } = useContext(ImagesContext);

	return (
		<section className='container'>
			<div className={styles.pictureofDay}>
				<div className={styles.pictureofDay__info}>
					<h1 className={styles.pictureofDay__h1}>{upperCase(fea.name)}</h1>
					<button className={styles.pictureofDay__button} onClick={() => addPicture(fea.id)}>
						ADD TO CART
					</button>
				</div>

				<div className={styles.pictureofDay__image}>
					<Image
						src={fea.image ? fea.image.url : `/images/pexel.jpeg`}
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
				<div className={styles.description__titles}>
					<h1 className={styles.description__about}>About pictures</h1>
					<h1 className={styles.description__alsobuy}>People also buy</h1>
				</div>

				<div className={styles.description__info}>
					<div>
						<p className={styles.description__text}>{fea.description}</p>
					</div>
					<div className={styles.description__3pictures}>
						{pictures.slice(0, 3).map(picture => (
							<ImageTile source={picture.image} width={150} height={200} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

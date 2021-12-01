import Image from "next/image";
import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";
import findType from "@/utils/findType";
import upperCase from "@/utils/upperCase";
import styles from "@/styles/PictureItem.module.scss";

const PictureItem = ({ picture }) => {
	const { addPicture } = useContext(ImagesContext);

	return (
		<>
			<div className={styles.items}>
				<div className={styles.picture}>
					<Image
						src={picture.image ? picture.image.formats.thumbnail.url : `/images/pexel.jpeg`}
						alt='Best pictures on market stock arounf the world'
						width='280'
						height='390'
						layout='responsive'
						objectFit='cover'
						priority
						quality={50}

					/>

					<button className={styles.button} onClick={() => addPicture(picture.id)}>
						ADD TO CART
					</button>
					<p>{upperCase(findType(picture))}</p>
					<p>{picture.name}</p>
				</div>
			</div>
		</>
	);
};

export default PictureItem;

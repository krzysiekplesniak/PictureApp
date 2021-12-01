import React from "react";
import PictureItem from "./PictureItem";
import styles from "@/styles/Pictures.module.scss";

const Pictures = ({ pictures }) => {
	
	return (
		<section>
			<div className={styles.pictures}>
				{pictures.map(picture => (
					<PictureItem key={picture.id} picture={picture} />
				))}
			</div>
		</section>
	);
}

export default Pictures;

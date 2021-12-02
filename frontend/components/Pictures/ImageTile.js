import React from "react";
import Image from "next/image";
import styles from "@/styles/ImageTile.module.scss";

const ImageTile = ({ source, width, height }) => {
	return (
		<div className={styles.image}>
			<Image
				src={
					(source && source.image.formats.small)
						? source.image.formats.small.url
						: source.image.formats.thumbnail.url
				}
				alt='Picture featured artwork'
				objectFit='cover'
				width={width}
				height={height}
				priority
				quality={50}
			/>
		</div>
	);
};

export default ImageTile;

import React from "react";
import PictureItem from "./PictureItem";

const Pictures = ({ pictures }) => {
	
	return (
		<section className='container'>
			{pictures.map(picture => (
				<PictureItem key={picture.id} picture={picture} />
			))}
		</section>
	);
}

export default Pictures;

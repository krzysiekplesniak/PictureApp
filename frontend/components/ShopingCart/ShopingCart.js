import React from 'react'
import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";
import NumberPictures from "@/components/ShopingCart/NumberPictures";
import styles from "@/styles/ShopingCart.module.css";

const ShopingCart = () => {

	const { deletePicture } = useContext(ImagesContext);

    return (
		<>
			<button clssonClick={() => deletePicture()}>Clear Items</button>
			<div className={styles.shoping__cart}>
				<div className={styles.shoping__items}>
					<NumberPictures />
				</div>
				<div className={styles.shoping__icon}>
					<a>
						<img src='assets/shoping-cart.png' alt='Checkout shoping cart' />
						{/* <span className={styles.globals}>Checkout shoping cart</span> */}
					</a>
				</div>
			</div>
		</>
	);
}

export default ShopingCart; 
import React from "react";
import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";
import styles from "@/styles/ShopingCart.module.css";

const ShopingCart = () => {
	const { picturesInStock, deletePicture } = useContext(ImagesContext);

	return (
		<div className={styles.shoping__cart}>
			<button onClick={() => deletePicture()}>Clear Items</button>
			<div className={styles.shoping__items}>
				11{picturesInStock}
			</div>
			<div className={styles.shoping__icon}>
				<a>
					<img src='assets/shopping-cart.png' alt='Checkout shoping cart' />
					{/* <span className={styles.globals}>Checkout shoping cart</span> */}
				</a>
			</div>
		</div>
	);
};

export default ShopingCart;

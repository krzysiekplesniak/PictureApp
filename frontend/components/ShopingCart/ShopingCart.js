import React from "react";
import { useContext } from "react";
import ImagesContext from "@/context/ImagesContext";
import styles from "@/styles/ShopingCart.module.scss";

const ShopingCart = () => {
	const { picturesInStock, deletePicture } = useContext(ImagesContext);

	return (
		<div className={styles.shopingcart}>
			<button className={styles.shopingcart__button} onClick={deletePicture}>
				Clear
			</button>

			{!picturesInStock == 0 || !!picturesInStock ? (
				<div className={styles.shopingcart__items}>{picturesInStock}</div>
			) : null}

			<div className={styles.shopingcart__icon}>
				<a>
					<img src='assets/shopping-cart.png' alt='Checkout shoping cart' />
				</a>
			</div>
		</div>
	);
};

export default ShopingCart;

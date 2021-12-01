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

			<div className={styles.shopingcart__checkout}>
				{!picturesInStock == 0 || !!picturesInStock ? (
					<span className={styles.shopingcart__items}>{picturesInStock}</span>
				) : null}
				<span className={styles.shopingcart__icon}>
					<a>
						<img src='assets/shopping-cart.png' alt='Checkout shoping cart' />
					</a>
				</span>
			</div>
		</div>
	);
};

export default ShopingCart;

import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import ShopingCart from "@/components/ShopingCart/ShopingCart";

const Header = () => {
	return (
		<div className='container'>
			<header className={styles.header}>
				<div className={styles.logo}>
					<Link href='https://bejamas.io'>
						<a>
							<img src='assets/bejamas-logo.png' alt='Bejamas logo' />
							{/* <span className={styles.globals}>Bejamas logo</span> */}
						</a>
					</Link>
				</div>
				<nav className={styles.shoping}>
					<ShopingCart />
				</nav>
			</header>
		</div>
	);
};

export default Header;

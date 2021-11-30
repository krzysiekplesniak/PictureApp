import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
	return (
		<footer c lassName={styles.footer}>
			<p>Copyrigt &copy; PictureApp 2021</p>
			<p>
				<Link href='/about'>About this Project</Link>
			</p>
		</footer>
	);
};

export default Footer;

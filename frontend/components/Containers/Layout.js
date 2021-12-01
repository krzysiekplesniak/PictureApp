import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ShowPictureDay from "../Pictures/PictureOfDay";
import { useRouter } from "next/router";

const Layout = ({ title, keyword, description, children }) => {
	const router = useRouter;

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keyword' content={keyword} />
			</Head>

			<Header />

			{/* all content tutaj jest */}
			{children}

			{/* <Footer /> */}
		</div>
	);
};

Layout.defaultProps = {
	title: "Pictures shop | Find coolest pics on the world",
	description: "Find the latest fun pic",
	keyword: "Pictures, stock, image"
};

export default Layout;

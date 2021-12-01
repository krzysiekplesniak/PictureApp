import Layout from "@/components/Containers/Layout";
import Link from "next/link";
import { API_URL } from "@/config/index";

const About = ({ featuredArtwork }) => {
	return (
		<Layout title='About | PictureApp'>
			<h1>About page</h1>
			<p>{featuredArtwork}</p>

			<Link href='/'>back home</Link>
		</Layout>
	);
};

export default About;

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/pictures`);
	const events = await res.json();

	// const featuredArtwork = events.find(evt => evt.slug === "medytacja-na-wesolo");
	// console.log(featuredArtwork);
	const featuredArtwork = null

	return {
		props: {
			featuredArtwork
		}
	};
}

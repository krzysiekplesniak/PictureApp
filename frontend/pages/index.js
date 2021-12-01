import Layout from "@/components/Containers/Layout";
import Filters from "@/components/Filters/Filters";
import Sort from "@/components/Filters/Sort";
import PictureOfDay from "@/components/Pictures/PictureOfDay";
import Pictures from "@/components/Pictures/Pictures";
import { fetchAPI, Filter } from "@/utils/fetchAPI";
import { API_URL } from "@/config/index";
import styles from "@/styles/Home.module.scss";
import Pagination from "@/components/Filters/Pagination";

export default function HomePage({ pictures, featuredArtwork }) {
	return (
		<Layout title='Home page | PictureApp'>
			<main className={styles.pictures}>
				<div className={styles.pictures__ofday}>
					<PictureOfDay featuredArtwork={featuredArtwork} />
				</div>
				<div className={styles.pictures__all}>
					<div className={styles.pictures__filters}>
						<Filters />
					</div>
					<div className={styles.pictures__main}>
						<div className={styles.pictures__sort}>
							<Sort/>
						</div>
						<div className={styles.pictures__6pack}>
							<Pictures pictures={pictures} />
						</div>
						<div className={styles.pictures__pagination}>
							<Pagination />
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}

export async function getServerSideProps({ query: { people, nature, city, food, sort } }) {
	let queryString = "?_limit=6";
	let filters = "";

	if (people) {
		filters += "people=true";
	}
	if (nature) {
		filters ? (filters += "&nature=true") : (filters += "nature=true");
	}
	if (city) {
		filters ? (filters += "&city=true") : (filters += "city=true");
	}
	if (food) {
		filters ? (filters += "&food=true") : (filters += "food=true");
	}

	if (filters) queryString += `&${filters}`;

	if (sort) {
		queryString += "&_sort=date:ASC";
	} else {
		queryString += "&_sort=date:DESC";
	}

	const [picturesFiletred, picturesdfeaturedArtwork] = await Promise.all([
		fetchAPI(`${API_URL}/pictures${queryString}`),
		fetchAPI(`${API_URL}/pictures?featuredartwork=true`)
	]);

	return {
		props: {
			pictures: picturesFiletred,
			featuredArtwork: picturesdfeaturedArtwork
		}
	};
}

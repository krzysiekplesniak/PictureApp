import Link from "next/link";
import { PER_PAGE } from "@/config/index";
import styles from "@/styles/Pagination.module.scss";

const Pagination = ({ page, total }) => {
	const lastPage = Math.ceil(total / PER_PAGE);
	const pagination = "< 1 2 3 4 >";

	return (
		<section className={styles.pagination}>
			<span className={styles.pagination__text}>{pagination}</span>
			{page > 1 && (
				<Link href={`/events?page=${page - 1}`}>
					<a className='btn-secondary'>Prev</a>
				</Link>
			)}
			{page < lastPage && (
				<Link href={`/events?page=${page + 1}`}>
					<a className='btn-secondary'>Next</a>
				</Link>
			)}
		</section>
	);
};

export default Pagination;

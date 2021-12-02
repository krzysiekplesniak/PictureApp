
import { AppProps } from "next/app";
import { ImagesProvider } from "@/context/ImagesContext"
import { FiltersProvider } from "@/context/FiltersContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ImagesProvider>
			<FiltersProvider>
				<Component {...pageProps} />
			</FiltersProvider>
		</ImagesProvider>
	);
}

export default MyApp;

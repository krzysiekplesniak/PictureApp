export async function fetchAPI(path) {
	const response = await fetch(path);
	const data = await response.json();

	return data;
}

export async function Filter(picturesAll, number) {
	const featuredArtwork = await picturesAll.find(pic => pic === number);

	return featuredArtwork;
}

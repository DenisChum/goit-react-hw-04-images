const KEY = '29333326-6fb9af0c3a2e9f9abdbab7a92';
const BASE_URL = 'https://pixabay.com/api/';

export default async function pixabayApi(query, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`,
    );

    if (!response.ok)
      throw Error('Oooops, anything did not work. Try again :)');

    const parsedResponse = await response.json();

    if (!parsedResponse.totalHits)
      throw Error(
        `Oooops, we could not find "${query}". Write something another.`,
      );

    return parsedResponse;
  } catch (error) {
    throw error;
  }
}


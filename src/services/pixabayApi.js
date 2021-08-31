const API_KEY = "21709633-754ac93ca1acb3d9a26f3f2d1";
const BASE_URL = "https://pixabay.com/api";

export const fetchImages = (searchQuery, page) => {
  const url = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return response.statusText;
  });
};
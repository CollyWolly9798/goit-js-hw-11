export const fetchPhotosByQuery = async searchedQuery => {
  const searchParams = new URLSearchParams({
    key: '48318728-33e02a537f20daf55b07c1f54',
    q: searchedQuery.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  try {
    const response = await fetch(`https://pixabay.com/api/?${searchParams}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
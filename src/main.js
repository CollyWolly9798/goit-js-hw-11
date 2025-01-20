import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotosByQuery } from './JS/pixabay-api';
import { createGalleryTemplate } from './JS/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/loader.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const onSearchFormSubmit = event => {
  event.preventDefault();
  galleryEl.innerHTML = '';

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();
  if (searchedQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please fill in the search form!',
    });
    return;
  }

  loaderEl.style.display = 'block';

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        searchFormEl.reset();
        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryTemplate(el))
        .join('');
      galleryEl.innerHTML = galleryTemplate;

      lightbox.refresh();
      iziToast.success({
        title: 'Success',
        message: `Found ${data.totalHits || 0} images.`,
      });

      searchFormEl.reset();
    })
    .catch(err => {
      console.error('Error fetching photos:', err);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
      });
    })
    .finally(() => {
      loaderEl.style.display = 'none';
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

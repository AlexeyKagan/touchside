import API from '../../../../modules/api';

const IMAGES_RESOURCE = {
  LIST: {
    url: 'https://picsum.photos/list',
  },
  PHOTO: {
    url: 'https://picsum.photos/200/200?image={id}'
  },
};

/**
 * @param {Array} images 
 */
const resolveResponse = images => images.map(image => ({
  ...image,
  src: IMAGES_RESOURCE.PHOTO.url.replace(/{id}/, image.id),
}));

/**
 * @returns {Promise}
 */
const fetchImages = () => 
  API
    .fetchRequest(IMAGES_RESOURCE.LIST.url)
    .then(resolveResponse);

export default fetchImages;

import API from '../../../../modules/api';

const IMAGES_ON_VIEW = 6;
const IMAGES_START_INDEX = 20;

/**
 * @param {Array} images 
 */
const resolveResponse = images => images.map(image => ({
  ...image,
  src: `https://picsum.photos/200/200?image=${image.id}`,
}));

/**
 * @param {Array} images 
 */
const imagesToView = images => 
  images.slice(IMAGES_START_INDEX, IMAGES_START_INDEX + IMAGES_ON_VIEW);

  /**
   * @returns {Promise}
   */
const fetchImages = () => 
  API
  .fetchRequest('https://picsum.photos/list')
  .then(resolveResponse)
  .then(imagesToView);

export default fetchImages;

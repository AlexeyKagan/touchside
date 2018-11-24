import API from '../../../../modules/api';

/**
 * @param {Array} images 
 */
const resolveResponse = images => images.map(image => ({
  ...image,
  src: `https://picsum.photos/200/200?image=${image.id}`,
}));

  /**
   * @returns {Promise}
   */
const fetchImages = () => 
  API
  .fetchRequest('https://picsum.photos/list')
  .then(resolveResponse);
  // .then(imagesToView);

export default fetchImages;

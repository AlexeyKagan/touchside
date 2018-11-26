import API from '../../../../modules/api';

import IMAGE_RESOURCE from './image-resource';


/**
 * @param {Array} images 
 */
const resolveResponse = images => images.map(image => ({
  ...image,
  src: IMAGE_RESOURCE.PHOTO.url.replace(/{id}/, image.id),
}));

/**
 * @returns {Promise}
 */
const fetchImages = () => 
  API
    .fetchRequest(IMAGE_RESOURCE.LIST.url)
    .then(resolveResponse);

export default fetchImages;

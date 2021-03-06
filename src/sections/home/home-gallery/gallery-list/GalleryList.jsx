import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardColumns, Container } from 'react-bootstrap';

import ImageWithLoading from '../../../../common/components/image-with-loading/ImageWithLoading';


function GalleryList({ images, headerTitle, socialId }) {
  return (
    <Container>
      <h2 className="home-gallery__header">{headerTitle}</h2>
      <h3 className="home-gallery__social-id">{socialId}</h3>

      <CardColumns>
        {images.map(({ author, id, src }) => (
          <Card key={id}>
            <Card.Img
              src={src}
              className="card-img-top home-gallery__image"
              whileLoadingClass="home-gallery__while-loading-image"
              as={ImageWithLoading}
              alt={author}
            />
            <Card.Body>
              <Card.Text>{author}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Container>
  );
}

GalleryList.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  headerTitle: PropTypes.string.isRequired,
  socialId: PropTypes.string.isRequired,
};

export default GalleryList;

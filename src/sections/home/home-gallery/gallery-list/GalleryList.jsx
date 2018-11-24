import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardColumns, Container } from 'react-bootstrap';

function GalleryList({ images, headerTitle, socialId }) {
  return (
    <Container>
      <h2 className="home-gallery__header">{headerTitle}</h2>
      <h3 className="home-gallery__social-id">{socialId}</h3>

      <CardColumns>
        {images.map(({ author, id, src }) => (
          <Card key={id}>
            <Card.Img
              variant="top"
              src={src}
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
  images: PropTypes.array.isRequired,
  headerTitle: PropTypes.string.isRequired,
  socialId: PropTypes.string.isRequired,
}

export default GalleryList;

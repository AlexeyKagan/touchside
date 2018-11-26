import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardColumns, Container } from 'react-bootstrap';

class StateProvider extends React.Component {
  state = {};

  render() {
    const { children } = this.props;

    return children({
      state: this.state,
      setState: this.setState.bind(this),
    })
  }
}

const ImageWithLoading = ({ className, whileLoadingClass, ...restProps }) => (
  <StateProvider>
    {
      ({ state, setState }) => (
        <div className={whileLoadingClass}>
          <img
            alt=""
            {...restProps}
            className={`${className} ${''}`}
            onLoad={() => setState({ isLoaded: true })}
          />
        </div>
      )
    }
  </StateProvider>
);

ImageWithLoading.propTypes = {
  className: PropTypes.string,
  whileLoadingClass: PropTypes.string,
};


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
              className="card-img-top"
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
  images: PropTypes.array.isRequired,
  headerTitle: PropTypes.string.isRequired,
  socialId: PropTypes.string.isRequired,
};

export default GalleryList;

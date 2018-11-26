import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import GalleryList from './gallery-list/GalleryList';
import fetchImages from './request/fetchImages';

import './home-gallery.scss';


export default class HomeGallery extends Component {
  static IMAGES_ON_VIEW = 6;

  state = {
    responseImages: [],
    startImagesIndex: 0,
    imagesCount: 0
  };

  componentDidMount() {
    fetchImages()
      .then(responseImages =>
        this.setState({
          responseImages,
          imagesCount: responseImages.length - 1
        })
      )
      .catch(console.error);
  }

  onPaginate = count => {
    const { startImagesIndex } = this.state;

    this.setState({ startImagesIndex: startImagesIndex + count });
  };

  getImages() {
    const { responseImages, startImagesIndex } = this.state;

    return responseImages.slice(startImagesIndex, startImagesIndex + HomeGallery.IMAGES_ON_VIEW);
  }

  render() {
    const { startImagesIndex, imagesCount } = this.state;

    const images = this.getImages();

    return (
      <section className="album py-5 bg-light home-gallery">
        <GalleryList
          images={images}
          headerTitle="FOLLOW US ON INSTAGRAM"
          socialId="@tamtamnl"
        />

        <div className="home-gallery__pagination">
          <Button
            disabled={startImagesIndex === 0}
            variant="dark"
            onClick={() => this.onPaginate(-HomeGallery.IMAGES_ON_VIEW)}
          >
            Prev
          </Button>
          <Button
            disabled={startImagesIndex === imagesCount}
            variant="dark"
            onClick={() => this.onPaginate(HomeGallery.IMAGES_ON_VIEW)}
          >
            Next
          </Button>
        </div>
      </section>
    );
  }
}

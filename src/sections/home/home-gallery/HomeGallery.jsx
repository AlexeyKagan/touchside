import React, { Component } from 'react';
import GalleryList from './GalleryList/GalleryList';

import fetchImages from './request/fetchImages';

import './home-gallery.scss';

export default class HomeGallery extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    fetchImages()
      .then(images => this.setState({ images }))
      .catch(console.error)
  }

  render() {
    const { images } = this.state;

    return (
      <GalleryList 
        images={images} 
        headerTitle="FOLLOW US ON INSTAGRAM"
        socialId="@tamtamnl"
      />
    );
  }
}


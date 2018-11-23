import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import CarouselBackgroundFirst from '../../../assets/images/carousel/carousel-1.jpg';
import CarouselBackgroundSecond from '../../../assets/images/carousel/carousel-2.jpg';
import CarouselBackgroundThird from '../../../assets/images/carousel/carousel-3.jpg';

import Button from '../../../common/components/button/Button';

import './slider.scss';

// @TODO props

export default class HomeSlider extends Component {
  state = {
    activeIndex: 0,
    count: 2,
  };

  static DIRECTIONS = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
  };

  onSlideLeft = () => this.onSlide(HomeSlider.DIRECTIONS.LEFT);

  onSlideRight = () => this.onSlide(HomeSlider.DIRECTIONS.RIGHT);

  onSlide = directionType => {
    const { activeIndex, count } = this.state;

    let nextIndex = null;

    if (directionType === HomeSlider.DIRECTIONS.LEFT) {
      const nextActiveIndex = activeIndex - 1;
      nextIndex = nextActiveIndex < 0 ? 0 : nextActiveIndex;
    }

    if (directionType === HomeSlider.DIRECTIONS.RIGHT) {
      const nextActiveIndex = activeIndex + 1;
      nextIndex = nextActiveIndex > count ? count : nextActiveIndex;
    }

    this.setState({ activeIndex: nextIndex })
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <section className="home-carousel">
        <Carousel
          controls={false}
          indicators={false}
          interval={null}
          activeIndex={activeIndex}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 home-carousel__image"
              src={CarouselBackgroundFirst}
              alt="First slide"
            />
            <Carousel.Caption className="home-carousel__caption">
              <h3>WALIBI</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home-carousel__image"
              src={CarouselBackgroundSecond}
              alt="Second slide"
            />

            <Carousel.Caption className="home-carousel__caption">
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 home-carousel__image"
              src={CarouselBackgroundThird}
              alt="Third slide"
            />

            <Carousel.Caption className="home-carousel__caption">
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="home-carousel__controls">
          <i className="fas fa-angle-left" onClick={this.onSlideLeft} />
          <Button className="home-carousel__controls-btn">
            View case
          </Button>
          <i className="fas fa-angle-right" onClick={this.onSlideRight} />
        </div>

        <div className="home-carousel__scroll">
          <button className="home-carousel__scroll-btn">
            <svg className="home-carousel__scroll-svg" width="22px" height="34px" viewBox="0 0 22 34" enableBackground="new 0 0 22 34" xmlSpace="preserve">
              <path d="M0,10.497C0,4.702,4.932,0,11,0c6.076,0,11,4.696,11,10.497v13.006C22,29.298,17.068,34,11,34
              C4.924,34,0,29.305,0,23.503V10.497z M2,10.497v13.006C2,28.2,6.029,32,11,32c4.96,0,9-3.805,9-8.497V10.497C20,5.8,15.971,2,11,2
              C6.04,2,2,5.804,2,10.497z M9,10.998C9,9.895,9.889,9,11,9c1.105,0,2,0.887,2,1.998v4.004c0.002,1.101-0.889,1.996-1.99,1.998
              c-0.003,0-0.006,0-0.01,0c-1.105,0-2-0.887-2-1.998V10.998z"/>
            </svg>
          </button>
          <i className="fas fa-angle-down" />
        </div>
      </section>
    )
  }
}
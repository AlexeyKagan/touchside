import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import Button from '../../../common/components/button/Button';
import ScrollIcon from './ScrollIcon';

import './home-slider.scss';

export default class HomeSlider extends Component {
  static DIRECTIONS = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
  };

  static defaultProps = {
    data: [],
  };

  static getDerivedStateFromProps = ({ data }) => ({ count: data.length - 1 });

  state = {
    activeIndex: 0,
    count: 2,
  };

  container = React.createRef();

  onSlideLeft = () => this.onSlide(HomeSlider.DIRECTIONS.LEFT);

  onSlideRight = () => this.onSlide(HomeSlider.DIRECTIONS.RIGHT);

  onSlide = (directionType) => {
    const { activeIndex, count } = this.state;

    let nextIndex = null;

    if (directionType === HomeSlider.DIRECTIONS.LEFT) {
      const nextActiveIndex = activeIndex - 1;
      nextIndex = nextActiveIndex < 0 ? count : nextActiveIndex;
    }

    if (directionType === HomeSlider.DIRECTIONS.RIGHT) {
      const nextActiveIndex = activeIndex + 1;
      nextIndex = nextActiveIndex > count ? 0 : nextActiveIndex;
    }

    this.setState({ activeIndex: nextIndex });
  };

  onAutoSelect = activeIndex => this.setState({ activeIndex });

  onScrollDown = () => 
    window.scroll({
      top: this.container.current.offsetHeight,
      behavior: 'smooth'
    });

  renderCarouselItems() {
    const { data } = this.props;

    return data.map(({ src, title, id }) => (
      <Carousel.Item key={id}>
        <img
          className="d-block w-100 home-slider__image"
          src={src}
          alt={title}
        />
        <Carousel.Caption className="home-slider__caption">
          <h3>{title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <section 
        className="home-slider" 
        ref={this.container}
      >
        <Carousel
          controls={false}
          indicators={false}
          activeIndex={activeIndex}
          onSelect={this.onAutoSelect}
        >
          {this.renderCarouselItems()}
        </Carousel>

        <div className="home-slider__controls">
          <i className="fas fa-angle-left" onClick={this.onSlideLeft} />
          <Button className="home-slider__controls-btn">View case</Button>
          <i className="fas fa-angle-right" onClick={this.onSlideRight} />
        </div>

        <div className="home-slider__scroll">
          <button className="home-slider__scroll-btn" onClick={this.onScrollDown}>
            <ScrollIcon className="home-slider__scroll-svg" />
          </button>
          <i className="fas fa-angle-down" />
        </div>
      </section>
    );
  }
}

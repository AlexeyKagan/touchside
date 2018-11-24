import React from 'react';

import HomeSlider from './home-slider/HomeSlider';
import HomeGallery from './home-gallery/HomeGallery';
import HomeAbout from './home-about/HomeAbout';

import { SLIDER_ITEMS } from './consts';

import './home.scss';

function Home() {
  return (
    <main className="home">
      <HomeSlider data={SLIDER_ITEMS} />
      <HomeAbout />
      <HomeGallery />
    </main>
  );
}

export default Home;
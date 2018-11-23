import React from 'react';
import { Container } from "react-bootstrap";

import './home-about.scss';

function HomeAbout() {
  return (
    <div className="home-about">
      <Container className="home__container">
        <h2 className="home-about__header">WE ARE TAM TAM</h2>
        <p className="home-about__description">
          Tam Tam is a full service digital agency focusing on Dutch Digital
          Service Design. We combine strategy, design, technology and
          interaction to make the digital interactions between company and
          customer valuable and memorable. We work for awesome brands with a
          team of 120 digitals from out office in Amsterdam. Making great work
          and having a blast doing it. That's what we believe in.
        </p>
      </Container>
    </div>
  )
}

export default HomeAbout;

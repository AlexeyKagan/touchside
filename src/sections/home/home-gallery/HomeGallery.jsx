import React, { Component } from 'react';
import { Card, CardColumns, Container } from 'react-bootstrap';

import './home-gallery.scss';

export default class HomeGallery extends Component {
  state = {
    images: [],
    imagesOnPage: 6,
  };

  componentDidMount() {
    // API that I used doesn't provide a limited response. It is only possible to fetch all items
    const { imagesOnPage } = this.state;

    fetch('https://picsum.photos/list')
      .then(res => res.json())
      .then(images => this.setState({ images: images.slice(20, 20 + imagesOnPage) }));
  }

  render() {
    const { images } = this.state;

    return (
      <div className="album py-5 bg-light home-gallery">
        <Container>
          <h2 className="home-gallery__header">FOLLOW US ON INSTAGRAM</h2>
          <h3 className="home-gallery__social-id">@tamtamnl</h3>

          <CardColumns>
            {images.map(({ author, id }) => (
              <Card key={id}>
                <Card.Img
                  variant="top"
                  src={`https://picsum.photos/200/200?image=${id}`}
                />
                <Card.Body>
                  <Card.Text>{author}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        </Container>
      </div>
    );
  }
}

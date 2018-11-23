import React, { Component } from "react";
import { Card, CardColumns, Container } from "react-bootstrap";

import CarouselBackgroundFirst from "../../../assets/images/carousel/carousel-1.jpg";

import './home-gallery.scss';

const MOCK_DATA = new Array(6)
  .fill(0)
  .map((_, i) => ({
    id: i,
    imgSrc: CarouselBackgroundFirst,
    text: 'Description: ' + i,
  }));

// 9280658028.1677ed0.31f8dfa6e2134d5b8cf3e1fa6f3e6b4b

export default class HomeGallery extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const fetchRandomImage = () => fetch('https://picsum.photos/200/300?random', {
      method: 'GET',
      mode: "cors",
      cache: 'default',
      headers: new Headers(),
    });

    const imagesPromise = new Array(5)
      .fill(0)
      .map(fetchRandomImage);

    const getImageObjectUrl = image => image.then(res => URL.createObjectURL(res));

    const resolveImageData = (img, i) => ({
      id: i,
      img,
      text: 'Description: ' + i,
    });

    Promise.all(imagesPromise)
      .then(resImages => resImages.map(resImage => resImage.blob()))
      .then(resImages => Promise.all(resImages.map(getImageObjectUrl)))
      .then(res => {
        // const data = res.map(resolveImageData);
        //
        // this.setState({ data });
      })
  }

  render() {
    const { data } = this.state;
    console.log('data', data);
    return (
      <div className="album py-5 bg-light home-gallery">
        <Container>
          <h2 className="home-gallery__header">FOLLOW US ON INSTAGRAM</h2>
          <h3 className="home-gallery__social-id">@tamtamnl</h3>

          <CardColumns>
            {
              data.map(({ text, id, img }) => (
                <Card key={id}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Text>
                      { text }
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            }
          </CardColumns>
        </Container>
      </div>
    );
  }
}
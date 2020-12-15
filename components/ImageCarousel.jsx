import { Carousel } from "react-bootstrap";
import Image from "next/image";
const ImageCarousel = () => {
  return (
    <Carousel className="ml-n2 mr-n2">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          width={1920}
          height={1080}
          layout="responsive"
          src="https://img.wallpapersafari.com/desktop/1920/1080/87/39/Lv3G4r.jpg"
          alt="First slide"
          loading="lazy"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block"
          width={1920}
          height={1080}
          src="https://img.wallpapersafari.com/desktop/1920/1080/87/39/Lv3G4r.jpg"
          alt="Third slide"
          loading="lazy"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block"
          width={1920}
          height={1080}
          src="https://img.wallpapersafari.com/desktop/1920/1080/87/39/Lv3G4r.jpg"
          alt="Third slide"
          loading="lazy"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;

import Carousel from "react-bootstrap/Carousel";

function Slide() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            width: "100vw",
            height: "500px",
          }}
          src="https://www.chicco.in/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw152cbc2d/Combo-Banner%20Size%201471%20x%20573%20%20%201.png"
          alt=""
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            width: "100vw",
            height: "500px",
          }}
          src="https://media.product.which.co.uk/prod/images/original/gm-235537c9-372d-41b1-bd1d-3a40e312ab96-baby-and-child-vertical-hero-011020.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            width: "100vw",
            height: "500px",
          }}
          src="https://bebekingdom.pk/wp-content/uploads/2022/02/1-1024x283.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;

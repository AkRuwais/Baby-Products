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
          src="https://cdn01.pharmeasy.in/dam/products_otc/348123/sebamed-baby-cleansing-bar-150g-3-1669710023.jpg"
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
          src="https://www.johnsonsbaby.in/sites/jbaby_in/files/slide-images/gentle_touch_banner_4284x1700px.jpg"
          alt=""
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            width: "100vw",
            height: "500px",
          }}
          src="https://cdn01.pharmeasy.in/dam/products_otc/M45205/johnsons-baby-soap-box-of-400-g-buy-3-get-1-free-3-1654256019.jpg"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;

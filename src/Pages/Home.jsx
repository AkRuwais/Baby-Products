import Base from "../Components/Base";
import "./Home.css";
import Footer from "../Components/Footer";
import Slides from "./Slides ";
import ProductList from "./ProductList";

export default function Home() {
  return (
    <>
      <Base>
        <Slides />
        <ProductList />
        <div>
          <img
            style={{
              width: "98.9vw",
              height: "500px",
            }}
            src="https://justborngarments.com/wp-content/uploads/2022/07/banner.jpg"
            alt=""
          />
        </div>

        <Footer />
      </Base>
    </>
  );
}

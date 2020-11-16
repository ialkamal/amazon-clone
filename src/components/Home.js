import React from "react";
import "./Home.css";
import Product from "./Product";

const sampleProduct = {
  id: 123456,
  title: "Galaxy Watch 3 41mm Mystic Silver",
  image: "https://k.nooncdn.com/t_desktop-pdp-v1/v1598614715/N39643097A_1.jpg",
  price: 999,
  rating: 4.7,
};

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://wap.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png"
        alt="banner"
      />
      <div className="home_row">
        <Product product={sampleProduct} />
        <Product product={sampleProduct} />
      </div>
      <div className="home_row">
        <Product product={sampleProduct} />
        <Product product={sampleProduct} />
        <Product product={sampleProduct} />
      </div>
      <div className="home_row">
        <Product product={sampleProduct} />
        <Product product={sampleProduct} />
      </div>
      <div className="home_row">
        <Product product={sampleProduct} />
      </div>
    </div>
  );
}

export default Home;

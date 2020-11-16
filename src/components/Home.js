import React from "react";
import "./Home.css";
import Product from "./Product";

const sampleProduct = [
  {
    id: 123456,
    title: "Galaxy Watch 3 41mm Mystic Silver",
    image:
      "https://k.nooncdn.com/t_desktop-pdp-v1/v1598614715/N39643097A_1.jpg",
    price: 999,
    rating: 4.7,
  },
  {
    id: 123457,
    title:
      "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg",
    price: 1356,
    rating: 3,
  },
  {
    id: 123458,
    title:
      "Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg",
    price: 1121,
    rating: 5,
  },
  {
    id: 123459,
    title:
      'UPERFECT 4K Computer Monitor, 15.6" IPS UHD 3840X2160 USB C Monitor[100% sRGB Wide Color Gamut], HDR FreeSync Dual Speaker OTG Type-C VESA for Laptop',
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SL1500_.jpg",
    price: 1211,
    rating: 4,
  },
  {
    id: 123460,
    title:
      "Stand Mixer, Cusimax 800W Dough Mixer Tilt-Head Electric Mixer with 5-Quart Stainless Steel Bowl, Dough Hook, Mixing Beater and Whisk, Splash Guard, CMKM-150, Black",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/617ZRPO4VZL._AC_SL1100_.jpg",
    price: 425,
    rating: 2,
  },
  {
    id: 123461,
    title:
      "SOSUSHOE Womens Slippers Memory Foam Fluffy Fur Soft Slippers Warm House Shoes Indoor Outdoor Winter",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81RjMnowqZL._AC_UX675_.jpg",
    price: 89,
    rating: 5,
  },
  {
    id: 123462,
    title: "PAVOI 14K Gold Plated Cubic Zirconia Cuff Earrings Huggie Stud",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61nNm0-EvVL._AC_UX625_.jpg",
    price: 59,
    rating: 3,
  },
  {
    id: 123463,
    title:
      "Freshwater Cultured Pearl Necklace Set Includes Stunning Bracelet and Stud Earrings Jewelry for Women - VIKI LYNN",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71Q59ADa52L._AC_UY625_.jpg",
    price: 374,
    rating: 4,
  },
];

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://wap.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png"
        alt="banner"
      />
      <div className="home_row">
        <Product product={sampleProduct[0]} />
        <Product product={sampleProduct[1]} />
      </div>
      <div className="home_row">
        <Product product={sampleProduct[2]} />
        <Product product={sampleProduct[3]} />
        <Product product={sampleProduct[4]} />
      </div>
      <div className="home_row">
        <Product product={sampleProduct[5]} />
        <Product product={sampleProduct[6]} />
      </div>
      <div className="home_row">
        <Product product={sampleProduct[7]} />
      </div>
    </div>
  );
}

export default Home;

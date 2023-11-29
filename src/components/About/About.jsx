import React from "react";
import "./About.scss";
import { Carousel } from "antd";

const About = () => {
  return (
    <>
      <section className="section">
        <h2 className="paragraphAbout">
          Hi, we are "name", an E-commerce dedicated only to soccer.
        </h2>
        <p className="paragraphAbout">
          This website was created by: Nicolás Blanco Zappalá and it's a project
          of React
        </p>
        <p className="paragraphAbout">Some of our trending products:</p>
      </section>
      <div className="about">
        <Carousel autoplay className="carousel">
          <div className="carouselDiv">
            <img
              className="carouselImg"
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/37fa6bf2-b8dc-48ab-b695-8a8509e79a66/mercurial-superfly-9-elite-botas-de-futbol-de-perfil-alto-cesped-artificial-dr0NFn.png"
              alt=""
            />
          </div>
          <div className="carouselDiv">
            <img
              className="carouselImg"
              src="https://www.futbolemotion.com/imagesarticulos/200357/grandes/balon-puma-oficial-laliga-2023-2024-white-multi-colour-0.jpg"
              alt=""
            />
          </div>
          <div className="carouselDiv">
            <img
              className="carouselImg"
              src="https://m.media-amazon.com/images/I/71MSTb2aXrL._AC_UY780_.jpg"
              alt=""
            />
          </div>
          <div className="carouselDiv">
            <img
              className="carouselImg"
              src="https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/abbf5437a995fd7cabd85bbbc7fdfb0f/a/5/a59fc755cd46d1f7c17cddbb6ba21dd982c2b075d4b2203e6b886a7cb1d46883.jpeg"
              alt=""
            />
          </div>
          <div className="carouselDiv">
            <img
              className="carouselImg"
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a93f4c7d-a847-49a6-bd01-8dc90bb86646/shorts-de-f%C3%BAtbol-de-tejido-knit-dri-fit-park-N9zJbF.png"
              alt=""
            />
          </div>
          <div className="carouselDiv">
            <img
              className="carouselImg"
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/853dbb5d-3b68-4204-b1ba-f674a6939906/mercurial-lite-espinilleras-de-futbol-lZcTLV.png"
              alt=""
            />
          </div>
          <div className="carouselDiv">
            <img
              className="carouselImg"
              src="https://luxshop.tech/cdn/shop/products/re_1024x.jpg?v=1694197879"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default About;

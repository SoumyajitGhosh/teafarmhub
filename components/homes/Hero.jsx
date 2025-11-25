import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="hero-sec hero-section relative full-height video-section overlay3 home-slider-12">
      <video
        autoPlay
        loop
        muted
        className="beer-video"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content text-center content-center">
        <Image
          alt="Tea Leaf Icon"
          className="beer-icon"
          src="/images/main-slider/slide-11.png"
          width="80"
          height="80"
        />
        <span className="seperator" />
        <h1 className="title text-center style4">TeaFarmHub</h1>
        <div className="description ">
          Fine teas crafted in harmony with nature, nurtured with tradition and
          cosmic wisdom.
          <br />
          From our highland plantations to your cup - experience tea as nature
          intended.
        </div>
        <Link className="site-button hover-bg-white-btn" href="/contact">
          <i className="la la-phone icon" />
          Visit Our Estate
        </Link>
        <Link className="site-button hover-bg-white-btn" href="/shop">
          <i className="la la-leaf icon" />
          Discover Premium Teas
        </Link>
      </div>
      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}

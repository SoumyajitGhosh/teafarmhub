import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="section-full content-inner"
      style={{ background: "#fbf8e8", padding: "30px 0" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-lg-5 col-md-12 m-b30 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
            style={{ paddingRight: "20px" }}
          >
            <div className="our-story">
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "1px",
                  fontWeight: "500",
                }}
              >
                OUR STORY
              </span>
              <h2
                className="title"
                style={{
                  fontSize: "32px",
                  lineHeight: "1.3",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                Cultivating <br />
                premium tea <br />
                <span className="text-primary">since 1955</span>
              </h2>
              <h4
                className="title"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.5",
                  marginBottom: "12px",
                  fontWeight: "500",
                }}
              >
                From our lush hillside plantations to your cup, we bring you the
                finest organic tea with generations of expertise.
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                  color: "#666",
                }}
              >
                Our tea estate spans across verdant hills where the perfect
                climate and soil create exceptional tea leaves. Since 1955, our
                family has been dedicated to sustainable farming practices and
                traditional harvesting methods. Each leaf is hand-picked at peak
                freshness, ensuring the highest quality in every blend we
                produce. Our commitment to excellence has made us one of India's
                most trusted tea producers.
              </p>
              <Link
                href={`/about`}
                className="site-button btnhover20"
                style={{ padding: "8px 20px", fontSize: "12px" }}
              >
                About Us
              </Link>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-12 m-b30 our-story-thum wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
            style={{ paddingLeft: "20px" }}
          >
            <Image
              className="radius-sm"
              alt="Tea plantation estate"
              src="/images/about/pic13.jpg"
              width="300"
              height="340"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

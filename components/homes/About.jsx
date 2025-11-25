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
                CULTIVATED IN HARMONY
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
                Created with <br />
                nature & cosmic <br />
                <span className="text-primary">wisdom</span>
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
                A spiritual union between land, plant life, and people - where
                tea cultivation follows the rhythm of nature and celestial
                energies.
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                  color: "#666",
                }}
              >
                Our tea estate spans across six ridges, surrounded by forests
                and wildlife, where tea grows alongside wild flowers, fruits,
                and woods - untamed and unmanaged, as nature intended. We
                practice permaculture farming, working harmoniously with the
                moon and stars to determine the perfect time to pluck our tea
                leaves. This intense connection with the land has given birth to
                unique cultivation methods that honor both tradition and the
                natural world.
              </p>
              <Link
                href={`/about`}
                className="site-button btnhover20"
                style={{ padding: "8px 20px", fontSize: "12px" }}
              >
                Our Heritage
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
              src="/images/generated/image23.jpg"
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

"use client";
import { teamData } from "@/data/team";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Team() {
  return (
    <div
      className="section-full content-inner bg-gray"
      style={{ padding: "20px 0", background: "var(--color-tertiary)" }}
    >
      <div className="container">
        <div
          className="section-head style2 text-center"
          style={{ marginBottom: "25px" }}
        >
          <h2
            className="title"
            style={{ fontSize: "28px", marginBottom: "8px" }}
          >
            Our Stewards of the Leaf
          </h2>
          <p style={{ fontSize: "13px", maxWidth: "650px", margin: "0 auto" }}>
            Meet the dedicated individuals behind our exceptional teas. Their
            expertise, passion, and deep respect for nature are infused into
            every leaf, from the garden to your cup.
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          slidesPerGroup={1}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          centeredSlides
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 7,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 7,
            },
          }}
          className="team-carousel centeredSlides owl-carousel owl-btn-3 owl-theme owl-btn-center-lr"
        >
          {teamData.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={elm.delay}
            >
              <div
                className="dlab-box m-b30 dlab-team7"
                style={{
                  maxWidth: "240px",
                  margin: "0 auto 10px",
                  background: "#fbf8e8",
                }}
              >
                <div className="dlab-media">
                  <Link href={`/team-1`}>
                    <Image
                      alt={elm.name || "Team member"}
                      src={elm.image}
                      width={240}
                      height={240}
                      style={{
                        width: "180px",
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
                <div className="dlab-info" style={{ padding: "8px" }}>
                  <h4
                    className="dlab-title"
                    style={{ fontSize: "13px", marginBottom: "2px" }}
                  >
                    <Link href={`/team-1`}>{elm.name}</Link>
                  </h4>
                  <span className="dlab-position" style={{ fontSize: "10px" }}>
                    {elm.position}
                  </span>
                  <ul className="dlab-social-icon" style={{ marginTop: "6px" }}>
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-facebook-f"
                        href="#"
                        style={{
                          width: "24px",
                          height: "24px",
                          lineHeight: "24px",
                          fontSize: "10px",
                        }}
                      ></a>
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-twitter"
                        href="#"
                        style={{
                          width: "24px",
                          height: "24px",
                          lineHeight: "24px",
                          fontSize: "10px",
                        }}
                      ></a>
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-linkedin-in"
                        href="#"
                        style={{
                          width: "24px",
                          height: "24px",
                          lineHeight: "24px",
                          fontSize: "10px",
                        }}
                      ></a>
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-pinterest-p"
                        href="#"
                        style={{
                          width: "24px",
                          height: "24px",
                          lineHeight: "24px",
                          fontSize: "10px",
                        }}
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

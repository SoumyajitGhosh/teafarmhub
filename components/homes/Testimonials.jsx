"use client";
import { testimonials6 } from "@/data/testimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div
      className="section-full content-inner-2"
      style={{ background: "#fbf8e8", padding: "30px 0" }}
    >
      <div className="container">
        <div
          className="section-head style2 text-center"
          style={{ marginBottom: "20px" }}
        >
          <h2
            className="title"
            style={{ fontSize: "28px", marginBottom: "8px" }}
          >
            Testimonials from Tea Lovers
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "16px",
              color: "#777",
              lineHeight: "1.8",
            }}
          >
            From tea enthusiasts to café owners, discover what our customers say
            about TeaFarmHub's premium organic tea. Hand-picked from our
            highland plantations, every leaf tells a story of quality,
            sustainability, and authentic flavor.
          </p>
        </div>
        {/* Image Carousel start */}
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          slidesPerGroup={2}
          slidesPerGroupAuto
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 7,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 7,
            },
          }}
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: ".spt1",
            bulletActiveClass: "active",
            renderBullet: function (index, className) {
              return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
            },
          }}
          className="testimonial-two-dots owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-dots-primary-full"
        >
          {testimonials6.map((testimonial, i) => (
            <SwiperSlide
              key={i}
              className="item p-a5 wow fadeInUp"
              data-wow-duration={testimonial.duration}
              data-wow-delay={testimonial.delay}
              style={{ padding: "5px" }}
            >
              <div
                className="testimonial-9"
                style={{
                  // padding: "15px",
                  maxWidth: "280px",
                  margin: "0 auto",
                  background: "var(--color-tertiary)",
                }}
              >
                <div
                  className="testimonial-pic radius style1"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 15px",
                  }}
                >
                  <Image
                    src={testimonial.image}
                    width={150}
                    height={150}
                    alt={testimonial.name || "Customer testimonial"}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  className="testimonial-text"
                  style={{ marginBottom: "10px" }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.6",
                      marginBottom: "0",
                      display: "-webkit-box",
                      WebkitLineClamp: "4",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {testimonial.text}
                  </p>
                </div>
                <div className="testimonial-detail">
                  <strong
                    className="testimonial-name"
                    style={{
                      fontSize: "14px",
                      display: "block",
                      marginBottom: "3px",
                    }}
                  >
                    {testimonial.name}
                  </strong>
                  <span
                    className="testimonial-position"
                    style={{ fontSize: "11px", color: "#777" }}
                  >
                    {testimonial.position}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="owl-dots spt1" style={{ marginTop: "15px" }}></div> */}
        </Swiper>
      </div>
    </div>
  );
}

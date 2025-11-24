"use client";
import { testimonials } from "@/data/testimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div
      className="testimonial-six owl-loaded owl-theme owl-carousel owl-none dots-style-2 owl-drag"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
      id="client"
      style={{ padding: "30px 0" }}
    >
      <div className="container">
        <div
          className="section-head text-black text-center"
          style={{ marginBottom: "20px" }}
        >
          <h2 className="title" style={{ marginBottom: "8px" }}>
            What Our Tea Lovers Say
          </h2>
          <p
            style={{
              marginBottom: "0",
              fontSize: "13px",
              lineHeight: "1.6",
              color: "#666",
            }}
          >
            Discover why tea enthusiasts, café owners, and connoisseurs trust
            TeaFarmHub for premium organic tea. From our highland plantations to
            your cup, we deliver exceptional quality and authentic flavors that
            speak for themselves.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={1}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          centeredSlides
          modules={[Pagination, Autoplay, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          navigation={{
            prevEl: ".snbp1",
            nextEl: ".snbn1",
          }}
          className="slick-slider centeredSlides testimonial-six dots-long d-primary btn-style-1 slick-initialized"
        >
          {testimonials.map((elm, i) => (
            <SwiperSlide key={i} className="item" style={{ padding: "5px" }}>
              <div
                className="testimonial-8"
                style={{ padding: "15px", maxWidth: "300px", margin: "0 auto" }}
              >
                <div
                  className="testimonial-text"
                  style={{ marginBottom: "12px" }}
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
                    {elm.text}
                  </p>
                </div>
                <div className="testimonial-detail clearfix">
                  <div
                    className="testimonial-pic radius shadow"
                    style={{ marginBottom: "10px" }}
                  >
                    <Image
                      src={elm.image}
                      width={70}
                      height={70}
                      alt={elm.name || "Testimonial"}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h5
                    className="testimonial-name m-t0 m-b5"
                    style={{ fontSize: "14px", marginBottom: "3px" }}
                  >
                    {elm.name}
                  </h5>
                  <span
                    className="testimonial-position"
                    style={{ fontSize: "11px" }}
                  >
                    {elm.position}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

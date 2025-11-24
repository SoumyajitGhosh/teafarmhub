"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="section-full content-inner video-section"
        style={{
          backgroundImage: 'url("/images/background/bg-video.png")',
          background: "#fbf8e8",
          padding: "30px 0",
        }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row d-flex">
              <div
                className="col-lg-6 col-md-12 m-b30"
                style={{ paddingRight: "15px" }}
              >
                <div
                  className="video-bx"
                  style={{ maxWidth: "480px", margin: "0 auto" }}
                >
                  <Image
                    alt="Tea processing video thumbnail"
                    src="/images/about/pic5.jpg"
                    width="480"
                    height="320"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="video-play-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="popup-youtube video bg-primary"
                      style={{
                        width: "60px",
                        height: "60px",
                        lineHeight: "60px",
                        fontSize: "20px",
                      }}
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx"
                style={{ paddingLeft: "15px" }}
              >
                <div className="content-bx1">
                  <h2
                    className="m-b15 title"
                    style={{
                      fontSize: "28px",
                      lineHeight: "1.3",
                      marginBottom: "12px",
                    }}
                  >
                    A company involved in
                    <br />
                    <span className="text-primary"> service, maintenance</span>
                  </h2>
                  <p
                    className="m-b30"
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      color: "#666",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an.
                  </p>
                  <Image
                    width={150}
                    alt="Director signature"
                    src="/images/sign.png"
                    height="55"
                    style={{ marginBottom: "10px" }}
                  />
                  <h4
                    className="m-b0"
                    style={{
                      fontSize: "16px",
                      marginBottom: "4px",
                      fontWeight: "600",
                    }}
                  >
                    Jone Doe
                  </h4>
                  <span
                    className="font-14"
                    style={{ fontSize: "12px", color: "#777" }}
                  >
                    Company Director
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

import React from "react";
import Image from "next/image";
import { teamMembers10 } from "@/data/team";
export default function Team1() {
  return (
    <div
      className="section-full content-inner"
      style={{
        paddingTop: "80px",
        paddingBottom: "50px",
        background: "#fbf8e8",
      }}
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title" style={{ marginBottom: "15px" }}>
            Meet Our Tea Experts
          </h2>
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            Our dedicated team of tea masters, cultivators, and artisans brings
            generations of expertise to every aspect of tea production. From
            nurturing the tea plants in our highland gardens to carefully
            processing each harvest, their passion and knowledge ensure that
            every cup of TeaFarmHub tea is an exceptional experience.
          </p>
        </div>
        <div className="row">
          {teamMembers10.map((member, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              key={index}
              style={{ display: "flex", paddingBottom: "8px" }}
            >
              <div
                className="dlab-box m-b30 dlab-team1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div className="dlab-media" style={{ flexShrink: 0 }}>
                  <a href="#">
                    <Image
                      width={358}
                      height={460}
                      alt={member.name || "Team member"}
                      src={member.image}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </a>
                </div>
                <div
                  className="dlab-info"
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <h4 className="dlab-title">
                    <a href="#">{member.name}</a>
                  </h4>
                  <span className="dlab-position" style={{ flex: 1 }}>
                    {member.position}
                  </span>
                  <ul
                    className="dlab-social-icon dez-border"
                    style={{ marginTop: "auto" }}
                  >
                    {member.socialLinks.map((social, i) => (
                      <React.Fragment key={i}>
                        <li>
                          <a
                            className="site-button circle-sm"
                            href={social.href}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "32px",
                              height: "32px",
                            }}
                          >
                            <i
                              className={social.iconClass || social.className}
                              style={{ fontSize: "14px" }}
                            ></i>
                          </a>
                        </li>{" "}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks } from "@/data/footerLinks";
export default function Footer12() {
  return (
    <footer className="site-footer">
      <div
        className="footer-top overlay-black-light"
        style={{
          backgroundImage: "url(/images/generated/image3.png)",
          opacity: 1,
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-5 col-lg-4 col-sm-8 footer-col-4">
              <div className="widget">
                <h5 className="m-b30 text-white font-weight-bold">
                  A World of Tea, Delivered to You
                </h5>
                <p className="text-capitalize m-b20 text-white font-weight-bold">
                  Join our newsletter to receive exclusive offers, stories from
                  the estate, and insights into the art of tea.
                </p>
                <div className="subscribe-form form-white m-b20">
                  <form
                    className="dzSubscribe"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="dzSubscribeMsg" />
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control font-weight-bold"
                        placeholder="Your Email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button btnhover20 radius-xl font-weight-bold"
                        >
                          Subscribe
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <ul className="list-inline m-a0">
                  {socialLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <a
                          href={link.href}
                          className={` site-button btnhover20 circle ${link.className}`}
                        >
                          <i className={link.iconClass} />
                        </a>
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-4 footer-col-4">
              <div className="widget widget_services border-0">
                <h5 className="m-b30 text-white font-weight-bold">Company</h5>
                <ul>
                  {footerLinks2.slice(0, 5).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white font-sm font-weight-bold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-7 col-xl-2 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_services border-0">
                <h5 className="m-b30 text-white font-weight-bold">
                  Useful Link
                </h5>
                <ul>
                  {footerLinks2.slice(5, 10).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-white font-sm font-weight-bold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 col-lg-3 col-sm-6 footer-col-4">
              <div className="widget widget_getintuch text-white border-0">
                <h5 className="m-b30 font-weight-bold">Visit Us</h5>
                <ul>
                  <li>
                    <i className="ti-location-pin font-weight-bold" />
                    <strong className="text-white">address</strong>
                    <span> 901 Marmora Road Chi Minh City, Vietnam</span>
                  </li>
                  <li>
                    <i className="ti-mobile" />
                    <strong className="text-white">phone</strong>
                    <a
                      href="tel:+911234567890"
                      className="font-weight-bold text-white"
                    >
                      +91 123 456 7890{" "}
                    </a>
                    <span> (Estate Enquiries)</span>
                  </li>
                  <li>
                    <i className="ti-email" />
                    <strong className="text-white">email</strong>
                    <a
                      href="mailto:info@teafarmhub.com"
                      className="font-weight-bold text-white"
                    >
                      info@teafarmhub.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      {/* <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-left">
              <span className="font-weight-bold">
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()}</span>
                <a href="https://dexignzone.com/" target="_blank">
                  TeaFarmHub
                </a>{" "}
                . All rights reserved.
              </span>
            </div>
            <div className="col-md-6 col-sm-6 text-right">
              <div className="widget-link">
                <ul>
                  <li>
                    <Link href={`/about`} className="font-weight-bold">
                      {" "}
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href={`/help-desk`} className="font-weight-bold">
                      {" "}
                      Help Desk
                    </Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`} className="font-weight-bold">
                      {" "}
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

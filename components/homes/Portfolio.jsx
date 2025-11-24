"use client";

import { portfolioItems2 } from "@/data/projects";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const filterItems = [
  { filter: "*", label: "All" },
  { filter: ".beer-keg", label: "Green Tea" },
  { filter: ".brewing", label: "Black Tea" },
  { filter: ".malt", label: "Oolong Tea" },
];

export default function Portfolio() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".card-container",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };

  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <div
      className="section-full content-inner"
      style={{ background: "#fbf8e8" }}
    >
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our Gallery</h2>
          <p>
            Explore our tea gardens, processing facilities, and the finest
            varieties we cultivate. Each image tells a story of dedication,
            tradition, and the pursuit of exceptional tea quality.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="site-filters m-b20">
              <ul className="filters" data-bs-toggle="buttons">
                {filterItems.map((item) => (
                  <React.Fragment key={item.filter}>
                    <li
                      onClick={() => updateCategory(item.filter)}
                      className={`btn ${
                        currentFilter == item.filter ? "active" : ""
                      }`}
                    >
                      <input type="radio" />
                      <a className="site-button btnhover20 outline outline-2 button-sm">
                        <span>{item.label}</span>
                      </a>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 p-lr0">
            <ul
              ref={isotopContainer}
              id="masonry"
              className="dlab-gallery-listing text-center row gallery-grid-4"
            >
              {portfolioItems2.map((item, i) => (
                <li
                  key={i}
                  className={
                    "card-container col-lg-3 col-md-4 col-sm-6 col-xs-12" +
                    " " +
                    item.categories
                  }
                  data-wow-duration={item.duration}
                  data-wow-delay={item.delay}
                >
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1 m-b30 radius-sm">
                    <Image
                      src={item.image}
                      width={400}
                      height={480}
                      alt={item.title || "Tea gallery image"}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="overlay-bx">
                      <div className="portinner">
                        <h3 className="port-title">
                          <Link href={`/portfolio-details/${item.title}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

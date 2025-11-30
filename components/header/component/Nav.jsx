"use client";
import Image from "next/image";
import Link from "next/link";
import {
  blogItems,
  contactLinks,
  elementItems,
  headerAndFooters,
  pagesItems,
  shopLinks,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menuMain) => {
    let isActive = false;
    if (typeof menuMain === "string") {
      console.log("pathname", pathname.split("/")[1] === menuMain?.split("/")[1]);
      if (pathname.split("/")[1] == menuMain?.split("/")[1]) {
        isActive = true;
      }
      return isActive;
    }
    if (menuMain.href && menuMain.href !== "#") {
      if (pathname.split("/")[1] == menuMain.href?.split("/")[1]) {
        isActive = true;
      }
    }
    menuMain.length &&
      menuMain.forEach((menu) => {
        if (menu.href && menu.href !== "#") {
          if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (menu.links) {
          menu.links.forEach((el) => {
            if (el.href && el.href != "#") {
              if (pathname.split("/")[1] == el.href?.split("/")[1]) {
                isActive = true;
              }
            }
            if (el.links) {
              el.links.map((elm) => {
                if (elm.href && elm.href != "#") {
                  if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                    isActive = true;
                  }
                }
              });
            }
          });
        }
      });
    return isActive;
  };

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== "undefined" ? window.innerWidth > 991 : true);
  const [menuOpen1, setMenuOpen1] = useState("");
  const [menuOpen2, setMenuOpen2] = useState("");

  // Function to handle resizing
  const handleResize = () => {
    // Update screen width state
    setIsLargeScreen(window.innerWidth > 991);

    // Update header height state
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      const newHeight = headerElement.offsetHeight;
      setHeaderHeight(newHeight);
    }
  };

  useEffect(() => {
    // Call handleResize on component mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  // Calculate the height for the mega-menu if large screen
  const megaMenuHeight = isLargeScreen
    ? `calc(100vh - ${headerHeight}px)`
    : "auto";

  return (
    <ul className="nav navbar-nav d-flex justify-content-end">
      <li
        className={` has-mega-menu homedemo ${
          menuOpen1 == "home" ? "open" : ""
        } ${isMenuActive("/") ? "active" : ""}`}
        onClick={() => setMenuOpen1((pre) => (pre == "home" ? "" : "home"))}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`has-mega-menu  ${isMenuActive("/about") ? "active" : ""} ${
          menuOpen1 == "pages" ? "open" : ""
        }  `}
      >
        <Link
          href={"/about"}
          onClick={() => setMenuOpen1((pre) => (pre == "pages" ? "" : "pages"))}
        >
          About Us
        </Link>
      </li>
      <li
        className={`has-mega-menu  ${isMenuActive("/blog") ? "active" : ""} ${
          menuOpen1 == "pages" ? "open" : ""
        }  `}
      >
        <Link
          href={"/blog"}
          onClick={() => setMenuOpen1((pre) => (pre == "pages" ? "" : "pages"))}
        >
          Blogs
        </Link>
      </li>
      <li
        className={` ${isMenuActive("/products") ? "active" : ""} ${
          menuOpen1 == "products" ? "open" : ""
        }  `}
      >
        <Link
          onClick={() =>
            setMenuOpen1((pre) => (pre == "products" ? "" : "products"))
          }
          href={"/products"}
        >
          Products
        </Link>
      </li>
      <li
        className={` ${isMenuActive(contactLinks) ? "active" : ""} ${
          menuOpen1 == "contact" ? "open" : ""
        }  ${isMenuActive("/contact") ? "active" : ""}`}
        onClick={() =>
          setMenuOpen1((pre) => (pre == "contact" ? "" : "contact"))
        }
      >
        <Link href={"/contact"}>Contact Us</Link>
        {/* <ul className="sub-menu right">
          {contactLinks.map((link, index) => (
            <li key={index}>
              <Link
                className={isMenuActive(link) ? "menuActive" : ""}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul> */}
      </li>
    </ul>
  );
}

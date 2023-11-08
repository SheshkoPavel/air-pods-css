"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logoImg from "@/public/images/logo.svg";
import AirPodsRed from "@/public/images/airpods-max-red.png";
import AirPodsBlue from "@/public/images/airpods-max-blue.png";
import AirPodsBlack from "@/public/images/airpods-max-black.png";
import AirPodsGreen from "@/public/images/airpods-max-green.png";
import AirPodsWhite from "@/public/images/airpods-max-white.png";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link className="logo" href={"#"}>
            <Image src={logoImg} alt="iPhone logo" />
          </Link>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link className="menu__link" href="#">
                  Info
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" href="#">
                  Product
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" href="#">
                  Contacts
                </Link>
              </li>
              <li className="menu__item">
                <button
                  className="menu__btn"
                  onClick={() => console.log("click <-------")}
                >
                  BUY
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__content">
          <h1 className="title">Air Pod S M AX</h1>
          <div className="header__content-images"></div>
        </div>
      </div>
    </header>
  );
};

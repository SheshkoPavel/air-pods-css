"use client";

import Link from "next/link";
import Image from "next/image";

import { useAppStore } from "@/app/store/app-state";

import logoImg from "@/public/images/logo.svg";
import AirPodsRed from "@/public/images/airpods-max-red.png";
import AirPodsBlue from "@/public/images/airpods-max-blue.png";
import AirPodsBlack from "@/public/images/airpods-max-black.png";
import AirPodsGreen from "@/public/images/airpods-max-green.png";
import AirPodsWhite from "@/public/images/airpods-max-white.png";

export const Header = () => {
  const selectedColor = useAppStore((state) => state.selectedColor);
  console.log("selectedColor <-------", selectedColor);

  let imageToShow = <Image src={AirPodsBlue} alt="blue airPods" priority />;
  if (selectedColor === "red") {
    imageToShow = <Image src={AirPodsRed} alt="red airPods" priority />;
  }
  if (selectedColor === "blue") {
    imageToShow = <Image src={AirPodsBlue} alt="blue airPods" priority />;
  }
  if (selectedColor === "black") {
    imageToShow = <Image src={AirPodsBlack} alt="black airPods" priority />;
  }
  if (selectedColor === "green") {
    imageToShow = <Image src={AirPodsGreen} alt="green airPods" priority />;
  }
  if (selectedColor === "white") {
    imageToShow = <Image src={AirPodsWhite} alt="white airPods" priority />;
  }

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
              <li className="menu__item menu__item-btn">
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
          <h1 className="title">
            <span className="title--air">Air</span>
            <span className="title--pod">Pod</span>
            <span className="title--s">S</span>
            <span className="title--m">M</span>
            <span className="title--ax">AX</span>
          </h1>
          <div className="header__content-images">{imageToShow}</div>
        </div>
      </div>
    </header>
  );
};

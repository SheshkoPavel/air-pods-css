"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import selectRed from "@/public/images/airpods-max-select__red.png";
import selectBlue from "@/public/images/airpods-max-select__blue.png";
import selectBlack from "@/public/images/airpods-max-select__black.png";
import selectGreen from "@/public/images/airpods-max-select__green.png";
import selectWhite from "@/public/images/airpods-max-select__white.png";

const headphones = [selectRed, selectBlue];

export const ColorMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="choose-color">
      <div className="container">
        <h3 className="choose-color__title">Choose your color</h3>
        <p className="choose-color__text">
          The perfect balance between the purity of hi‑fi and the magic of
          AirPods. The ultimate personal audio experience.
        </p>
        <div className="choose-color__list">
          <button className="choose-color__btn">
            <Image className="" src={selectRed} alt="red air pods" />
          </button>
          {/* <button className="choose-color__btn">
            <Image className="" src={selectBlue} alt="red air pods" />
          </button> */}
          <button className="choose-color__btn">
            <Image className="" src={selectBlack} alt="red air pods" />
          </button>
          <button className="choose-color__btn">
            <Image className="" src={selectGreen} alt="red air pods" />
          </button>
          <button className="choose-color__btn">
            <Image className="" src={selectWhite} alt="red air pods" />
          </button>
        </div>
      </div>
    </section>
  );
};

"use client";

import Image from "next/image";

import { useAppStore } from "@/app/store/app-state";

import sideRed from "@/public/images/airpods_side_red.jpg";
import sideBlue from "@/public/images/airpods_side_blue.jpg";
import sideBlack from "@/public/images/airpods_side_black.jpg";
import sideGreen from "@/public/images/airpods_side_green.jpg";
import sideWhite from "@/public/images/airpods_side_white.jpg";

export const CompositionMain = () => {
  const selectedColor = useAppStore((state) => state.selectedColor);

  let imageToShow = (
    <Image
      className="composition__inner-image"
      src={sideBlue}
      alt="blue air pods"
    />
  );
  if (selectedColor === "red") {
    imageToShow = (
      <Image
        className="composition__inner-image"
        src={sideRed}
        alt="red air pods"
      />
    );
  }
  if (selectedColor === "blue") {
    imageToShow = (
      <Image
        className="composition__inner-image"
        src={sideBlue}
        alt="blue air pods"
      />
    );
  }
  if (selectedColor === "black") {
    imageToShow = (
      <Image
        className="composition__inner-image"
        src={sideBlack}
        alt="black air pods"
      />
    );
  }
  if (selectedColor === "green") {
    imageToShow = (
      <Image
        className="composition__inner-image"
        src={sideGreen}
        alt="green air pods"
      />
    );
  }
  if (selectedColor === "white") {
    imageToShow = (
      <Image
        className="composition__inner-image"
        src={sideWhite}
        alt="white air pods"
      />
    );
  }

  return (
    <section className="composition">
      <div className="container">
        <h2 className="composition__title main__title">
          An extremely original composition.
        </h2>
        <p className="composition__text">
          Introducing the reinvention of over-the-ear headphones. From the
          cushion to the headband, the AirPods Max are designed with acoustic
          insulation in mind, adapted to many head shapes, so you can immerse
          yourself in the purity of sound.
        </p>

        <div className="composition__inner">
          <div className="composition__inner-text">
            <p>
              The headband is made of breathable mesh, distributing the weight
              to reduce pressure on the head.
            </p>
            <p>
              The stainless steel structure is wrapped in a soft-touch material
              to provide a remarkable harmony between resistance, flexibility
              and comfort.
            </p>
            <p>
              The telescoping arms expand and stay in any position you want,
              allowing you to maintain fit and isolation.
            </p>
          </div>
          {imageToShow}
        </div>
      </div>
    </section>
  );
};

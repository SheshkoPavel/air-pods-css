"use client";

import Image from "next/image";

import { useAppStore } from "@/app/store/app-state";

import caseRed from "@/public/images/airpods-max-smartcase-case_red.png";
import caseBlue from "@/public/images/airpods-max-smartcase-case_blue.png";
import caseBlack from "@/public/images/airpods-max-smartcase-case_black.png";
import caseGreen from "@/public/images/airpods-max-smartcase-case_green.png";
import caseWhite from "@/public/images/airpods-max-smartcase-case_white.png";

export const CaseMain = () => {
  const selectedColor = useAppStore((state) => state.selectedColor);

  let imageToShow = (
    <Image className="case__image" src={caseBlue} alt="blue case" />
  );
  if (selectedColor === "red") {
    imageToShow = (
      <Image className="case__image" src={caseRed} alt="red case" />
    );
  }
  if (selectedColor === "blue") {
    imageToShow = (
      <Image className="case__image" src={caseBlue} alt="blue case" />
    );
  }
  if (selectedColor === "black") {
    imageToShow = (
      <Image className="case__image" src={caseBlack} alt="black case" />
    );
  }
  if (selectedColor === "green") {
    imageToShow = (
      <Image className="case__image" src={caseGreen} alt="green case" />
    );
  }
  if (selectedColor === "white") {
    imageToShow = (
      <Image className="case__image" src={caseWhite} alt="white case" />
    );
  }

  return (
    <section className="case">
      <div className="container">
        <h2 className="case__title main__title">
          It even preserves the battery.
        </h2>
        <p className="case__text">
          When stored in the sleek and lightweight{" "}
          <span className="case__bold">Smart Case</span>, AirPods Max enter a
          low-power state to save energy.
        </p>
        {imageToShow}
        <h2 className="case__subtitle main__title">
          Stayin&apos; alive, stayin&apos; alive.
        </h2>
        <p className="case__numbers">20</p>
        <p className="case__subtext">
          hours of music, movies and calls with Active Noise Cancellation and
          Custom Spatial Audio turned on. 5 And just 5 minutes of charging via
          the Lightning connector gives you an hour and a half of sound. 6
        </p>
      </div>
    </section>
  );
};

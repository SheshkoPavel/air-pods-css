"use client";

import Image from "next/image";

import selectRed from "@/public/images/airpods-max-select__red.png";
import selectBlue from "@/public/images/airpods-max-select__blue.png";
import selectBlack from "@/public/images/airpods-max-select__black.png";
import selectGreen from "@/public/images/airpods-max-select__green.png";
import selectWhite from "@/public/images/airpods-max-select__white.png";
import { useAppStore } from "@/app/store/app-state";

export const ColorMain = () => {
  const selectedColor = useAppStore((state) => state.selectedColor);
  const setSelectedColor = useAppStore((state) => state.setSelectedColor);

  return (
    <section className="choose-color">
      <div className="container">
        <h3 className="choose-color__title">Choose your color</h3>
        <p className="choose-color__text">
          The perfect balance between the purity of hi‑fi and the magic of
          AirPods. The ultimate personal audio experience.
        </p>
        <div className="choose-color__list">
          {selectedColor !== "red" && (
            <button
              className="choose-color__btn"
              onClick={() => setSelectedColor("red")}
            >
              <Image src={selectRed} alt="red air pods" />
            </button>
          )}
          {selectedColor !== "blue" && (
            <button
              className="choose-color__btn"
              onClick={() => setSelectedColor("blue")}
            >
              <Image src={selectBlue} alt="blue air pods" />
            </button>
          )}
          {selectedColor !== "black" && (
            <button
              className="choose-color__btn"
              onClick={() => setSelectedColor("black")}
            >
              <Image src={selectBlack} alt="black air pods" />
            </button>
          )}
          {selectedColor !== "green" && (
            <button
              className="choose-color__btn"
              onClick={() => setSelectedColor("green")}
            >
              <Image src={selectGreen} alt="green air pods" />
            </button>
          )}
          {selectedColor !== "white" && (
            <button
              className="choose-color__btn"
              onClick={() => setSelectedColor("white")}
            >
              <Image src={selectWhite} alt="white air pods" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

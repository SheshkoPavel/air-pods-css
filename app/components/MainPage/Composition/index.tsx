import Link from "next/link";
import Image from "next/image";

import sideBlue from "@/public/images/airpods_side_blue.jpg";

export const CompositionMain = () => {
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
          <Image
            className="composition__inner-image"
            src={sideBlue}
            alt="red air pods"
          />
        </div>
      </div>
    </section>
  );
};

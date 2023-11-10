import Link from "next/link";
import Image from "next/image";

import caseBlue from "@/public/images/airpods-max-smartcase-case_blue.png";

export const CaseMain = () => {
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
        <Image className="case__image" src={caseBlue} alt="blue case" />
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

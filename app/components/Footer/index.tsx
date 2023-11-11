import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/images/logo-white.svg";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <Link className="footer__link" href={"#"}>
          Find a retailer near you
        </Link>
        <p className="footer__text">
          Or call <Link href={`tel:800207758`}>800 207 758</Link>
        </p>
        <Image src={logoImg} alt="logo white" />
        <ul className="footer__list">
          <li className="footer__item">Copyright © 2023 Apple Inc. </li>
          <li className="footer__item">All rights reserved.</li>
          <li className="footer__item">
            <Link href={"#"}>Legal Notices</Link>
          </li>
          <li className="footer__item">
            <Link href={"#"}>Site Map</Link>
          </li>
          <li className="footer__item">
            <Link href={"#"}>Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

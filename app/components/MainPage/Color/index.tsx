"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logoImg from "@/public/images/logo.svg";

export const ColorMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="choose-color">
      <div className="container">
        <h3 className="choose-color__title"></h3>
      </div>
    </section>
  );
};

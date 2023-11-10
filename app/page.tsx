import Image from "next/image";

import { ColorMain, CompositionMain } from "./components";

export default function Home() {
  return (
    <main className="main">
      <ColorMain />
      <CompositionMain />
    </main>
  );
}

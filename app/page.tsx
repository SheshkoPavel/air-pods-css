import Image from "next/image";

import { CaseMain, ColorMain, CompositionMain } from "./components";

export default function Home() {
  return (
    <main className="main">
      <ColorMain />
      <CompositionMain />
      <CaseMain />
    </main>
  );
}

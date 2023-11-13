import { AudioMain, CaseMain, ColorMain, CompositionMain } from "./components";

export default function Home() {
  return (
    <main className="main">
      <ColorMain />
      <CompositionMain />
      <CaseMain />
      <AudioMain />
    </main>
  );
}

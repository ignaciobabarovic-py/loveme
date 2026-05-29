import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Story from "./components/Story";
import ScentNotes from "./components/ScentNotes";
import FullscreenQuote from "./components/FullscreenQuote";
import Features from "./components/Features";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <main style={{ background: "#050505", cursor: "none" }}>
      <CustomCursor />
      <Nav />
      <Hero />
      <Divider fromColor="#050505" toColor="#050505" />
      <Story />
      <FullscreenQuote />
      <ScentNotes />
      <Features />
      <div style={{
        height: "120px",
        background: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0",
      }}>
        <div style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.4))",
        }} />
        <div style={{
          width: "40px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #C9A96E, transparent)",
        }} />
        <div style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, rgba(201,169,110,0.4), transparent)",
        }} />
      </div>
      <Reserve />
      <Footer />
    </main>
  );
}

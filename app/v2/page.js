import TopSidebar from "./_components/TopSidebar";
import Hero from "./_components/Hero";
import VSLPlayer from "./_components/VSLPlayer";
import CTAButton from "./_components/CTAButton";
import Footer from "./_components/Footer";

export default function HomeV2() {
  return (
    <>
      <TopSidebar />
      <Hero />
      <VSLPlayer />
      {/* <CTAButton /> oculto temporariamente — usando o botão do vTurb */}
      <Footer />
    </>
  );
}

import PortfolioHomePage from "@/components/portfolio/portfolio-home-page";
import { PersonJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <PortfolioHomePage />
    </>
  );
}

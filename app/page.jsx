import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/homes/About";
import Blogs from "@/components/blogs/Blog4";
import Hero from "@/components/homes/Hero";
import Portfolio from "@/components/homes/Portfolio";
import Servies from "@/components/homes/Servies";
import Team from "@/components/homes/Team";
import Testimonials from "@/components/homes/Testimonials";
export const metadata = {
  title: "TeaFarmHub - Premium Organic Tea | Cultivated in Harmony with Nature",
  description:
    "Fine teas crafted in harmony with nature and cosmic wisdom. From our highland plantations to your cup - experience organic tea cultivated with tradition, permaculture, and celestial energies.",
};

export default function Home() {
  return (
    <div className="page-wraper roboto-condensed">
      <Header />
      <Hero />
      <div className="page-content">
        <div className="content-block">
          <About />
          <Portfolio />
          <Servies />
          <Team />
          {/* <Blogs /> */}
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
}

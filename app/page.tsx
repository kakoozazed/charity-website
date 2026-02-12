// app/page.tsx
import Header from "@/components/onepage/Header";
import Hero from "@/components/onepage/Hero";
import Programs from "@/components/onepage/Programs";
import SuccessStories from "@/components/onepage/SuccessStories"; // New
import GetInvolved from "@/components/onepage/GetInvolved"; // New
import Gallery from "@/components/onepage/Gallery";
import About from "@/components/onepage/About";
import Donate from "@/components/onepage/Donate";
import Contact from "@/components/onepage/Contact";
import Footer from "@/components/onepage/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Programs />
      <SuccessStories />
      <GetInvolved /> 
      <Gallery />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}
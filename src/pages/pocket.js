import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Maincontent from "@/components/maincontent";
import Nav from "@/components/nav";
import Slideanimation from "@/components/slideanimation";

export default function pocket() {
  return (
    <div>
      <Nav />
      <Maincontent />
      <Feature />
      <Slideanimation />
      <Footer />
    </div>
  )
};
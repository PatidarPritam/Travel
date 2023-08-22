import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Homeimg from "../assets/home1.avif";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Homeimg}
        title="Let's Travel"
        text="Choose Your Favourite Destination"
        /*buttonText="Travel Plan"*/
        /*url="/"*/
        /* btnClass="show"*/
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;

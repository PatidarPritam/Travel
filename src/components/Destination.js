import Mountain1 from "../assets/jaipur.avif";
import Mountain2 from "../assets/jaipur1.avif";
import Mountain3 from "../assets/indore.jpg";
import Mountain4 from "../assets/indore1.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p> Tours give you the opprtunity to see a lot,within a time frame.</p>

      <DestinationData
      className="first-des"
        heading="PinkCityJaipur,India"
        text="Embark on a mesmerizing journey through the vibrant streets and rich history of Jaipur, famously known as the Pink City. Our travel web application is designed to make your Jaipur experience unforgettable, offering a seamless blend of culture, heritage, and modernity."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
       className="first-des-reverse"
        heading="FoodieVenture Indore,India"
        text="Indore is renowned for its vibrant street food culture and an array of mouthwatering dishes that reflect the city's rich history and cultural diversity. With FoodieVenture Indore, you'll discover hidden food gems, iconic eateries, and local favorites that tantalize your taste buds and leave you craving for more.
       Taste the Delights:
        From the iconic Poha and Jalebi breakfast combination to the savory delights of Kachori and Samosa, Indore's street food scene is an explosion of flavors. Explore Sarafa Bazaar, a bustling night market transformed into a culinary paradise, where you can indulge in a variety of street food, sweets, and local specialties that showcase the true essence of Indore's culinary heritage."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;

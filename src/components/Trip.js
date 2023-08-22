import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/Goa.avif";
import Trip2 from "../assets/ladakh.avif";
import Trip3 from "../assets/Varanasi.avif";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trips</h1>
      <p>you can choose unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Goa"
          text="Famous for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture, Goa is a popular destination for relaxation and adventure."
        />
        <TripData
          image={Trip2}
          heading="Leh-Ladakh, Jammu and Kashmir"
          text="Known for its breathtaking landscapes, high mountain passes, and unique culture, this region is a haven for adventure enthusiasts and nature lovers."
        />
        <TripData
          image={Trip3}
          heading="Varanasi, Uttar Pradesh"
          text="One of the oldest cities in the world, Varanasi is a spiritual hub along the banks of the Ganges River. The ghats, temples, and the spiritual atmosphere make it a unique experience."
        />
      </div>
    </div>
  );
}
export default Trip;

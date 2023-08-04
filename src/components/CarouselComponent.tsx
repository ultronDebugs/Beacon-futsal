import { Carousel } from "flowbite-react";
import boot from "../assets/boot.png";
import pic from "../assets/pitch.jpg";
import pic2 from "../assets/pitchLanscape.jpg";
import pic3 from "../assets/pitchPortrait2.jpg";
import pic4 from "../assets/pitchPortrait1.jpg";
const images = [boot, pic, pic2, pic3, pic4];

export default function CarouselComponent() {
  return (
    <Carousel
      indicators={true}
      // slide={true}
      style={{ height: "50vh" }}
      slideInterval={5000}
    >
      {images.map((image) => {
        return (
          <img src={image} className="h-auto object-cover object-left w-auto" />
        );
      })}
    </Carousel>
  );
}

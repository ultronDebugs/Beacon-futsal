// import React from "react";

import ContactForm from "../components/ContactForm";
import ContentSection1 from "../components/ContentSection1";
import ContentSection2 from "../components/ContentSection2";
import ContentSection3 from "../components/ContentSection3";
import DestinationsCard from "../components/DestinationsCard";
import Hero from "../components/Hero";
import PitchCard from "../components/PitchCard";
import pitch from "../assets/pitchLanscape.jpg";

const locations = [
  {
    name: "Lagos, Nigeria ",
    imageUrl:
      "https://media.timbu.com/poi/902/pitch.jpg-902-5764770ab46a8.jpg?w=132&h=132",
  },
  {
    name: "Abuja, Nigeria",
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipMfPghZwgZdj4d341cNs9M-b35grL481jj2Nmrb=w1080-h608-p-no-v0",
  },
  {
    name: "Kaduna, Nigeria",
    imageUrl:
      "https://pbs.twimg.com/media/E9kP8t8XMAIZ4Bj?format=jpg&name=large",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <ContentSection1 />
      <ContentSection2 />
      <ContentSection3 />
      <ContactForm />
      {/* <PitchCard
        pitchDescription="lorem ipsumwdkhb"
        pitchName="Plutous club House"
        pitchLocation="Kaduna, nigeria"
        pitchImage={pitch}
      /> */}
      {/* <DestinationsCard
        city="kaduna state"
        country="Nigeria"
        imageUrl="https://pbs.twimg.com/media/E9kP8t8XMAIZ4Bj?format=jpg&name=large"
      /> */}
    </div>
  );
}

// <div className="flex bg-bottom w-auto h-40  justify-center px-6">
//         <div>
//           <h1 className="text-center text-slate-900 text-5xl my-6">
//             No more aimless searches for the right pitch to plan your next
//             match.{" "}
//           </h1>
//           <p className="text-center text-clip text-2xl ">
//             With over 200 pitches across Nigeria, we will help you find what you
//             like without any hassle
//           </p>
//           <p className="text-center text-xl text-clip">
//             {" "}
//             With the help of Beacon, every thing from scheduling, booking and
//             payments are made easy with little to no effort.
//           </p>
//         </div>
//       </div>
//       <h1 className="text-5xl ml-7 mt-12 text-center">
//         Check out our partners in these destinations
//       </h1>
//       <div className="flex justify-center">
//         <div className="xs:grid-cols-1 gap-11 overflow-hidden sm:grid-cols-1 lg:grid-cols-3 place-content-center md:grid-cols-2 grid grid-cols-3  mt-2 mb-2">
//           {locations.map((location) => {
//             return (
//               <DestinationsCard
//                 key={location.name}
//                 name={location.name}
//                 imageUrl={location.imageUrl}
//               />
//             );
//           })}
//         </div>
//       </div>
//       <PitchCard
//         pitchImage="https://pbs.twimg.com/media/E9kP8t8XMAIZ4Bj?format=jpg&name=large"
//         key={"nothing"}
//         pitchName="Plutous, club house"
//         pitchLocation="Kaduna,Nigeria"
//         pitchDescription="lorem ipsum domet ilur meta neji mikasa ren levi arigatou"
//       />

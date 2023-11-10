import DestinationsCard from "../components/DestinationsCard";
import PitchSearchBar from "../components/PitchSearchBar";
import { useEffect, useState } from "react";
import { backendApi } from "../configs/Api";

export default function SelectPitchPage() {
  const [searchField, setSearchField] = useState("");

  type Pitch = {
    _id: string;
    name: string;
    pricePerhour: number;
    description: string;
    ownerId: string;
    Created: string;
    images: string[];
    pitchId: string;
    bookingSlots: Record<string, string>; // Assuming bookingSlots is an object with dynamic keys and any values
    subscription: boolean;
  };

  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  const [pitches, setPitches] = useState([]);

  useEffect(() => {
    async function fetchPitches() {
      try {
        // Make a GET request to the '/pitches' endpoint using fetch
        const response = await fetch(`${backendApi}/pitches`);
        if (response.ok) {
          // If the response is successful, parse the JSON data and save it to the state
          const data = await response.json();
          setPitches(data);
        } else {
          // Handle errors if the response is not successful
          console.error("Error fetching pitches:", response.statusText);
        }
      } catch (error) {
        // Handle network errors or other exceptions here
        console.error("Error fetching pitches:", error);
      }
    }

    // Call the fetchPitches function when the component mounts
    fetchPitches();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  console.log(pitches);
  // console.log(pitches[0].images[0]);

  return (
    <div className="pb-7 pt-1 h-[85vh] bg-white dark:bg-slate-900">
      <PitchSearchBar setSearchField={setSearchField} />
      <br />
      <div className=" overflow-y-hidden grid md:grid-cols-2 sm:grid-cols-1 min-[500px]:ml-8 lg:grid-cols-3 grid-cols-1 gap-11 lg:ml-5 md:ml-8 xl:ml-16">
        {pitches.map((pitch: Pitch, index) => {
          return (
            <div className="ml-3" key={index}>
              <DestinationsCard
                pitchId={pitch.pitchId}
                pitchName={pitch.name}
                city={"kaduna"}
                imageUrl={pitch.images[index]}
                // key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

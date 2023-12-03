import DestinationsCard from "../components/DestinationsCard";
import PitchSearchBar from "../components/PitchSearchBar";
import { useEffect, useState } from "react";
import { backendApi } from "../configs/Api";
import LoadingCard from "../components/LoadingCard";
import Scroll from "../components/Scroll";
import { useQuery } from "react-query";
import axios from "axios";

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
  console.log(searchField);

  const [filteredPitches, setFilteredPitches] = useState<Pitch[]>([]);

  const handleSearchPitch = () => {
    if (pitches) {
      setFilteredPitches(
        pitches.filter((pitch: Pitch) =>
          pitch.name.toLowerCase().includes(searchField.toLowerCase())
        )
      );
      console.log("handle search working");
    }
  };

  const [location, setLocation] = useState<string>("");

  const fetchData = async (location: string) => {
    const response = await axios.get(
      `${backendApi}/pitches?location=${location}`
    );
    console.log(response);
    return response.data;
  };
  const handleLocationChange = (newLocation: string) => {
    // Update the location state and trigger a refetch
    setLocation(newLocation);
    console.log(`location before state change ${location}`);
    setTimeout(() => {
      refetch();
    }, 10);
  };

  // Use react-query's useQuery hook to manage the data fetching
  const {
    data: pitches,
    isLoading,
    refetch,
  } = useQuery(["pitches", location], () => fetchData(location), {
    enabled: false, // Set to false initially, will be enabled on location change
  });

  useEffect(handleSearchPitch, [pitches, searchField]);
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="pb-7 pt-1 h-[100vh]  bg-white dark:bg-slate-900">
      <PitchSearchBar
        // handleSearchPitch={handleSearchPitch}
        handleLocationChange={handleLocationChange}
        setSearchField={setSearchField}
      />
      <br />
      <Scroll height={85}>
        {isLoading ? (
          <div className="bg-gray-900 flex items-center justify-center  h-[112vh]">
            <div className=" overflow-y-hidden grid md:grid-cols-2 sm:grid-cols-1 min-[500px]:ml-8 lg:grid-cols-3 grid-cols-1 gap-11 lg:ml-5 md:ml-8 xl:ml-16">
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </div>
          </div>
        ) : pitches ? (
          <div className=" overflow-y-hidden grid md:grid-cols-2 sm:grid-cols-1 min-[500px]:ml-8 lg:grid-cols-3 grid-cols-1 gap-11 lg:ml-5 md:ml-8 xl:ml-16 mb-24">
            {filteredPitches.map((pitch: Pitch, index: number) => {
              return (
                <div className="ml-3 pt-6" key={index}>
                  <DestinationsCard
                    pitchId={pitch.pitchId}
                    pitchName={pitch.name}
                    city={"kaduna"}
                    key={index}
                    imageUrl={pitch.images[index]}
                    // key={index}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p>no data available</p>
        )}
      </Scroll>
    </div>
  );
}

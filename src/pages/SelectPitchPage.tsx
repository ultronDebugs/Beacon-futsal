import DestinationsCard from "../components/DestinationsCard";
import PitchSearchBar from "../components/PitchSearchBar";
import { useEffect, useState } from "react";
import testPic from "../assets/boot.png";
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function SelectPitchPage() {
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  return (
    <div className="pb-7 pt-1 bg-white dark:bg-slate-900">
      <PitchSearchBar setSearchField={setSearchField} />
      <br />
      <div className=" overflow-y-hidden grid md:grid-cols-2 sm:grid-cols-1 min-[500px]:ml-8 lg:grid-cols-3 grid-cols-1 gap-11 lg:ml-5 md:ml-8 xl:ml-16">
        {list.map((item, index) => {
          return (
            <div className="ml-3" key={index}>
              <DestinationsCard
                pitchName={item}
                city="Kaduna"
                country={`Nigeria${item}`}
                imageUrl={testPic}
                // key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

import DestinationsCard from "../components/DestinationsCard";
import PitchSearchBar from "../components/PitchSearchBar";
import { useEffect, useState } from "react";
import testPic from "../assets/boot.png";
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export default function SelectPitchPage() {
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  return (
    <div className="pb-7 pt-1 bg-white dark:bg-slate-900">
      <PitchSearchBar setSearchField={setSearchField} />
      <br />
      <div className="px-4 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 grid-cols-4 gap-11 ml-8">
        {list.map((item, index) => {
          return (
            <DestinationsCard
              city="Kaduna"
              country={`Nigeria${item}`}
              imageUrl={testPic}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

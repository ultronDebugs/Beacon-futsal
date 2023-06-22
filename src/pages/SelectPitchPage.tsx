import PitchSearchBar from "../components/PitchSearchBar";
import { useEffect, useState } from "react";

export default function SelectPitchPage() {
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  return (
    <div className="h-[90vh] pt-1 dark:bg-slate-900">
      <PitchSearchBar setSearchField={setSearchField} />
    </div>
  );
}

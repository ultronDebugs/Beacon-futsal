import { Dispatch, SetStateAction } from "react";

export default function PitchSearchBar({
  setSearchField,
}: {
  setSearchField: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sm:flex-row">
      <div className="flex-shrink-0 w-full sm:w-auto sm:flex">
        <div className="relative flex-shrink-0 w-full mb-4 sm:mb-0 sm:mr-4 sm:w-64 lg:w-96">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <label htmlFor="search" className="hidden">
            Search block sections:
          </label>
          <input
            id="search"
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for pitch"
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          />
        </div>
        <label htmlFor="category" className="hidden">
          Select Locations:
        </label>
        <select
          id="category"
          className="bg-white border border-gray-300 text-gray-900 sm:w-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="all" defaultValue={1}>
            All Locations
          </option>
          <option value="marketing">Kaduna</option>
          <option value="application">Abuja</option>
          <option value="publisher">Katsina</option>
        </select>
      </div>
      <div className="hidden text-sm text-gray-600 dark:text-gray-400 sm:block">
        Showing 10 results.
      </div>
    </div>
  );
}

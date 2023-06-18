"use client";

import { Card } from "flowbite-react";

export default function PitchCard({
  pitchImage,
  pitchName,
  pitchDescription,
  pitchLocation,
}: {
  pitchImage: string;
  pitchName: string;
  pitchDescription: string;
  pitchLocation: string;
}) {
  console.log(pitchLocation);
  return (
    <a className="w-[600px] rounded-xl bg-gray-800 flex " href="#">
      <div className="ml-1 mr-2 mt-1  mb-1">
        <img
          alt="pitch image"
          className="w-80 rounded-tl-lg rounded-bl-lg "
          src={pitchImage}
        />
      </div>
      <div className="mt-3">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{pitchName}</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>{pitchLocation}</p>
        </p>
        <p className="font-normal mt-3 text-gray-700 dark:text-gray-100">
          <p>{pitchDescription}</p>
        </p>
        <button
          children={"check it out"}
          about="lets ses what it does"
          className=" mt-2 px-3 py-2 rounded-lg text-white hover:bg-blue-600  bg-blue-700"
        />
      </div>
    </a>
  );
}
// Here are the biggest enterprise technology acquisitions of 2021 so
// far, in reverse chronological order.

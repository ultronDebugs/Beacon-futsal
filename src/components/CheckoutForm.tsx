import { useState } from "react";
import FlwPayment from "./FlwPayment";

// spacing
interface pitch {
  pitchOwnerId: string;
  name: string;
  size: string;
  pricePerHour: number;
  images: string[];
  bookedSlots: object;
}

export default function CheckoutForm({
  times,
  pitchInfo,
  date,
  setTimes,
  setDate,
  setPitchAvailability,
}: {
  setTimes: React.Dispatch<React.SetStateAction<Array<string>>>;
  setPitchAvailability: any;
  times: string[];
  date: string;
  setDate: any;
  pitchInfo: pitch;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const pricePerHour = pitchInfo.pricePerHour;

  return (
    <form>
      <div className="mb-6 w-">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6 w-">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john doe"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          inputMode="numeric"
          placeholder="070xxxxxx"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />

        {/* <input type="text" id="phoneNumber" required /> */}
      </div>
      <div className="flex items-start mb-6"></div>

      <FlwPayment
        date={date}
        name={name}
        setDate={setDate}
        pitchInfo={pitchInfo}
        times={times}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        amount={pricePerHour * times.length}
        email={email}
        phoneNumber={phoneNumber}
        setTimes={setTimes}
        setPitchAvailability={setPitchAvailability}
      />
    </form>
  );
}

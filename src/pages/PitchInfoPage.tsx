import moment from "moment";
import TimeBoard from "./TimeBoard";
import { useParams } from "react-router-dom";
// import PaymentButton from "../components/PaymentButton";
// import FlwPayment from "../components/FlwPayment";
import { ImageSlider } from "../components/ImageSlider";
// import CheckOutTable from "../components/CheckOutTable";
import CheckoutForm from "../components/CheckoutForm";
import { useState, useEffect } from "react";
import { backendApi } from "../configs/Api";

//
export default function PitchInfoPage() {
  type PitchType = {
    name: string;
    pricePerHour: number;
    PitchOwnerId: string;
    description: string;
    Address: string;
    images: [string, string, string, string, string];
  };
  // get PitchId
  const { id } = useParams();
  const pitchId = id;
  console.log(pitchId);

  const today = moment().format("YYYY-MM-DD");

  // pitch info and availability states respectively
  const [pitchInfo, setPitchInfo] = useState<PitchType>({
    Address: "",
    description: "",
    name: "",
    PitchOwnerId: "",
    pricePerHour: 0,
    images: ["", "", "", "", ""],
  });

  const [pitchAvailability, setPitchAvailability] = useState([]);
  const [date, setDate] = useState(today);

  useEffect(() => {
    // Function to fetch pitch availability from the backend based on pitchId and date
    const fetchPitchAvailability = async () => {
      try {
        const response = await fetch(
          `/api/pitchAvailability?pitchId=${pitchId}&date=${date}`
        );
        if (response.ok) {
          const data = await response.json();
          setPitchAvailability(data); // Update the state with the fetched pitch availability array
        } else {
          console.error("Error fetching pitch availability");
        }
      } catch (error) {
        console.error("Error fetching pitch availability:", error);
      }
    };

    // Call the fetchPitchAvailability function when the component mounts or when pitchId or date changes
    fetchPitchAvailability();
  }, [pitchId, date]); // The effect depends on pitchId and date, so it will run whenever they change

  console.log(pitchAvailability);
  console.log(pitchInfo);

  useEffect(() => {
    // Function to fetch pitch information from the backend
    const fetchPitchInfo = async () => {
      try {
        const response = await fetch(`${backendApi}/pitches/${pitchId}`); // Replace this URL with your backend API endpoint
        if (response.ok) {
          const data = await response.json();
          setPitchInfo(data.data); // Update the state with the fetched pitch information
        } else {
          console.error("Error fetching pitch information");
        }
      } catch (error) {
        console.error("Error fetching pitch information:", error);
      }
    };

    // Call the fetchPitchInfo function when the component mounts
    fetchPitchInfo();
  }, [pitchId]); // The empty dependency array ensures that this effect runs once after the initial render

  const images = pitchInfo.images.map((image: string) => {
    return { url: image, alt: "image" };
  });
  // console.log(today);

  return (
    <div className="h-auto pb-6 bg-white pt-4 dark:bg-gray-900">
      <div className=" flex justify-center w-auto   ">
        <div
          className=""
          style={{
            maxWidth: "1200px",
            width: "100%",
            aspectRatio: "10 / 6",
            margin: "0 auto",
          }}
        >
          <ImageSlider images={images} />
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
            {pitchInfo.name}
          </h2>
          <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
            #1000
          </p>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Details
            </dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              nulla deserunt reiciendis laboriosam, minus quasi voluptas dicta
              veritatis amet, tenetur animi assumenda obcaecati sed magni, eaque
              temporibus earum molestias suscipit?
            </dd>
          </dl>
          <dl className="flex items-center space-x-6">
            <div>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Category
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                7 Aside pitch
              </dd>
            </div>
            <div>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Pitch Size
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                12
              </dd>
            </div>
          </dl>
          <div className="flex items-center space-x-4"></div>
        </div>
        <div
          className="flex
        justify-center items-center gap-x-3 md:gap-24 my-8"
        >
          <input
            className="w-40 text-center h-10 bg-slate-500 text-blue-100 rounded-md outline-none "
            placeholder="select date"
            type="date"
            // min={"2023-10-27"}
            min={today}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <TimeBoard />
        </div>
        <div className="flex gap-x-80 gap-y-14 justify-around flex-wrap">
          {/* <Datepicker /> */}

          <CheckoutForm />
        </div>
      </section>
    </div>
  );
}

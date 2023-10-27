import { Carousel } from "flowbite-react";
import boot from "../assets/boot.png";
import pic from "../assets/pitch.jpg";
import pic2 from "../assets/pitchLanscape.jpg";
import pic3 from "../assets/pitchPortrait2.jpg";
import pic4 from "../assets/pitchPortrait1.jpg";
const images = [boot, pic, pic2, pic3, pic4];
import moment from "moment";
import TimeBoard from "./TimeBoard";
import PaystackButton from "../components/PaystackButton";
// import CarouselComponent from "../components/CarouselComponent";
//
export default function PitchInfoPage() {
  const today = moment().format("YYYY-MM-DD");
  // console.log(today);
  return (
    <div className="h-[190vh] bg-white pt-4 dark:bg-gray-900">
      <div className=" flex justify-center w-auto  border border-black ">
        <div className="xl:w-2/3">
          <Carousel
            slide={true}
            style={{ height: "70vh", width: "" }}
            slideInterval={5000}
          >
            {images.map((image) => {
              return (
                <img
                  src={image}
                  key={image}
                  alt={""}
                  className="h-auto object-center w-auto"
                />
              );
            })}
          </Carousel>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
            Plutous Club House
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
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="text-white inline-flex items-center dark:bg-inherit bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                aria-hidden="true"
                className="mr-1 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Edit
            </button>
            <button
              type="button"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-900"
            >
              Book this Pitch
            </button>
          </div>
        </div>
        <div
          className="flex
        justify-center my-8"
        >
          <input
            className="w-40 text-center h-10 bg-slate-500 text-blue-100 rounded-md outline-none "
            placeholder="select date"
            type="date"
            // min={"2023-10-27"}
            min={today}
            onChange={(e) => {
              console.log(e.target.value, "from input change");
            }}
          />
        </div>
        <div className="flex justify-around flex-wrap">
          {/* <Datepicker /> */}

          <TimeBoard />
        </div>
        <PaystackButton amount={10000} />
      </section>
    </div>
  );
}

import { useState } from "react";
import LoginModal from "../components/LoginModal";
import { createPortal } from "react-dom";
const portal = document.getElementById("portal");

export default function NotFoundPage() {
  const [openModal, setOpenModal] = useState<boolean | undefined>(true);
  return (
    <section className="bg-white h-[150vh]  dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <a
            href="#"
            className="inline-flex text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>

      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
        className="bg-blue-700"
      >
        Show Modal
      </button>
      {createPortal(
        <LoginModal openModal={openModal} setOpenModal={setOpenModal} />,
        portal as HTMLElement
      )}
    </section>
  );
}

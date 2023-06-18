export default function DestinationsCard({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl: string;
}) {
  return (
    <a
      href="signup"
      className=" w-80 p-4 place-items-center bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
        {name}
      </h5>
      <img
        className="object-cover w-full h-80 rounded-xl "
        src={imageUrl}
        alt=""
      />
    </a>
  );
}

// COPY
// Hey there 👋 we want to make Tailwind

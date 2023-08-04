export default function DestinationsCard({
  city,
  country,
  imageUrl,
  pitchName,
}: {
  city: string;
  country: string;
  imageUrl: string;
  pitchName: number;
}) {
  const backgroundClasses = [
    "relative",
    "block",
    "overflow-hidden",
    "rounded-xl",
    "w-[345px]",
    // "lg:w-[300px]",
    "h-[195px]",
    "grow",
    "bg-cover",
    "bg-center",
    "bg-no-repeat",
    `bg-[url(${imageUrl})]`,
  ];

  // console.log(backgroundClasses.join(" "));

  return (
    <a href={`pitch/${pitchName}`} className={backgroundClasses.join(" ")}>
      <img src={imageUrl} className="-z-10  absolute " />

      <div className="absolute  inset-0 bg-black/30 hover:bg-black/30"></div>

      <div className="relative  flex items-start justify-between p-4 sm:p-6 lg:p-8">
        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
          <h3 className="text-xl z-10 font-bold sm:text-2xl">{city}</h3>

          <p className="text-sm z-10">{country}</p>
        </div>

        <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
          4.5
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
      </div>
    </a>
  );
}

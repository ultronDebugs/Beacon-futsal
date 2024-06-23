import { Link } from "react-router-dom";

const cityData = [
  {
    city: "Abuja",
    image:
      "https://images.unsplash.com/photo-1700085579734-f981f9c4144d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Kano",
    image:
      "https://images.unsplash.com/photo-1605491639366-26e399b040f8?q=80&w=1825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    city: "Kaduna",
    image:
      "https://images.unsplash.com/photo-1596706273130-93120473961c?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function SatesPage() {
  return (
    <div className="px-4 md:px-6 min-h-screen py-6 md:py-12 lg:py-16 xl:py-24 2xl:py-32 dark:bg-gray-900">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {cityData.map((city, index) => {
          return <Card key={index} name={city.city} image={city.image} />;
        })}
      </div>
    </div>
  );
}

function Card({ name, image }: { name: string; image: string }) {
  return (
    <Link to={`${name}`}>
      <div className="relative inset-0 focus:not-sr-only group overflow-hidden rounded-lg dark:bg-gray-800">
        <div className="">
          <img
            alt="location"
            className="object-cover"
            height={225}
            src={image}
            style={{
              aspectRatio: "400/225",
              width: "full",
              objectFit: "cover",
            }}
            //   width={400}
          />
        </div>
        <div className="bg-gray-50 text-gray-100 dark:bg-gray-800 p-4">
          <h3 className="font-semibold">{name}</h3>
        </div>
      </div>
    </Link>
  );
}

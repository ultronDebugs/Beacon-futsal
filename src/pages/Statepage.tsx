import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendApi } from "../configs/Api";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingCard from "../components/LoadingCard";

type Pitch = {
  _id: string;
  name: string;
  pricePerhour: number;
  description: string;
  ownerId: string;
  Created: string;
  images: string[];
  pitchId: string;
  bookingSlots: Record<string, string>; // Assuming bookingSlots is an object with dynamic keys and any values
  subscription: boolean;
};

const fetchData = async (location: string) => {
  const response = await axios.get(
    `${backendApi}/pitches?location=${location}`
  );
  console.log(response);
  return response.data.data;
};

export default function StatePage() {
  const params = useParams();
  const { data: pitches, isLoading } = useQuery<Pitch[], Error>(
    ["pitches", params?.id],
    () => fetchData(params?.id as string)
  );

  return (
    <div className="px-4 md:px-6 min-h-screen py-6 md:py-12 lg:py-16 xl:py-24 2xl:py-32 dark:bg-gray-900">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {isLoading ? <LoadingCard /> : null}
        {pitches?.map((pitch, index) => {
          return (
            <Card
              id={pitch.pitchId}
              key={index}
              name={pitch.name}
              image={pitch.images[0]}
            />
          );
        })}
      </div>
    </div>
  );
}

function Card({
  name,
  id,
  image,
}: {
  name: string;
  id: string;
  image: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/pitches/pitch/" + id);
      }}
    >
      <div className="relative inset-0 focus:not-sr-only group overflow-hidden rounded-lg dark:bg-gray-800">
        <div className="">
          <img
            alt="pitch"
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
    </div>
  );
}

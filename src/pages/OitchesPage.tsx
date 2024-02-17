/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yQV7lrkrOLW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <div className="px-4 md:px-6 xl:px-8 py-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Football Pitches</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore and find the perfect pitch for your game
        </p>
      </div>
      <div className="space-y-4">
        <div className="relative rounded-lg bg-gray-100 dark:bg-gray-800">
          <SearchIcon className="absolute inset-y-0 inset-x-4 m-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="rounded-lg pl-10"
            placeholder="Search for pitches..."
            type="search"
          />
        </div>
      </div>
      <div className="grid gap-6 md:gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Link className="rounded-lg overflow-hidden" href="#">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-[16/9] relative">
                <img
                  alt="Football Pitch"
                  className="object-cover aspect-[16/9] rounded-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                  <PlayIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 flex items-center">
              <div className="grid gap-0.5">
                <h3 className="font-semibold text-sm leading-none">
                  Central Park
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  London, United Kingdom
                </p>
              </div>
              <ChevronRightIcon className="ml-auto h-5 w-5 shrink-0" />
            </CardFooter>
          </Card>
        </Link>
        <Link className="rounded-lg overflow-hidden" href="#">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-[16/9] relative">
                <img
                  alt="Football Pitch"
                  className="object-cover aspect-[16/9] rounded-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                  <PlayIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 flex items-center">
              <div className="grid gap-0.5">
                <h3 className="font-semibold text-sm leading-none">
                  City Stadium
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  New York, USA
                </p>
              </div>
              <ChevronRightIcon className="ml-auto h-5 w-5 shrink-0" />
            </CardFooter>
          </Card>
        </Link>
        <Link className="rounded-lg overflow-hidden" href="#">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-[16/9] relative">
                <img
                  alt="Football Pitch"
                  className="object-cover aspect-[16/9] rounded-lg"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                  <PlayIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 flex items-center">
              <div className="grid gap-0.5">
                <h3 className="font-semibold text-sm leading-none">
                  Golden Fields
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Paris, France
                </p>
              </div>
              <ChevronRightIcon className="ml-auto h-5 w-5 shrink-0" />
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

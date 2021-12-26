import React from "react";
import { Text, Link } from "@components/ui";
import {
  Book,
  Calendar,
  Credits,
  Video,
  Pointer,
  Marker,
  CreditOutline,
  Bookmark,
  VerticalDots,
  Cart,
  RightArrow,
  Close,
} from "@components/icons";

function CourseCard({ buy = false }) {
  return (
    <div className="relative rounded-lg overflow-hidden bg-white mb-2 h-full shadow-md">
      <img
        src="https://picsum.photos/id/117/1544/1024"
        alt="picsum photos"
        className="h-36 w-full object-cover"
      />

      <div className="absolute right-0 top-0 rounded-bl-lg flex space-x-4 p-2 bg-white items-center">
        <Credits className="cursor-pointer" />
        <Video className="cursor-pointer" />
      </div>

      <CardContent buy={buy} />

      {/* <CardMenu /> */}
    </div>
  );
}

function CardContent({ buy = false }) {
  return (
    <div className="flex flex-col p-4">
      <Text variant="pageHeading">
        COVID-19 Infections and Hematologic Disturbances
      </Text>

      <div className="flex items-center">
        <Book className="mr-4" />
        <Text className="font-light"> Covid 19, Cardiology, Lorem +10 </Text>
      </div>

      <div className="flex items-center">
        <Calendar className="mr-4" />
        <Text className="font-light">10 Nov ‘21.11:30 am </Text>
      </div>

      <div className="flex items-center">
        <Marker className="cursor-pointer mr-4" />
        <Text className="font-light"> Georgia, Atlanta </Text>
      </div>

      <CardFooter buy={buy} />
    </div>
  );
}

function CardFooter({ buy = false }) {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <CreditOutline className="cursor-pointer mr-4" />
          <Text className="font-light">10 MOC</Text>
        </div>

        <div className="flex items-center">
          {buy && <Bookmark className="cursor-pointer mr-6" />}
          <VerticalDots className="cursor-pointer" />
        </div>
      </div>
      <hr className="my-2 w-full" />
      {buy ? (
        <div className="flex justify-between items-center">
          <p className="text-secondary text-xl font-semibold">$ 500</p>
          <div className="flex justify-between items-center">
            <Cart className="cursor-pointer mr-3" />
            <Link
              href="#"
              className="text-primary-2 flex items-center border-0 border-l border-primary-2 pl-3"
            >
              Register Now <RightArrow className="ml-1" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          <Link href="#" className="text-primary-2 flex items-center ">
            Continue <RightArrow className="ml-1" />
          </Link>
        </div>
      )}
    </div>
  );
}

function CardMenu() {
  return (
    <div className="absolute inset-0 rounded-lg p-4 flex flex-col overflow-hidden bg-primary">
      <div className="flex items-center justify-between">
        <hr className="w-full relative -ml-8 border-1 border-primary-2 bg-primary-2 rounded-full" />
        <Close className="cursor-pointer ml-4" />
      </div>
      <div className="flex flex-col my-4 space-y-1">
        <CardMenuLink text="Share" />
        <CardMenuLink text="Not Interested" />
        <CardMenuLink text="Download Brochure" />
        <CardMenuLink text="Follow" />
        <CardMenuLink text="Add To Calendar" />
        <CardMenuLink text="Report issue" />
      </div>
    </div>
  );
}

function CardMenuLink({ text }) {
  return (
    <div className="overflow-hidden w-full">
      <Text
        variant="pageHeading"
        className="flex items-center -ml-8 hover:m-0 cursor-pointer"
      >
        <Pointer className="mr-4" /> {text}
      </Text>
    </div>
  );
}

export default CourseCard;

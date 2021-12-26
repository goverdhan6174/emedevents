import React from "react";
import { Calendar } from "@components/icons";
import { Text } from "@components/ui";

function Report() {
  return (
    <div className="relative grid grid-cols-5 gap-2 rounded-lg overflow-hidden bg-white p-4 mb-4 shadow-md">
      <img
        src="https://picsum.photos/id/117/1544/1024"
        alt="picsum photos"
        className="h-36 w-full object-cover rounded-lg col-span-2"
      />

      <div className="col-span-3 flex flex-col justify-between">
        <div className="flex flex-col">
          <Text variant="pageHeading">Covid 19 precautions</Text>
          <div className="flex items-center">
            <Calendar className="mr-4" />
            <Text className="font-light">19 Oct ‘21 . Blog</Text>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col w-full">
            <Text className="font-light text-right">Dr. Sujitha T</Text>
            <hr className="w-full relative border-1 border-primary bg-primary rounded-full" />
          </div>
          <div className="h-8 w-8 bg-primary-2 rounded-full ml-2">
            <span className="h-full w-full bg-primary-2 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;

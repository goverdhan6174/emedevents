import React from "react";
import { Text, Link } from "@components/ui";
import {
  CreditOutline,
  Bookmark,
  VerticalDots,
  Cart,
  RightArrow,
} from "@components/icons";

function CardFooter({ buy = false, handleMenu = { handleMenu } }) {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <CreditOutline className="cursor-pointer mr-4" />
          <Text className="font-light">10 MOC</Text>
        </div>

        <div className="flex items-center">
          {buy && <Bookmark className="cursor-pointer mr-6" />}
          <VerticalDots className="cursor-pointer" onClick={handleMenu} />
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

export default CardFooter;

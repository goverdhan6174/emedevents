import cn from "classnames";
import CardMenuLink from "./CardMenuLink";
import { Close } from "@components/icons";

function CardMenu({ handleMenu, open }) {
  return (
    <div
      className={cn(
        "absolute top-0 w-full h-full rounded-lg p-4 flex flex-col overflow-hidden bg-primary transition duration-600 transform right-full",
        { "translate-x-full": open, "translate-x-0": !open }
      )}
    >
      <div className="flex items-center justify-between">
        <hr className="w-full relative -ml-8 border-1 border-primary-2 bg-primary-2 rounded-full" />
        <Close className="cursor-pointer ml-4" onClick={handleMenu} />
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

export default CardMenu;

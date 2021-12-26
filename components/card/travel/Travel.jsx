import { Text } from "@components/ui";
import { Hotel, Cab, Flight } from "@components/icons";
import { QuickLink } from "@components/common";
import cn from "classnames";

function Travel({ className }) {
  return (
    <div
      className={cn(
        "p-4 bg-white rounded-lg border border-primary-2 w-full",
        className
      )}
    >
      <Text variant="pageHeading">
        Covid 19 Infection is coming soon . Want us to help plan your travel ?
      </Text>
      <div className="flex justify-between mt-4 px-4">
        <QuickLink text="Hotel">
          <Hotel />
        </QuickLink>
        <QuickLink text="Cab">
          <Cab />
        </QuickLink>
        <QuickLink text="Flight">
          <Flight />
        </QuickLink>
      </div>
    </div>
  );
}

export default Travel;

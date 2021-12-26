import { Button, Text } from "@components/ui";
import { Congo } from "@components/icons";
import cn from "classnames";

function RewardCard({ className }) {
  return (
    <div
      className={cn(
        "bg-accent-1 border border-accent-3 rounded-lg p-4 w-full flex flex-col items-center text-center",
        className
      )}
    >
      <Congo />
      <Text>Congrats on Completing</Text>
      <Text variant="pageHeading">International Cardiology Updates!</Text>
      <div className="flex justify-end space-x-4 w-full">
        <Button variant="ghost">Skip</Button>
        <Button variant="outline">Save</Button>
      </div>
    </div>
  );
}

export default RewardCard;

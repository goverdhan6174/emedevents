import { Text, Button, Select } from "@components/ui";
import { Kite, User } from "@components/icons";
import cn from "classnames";

function Profile({ className }) {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col bg-white p-6 rounded-lg border border-accent-2",
        className
      )}
    >
      <div className="flex justify-start space-x-2 items-end">
        <User />
        <div className="flex flex-col">
          <p className="text-2xl text-secondary font-semibold -mb-2">74%</p>
          <Text variant="pageHeading" style={{ paddingBottom: 0 }}>
            PROFILE COMPLETED
          </Text>
        </div>
      </div>

      <Kite className="absolute top-2 right-2" />

      <div className="flex flex-col my-4">
        <Text>Add your certifications ?</Text>
        <Select />
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="ghost">Skip</Button>
        <Button variant="outline">Save</Button>
      </div>
    </div>
  );
}

export default Profile;

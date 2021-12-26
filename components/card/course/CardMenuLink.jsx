import { Text } from "@components/ui";
import { Pointer } from "@components/icons";

function CardMenuLink({ text }) {
  return (
    <div className="overflow-hidden w-full">
      <Text
        variant="pageHeading"
        className="flex items-center transform cursor-pointer transform -translate-x-8 hover:translate-x-0 duration-600"
      >
        <Pointer className="mr-4" /> {text}
      </Text>
    </div>
  );
}

export default CardMenuLink;

import { Text } from "@components/ui";
import { Book, Calendar, Marker } from "@components/icons";
import CardFooter from "./CardFooter";

function CardContent({ buy, handleMenu }) {
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

      <CardFooter buy={buy} handleMenu={handleMenu} />
    </div>
  );
}

export default CardContent;

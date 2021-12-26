import { Navbar, GridContainer } from "@components/common";
import Banner from "@components/banner";
import {
  CourseCard,
  TravelCard,
  ProfileCard,
  RewardCard,
  ReportCard,
} from "@components/card";

import { Text, Button, Container, Calendar } from "@components/ui";
import { Clap, RightArrow } from "@components/icons";

export default function Home() {
  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-4 lg:gap-4"
      style={{ top: "100px" }}
    >
      <Navbar />

      <div className="flex flex-col space-y-4 px-4">
        <Banner />
        <ProfileCard />
        <Calendar className="hidden lg:block" />
        <TravelCard className="hidden lg:block" />
        <RewardCard className="hidden lg:flex" />
      </div>

      <main className="col-span-3 md:px-4 lg:pr-4">
        <GridContainer heading="My activities">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </GridContainer>

        <GridContainer
          heading="Here are some recommendations for you"
          className="mt-8"
        >
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </GridContainer>

        <GridContainer className="mt-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </GridContainer>

        <GridContainer heading="Recently Viewed" className="mt-8">
          <InfoBox />
          <CourseCard buy />
          <CourseCard buy />
        </GridContainer>

        <GridContainer
          heading="Interesting reads curated for you"
          className="my-8"
        >
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </GridContainer>
      </main>
    </div>
  );
}

function InfoBox() {
  return (
    <div className="relative flex flex-col justify-between h-full px-4 py-6 bg-white rounded-md shadow-md">
      <div className="flex">
        <div className="mr-2 w-20">
          <Clap />
        </div>
        <Text variant="pageHeading">
          Congrats on the 10 CME, Credits you still need
        </Text>
      </div>
      <ul className="grid grid-cols-2 gap-4 mt-4 mb-6">
        {[
          { id: 0, count: 1, text: "Covid 19" },
          { id: 1, count: 12, text: "Pain mgt and ELC" },
          { id: 2, count: 1.5, text: "Medical Errors" },
          { id: 3, count: 31, text: "Primary" },
        ].map((info) => {
          return (
            <li key={info.id} className="flex flex-col">
              <p className="text-4xl font-light">{info.count}</p>
              <Text>{info.text}</Text>
            </li>
          );
        })}
      </ul>
      <Button variant="outline" width="100%">
        Plan with CME Planner <RightArrow className="ml-2" />
      </Button>
    </div>
  );
}

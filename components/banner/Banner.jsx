import React from "react";
import s from "./Banner.module.css";
import { Text, Link, Slider } from "@components/ui";

import { Right, Planer, Profile, OpenCalendar } from "@components/icons";
import { QuickLink } from "@components/common";

function Banner() {
  return (
    <section id="home" className={s.banner}>
      <div className="w-44 h-44 rounded-full bg-primary-2" />
      <Text variant="heading" className="font-semibold text-accent-7">
        John Wayne
      </Text>
      <Text variant="subText" className="text-accent-7">
        John Wayne
      </Text>
      <div className="w-full flex flex-col rounded-md m-2 flex-grow pt-4">
        <InfoContainer
          heading="RELICENSE SUMMARY"
          data={[
            {
              id: 0,
              rating: 20,
              title: "California Medical Board",
              desc: "50 Total, 5 Earned, 45 Needed CME",
              ex: "Expiry in 50 days",
            },
            {
              id: 2,
              rating: 70,
              title: "California Medical Board",
              desc: "50 Total, 25 Earned, 25 Needed CME",
              ex: "Expiry in 100 days",
            },
          ]}
        />
        <InfoContainer
          heading="Recertification summary"
          data={[
            {
              id: 0,
              rating: 40,
              title: "ABTS",
              desc: "10 Total, 2 Earned, 8 Needed MOC",
              ex: "Expiry in 180 days",
            },
          ]}
        />
      </div>

      <Text variant="sectionHeading" className="w-full pt-4 hidden lg:block">
        Want to plan your CME goals ?
      </Text>
      <Link
        href="#"
        className="w-full items-center text-primary-2 space-x-4 hidden lg:flex"
      >
        <Text> CME Planner </Text>
        <Right className="mt-2" />
      </Link>

      <div className="w-full">
        <Text variant="sectionHeading">Quick Links </Text>
        <div className="flex justify-between mt-4 px-4">
          <QuickLink text="Planner">
            <Planer />
          </QuickLink>
          <QuickLink text="Profile">
            <Profile />
          </QuickLink>
          <QuickLink text="Calendar">
            <OpenCalendar />
          </QuickLink>
        </div>
      </div>
    </section>
  );
}

function InfoContainer({ heading, data }) {
  return (
    <Slider
      heading={heading}
      headerClassName="bg-white rounded-t-lg"
      wrapperClassName="bg-white rounded-b-lg"
      shadow={false}
      size={1}
    >
      {data.map((info) => {
        return (
          <div key={info.id} className="w-full p-4">
            <Text className="font-light text-accent-7"> {info.title} </Text>
            <div className="relative rounded-lg">
              <div className="absolute h-2 bg-accent-2 my-2 rounded-lg w-full"></div>
              <div
                className="absolute h-2 bg-secondary-2 my-2 rounded-lg"
                style={{ width: `${info.rating}%` }}
              ></div>
              <input
                type="range"
                className=" form-range w-full bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                defaultValue={info.rating}
                min="0"
                max="100"
              />
            </div>
            <Text className="font-light"> {info.desc} </Text>
            <Text className="font-semibold text-secondary"> {info.ex} </Text>
          </div>
        );
      })}
    </Slider>
  );
}

export default Banner;

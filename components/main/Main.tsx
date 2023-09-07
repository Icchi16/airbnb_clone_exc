"use client";

import { mainTemp } from "@/temps/mainTemp";
import CardSkeleton from "./mainComps/Skeleton";
import MainCard from "./mainComps/MainCard";

const Main = () => {
  return (
    <div className="grid gap-x-6 mb-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {mainTemp.map((cardData) => (
        <MainCard key={cardData.id} cardData={cardData.data} />
      ))}
    </div>
  );
};

export default Main;

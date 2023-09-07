"use client";

import { Card, Skeleton } from "@nextui-org/react";
import clsx from "clsx";

interface CardSkeletonProps {
  className?: string;
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({ className }) => {
  return (
    <div className={clsx(className, "")}>
      <Card
        className="w-full space-y-5 bg-transparent rounded-b-none"
        classNames={{ base: "border-none" }}
        radius="lg"
        shadow="none"
      >
        <Skeleton className="rounded-lg">
          <div className="rounded-lg bg-default-300 aspect-[1/0.9]"></div>
        </Skeleton>
        <div className="grid grid-cols-[auto_0.2fr] grid-rows-4 gap-y-[2px] gap-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="col-span-2 w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="col-span-2 w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="col-span-2 w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    </div>
  );
};

export default CardSkeleton;

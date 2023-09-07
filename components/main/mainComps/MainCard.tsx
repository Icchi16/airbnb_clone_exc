import { Card, Image, Link, card } from "@nextui-org/react";
import NextLink from "next/link";
import { PiStar } from "react-icons/pi";
import CoverCarousel from "./CoverCarousel";
import { CardDataProps } from "@/temps/mainTemp";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

interface MainCardProps {
  cardData: CardDataProps["data"];
}

const MainCard: React.FC<MainCardProps> = ({ cardData }) => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setDistance((prev) => cardData.position - 0);
  }, [cardData.position]);

  const startDate = useMemo(() => {
    return dayjs(cardData.duration.startDate);
  }, [cardData.duration]);

  const endDate = useMemo(() => {
    return dayjs(cardData.duration.endDate);
  }, [cardData.duration]);

  const cost = useMemo(() => {
    return cardData.cost;
  }, [cardData.duration]);

  return (
    <Link as={NextLink} href="#" className="hover:!opacity-100">
      <Card
        className="w-full space-y-3 bg-transparent rounded-b-none"
        classNames={{ base: "border-none" }}
        radius="lg"
        shadow="none"
      >
        <CoverCarousel images={cardData.images} />
        <div className="grid grid-cols-[auto_0.2fr] grid-rows-4 gap-y-[2px] gap-3 text-sm">
          <div className="font-semibold">{cardData.name}</div>
          <span className="flex items-center gap-x-1">
            <PiStar />
            {cardData.rating}
          </span>

          <div className="col-span-2 font-light">{distance} kilometer away</div>
          <div className="col-span-2 font-light">
            {endDate.diff(startDate, "d")} nights &middot;{" "}
            {startDate.format("MMM D")} - {endDate.format("MMM D")}
          </div>
          <div className="col-span-2 underline underline-offset-1">
            <span className="font-semibold"> &#36;{cost} AUD</span>{" "}
            <span>total</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default MainCard;

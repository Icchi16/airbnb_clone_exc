"use client";

import { LocaleProps } from "@/temps/localeTemp";
import { Button } from "@nextui-org/react";
import clsx from "clsx";

interface LangCardProps {
  isActive: boolean;
  currencyData: LocaleProps;
  index?: string;
  onClick?: ([...agr]: any) => void;
}

const LangCard: React.FC<LangCardProps> = ({
  currencyData,
  isActive,
  onClick,
  index,
}) => {
  return (
    <Button
      id={index}
      onClick={onClick}
      fullWidth
      variant="flat"
      radius="sm"
      className={clsx(
        isActive ? "ring-1 ring-inset ring-black" : "",
        "justify-start bg-transparent hover:bg-neutral-100 p-3 !h-fit"
      )}
    >
      <div className="flex flex-col items-start">
        <div>{currencyData!.currency?.currencyText}</div>
        <div className="text-neutral-400 flex gap-x-1">
          <p>{currencyData!.currency!.currencyShort}</p>
          {" - "}
          <p>{currencyData!.currency!.currencySymbol}</p>
        </div>
      </div>
    </Button>
  );
};

export default LangCard;

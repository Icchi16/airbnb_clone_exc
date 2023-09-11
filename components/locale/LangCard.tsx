"use client";

import { LocaleProps } from "@/temps/localeTemp";
import { Button } from "@nextui-org/react";
import clsx from "clsx";

interface LangCardProps {
  isActive: boolean;
  langData: LocaleProps;
  index?: string;
  onClick?: ([...agr]: any) => void;
}

const LangCard: React.FC<LangCardProps> = ({
  langData,
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
        isActive ? "outline-2 outline-black" : "",
        "justify-start bg-transparent hover:bg-neutral-100 p-3 !h-fit"
      )}
    >
      <div className="flex flex-col items-start">
        <div>{langData!.lang!.langText}</div>
        <div className="text-neutral-400">{langData!.region}</div>
      </div>
    </Button>
  );
};

export default LangCard;

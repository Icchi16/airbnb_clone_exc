"use client";

import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import clsx from "clsx";
import { PiMagnifyingGlassBold, PiSlidersHorizontal } from "react-icons/pi";

interface NavSearchProps {
  className: string;
}

const MobileNavSearch = ({ className }: { className: string }) => {
  return (
    <div className={clsx(className, "flex h-14 w-full justify-center px-6")}>
      <Button
        variant="light"
        className="h-full w-full justify-between rounded-full border bg-none px-3 py-0 pr-2 shadow-lg data-[hover=true]:bg-[#ffffff00] "
        startContent={
          <div className="flex items-center justify-center bg-white p-2 text-lg">
            <PiMagnifyingGlassBold />
          </div>
        }
        endContent={
          <div className="flex items-center justify-center rounded-full border bg-white p-3 text-sm">
            <PiSlidersHorizontal />
          </div>
        }
      >
        <div className="flex w-full flex-col items-start justify-center">
          <p className="font-semibold">Anywhere</p>
          <p className="text-xs text-gray-500">Any week &middot; Add guests</p>
        </div>
      </Button>
    </div>
  );
};

const DesktopNavSearch = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        className,
        "flex h-full cursor-pointer items-center rounded-full border px-2 shadow-sm transition-all hover:shadow-md",
      )}
    >
      <ButtonGroup className="h-full py-3">
        <Button
          disableRipple
          disableAnimation
          variant="light"
          className="font-semibold data-[hover=true]:bg-[#ffffff00]"
        >
          Anywhere
        </Button>
        <Divider orientation="vertical" />
        <Button
          disableRipple
          disableAnimation
          variant="light"
          className="font-semibold data-[hover=true]:bg-[#ffffff00]"
        >
          Any week
        </Button>
        <Divider orientation="vertical" />
        <Button
          disableRipple
          disableAnimation
          variant="light"
          className="pr-0 text-gray-500 data-[hover=true]:bg-[#ffffff00]"
          endContent={
            <div className="flex items-center justify-center rounded-full bg-rose-500 p-2 text-sm text-white">
              <PiMagnifyingGlassBold />
            </div>
          }
        >
          Add guests
        </Button>
      </ButtonGroup>
    </div>
  );
};

const NavSearch: React.FC<NavSearchProps> = ({ className }) => {
  return (
    <div className={clsx(className, "!flex items-end md:items-center")}>
      <MobileNavSearch className="md:hidden" />
      <DesktopNavSearch className="hidden md:block" />
    </div>
  );
};

export default NavSearch;

"use client";

import {
  Button,
  ButtonGroup,
  Divider,
  Input,
  Tab,
  Tabs,
} from "@nextui-org/react";
import clsx from "clsx";
import { useEffect, useRef, useState, Key, ReactNode } from "react";
import { PiMagnifyingGlassBold, PiSlidersHorizontal } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import NavModal from "./NavModal";
import NavSearchExpanded from "./NavSearchExpanded";

interface NavSearchProps {
  className: string;
}

export type CurrentTab = "stays" | "experiences" | "online-experience" | null;
export type SearchTab =
  | "where"
  | "when1-start"
  | "when1-end"
  | "when2"
  | "who"
  | null;

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
  const [isOpen, setIsOpen] = useState(false);
  const [isFocusOnWho, setIsFocusOnWho] = useState(false);
  const [currentTab, setCurrentTab] = useState<CurrentTab>(null);
  const [selectedTab, setSelectedTab] = useState<SearchTab>(null);
  const backgroundLayer = useRef(null);

  const tabsUnderline =
    "after:content-[''] after:bottom-0 after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-transparent data-[selected=true]:after:bg-black data-[selected=true]:after:w-full after:transition-all";

  const handleClickNavSearch = (event: React.MouseEvent) => {
    setIsOpen((prev) => !prev);
    const selectedId = event.currentTarget.getAttribute("id") as SearchTab;
    setSelectedTab(selectedId);
    if (selectedId === "who") {
      setIsFocusOnWho(true);
    } else {
      setIsFocusOnWho(false);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target === backgroundLayer.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [backgroundLayer]);

  return (
    <div className={clsx(className, "h-20")}>
      <div
        className={clsx(
          isOpen ? "translate-y-16 w-[55rem] h-16 " : "h-12 w-[22rem]",
          "absolute left-1/2 -translate-x-1/2 z-[9] cursor-pointer rounded-full border px-2 shadow-sm transition-all hover:shadow-md bg-white"
        )}
      >
        <ButtonGroup className="w-full h-full items-center justify-between py-2 ">
          <Button
            id="where"
            onClick={handleClickNavSearch}
            disableRipple
            disableAnimation
            variant="light"
            className="font-semibold data-[hover=true]:bg-[#ffffff00]"
          >
            Anywhere
          </Button>
          <Divider orientation="vertical" />
          <Button
            id="when1-start"
            onClick={handleClickNavSearch}
            disableRipple
            disableAnimation
            variant="light"
            className="font-semibold data-[hover=true]:bg-[#ffffff00]"
          >
            Any week
          </Button>
          <Divider orientation="vertical" />
          <Button
            id="who"
            onClick={handleClickNavSearch}
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
      {/* Expanded Nav Search */}
      <div
        className={clsx(
          isOpen ? "opacity-100 h-40" : "h-0 opacity-0 pointer-events-none",
          "absolute  inset-0 bg-white z-20 flex shrink-0 justify-center transition-all shadow-md"
        )}
      >
        <div className="flex flex-col basis-96">
          <Tabs
            variant="underlined"
            disableCursorAnimation
            className="h-20 flex justify-center items-center"
            classNames={{
              tab: "px-0",
              tabList: "gap-x-8",
              tabContent: "text-lg",
            }}
            onSelectionChange={(key) => {
              setCurrentTab(key as CurrentTab);
            }}
          >
            <Tab key="stays" title={"Stays"} className={tabsUnderline} />
            <Tab
              key="experiences"
              title={"Experiences"}
              className={tabsUnderline}
            />
            <Tab
              key="online-experiences"
              title={"Online Experiences"}
              className={tabsUnderline}
            />
          </Tabs>
          <div className="flex justify-center items-start cursor-pointer">
            <div
              className={clsx(
                isOpen ? "top-20" : "top-4 w-96",
                "transition-all"
              )}
            >
              <NavSearchExpanded />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={backgroundLayer}
        className={clsx(
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "absolute top-20 left-0 h-screen w-screen bg-neutral-500 bg-opacity-40 z-[6]"
        )}
      />
    </div>
  );
};

const NavSearch: React.FC<NavSearchProps> = ({ className }) => {
  return (
    <div className={clsx(className, "!flex items-end md:items-center")}>
      <MobileNavSearch className="md:hidden" />
      <DesktopNavSearch className="hidden md:block h-full" />
    </div>
  );
};

export default NavSearch;

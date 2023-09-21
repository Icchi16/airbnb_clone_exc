"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { CurrentTab, SearchTab } from "./NavSearch";
import NavModal from "./NavModal";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

interface NavSearchExpandedProps {
  currentTab: SearchTab;
  isOpen: boolean;
  currentProductTab: CurrentTab;
}

interface RegionMap {
  name: string;
  value: any;
  id: any;
  map: string;
}

const NavSearchExpanded: React.FC<NavSearchExpandedProps> = ({
  currentTab,
  isOpen,
  currentProductTab,
}) => {
  const regionMaps: RegionMap[] = [
    {
      id: "flexible",
      value: "flexible",
      name: "I'm flexible",
      map: "/navSearch/world.jpg",
    },
    {
      id: "europe",
      value: "europe",
      name: "Europe",
      map: "/navSearch/europe.jpg",
    },
    {
      id: "korea",
      value: "korea",
      name: "South Korea",
      map: "/navSearch/korea.jpg",
    },
    {
      id: "australia",
      value: "australia",
      name: "Australia",
      map: "/navSearch/australia.jpg",
    },
    {
      id: "thailand",
      value: "thailand",
      name: "Thailand",
      map: "/navSearch/thailand.jpg",
    },
    {
      id: "usa",
      value: "usa",
      name: "United States",
      map: "/navSearch/usa.jpg",
    },
  ];

  const {} = useForm();
  const [isWrapperFocused, setIsWrapperFocused] = useState(false);
  const [isWhoFocused, setIsWhoFocused] = useState(false);
  const wrapperRef = useRef(null);
  const tabWhoRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState<SearchTab>(null);

  const handelClickWrapper = (event: React.MouseEvent) => {
    setIsWrapperFocused(true);
  };

  const handleClick = (event: React.MouseEvent) => {
    const tabId = event.currentTarget.getAttribute("id");
    setSelectedTab(tabId as SearchTab);
  };

  useEffect(() => {
    setSelectedTab(currentTab);
    setIsWrapperFocused(isOpen);
  }, [currentTab, isOpen]);

  useEffect(() => {
    if (currentProductTab === "stays") {
      setSelectedTab("stays-start");
    } else if (currentProductTab === "experiences") {
      setSelectedTab("experience-date");
    }
  }, [currentProductTab]);

  useEffect(() => {
    const checkWrapperFocus = (event: MouseEvent) => {
      if (event.currentTarget !== wrapperRef.current) {
        setIsWrapperFocused(false);
      } else {
        setIsWhoFocused(true);
      }
    };
    document.addEventListener("mouseup", checkWrapperFocus);
    return () => {
      document.removeEventListener("mouseup", checkWrapperFocus);
    };
  }, [wrapperRef]);

  useEffect(() => {
    const checkTabWhoFocus = (event: MouseEvent) => {
      if (event.currentTarget !== tabWhoRef.current) {
        setIsWhoFocused(false);
      }
    };
    document.addEventListener("mouseup", checkTabWhoFocus);
    return () => {
      document.removeEventListener("mouseup", checkTabWhoFocus);
    };
  }, [tabWhoRef]);

  return (
    <div className="h-20">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        onClick={handelClickWrapper}
        className={clsx(
          isWrapperFocused && "bg-neutral-200",
          isOpen ? "w-[54rem]" : "w-96 ",
          "h-16 absolute left-1/2 -translate-x-1/2 outline outline-1 outline-neutral-300 rounded-full flex items-center justify-end transition-all"
        )}
      >
        <span
          className={clsx(
            isWrapperFocused ? "opacity-100" : "opacity-0",

            selectedTab === "where" ? "w-80 left-0" : "",
            selectedTab === "stays-start" ? "left-80 w-36" : "",
            selectedTab === "stays-end" ? "left-[29rem] w-36" : "",
            selectedTab === "experience-date" ? "left-80 w-72" : "",
            selectedTab === "who" ? "left-[38rem] w-64" : "",
            "absolute bg-white inset-y-0 rounded-full transition-all shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]"
          )}
        ></span>

        <div
          tabIndex={1}
          id="where"
          onClick={handleClick}
          className={clsx(isOpen ? "w-80" : "flex-1", "h-full relative flex")}
        >
          <div className="absolute text-xs top-4 left-8 font-semibold">
            Where
          </div>
          <input
            id="where"
            name="where"
            type="text"
            placeholder="Search destinations"
            className="!outline-none h-full w-full bg-transparent rounded-full px-8 pb-2 pt-6 text-sm cursor-pointer"
          />
          <NavModal
            isOpen={selectedTab === "where" && isWrapperFocused}
            currentTab={selectedTab}
            position="left"
          >
            <div className="flex flex-col gap-y-6">
              <div className="font-semibold text-sm">Search by region</div>
              <div className="grid grid-cols-[repeat(3,8rem)] gap-x-3 gap-y-8">
                {regionMaps.map((map) => (
                  <div key={map.id} className="flex flex-col gap-y-2">
                    <Image
                      as={NextImage}
                      src={map.map}
                      width={400}
                      height={400}
                      alt={map.id}
                      className="rounded-xl border border-neutral-300 hover:border-black transition-all"
                    />
                    <div className="text-sm">{map.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </NavModal>
        </div>

        <div className="h-full">
          <div
            className={clsx(
              currentProductTab === "stays" ? "block" : "hidden",
              "flex h-full"
            )}
          >
            <div
              tabIndex={2}
              id="stays-start"
              onClick={handleClick}
              className={clsx(
                isOpen ? "w-36" : "hidden",
                "h-full relative cursor-pointer"
              )}
            >
              <div className="absolute text-xs top-4 left-8 font-semibold">
                Check in
              </div>
              <div className="h-full w-full bg-transparent rounded-full px-8 pb-2 pt-7 text-sm flex items-center text-neutral-400">
                Add dates
              </div>
            </div>
            <div
              tabIndex={3}
              id="stays-end"
              onClick={handleClick}
              className={clsx(
                isOpen ? "w-36" : "hidden",
                "h-full relative cursor-pointer"
              )}
            >
              <div className="absolute text-xs top-4 left-8 font-semibold">
                Check out
              </div>
              <div className="h-full w-max bg-transparent rounded-full px-8 pb-2 pt-7 text-sm flex items-center text-neutral-400">
                Add dates
              </div>
            </div>
          </div>
          <div
            tabIndex={4}
            id="experience-date"
            onClick={handleClick}
            className={clsx(
              currentProductTab === "experiences" ? "block" : "hidden",
              isOpen ? "w-72" : "hidden",
              "h-full relative cursor-pointer"
            )}
          >
            <div className="absolute text-xs top-4 left-8 font-semibold">
              Date
            </div>
            <div className="h-full w-max bg-transparent rounded-full px-8 pb-2 pt-7 text-sm flex items-center text-neutral-400">
              Add dates
            </div>
          </div>
          <NavModal
            isOpen={
              (selectedTab === "stays-start" ||
                selectedTab === "stays-end" ||
                selectedTab === "experience-date") &&
              isWrapperFocused
            }
            position="center"
            currentTab={selectedTab}
          >
            This is calendar
          </NavModal>
        </div>

        <div
          onClick={(event) => {
            setIsWhoFocused(true);
            handleClick(event);
          }}
          ref={tabWhoRef}
          id="who"
          tabIndex={5}
          className={clsx(
            isOpen ? "w-64" : "",
            "h-full relative cursor-pointer flex items-center justify-between pr-2"
          )}
        >
          <div className="flex flex-col">
            <div className="absolute text-xs top-4 left-8 font-semibold">
              Who
            </div>
            <div className="h-full w-max bg-transparent rounded-full px-8 pb-2 pt-7 text-sm flex items-center text-neutral-400">
              Add guest
            </div>
          </div>
          <button
            type="submit"
            className={clsx(
              isWhoFocused ? "w-[6.5rem] gap-x-2" : "w-12 gap-x-0",
              "flex items-center justify-center h-12 bg-gradient-to-r from-rose-500 to-pink-700 rounded-full text-white text-lg font-semibold transition-all"
            )}
          >
            <FaSearch />
            <p
              className={clsx(
                isWhoFocused ? "w-[3.8rem] opacity-100" : "w-0 opacity-0",
                "overflow-hidden transition-width"
              )}
            >
              Search
            </p>
          </button>
          <NavModal
            isOpen={selectedTab === "who" && isWrapperFocused}
            position="right"
            currentTab={selectedTab}
          >
            This is who
          </NavModal>
        </div>
      </form>
    </div>
  );
};

export default NavSearchExpanded;

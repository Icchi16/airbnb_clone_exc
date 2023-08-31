"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { ScrollableTabs } from "../temps/temp";
import { Key, useLayoutEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import clsx from "clsx";

interface ScrollableTabProps {
  data: ScrollableTabs;
  id: string;
  navigateStyle?: string;
}

const ScrollableTab: React.FC<ScrollableTabProps> = ({
  id,
  data,
  navigateStyle,
}) => {
  const tabs = useRef<HTMLElement | null>(null);
  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);

  const manageArrows = () => {
    if (tabs.current) {
      if (tabs.current.scrollLeft >= 10) {
        setLeftArrow((prev) => (prev = true));
      } else {
        setLeftArrow((prev) => (prev = false));
      }

      const maxScrollValue =
        tabs.current.scrollWidth - tabs.current.clientWidth - 10;

      if (tabs.current.scrollLeft >= maxScrollValue) {
        setRightArrow((prev) => (prev = false));
      } else {
        setRightArrow((prev) => (prev = true));
      }
    }
  };

  const handleRightArrow = (event: React.MouseEvent) => {
    event.preventDefault();
    if (tabs.current) {
      tabs.current.scrollLeft += 60;
      manageArrows();
    }
  };

  const handleLeftArrow = (event: React.MouseEvent) => {
    event.preventDefault();
    if (tabs.current) {
      tabs.current.scrollLeft -= 60;
      manageArrows();
    }
  };

  useLayoutEffect(() => {
    const tabEl = tabs.current;
    manageArrows();
    tabEl?.addEventListener("scroll", manageArrows);
    window.addEventListener("resize", manageArrows);

    return () => {
      tabEl?.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", manageArrows);
    };
  }, [tabs.current, manageArrows]);

  return (
    <>
      <div
        className={clsx(
          leftArrow && "!block",
          navigateStyle,
          "hidden absolute left-2 z-50 md:left-6 lg:left-16 text-2xl bg-gradient-to-l from-transparent from-0% to-gray-100 pr-2 to-40%"
        )}
        onClick={handleLeftArrow}
      >
        <div onClick={handleRightArrow} className="cursor-pointer">
          <BsChevronCompactLeft />
        </div>
      </div>
      <div
        className={clsx(
          rightArrow && "!block",
          navigateStyle,
          "hidden absolute right-2 z-50 md:right-6 lg:right-16 text-2xl bg-gradient-to-r from-transparent from-0% to-gray-100 pl-2 to-40%"
        )}
      >
        <div onClick={handleRightArrow} className="cursor-pointer">
          <BsChevronCompactRight />
        </div>
      </div>
      <Tabs
        aria-label="Options"
        defaultSelectedKey={data[0].text as Key}
        variant="underlined"
        ref={tabs}
        classNames={{
          tabList: clsx(
            id,
            "gap-6 relative rounded-none p-0 border-b border-divider scroll-smooth"
          ),
          cursor: "w-full bg-black",
          tab: "max-w-fit px-0 h-12",
          tabContent:
            "group-data-[selected=true]:text-black group-data-[hover-unselected=true]:text-black",
        }}
      >
        {data.map((tab) => (
          <Tab
            key={tab.id}
            title={
              <div className="flex items-center space-x-2">{tab.text}</div>
            }
            onClick={tab.onClick ?? (() => {})}
          >
            {tab.content}
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default ScrollableTab;

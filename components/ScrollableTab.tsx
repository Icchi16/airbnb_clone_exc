"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { ScrollableTabs } from "../temps/footerTemp";
import { Key, useLayoutEffect, useRef, useState, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import clsx from "clsx";
import queryString from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

interface ScrollableTabProps {
  data: ScrollableTabs;
  id: string | number;
  filterQuery: boolean;
  scrollWidthPerClick: number;
  style?: {
    icons?: string;
    label?: string;
    tab?: string;
    tabList?: string;
    leftArrow?: string;
    rightArrow?: string;
    tabContent?: string;
  };
}

const ScrollableTab: React.FC<ScrollableTabProps> = ({
  id,
  data,
  filterQuery,
  scrollWidthPerClick,
  style,
}) => {
  const tabs = useRef<HTMLElement | null>(null);
  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

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
      tabs.current.scrollLeft += scrollWidthPerClick;
      manageArrows();
    }
  };

  const handleLeftArrow = (event: React.MouseEvent) => {
    event.preventDefault();
    if (tabs.current) {
      tabs.current.scrollLeft -= scrollWidthPerClick;
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

  const handleFilter = useCallback((query: ScrollableTabProps["id"]) => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: query,
    };

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, []);

  return (
    <div className="flex flex-col relative ">
      <div
        className={clsx(
          leftArrow && "!block",
          "hidden absolute -left-2 z-10 pointer-events-none"
        )}
      >
        <div
          className={clsx(
            style?.leftArrow,
            "flex items-center bg-gradient-to-l from-transparent from-0%"
          )}
        >
          <div
            onClick={handleLeftArrow}
            className="text-2xl h-full flex items-center cursor-pointer pointer-events-auto"
          >
            <BsChevronCompactLeft />
          </div>
          <div className="w-10 h-full pointer-events-none" />
        </div>
      </div>

      <div
        className={clsx(
          rightArrow && "!block",
          "hidden absolute -right-2 z-10 pointer-events-none"
        )}
      >
        <div
          className={clsx(
            style?.rightArrow,
            "flex flex-row-reverse items-center bg-gradient-to-r from-transparent from-0%"
          )}
        >
          <div
            onClick={handleRightArrow}
            className="text-2xl h-full flex items-center cursor-pointer pointer-events-auto"
          >
            <BsChevronCompactRight />
          </div>
          <div className="w-10 h-full pointer-events-none" />
        </div>
      </div>

      <Tabs
        aria-label="Options"
        defaultSelectedKey={data[0].text as Key}
        variant="underlined"
        disableCursorAnimation={false}
        disableAnimation={false}
        ref={tabs}
        className="pointer-events-auto"
        classNames={{
          tabList: clsx(
            style?.tabList,
            "w-full gap-6 relative rounded-none p-0 border-b border-divider scroll-smooth h-12 pointer-events-auto"
          ),
          cursor: "w-full bg-black",
          tab: clsx(style?.tab, "h-full max-w-fit px-0 "),
          tabContent: clsx(
            style?.tabContent,
            "group-data-[selected=true]:text-black group-data-[hover-unselected=true]:text-black pointer-events-auto"
          ),
        }}
        onSelectionChange={(key) => {
          filterQuery ? handleFilter(key) : () => {};
        }}
      >
        {data.map((tab) => (
          <Tab
            key={tab.id}
            title={
              <div className="flex flex-col justify-center items-center space-y-2 ">
                {tab.icon && <div>{tab.icon}</div>}
                <div>{tab.text}</div>
              </div>
            }
          >
            {tab.content}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default ScrollableTab;

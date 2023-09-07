"use client";

import ScrollableTab from "@/components/ScrollableTab";
import { navCategory } from "@/temps/navTemp";
import { Button, Switch } from "@nextui-org/react";
import clsx from "clsx";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { useState, useEffect } from "react";

const Catagories = () => {
  const [onScroll, setOnScroll] = useState(false);
  const onScrollHandler = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 60) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <>
      <div
        className={clsx(
          onScroll ? "py-0" : "py-5",
          "grid gap-4 grid-cols-[minmax(200px,_1fr)_minmax(auto,min-content)] transition-all duration-[30ms] ease-in-out"
        )}
      >
        <div className="flex flex-col">
          <ScrollableTab
            filterQuery={true}
            id="navCategories"
            data={navCategory}
            scrollWidthPerClick={500}
            style={{
              tabList: "!h-20 !gap-9",
              leftArrow: "h-20 to-white to-60%",
              rightArrow: "h-20 to-white to-60%",
              tabContent: "text-xs",
            }}
          />
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <Button
            startContent={<PiSlidersHorizontalBold />}
            variant="bordered"
            size="md"
            className="text-xs px-2 h-12"
          >
            Filters
          </Button>
          <Button className="text-xs p-0 h-12" variant="bordered">
            <Switch
              color="default"
              size="sm"
              className="flex-row-reverse"
              classNames={{ wrapper: "mx-0", base: "px-2 h-full" }}
            >
              <div className="text-xs mr-3">Display total before taxes</div>
            </Switch>
          </Button>
        </div>
      </div>
      <div
        className={clsx(
          onScroll ? "border-b shadow-xl" : "border-none",
          "absolute inset-0 -bottom-[1px] -z-10 bg-white"
        )}
      />
    </>
  );
};

export default Catagories;

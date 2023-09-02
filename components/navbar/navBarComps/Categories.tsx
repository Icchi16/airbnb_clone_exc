"use client";

import ScrollableTab from "@/components/ScrollableTab";
import { footerCategory } from "@/temps/footerTemp";
import { navCategory } from "@/temps/navTemp";
import { Button, Switch } from "@nextui-org/react";
import { PiSlidersHorizontalBold } from "react-icons/pi";

const Catagories = () => {
  return (
    <div className="md:pt-5 grid gap-4 grid-cols-[minmax(200px,_1fr)_minmax(auto,min-content)]">
      <div className="flex flex-col">
        <ScrollableTab
          filterQuery={true}
          id="navCategories"
          data={navCategory}
          scrollWidthPerClick={1000}
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
          className="text-xs !py-5 !px-3"
        >
          Filters
        </Button>
        <Button className="text-xs !py-5 !px-3" variant="bordered">
          <Switch className="flex-row-reverse" classNames={{ wrapper: "mx-0" }}>
            <div className="text-xs mr-3">Display total before taxes</div>
          </Switch>
        </Button>
      </div>
    </div>
  );
};

export default Catagories;

import { Switch } from "@nextui-org/react";
import { BsTranslate } from "react-icons/bs";
import LangCard from "./LangCard";
import { LocaleProps } from "@/temps/localeTemp";
import { langsTemp } from "@/temps/localeTemp";
import { filter, indexOf } from "ramda";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const Lang = () => {
  const langs = filter((lang) => {
    if (lang.region && lang.lang) {
      return true;
    } else {
      return false;
    }
  }, langsTemp);

  const suggestedLangs = [langs[0], langs[1]];

  const [selectedIndex, setSelectedIndex] = useState<string>("0");
  const clickHandler = (event: React.MouseEvent) => {
    const clickedIndex = event.currentTarget.getAttribute("id");
    setSelectedIndex(clickedIndex!);
  };

  return (
    <div className="flex flex-col gap-y-12">
      <div className="mt-6 bg-neutral-100 rounded-medium flex gap-x-6 w-fit justify-between items-center p-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-3 text-lg">
            <div>Translation</div>
            <BsTranslate />
          </div>
          <div className="text-neutral-500">
            Automatically translate descriptions and reviews to English.
          </div>
        </div>
        <Switch
          defaultSelected
          thumbIcon={({ isSelected, className }) =>
            isSelected ? <FaCheck className={className} /> : <div></div>
          }
          size="lg"
          classNames={{
            wrapper: "group-data-[selected=true]:bg-black bg-neutral-400",
          }}
        />
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="text-xl font-bold">Suggested languages and regions</div>
        <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4">
          {suggestedLangs.map((lang) => (
            <LangCard key={lang.id} isActive={false} langData={lang} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="text-xl font-bold">Choose a language and region</div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 overflow-scroll">
          {langs.map((lang, index) => (
            <LangCard
              index={index.toString()}
              isActive={index.toString() === selectedIndex}
              onClick={clickHandler}
              key={lang.id}
              langData={lang}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lang;

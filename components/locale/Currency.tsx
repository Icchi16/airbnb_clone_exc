import { filter } from "ramda";
import CurrencyCard from "./CurrencyCard";
import { langsTemp } from "@/temps/localeTemp";
import { useState } from "react";

const Currency = () => {
  const currencies = filter((lang) => {
    if (lang.currency) {
      return true;
    } else {
      return false;
    }
  }, langsTemp);

  const [selectedIndex, setSelectedIndex] = useState<string>("0");
  const clickHandler = (event: React.MouseEvent) => {
    const clickedIndex = event.currentTarget.getAttribute("id");
    setSelectedIndex(clickedIndex!);
  };

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-y-6">
        <div className="text-xl font-bold">Choose a currency</div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 overflow-y-auto">
          {currencies.map((currency, index) => (
            <CurrencyCard
              index={index.toString()}
              isActive={index.toString() === selectedIndex}
              onClick={clickHandler}
              key={currency.id}
              currencyData={currency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currency;

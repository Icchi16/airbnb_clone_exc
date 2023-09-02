import clsx from "clsx";
import ScrollableTab from "@/components/ScrollableTab";
import { footerCategory } from "@/temps/footerTemp";
import { navCategory } from "@/temps/navTemp";

interface QuickFooterProps {
  className: string;
}

const FooterCategories: React.FC<QuickFooterProps> = ({ className }) => {
  return (
    <div className={clsx(className, "bg-inherit")}>
      <h2 className="mb-2 text-xl font-semibold">
        Inspiration for future getaways
      </h2>
      <div className="flex w-full flex-col">
        <ScrollableTab
          filterQuery={false}
          data={footerCategory}
          scrollWidthPerClick={60}
          id="footerQuickLink"
          style={{
            leftArrow: "h-12 to-gray-100 to-50%",
            rightArrow: "h-12 to-gray-100 to-50%",
          }}
        />
      </div>
    </div>
  );
};

export default FooterCategories;

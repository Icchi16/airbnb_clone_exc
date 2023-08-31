import clsx from "clsx";
import ScrollableTab from "@/components/ScrollableTab";
import { footerCategory } from "@/temps/temp";

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
          data={footerCategory}
          id="footerQuickLink"
          navigateStyle="py-3"
        />
      </div>
    </div>
  );
};

export default FooterCategories;

import clsx from "clsx";
import FooterCategories from "./footerComps/FooterCategories";
import QuickLinkBox from "./footerComps/QuickLinkBox";
import Image from "next/image";
import {
  QuickLinkProps,
  quickLinkAirbnb,
  quickLinkHosting,
  quickLinkSupport,
} from "@/temps/footerTemp";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import LowerFooter from "./footerComps/LowerFooter";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const quickLinkBoxClassName =
    "py-6 md:py-12 flex-1 border-b md:border-b-none";
  const quickLinkBoxes = [quickLinkSupport, quickLinkHosting, quickLinkAirbnb];

  return (
    <footer className={clsx(className, "bg-gray-100 px-0")}>
      <FooterCategories className="border-b px-6 py-12 md:px-10 xl:px-20" />
      <div className="px-6 md:px-10 xl:px-20">
        <div className="flex flex-col md:flex-row border-b">
          {quickLinkBoxes.map((quickLinkBox) => (
            <QuickLinkBox
              key={quickLinkBox.id}
              links={quickLinkBox.links as QuickLinkProps[]}
              title={quickLinkBox.title}
              className={quickLinkBoxClassName}
            />
          ))}
        </div>
        <LowerFooter />
      </div>
    </footer>
  );
};

export default Footer;

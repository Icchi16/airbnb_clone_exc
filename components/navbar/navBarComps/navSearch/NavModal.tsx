import clsx from "clsx";
import { SearchTab } from "./NavSearch";
import { ReactNode } from "react";

interface NavModalProps {
  isOpen: boolean;
  currentTab: SearchTab;
  children?: ReactNode;
  position?: "left" | "center" | "right";
  fullWidth?: boolean;
}

const NavModal: React.FC<NavModalProps> = ({
  isOpen,
  currentTab,
  children,
  position,
}) => {
  return (
    <div
      className={clsx(
        isOpen ? "block" : "hidden",
        position === "left" ? "left-0" : "",
        position === "center" ? "inset-x-0" : "",
        position === "right" ? "right-0" : "",
        "absolute z-50 top-[3.5rem]"
      )}
    >
      <div className="h-0" />
      <div className="mt-6 bg-white shadow-lg rounded-[2rem] px-10 py-11">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default NavModal;

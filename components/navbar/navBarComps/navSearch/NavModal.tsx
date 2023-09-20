import clsx from "clsx";
import { SearchTab } from "./NavSearch";

interface NavModalProps {
  isOpen: boolean;
  currentTab: SearchTab;
}

const NavModal: React.FC<NavModalProps> = ({ isOpen, currentTab }) => {
  return (
    <div
      className={clsx(
        isOpen ? "block" : "hidden",
        currentTab === "where" ? "-left-8" : "",
        "absolute z-50  "
      )}
    >
      <div className="h-0" />
      <div className="mt-6 bg-white shadow-lg rounded-full p-8">
        <div>This is Nav Modal</div>
      </div>
    </div>
  );
};

export default NavModal;

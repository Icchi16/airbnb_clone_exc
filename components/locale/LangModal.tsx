"use client";

import { ScrollableTabs } from "@/temps/footerTemp";
import { UseDisclosureProps } from "@nextui-org/react";
import ScrollableTab from "../ScrollableTab";
import Lang from "./Lang";
import Currency from "./Currency";
import Modal from "../Modal";

interface LangModalProps extends UseDisclosureProps {}

export const langTabData: ScrollableTabs = [
  {
    id: "langRegion",
    text: "Language and region",
    content: <Lang />,
  },
  {
    id: "currency",
    text: "Currency",
    content: <Currency />,
  },
];

const LangModal: React.FC<LangModalProps> = ({ isOpen, onChange }) => {
  return (
    <Modal isOpen={isOpen} onChange={onChange} size="5xl">
      <div className="grid grid-cols-1 -mt-6 h-[52rem]">
        <ScrollableTab
          id="langTab"
          data={langTabData}
          filterQuery={false}
          scrollWidthPerClick={20}
        />
      </div>
    </Modal>
  );
};

export default LangModal;

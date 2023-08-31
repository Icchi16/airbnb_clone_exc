"use client";

import { QuickLinkProps } from "@/temps/temp";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/listbox";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

interface QuickLinkBoxProps {
  className?: string;
  links: QuickLinkProps[];
  title?: string;
}

const QuickLinkBox: React.FC<QuickLinkBoxProps> = ({
  className,
  links,
  title,
}) => {
  const router = useRouter();
  router;

  return (
    <div className={clsx(className, "")}>
      <div className="flex">
        <Listbox
          className="p-0"
          itemClasses={{
            wrapper: "px-o m-0",
            description: "px-0 m-0",
            base: "m-0 px-0 data-[hover=true]:bg-color-[#ffffff00]",
            title: "px-0",
          }}
          variant="flat"
          aria-label="Listbox menu with sections"
        >
          <ListboxSection
            title={title}
            classNames={{
              heading: "px-0 text-sm text-black font-semibold",
              base: "m-0",
            }}
          >
            {links.map((quickLink) => (
              <ListboxItem key={quickLink.id}>
                <Link
                  underline="hover"
                  href={quickLink.url}
                  as={NextLink}
                  className="text-sm text-black underline-offset-2"
                >
                  {quickLink.text}
                </Link>
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
      </div>
    </div>
  );
};

export default QuickLinkBox;

"use client";

import clsx from "clsx";
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  toggle,
  useDisclosure,
} from "@nextui-org/react";
import { PiGlobeSimple } from "react-icons/pi";
import { BiMenu, BiSolidUserCircle } from "react-icons/bi";
import AuthModal from "@/components/auth/AuthModal";
import LangModal from "@/components/locale/LangModal";

interface UserInterfaceProps {
  className: string;
}

const UserInterface: React.FC<UserInterfaceProps> = ({ className }) => {
  const dropDownItems = () => {
    const className = "rounded-none py-2 px-4 data-[hover=true]:bg-neutral-100";
    return [
      {
        id: 1,
        key: "signup",
        label: <div className="font-semibold">Signup</div>,
        className: clsx(className, ""),
        onClick: onAuthOpen,
      },
      {
        id: 2,
        key: "login",
        label: <div>Login</div>,
        className: clsx(className, ""),
        onClick: onAuthOpen,
      },
      {
        id: 3,
        key: "divider",
        label: <Divider></Divider>,
        className: clsx(className, "!px-0 pointer-events-none"),
      },
      {
        id: 4,
        key: "host",
        label: <div>Airbnb your home</div>,
        className: clsx(className, ""),
        onClick: () => {},
      },
      {
        id: 5,
        key: "help",
        label: <div>Help</div>,
        className: clsx(className, ""),
        onClick: () => {},
      },
    ];
  };

  const {
    isOpen: isAuthOpen,
    onOpen: onAuthOpen,
    onOpenChange: onAuthChange,
  } = useDisclosure({id:"authModal"});

  const {
    isOpen: isLangOpen,
    onOpen: onLangOpen,
    onOpenChange: onLangChange,
  } = useDisclosure({id:"langModal"});

  return (
    <>
      <div className={clsx(className, "items-center justify-end md:!flex")}>
        <Button variant="light" className="rounded-full text-sm">
          Airbnb your home
        </Button>
        <Button
          isIconOnly
          variant="light"
          className="rounded-full text-xl"
          onClick={onLangOpen}
        >
          <PiGlobeSimple />
        </Button>
        <Dropdown
          placement="bottom-end"
          containerPadding={0}
          crossOffset={0}
          className="overflow-hidden px-0 py-1"
        >
          <DropdownTrigger>
            <Button
              disableRipple
              className="user-button ml-2 flex min-w-0 items-center justify-center gap-1 rounded-full border bg-opacity-0 px-2 pr-1 text-gray-500 !transition-all hover:shadow-md data-[hover=true]:bg-[#ffffff00]"
            >
              <BiMenu className="text-xl" />
              <BiSolidUserCircle className="!max-w-full text-3xl" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu className="w-56 px-0" aria-label="What">
            {dropDownItems().map((item) => (
              <DropdownItem
                key={item.key}
                className={item.className}
                onClick={item.onClick}
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <LangModal isOpen={isLangOpen} onChange={onLangChange} />
      <AuthModal isOpen={isAuthOpen} onChange={onAuthChange} />
    </>
  );
};

export default UserInterface;

"use client";

import {
  ModalVariantProps,
  Modal as NextModal,
  UseDisclosureProps,
} from "@nextui-org/react";
import { extend } from "dayjs";
import { ReactNode } from "react";
import { ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { MdClose } from "react-icons/md";
import clsx from "clsx";

interface ModalProps extends UseDisclosureProps {
  children: ReactNode;
  title?: string;
  size?: ModalVariantProps["size"];
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  isOpen,
  onChange,
  size,
}) => {
  return (
    <>
      <NextModal
        placement="center"
        size={size}
        isOpen={isOpen}
        onOpenChange={onChange}
        hideCloseButton
        className="!m-0"
        classNames={{
          header: clsx(title && "border-b"),
          body: "p-6",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center items-center gap-1 relative h-16">
                <button
                  title="close"
                  type="button"
                  onClick={onClose}
                  className="absolute left-4 w-8 h-8 p-2 rounded-full overflow-hidden flex justify-center items-center text-gray-600 hover:bg-neutral-200"
                >
                  <MdClose className="text-center" />
                </button>
                {title}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              {/* <ModalFooter></ModalFooter> */}
            </>
          )}
        </ModalContent>
      </NextModal>
    </>
  );
};

export default Modal;

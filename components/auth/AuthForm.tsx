"use client";

import {
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  UseDisclosureProps,
} from "@nextui-org/react";
import Modal from "../Modal";
import SocialAuthBtn from "./SocialAuthBtn";

interface AuthFormProps extends UseDisclosureProps {}

const AuthForm: React.FC<AuthFormProps> = ({ isOpen, onChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      size="xl"
      title="Log in or sign up"
    >
      <div className="flex flex-col gap-y-4">
        <div className="text-xl font-semibold">Welcome to Airbnb</div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <div className="border border-neutral-400 rounded-xl overflow-hidden">
              <Select
                radius="none"
                label="Country/Region"
                defaultSelectedKeys={["test"]}
                selectionMode="single"
                variant="flat"
                className="border-b"
              >
                <SelectItem key="test" value="test">
                  testing
                </SelectItem>
              </Select>
              <Input radius="none" type="tel" label="Phone number" />
            </div>
            <p className="text-tiny">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <a href="" className="underline underline-offset-2">
                Privacy Policy
              </a>
            </p>
          </div>
          <Button color="danger" size="lg">
            Continue
          </Button>
        </div>
        <div className="flex flex-nowrap items-center ">
          <Divider className="flex-1" />
          <p className="z-10 bg-background px-4 text-xs">or</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-y-3">
          <SocialAuthBtn authType="facebook" />
          <SocialAuthBtn authType="google" />
          <SocialAuthBtn authType="apple" />
          <SocialAuthBtn authType="email" />
        </div>
      </div>
    </Modal>
  );
};

export default AuthForm;

"use client";

import { Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { PiCurrencyDollar, PiGlobe } from "react-icons/pi";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const LowerFooter = () => {
  const lowerFooter = [
    { id: "terms", text: "Terms", url: "/terms" },
    { id: "sitemap", text: "Sitemap", url: "/sitemap" },
    { id: "privacy", text: "Privacy", url: "/privacy" },
    {
      id: "privacyChoice",
      text: (
        <div className="flex space-x-1 items-center">
          <span>Your Privacy Choices</span>
          <span>
            <Image
              alt="ccpa"
              src="/privacyoptions.svg"
              width={20}
              height={20}
            />
          </span>
        </div>
      ),
      url: "/privacy",
    },
  ];

  return (
    <div className="py-6 text-sm">
      <div className="w-full flex flex-col-reverse xl:flex-row md:items-center xl:justify-between gap-y-4">
        <div className="flex justify-start md:justify-center md:flex-col md:items-center xl:flex-row space-x-2">
          <div className="flex space-x-2 items-center">
            <div>&copy; 2023 Airbnb,Inc.</div>
            {<div className="md:hidden xl:block">&middot;</div>}
          </div>
          <div className="flex items-center space-x-2 text-neutral-600">
            {lowerFooter.map((link, index) => (
              <div key={link.id} className="flex space-x-2">
                <Link
                  as={NextLink}
                  href={link.url ?? ""}
                  underline="hover"
                  className="text-sm text-inherit underline-offset-2"
                >
                  {link.text}
                </Link>
                {index !== lowerFooter.length - 1 && <div>&middot;</div>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-12 xl:space-x-4">
          <div className="flex space-x-2">
            <div className="flex space-x-1 items-center hover:underline underline-offset-2 font-semibold cursor-pointer">
              {/* Need to change to local */}
              <PiGlobe className="text-xl" />
              <span>English(US)</span>
            </div>
            <div className="flex space-x-1 items-center hover:underline underline-offset-2 font-semibold cursor-pointer">
              {/* Need to change to local */}
              <PiCurrencyDollar className="text-xl" />
              <span>USD</span>
            </div>
          </div>
          <div className="items-center space-x-3 hidden md:flex font-semibold">
            <NextLink href="/facebook" className="text-xl">
              <FaFacebookSquare />
            </NextLink>
            <NextLink href="/twitter" className="text-xl">
              <FaTwitterSquare />
            </NextLink>
            <NextLink href="/instagram" className="text-xl">
              <FaInstagramSquare />
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;

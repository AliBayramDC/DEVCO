"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="
    flex
    items-center
    md:justify-end
    md:space-x-10
    sm:px-10

    "
    >
      <div className="flex xl:space-x-6">
        {/* <Link
          href={"/loan"}
          className="
            xl:flex
            items-center
            hidden

            "
        >
          <div className="font-light flex whitespace-nowrap hover:text-[#6c6596]">
            Kredit Hesablanması
          </div>
        </Link> */}
        <Link
          href={"/haqqimizda"}
          className="
            xl:flex
            items-center
            hidden

            "
        >
          <div className="font-light flex hover:text-[#6c6596]">Haqqımızda</div>
        </Link>
      </div>
      <div className="flex lg:space-x-4 items-center">
        <Link href={"/contact"}>
          <Button
            className="
                hidden
                text-[#565add]
                text-md
                font-light
                bg-[#eff0ff]
                p-6
                rounded-[40px]
                hover:scale-110
                duration-300
                shadow-md
                md:hidden
                lg:flex
                hover:shadow-indigo-300
                "
          >
            Müraciət Et
          </Button>
        </Link>
      </div>
      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
            bg-[#565add]
            p-3
            rounded-full
            xl:hidden
            "
        >
          <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="bg-[#eff0ff] p-3 rounded-full xl:hidden"
        >
          <AlignJustify className="h-6 w-6 text-[#565add] items-center justify-center rounded-full" />
        </div>
      )}
      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;

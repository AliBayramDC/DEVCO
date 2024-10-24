"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
  AlignJustify,
  BarChart,
  Building2,
  Camera,
  ChevronDown,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Info,
  LibrarySquare,
  LifeBuoy,
  Lock,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
} from "lucide-react";

interface MenuItem {
  title: string;
  menu: string;
  options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
  {
    title: "Xidmətlərimiz",
    menu: "xidmətlərimiz",
    options: [
      {
        label: "Maliyyə modellərinin hazırlanması",
        emoji: <DollarSign className="text-green-500" />,
        href: "/maliyye",
      },
      {
        label: "Vebsaytların Yığılması",
        emoji: <Code className="text-blue-500" />,
        href: "/vebsayt",
      },
      {
        label: "Mikro, Kiçik və Orta Bizneslər üçün",
        emoji: <Building2 className="text-green-500" />,
        href: "/mko",
      },
    ],
  },

  {
    title: "Təlimlərimiz",
    menu: "təlimlərimiz",
    options: [
      {
        label: "Data Analitika",
        emoji: <BarChart className="text-rose-500" />,
        href: "/data-analitika",
      },
      {
        label: "Bank üzrə attestasiya təlimi",
        emoji: <Newspaper className="text-blue-500" />,
        href: "/attestasiya",
      },
      {
        label: "MS Excel Təlimləri",
        emoji: <Code2Icon className="text-rose-500" />,
        href: "/excel",
      },
    ],
  },
];

export function NavigationMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (item: MenuItem) => {
    const { title, menu, options } = item;

    return (
      <div
        className="
         flex
         items-center
         relative
         "
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div className="w-24">{title}</div>
          <div>
            <ChevronDown className="relative left-1 top-[1px] h-3 w-7" />
          </div>
          <div className="mt-20">
            {activeMenu === menu && (
              <ContentMenu
                options={options.map((option, index) => ({
                  ...option,
                  href: option.href,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="
        hidden
        text-md
        font-light
        space-x-10  
        w-full
        items-center
        xl:flex
        h-24

        "
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden xl:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
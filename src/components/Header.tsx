/* eslint-disable @next/next/no-img-element */
"use client";

import { MenuIcon, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import LOGO from "@/assets/logo/lb2s_logo_sans_font.png";
import { usePathname } from "next/navigation";

type MenuItemType = {
  name: string;
  href?: string;
  hasDropdown?: boolean;
  dropdown?: (MenuItemType | string)[];
};

const menuItems: MenuItemType[] = [
  {
    name: "Entreprise",
    href: "/",
    hasDropdown: true,
    dropdown: [
      {
        name: "Mot du Directeur",
        href: "/ceo-words",
      },
      {
        name: "Notre Présentation",
        href: "/about",
      },
      {
        name: "Notre Équipe",
        href: "/team",
      },
    ],
  },
  { name: "Études de cas", href: "/case-studies" },
  {
    name: "Services",
    hasDropdown: true,
    dropdown: [
      {
        name: "Électricité et sécurité incendie",
        href: "/services/security",
      },
      {
        name: "Sécurité électronique ",
        href: "/services/surveillance",
      },
      {
        name: "Réseaux et télécommunications",
        href: "/services/service-3",
      },
      {
        name: "Développement Informatique",
        href: "/services/service-4",
      },
      {
        name: "Climatisation et plomberie",
        href: "/services/service-5",
      },
      {
        name: "Gestion technique de bâtiment (GTB) ",
        href: "/services/service-6",
      },
    ],
  },
  {
    name: "Solutions",
    hasDropdown: true,
    dropdown: [
      {
        name: "Solutions 1",
        href: "/solutions/solution-1",
      },
      {
        name: "Solutions 2",
        href: "/solutions/solution-2",
      },
      {
        name: "Solutions 3",
        href: "/solutions/solution-3",
      },
      {
        name: "Solutions 4",
        href: "/solutions/solution-4",
      },
    ],
  },
  { name: "Contactez-nous" },
] as const;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  console.log(pathname);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        pathname === "/"
          ? isScrolled
            ? "bg-madison shadow-md"
            : "bg-transparent"
          : "bg-white text-black shadow-md"
      } max-[1200px]:bg-madison`}
    >
      <nav className="xl:max-w-[1420px] xl:w-full mx-auto px-8 h-24 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src={LOGO.src} alt="logo" className="w-28 h-28" />
        </Link>
        <div className="min-[1200px]:hidden flex" onClick={toggleMenu}>
          {isOpen ? (
            <X className="w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer" />
          ) : (
            <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer" />
          )}
        </div>
        <div className="hidden min-[1200px]:flex space-x-8 h-full items-center">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group h-full flex items-center"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item?.href ?? "#"}
                className={`flex items-center space-x-1 hover:text-abricot ${
                  item.hasDropdown
                    ? "before:content-[''] before:absolute before:top-4 before:-right-3 before:w-2 before:h-2 before:rounded-full before:border-2 before:border-abricot before:transition-all before:duration-300"
                    : ""
                }`}
              >
                <span>{item.name}</span>
              </Link>
              {item.dropdown && hoveredItem === item.name && (
                <div className="absolute left-1/2 -translate-x-1/2 p-8 opacity-1 pointer-events-auto top-[56px] w-64 bg-white rounded-md shadow-lg z-10">
                  {item.dropdown.map((subItem, index) =>
                    typeof subItem === "string" ? (
                      <span
                        key={`dropdown-${index}`}
                        className="flex text-gray-700"
                      >
                        {subItem}
                      </span>
                    ) : (
                      <Link
                        key={`dropdown-${index}`}
                        href={subItem.href || "#"}
                        className="flex text-[#121820] justify-center items-center last:mb-0 text-center hover:text-abricot transition-[cubic-bezier(0.4, 0, 0.2, 1)] duration-500 mb-4 text-base w-full custom-syne"
                      >
                        {subItem.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className={`hover:text-abricot hidden min-[1200px]:flex`}>
          <Search className="w-6 h-6" />
        </button>
      </nav>
      <div className="relative h-full bg-white">
        <nav
          className={`absolute top-0 left-0 min-h-screen w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ul className="p-6 space-y-4 flex flex-col items-center justify-center">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`group transition-translate relative custom-syne h-auto pr-0 text-center w-screen`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item?.href ?? "#"}
                  className={`text-[#121820] hover:text-abricot transition-[cubic-bezier(0.4, 0, 0.2, 1)] duration-500 relative ${
                    item.hasDropdown
                      ? "before:content-[''] before:absolute before:top-0 before:-right-3 before:w-2 before:h-2 before:rounded-full before:border-2 before:border-abricot before:transition-all before:duration-300"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
                {/* Dropdown */}
                {item.dropdown && (
                  <ul
                    className={`opacity-0 max-h-0 translate-y-2 scale-95 pointer-events-none duration-300 ease-in-out ${
                      item.name === hoveredItem &&
                      "mt-[20px] opacity-100 max-h-full translate-y-0 scale-100 pointer-events-auto w-full min-w-full bg-gray-100 shadow-lg p-4 space-y-4 overflow-hidden"
                    }`}
                  >
                    {item.dropdown.map((subItem, index) =>
                      typeof subItem === "string" ? (
                        <li key={index}>
                          <span className="flex text-gray-700">{subItem}</span>
                        </li>
                      ) : (
                        <li key={index}>
                          <Link
                            href={subItem.href || "#"}
                            className="hover:text-abricot transition-[cubic-bezier(0.4, 0, 0.2, 1)] mb-4 duration-500 text-[#121820]"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

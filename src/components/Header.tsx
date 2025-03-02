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
        name: "Mot du Président",
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
        name: "Sécurité incendie",
        href: "/services/security",
      },
      {
        name: "Électricité",
        href: "/services/electricity",
      },
      {
        name: "Vidéosurveillance",
        href: "/services/videosurveillance",
      },
      {
        name: "Contrôle d'Accès",
        href: "/services/access-control",
      },
      {
        name: "Systèmes d'Alarmes & Intrusions",
        href: "/services/alarm-systems",
      },
      {
        name: "Détection Métaux & Rayon X",
        href: "/services/metal-detection",
      },
      {
        name: "Infrastructure Réseau & Câblage",
        href: "/services/infrastructure-networking",
      },
      {
        name: "Solutions Wi-Fi & Internet",
        href: "/services/wifi-internet",
      },
      {
        name: "Téléphonie IP & VoIP",
        href: "/services/ip-telephony",
      },
      {
        name: "Sécurité Réseau & Cybersécurité",
        href: "/services/network-security",
      },
      {
        name: "Développement Web et Mobile",
        href: "/services/web-mobile-development",
      },
    ],
  },
  { name: "Contactez-nous", href: "/contact" },
] as const;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

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

  const isActive = (itemHref: string) => {
    if (itemHref === "/") {
      return pathname === "/";
    }

    return pathname === itemHref;
  };

  const isMainLinkActive = (item: MenuItemType) => {
    if (item.href === "/") {
      return pathname === "/";
    }

    if (item.dropdown) {
      return item.dropdown.some(
        (subItem) =>
          typeof subItem !== "string" &&
          subItem.href &&
          pathname?.startsWith(subItem.href)
      );
    }

    return false;
  };

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
                } ${isActive(item.href || "") ? "text-abricot" : ""} ${
                  isMainLinkActive(item) ? "text-abricot" : ""
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
                        className={`flex text-[#121820] justify-center items-center last:mb-0 text-center hover:text-abricot transition-[cubic-bezier(0.4, 0, 0.2, 1)] duration-500 mb-4 text-base w-full custom-syne ${
                          isActive(subItem.href || "") ? "text-abricot" : ""
                        }`}
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
        <div className="hidden min-[1200px]:flex items-center space-x-4">
          <button className={`hover:text-abricot`}>
            <Search className="w-6 h-6" />
          </button>
          <Link
            href="/quote"
            className=" px-4 py-2 bg-abricot text-white rounded-md hover:bg-abricot/65 transition-[cubic-bezier(0.4, 0, 0.2, 1)] duration-500"
          >
            Demander un devis
          </Link>
        </div>
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
                  }  ${isActive(item.href || "") ? "text-abricot" : ""}  ${
                    isMainLinkActive(item || "") ? "text-abricot" : ""
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
          <div className="flex min-[1200px]:hidden items-center justify-center space-x-4">
            <button className={`hover:text-abricot`}>
              <Search className="w-6 h-6 text-black" />
            </button>
            <Link
              href="/quote"
              className=" px-4 py-2 bg-abricot text-white rounded-md hover:bg-abricot/65 transition-[cubic-bezier(0.4, 0, 0.2, 1)] duration-500"
            >
              Demander un devis
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

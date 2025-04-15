/* eslint-disable @next/next/no-img-element */
"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import LOGO from "@/assets/logo/lb2s_logo_sans_font.png";
import { usePathname } from "next/navigation";

// Add these imports at the top of the file
import { motion, AnimatePresence } from "framer-motion";

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
        name: "Sécurité Incendie",
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

// Replace the Header component with this enhanced version
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Create refs for menu items to calculate dropdown positions
  const menuItemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        pathname === "/"
          ? isScrolled
            ? "bg-madison/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          : "bg-white text-black shadow-md"
      } max-[1200px]:bg-madison`}
    >
      <nav className="xl:max-w-[1420px] xl:w-full mx-auto px-8 h-24 py-5 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={LOGO.src || "/placeholder.svg"}
              alt="logo"
              className="w-28 h-28"
            />
          </Link>
        </motion.div>

        <motion.div
          className="min-[1200px]:hidden flex"
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer" />
          ) : (
            <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer" />
          )}
        </motion.div>

        <div className="hidden min-[1200px]:flex space-x-8 h-full items-center">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                menuItemRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              className="relative group h-full flex items-center justify-center"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item?.href ?? "#"}
                className={`flex items-center space-x-1 hover:text-abricot transition-colors duration-300 ${
                  item.hasDropdown
                    ? "before:content-[''] before:absolute before:top-4 before:-right-3 before:w-2 before:h-2 before:rounded-full before:border-2 before:border-abricot before:transition-all before:duration-300"
                    : ""
                } ${isActive(item.href || "") ? "text-abricot" : ""} ${
                  isMainLinkActive(item) ? "text-abricot" : ""
                }`}
              >
                <span>{item.name}</span>
              </Link>

              <AnimatePresence>
                {item.dropdown && hoveredItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-[56px] w-72 bg-white rounded-md shadow-lg z-10"
                  >
                    <div className="p-4 space-y-3">
                      {item.dropdown.map((subItem, index) =>
                        typeof subItem === "string" ? (
                          <motion.span
                            key={`dropdown-${index}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="flex text-gray-700"
                          >
                            {subItem}
                          </motion.span>
                        ) : (
                          <motion.div
                            key={`dropdown-${index}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              href={subItem.href || "#"}
                              className={`relative flex text-[#121820] justify-center items-center last:mb-0 text-center hover:text-abricot transition-all duration-300 mb-4 text-base w-full pb-0.5 custom-syne after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-abricot  after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                                isActive(subItem.href || "")
                                  ? "text-abricot after:w-full"
                                  : ""
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden min-[1200px]:flex items-center space-x-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/quote"
              className="px-4 py-2 bg-abricot text-white rounded-md hover:bg-abricot/85 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Demander un devis
            </Link>
          </motion.div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-full bg-white"
          >
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 min-h-screen w-full bg-white shadow-lg"
            >
              <motion.ul
                className="p-6 space-y-4 flex flex-col items-center justify-center pt-6"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                  closed: {},
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                    className={`group transition-translate relative custom-syne h-auto pr-0 text-center w-screen`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item?.href ?? "#"}
                      className={`text-[#121820] hover:text-abricot transition-all duration-300 relative text-xl font-medium ${
                        item.hasDropdown
                          ? "before:content-[''] before:absolute before:top-0 before:-right-3 before:w-2 before:h-2 before:rounded-full before:border-2 before:border-abricot before:transition-all before:duration-300"
                          : ""
                      }  ${isActive(item.href || "") ? "text-abricot" : ""}  ${
                        isMainLinkActive(item || "") ? "text-abricot" : ""
                      }`}
                    >
                      {item.name}
                    </Link>

                    <AnimatePresence>
                      {item.dropdown && item.name === hoveredItem && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-[20px] w-full min-w-full bg-gray-100 shadow-lg p-4 space-y-4 overflow-hidden"
                        >
                          {item.dropdown.map((subItem, index) =>
                            typeof subItem === "string" ? (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <span className="flex text-gray-700">
                                  {subItem}
                                </span>
                              </motion.li>
                            ) : (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={subItem.href || "#"}
                                  className="hover:text-abricot transition-all duration-300 mb-4 text-[#121820] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-abricot  after:transition-all after:duration-300 after:ease-in-out hover:after:w-full "
                                >
                                  {subItem.name}
                                </Link>
                              </motion.li>
                            )
                          )}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex min-[1200px]:hidden items-center justify-center space-x-4 mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/quote"
                    className="px-4 py-2 bg-abricot text-white rounded-md hover:bg-abricot/85 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Demander un devis
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

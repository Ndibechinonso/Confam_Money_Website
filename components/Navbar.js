import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import DropDown from "./customdropdown/primitive/DropDown";
import DropDownItem from "./customdropdown/primitive/DropDownItem";
import Button from "./Button";
// import styles from "../styles/Home.module.css";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [changeNavbar, setChangeNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setChangeNavbar(true);
    } else {
      setChangeNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const routeIndicator = (route) => {
    return router.pathname == route ? "active" : "";
  };

  const menuItems = [
    { name: "Home", routepath: "/" },
    { name: "Pricing", routepath: "/pricing" },
    { name: "About Us", routepath: "/about_us" },
  ];
  // bg-gradient-to-t from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)]

  return (
    <nav
      className={`${
        changeNavbar ? "bg-nav_bg shadow-header" : ""
      } fixed top-0 left-0 right-0  py-5 md:py-4 px-5 xl:px-[100px] z-10 `}
    >
      <div className="flex min-w-full flex-row items-center justify-between">
        <div className="flex min-w-full items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <a
                className={`nav-link flex flex-row gap-[10.21px] md:gap-4 items-center`}
                aria-current="page"
              >
                <Image
                  src="/images/confam_logo.svg"
                  height={50}
                  width={50}
                  alt="nemitt logo"
                />
                <span className="text-[0.875rem]	md:text-[1.5rem] font-semibold text-primary_1">
                  Confam Money
                </span>
              </a>
            </Link>
          </div>
          <div className="font-18 hidden lg:block">
            <div className="flex flex-row gap-16">
              {menuItems.map((item, index) => {
                return (
                  <Link key={index} href={item.routepath}>
                    <a
                      className={`nav-link text-black_2 font-normal text-[1.25rem] ${routeIndicator(
                        item.routepath
                      )}`}
                      aria-current="page"
                    >
                      {item.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="justify-content-end hidden lg:block">
            <a
              href="https://buyer.confammoney.com/signin/buyer"
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer text-primary_2 font-medium text-[1.25rem] mr-[1.125rem] md:mr-[1.78rem]`}
            >
              Sign In
            </a>
            <a
              href="https://buyer.confammoney.com/signup/buyer"
              target="_blank"
              rel="noreferrer"
              className={`bg-btn_bg cursor-pointer text-white font-medium text-[1.25rem] py-[10px] px-[30px] rounded-lg`}
            >
              Get Started
            </a>
          </div>

          <div className="-mr-2 flex lg:hidden   items-center">
            <a
              href="https://buyer.confammoney.com/signin"
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer text-primary_2 font-medium text-[0.875rem] mr-[1.125rem]`}
            >
              Sign In
            </a>

            <DropDown
              contentClassName="bg-white  text-center mr-3 rounded-xl border border-light_d1 shadow-hamburger"
              trigger={
                <button
                  type="button"
                  className=" inline-flex items-center font-medium justify-center rounded-md p-2"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <Image
                    src="/images/hamburgerOpen.svg"
                    height={24}
                    width={24}
                  />
                </button>
              }
            >
              <DropDownItem className="pt-[27px] pb-[18px]">
                <button onClick={() => router.push("/")}>
                  <span
                    className={`nav-link text-[18px] font-medium text-sm block ${routeIndicator(
                      "/"
                    )}`}
                    aria-current="page"
                  >
                    Home
                  </span>
                </button>
              </DropDownItem>
              <DropDownItem className="border-t border-b border-solid border-light_d1 pt-[17px] pb-[14px]">
                <button onClick={() => router.push("/contact")}>
                  <span
                    className={`nav-link text-sm block font-medium ${routeIndicator(
                      "/contact"
                    )}`}
                  >
                    Contact
                  </span>
                </button>
              </DropDownItem>
              <DropDownItem className="p-6">
                <Button
                  text="Get Started"
                  className={`mob_shop_btn font-14 min-w-full px-6 py-1.5 bg-btn_bg rounded text-white`}
                />
              </DropDownItem>
            </DropDown>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="absolute left-0 mt-4 min-w-full bg-white"
      >
        {(ref) => (
          <div className="md:hidden " id="mobile-menu">
            <div ref={ref} className="space-y-9 px-2 pt-2 pb-3 sm:px-3">
              {/* <Button
                text="Shop"
                className={`mob_shop_btn font-14 min-w-full ${styles.shop_btn}`}
              />{" "} */}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;

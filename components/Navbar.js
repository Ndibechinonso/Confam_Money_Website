import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "./Button";
import styles from "../styles/Home.module.scss";
import { Transition } from "@headlessui/react";


const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 bg-nav_bg py-5 md:py-4 px-5 xl:px-[100px] z-10">
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
              /> <span className="text-[0.875rem]	md:text-[1.5rem] font-semibold text-primary_1">Confam Money</span>
                </a>
              </Link>
       
          </div>
          <div className="font-18 hidden lg:block">
            <div className="flex flex-row gap-16">
              <Link href="/">
                <a
                  className={`nav-link text-black_2 font-normal text-[1.25rem] ${
                    router.pathname == "/" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </a>
              </Link>

              <Link href="/">
                <a
                  className={`nav-link text-black_2 font-normal text-[1.25rem] ${
                    router.pathname == "/" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Pricing
                </a>
              </Link>

              <Link href="/contact">
                <a
                  className={`nav-link text-black_2 font-normal text-[1.25rem] ${
                    router.pathname == "/contact" ? "active" : ""
                  }`}
                >
                  About Us
                </a>
              </Link>
            </div>
          </div>
          <div className="justify-content-end hidden lg:block">
          <a href='' target="_blank" rel="noreferrer" className={`cursor-pointer text-primary_2 font-medium text-[1.25rem] mr-[1.125rem] md:mr-[1.78rem]`} >Sign In</a>
            <a href='' target="_blank" rel="noreferrer" className={`bg-btn_bg cursor-pointer text-white font-medium text-[1.25rem] py-[10px] px-[30px] rounded-lg`} >Get Started</a>
            {/* <Button text="Shop" className={styles.shop_btn} color="white" />{" "} */}
          </div>

          <div className="-mr-2 flex lg:hidden items-center">

          <a href='' target="_blank" rel="noreferrer" className={`cursor-pointer text-primary_2 font-medium text-[0.875rem] mr-[1.125rem]`} >Sign In</a>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className=" inline-flex items-center justify-center rounded-md p-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* <span className="sr-only">Open main menu</span> */}
              {!isOpen ? (
                <Image src="/images/hamburgerOpen.svg" height={24} width={24} />
              ) : (
                <Image
                  src="/images/hamburgerClose.svg"
                  height={24}
                  width={24}
                />
              )}
            </button>
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
              <Link href="/">
                <a
                  className={`nav-link text-[18px] text-sm block ${
                    router.pathname == "/" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
          
        
              <Link href="/contact">
                <a
                  className={`nav-link text-sm block ${
                    router.pathname == "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
              <Button
                text="Shop"
                className={`mob_shop_btn font-14 min-w-full ${styles.shop_btn}`}
              />{" "}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;

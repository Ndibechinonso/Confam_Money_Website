import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black_1 px-[2.54rem] md:px-[6.25rem] pt-[2.5rem] md:pt-[5.4rem] pb-[1.3rem] md:pb-[2.375rem]">
      <div className="border-b border-solid	border-grey_2 pb-[1.58rem] md:pb-[3.275]">
        <div className="flex flex-col lg:flex-row gap-[1.85rem]">
          <div className=" basis-1/2 flex flex-col gap-[1rem] md:gap-[0.875rem]">
            <Link href="/">
              <a
                className={`nav-link flex flex-row gap-[10.21px] md:gap-4 items-center`}
                aria-current="page"
              >
                <Image
                  src="/images/footer_logo.svg"
                  height={65}
                  width={65}
                  alt="nemitt logo"
                />{" "}
                <span className="text-[1.02rem] md:text-[2rem] font-medium	text-grey_6">
                  Confam Money
                </span>
              </a>
            </Link>
            <div className="text-white text-[0.875rem] md:text-[1.25rem] max-w-[278.85px] md:max-w-[433.13px]">
              Download Confam Money App today to transact safely with our
              peer-to-peer escrow-service payment platform. Stay on track and
              experience true business security!
            </div>

            <div className="hidden md:flex flex-row gap-[2.18rem]">
              <a href="" target="_blank">
                {" "}
                <Image
                  src="/images/facebookLogo.svg"
                  width={30}
                  height={30}
                  alt="facebook link"
                />
              </a>
              <a href="" target="_blank">
                {" "}
                <Image
                  src="/images/twitterLogo.svg"
                  width={30}
                  height={30}
                  alt="twitter link"
                />
              </a>
              <a href="" target="_blank">
                <Image
                  src="/images/instagramLogo.svg"
                  width={30}
                  height={30}
                  alt="instagram link"
                />
              </a>

              <a href="" target="_blank">
                <Image
                  src="/images/linkedinLogo.svg"
                  width={30}
                  height={30}
                  alt="linkedin link"
                />
              </a>
            </div>
          </div>

          <div className="basis-1/2 flex flex-col md:flex-row text-[white] justify-between gap-y-16 mt-[1rem]">
            <div
              className={`order-2 md:order-1 flex flex-col border-none text-left`}
            >
              <div className="flex flex-col gap-4 px-0 md:gap-6">
                <h5 className="text-left font-medium text-[1.125rem] md:text-[1.5rem] text-grey_4">
                  Product
                </h5>
                <Link href="/escrow_service">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    {" "}
                    Escrow Services
                  </a>
                </Link>
                <Link href="/pricing">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    Pricing
                  </a>
                </Link>
                <Link href="/scam_control">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    Scam Control
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`order-3 md:order-2 flex flex-col border-none text-left mb-[2.168rem] md:mb-0`}
            >
              <div className="flex flex-col gap-4 px-0 md:gap-6">
                <h5 className="text-left font-medium text-[1.125rem] md:text-[1.5rem] text-grey_4 ">
                  Company
                </h5>
                <Link href="/about_us">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    About Us
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    Privacy Policy
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    Terms of Use
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`order-1 md:order-3 flex flex-col border-none text-left`}
            >
              <div className="flex flex-col gap-4 px-0 md:gap-6">
                <h5 className="text-left font-medium text-[1.125rem] md:text-[1.5rem] text-grey_4 ">
                  Resources
                </h5>
                <Link href="/faq">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    FAQ
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    Contact Us
                  </a>
                </Link>
                <Link href="/how_comfam_money_works">
                  <a className="text-[0.875rem] md:text-[1.25rem] text-grey_3">
                    How It Works
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center md:hidden gap-[2.39rem]">
          <a href="" target="_blank">
            {" "}
            <Image
              src="/images/facebookLogo.svg"
              width={30}
              height={30}
              alt="facebook link"
            />
          </a>
          <a href="" target="_blank">
            {" "}
            <Image
              src="/images/twitterLogo.svg"
              width={30}
              height={30}
              alt="twitter link"
            />
          </a>
          <a href="" target="_blank">
            <Image
              src="/images/instagramLogo.svg"
              width={30}
              height={30}
              alt="instagram link"
            />
          </a>

          <a href="" target="_blank">
            <Image
              src="/images/linkedinLogo.svg"
              width={30}
              height={30}
              alt="linkedin link"
            />
          </a>
        </div>
      </div>
      <div className="pt-[1.5rem] md:pt-[2rem] text-center">
        <div className="text-grey_3 text-[0.875rem] md:text-[1.125rem]">
          © 2022 Confam Money. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

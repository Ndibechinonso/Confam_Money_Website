import Image from "next/image";
const Signup = () => {
  return (
    <div className="mt-[6.25rem] md:mt-[12.5rem] bg-[#DCDBD7] flex flex-col md:flex-row px-[1.125rem] md:px-[6.25rem] text-black_2 font-semibold ">
      <div className="basis-1/2 pt-[2.125rem] md:pt-[10.188rem] pb-[6.438rem] md:pb-[19.063rem] m-auto">
        <p className=" text-[1.125rem] md:text-[2rem] mb-[1rem] md:mb-[1.5rem]">
          Start a Transaction
        </p>
        <h2 className="text-[1.5rem] md:text-[3rem] leading-[1.875rem] md:leading-[3.625rem] max-w-[291px] md:max-w-[660px] mb-[1.5rem] md:mb-[3rem]">
          Make your first transaction by Joining us today.
        </h2>

        <div>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className={`bg-btn_bg cursor-pointer text-white font-medium text-[1.25rem] py-[10px] px-[30px] rounded-lg`}
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="relative basis-1/2">
        <Image src="/images/escrow_bg.png" layout="fill" />
      </div>
    </div>
  );
};

export default Signup;

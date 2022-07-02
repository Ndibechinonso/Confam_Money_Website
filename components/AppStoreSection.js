import Image from "next/image";
import Link from "next/link";

const AppStoreSection = () => {
  return (
    <div className="bg-primary_9 flex flex-row justify-between px-[2.54rem] md:px-[6.25rem] gap-x-[50px] overflow-hidden">
      <div className="flex flex-col justify-between app_store_content gap-[16.89px] md:gap-[48px]">
        <div className="flex flex-col items-center lg:items-start pt-[1.37rem] md:pt-[6.25rem] text-center lg:text-left">
          <h2 className="text-gray_9 font-semibold text-[1.125rem] lg:text-[3.5rem] max-w-[200px] lg:max-w-[560px] leading-[22px] lg:leading-[67px] mb-[0.5rem] lg:mb-[0.75rem]">
            Manage your projects from your mobile
          </h2>
          <p className="text-gray_9 text-[0.875rem] md:text-[1.25rem] w-[297.79px] sm:w-[470px] md:max-w-[560px]">
            Download Confam Money App today to transact safely with our
            peer-to-peer escrow-service payment platform. Stay on track and
            experience true business security!
          </p>
        </div>
        <div className="flex lg:hidden flex-row gap-[0.784rem] justify-center mb-[0.753rem] h-[278px]">

<div className='self-start'>
        <Image src="/images/android_mob.png" height={178.72} width={89.36}  />
        </div>
        <div className='self-end'>

        <Image src="/images/iphone_mob.png" height={178.72} width={89.36}  />
        </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-[0.875rem] md:gap-[0.5rem]">
          <h5 className="text-gray_9 font-medium text-[1rem] md:text-[1.25rem]">
            Get the App
          </h5>
          <div>
            <div className="pb-[2.588rem] md:pb-[3.625rem]">
              <Image
                src="/images/apple_store_btn.svg"
                height={40}
                width={135}
              />
              <Image src="/images/playstore_btn.svg" height={40} width={135} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-row relative">
      {/* <div className="absolute right-[50%] md:right-[360.55px] top-[-2px] min-w-[232px] min-h-[464]"> */}

        <Image src="/images/android.png" height={464} width={232} className="absolute right-[50%] md:right-[360.55px] top-[-2px]" />
      {/* </div> */}
      {/* <div className="absolute right-[30%] md:right-[96px] bottom-[-10px] min-w-[232px] min-h-[464]"> */}
        <Image src="/images/iphone.png" height={464} width={232} className="absolute right-[30%] md:right-[96px] bottom-[-10px]" />
      {/* </div> */}
      </div>
    </div>
  );
};

export default AppStoreSection;

import Image from "next/image";
const ShortStory = () => {
    return(
        <div className="flex flex-col justify-between gap-y-[1.875rem] text-black_2 md:flex-row py-[3.813rem] md:py-[5.063rem] px-[1.875rem] md:px-[3.125rem]">
<div className="flex flex-col max-w-[300px] max-w-[602px] gap-[0.625rem] md:gap-[1.25rem]">
    <h3 className="font-medium md:font-semibold text-[1.5rem] md:text-[3.5rem]">A Short Story</h3>
    <div className="flex flex-col gap-[0.4rem] md:gap-[1rem]">
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. </p>
    <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
    </div>
</div>
<div className="flex flex-row h-[573px] gap-[2rem]">
    <div className="self-start"><Image src="/images/story_guy.png" width={275} height={535} /></div>
    <div className="self-end"> <Image src="/images/story_girl.png" width={275} height={535} /></div>
    
</div>
        </div>
    )
}

export default ShortStory;
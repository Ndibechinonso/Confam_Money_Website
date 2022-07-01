import Image from "next/image"
import styles from "../../styles/Home.module.scss"
const HeroSection = () => {
    return(
        <div className={`${styles.hero} relative bg-hero_img bg-no-repeat h-[90vh] w-[100%]`}>
       <div className="absolute top-[3.707rem]"><Image src="/images/leftCircle.svg" width={527.21} height={527.21} /></div>
       <div className="absolute left-[28.205%]"><Image src="/images/middleCircle.svg" width={536.48} height={536.48} /></div>

       <div className="absolute right-0"><Image src="/images/rightCircle.svg" width={484.07} height={484.07} /></div>

        </div>
    )
}

export default HeroSection
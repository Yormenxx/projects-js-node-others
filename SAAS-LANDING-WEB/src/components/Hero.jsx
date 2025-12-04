import { BRAND_LOGOS, HERO_CONTENT } from "../constants"
import hero from "../assets/hero.jpg"

function Hero() {
    return (
        <section className="px-10 py-14">

            <div className="mb-8 border-neutral-700 px-3 py-2 rounded-full  text-white text-center">
                {HERO_CONTENT.badgeText}
            </div>

            <h1 className="text-5xl text-center lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
                {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
                    <span key={index}>
                        {text}
                        <br />
                    </span>
                ))}
            </h1>

            <p className="mt-6 text-neutral-400 mx-auto max-w-xl text-center">
                {HERO_CONTENT.subHeading
                }
            </p>
            <div className="mt-6 space-x-4 text-center">
                <a href="" className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-bold">
                    {HERO_CONTENT.callToAction.primary}
                </a>
                <a href="" className="inline-block border border-neutral-300 hover:opacity-80 duration-200 ease-in-out text-white py-3 px-6 rounded-lg font-bold">
                    {HERO_CONTENT.callToAction.secondary}
                </a>
            </div>

            <div className="py-10">

                <p className="text-neutral-600 text-center mb-9">
                    {HERO_CONTENT.trustedByText}
                </p>

                <div className="flex flex-wrap justify-center gap-8 py-2 ">
                    {
                        BRAND_LOGOS.map((item,index)=>(
                            <img key={index} src={item.src} alt={item.alt} className="h-4 md:h-7"  />
                        ))
                    }
                </div>

                <div className="mt-12">

                    <img src={hero} alt="hero" className="w-full rounded-2xl border border-neutral-500 mb-16" />

                </div>

            </div>


        </section>
    )
}

export default Hero
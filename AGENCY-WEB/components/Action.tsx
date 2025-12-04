import { Marquee } from "./magicui/marquee"
import { NumberTicker } from "./magicui/number-ticker"
import Logo from "../public/logo/logo.webp";

const Action = () => {
  return (
   <section >
        <div >

            <div className="md:flex items-center justify-between gap-y-4 my-10 mx-auto gap-x-10 px-20">
                <div className="md:w-2/5">
                    <h1 className="text-2xl font-medium text-foreground/80 text-center md:text-left  md:w-4/5">
                    Trusted by fast-moving brands worldwide
                    </h1>

                    <div className="flex  my-6 gap-x-5 w-full">
                        <div>
                            <h1 className="text-violet-500 text-3xl md:text-5xl text-center">
                                <NumberTicker value={100}/> +
                                <p className="text-foreground/50 text-sm">Happy clients</p>
                            </h1>
                        </div>

                        <div className="w-px bg-neutral-400 self-stretch"></div>


                        <div className="flex-1 min-w-0">
                            <h1 className="text-violet-500 text-3xl md:text-5xl whitespace-nowrap text-center overflow-hidden">
                                <NumberTicker value={100}/> +
                                <p className="text-foreground/50 text-sm">Projects Completed</p>
                            </h1>
                        </div>
                    </div>
                </div>

                <article className="overflow-hidden mt-10  md:w-4/5">
                    <Marquee pauseOnHover={true} className="[--duration:20s]">
                        <img src={Logo.src} alt="logo" />
                    </Marquee>
                </article>
            </div>

        </div>
   </section>
  )
}

export default Action

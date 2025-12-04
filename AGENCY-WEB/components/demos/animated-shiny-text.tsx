

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { FcGoogle } from "react-icons/fc";

export function AnimatedShinyTextDemo() {
    return (
        <div className=" z-10 flex items-center justify-center">
            <div
                className={cn(
                    "group rounded-lg border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                )}
            >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    ⭐⭐⭐⭐⭐ <FcGoogle className="text-2xl md:text-3xl ml-2" /> <span className="ml-2 text-base md:text-xl font-semibold hover:underline">4.9 stars 200+ google reviews</span>
                </AnimatedShinyText>
            </div>
        </div>
    );
}

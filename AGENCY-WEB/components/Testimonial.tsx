import Image from "next/image"

const Testimonial = () => {
    return (
        <>
            <article className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0 ">

                <Image
                    src={"/images/jordan.webp"}
                    alt="jordan"
                    width={1000}
                    height={1000}
                    className=" md:w-1/3 rounded-md"
                />

                <div className="flex flex-col gap-y-5 md:w-1/2">
                    <h1 className="text-lg md:text-2xl ">
                        &quot;We&apos;ve been working with Bird for over 2 years and they`ve been amazing to work with. They`ve helped us grow our business and we couldn&apos;t be happier with the results. &quot;
                    </h1>
                    <div >
                        ⭐⭐⭐⭐⭐
                    </div>
                    <span className="text-xl font-medium"> Jordan, Brisson <br />
                        CEO, Atlas Massage</span>
                </div>



            </article>

        </>
    )
}

export default Testimonial

import Image from "next/image"
import Link from "next/link"

const GetApp = () => {
  return (
    <section className=" flex items-center justify-center w-full flex-col pb-[100px]">
      <div className=" mx-auto max-w-[1440px] relative flex w-full items-center  flex-col justify-between gap-32 
      bg-[url('/pattern.png')] overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] rounded-5xl">

        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">

          <h2 className="font-extrabold text-4xl xl:max-w-[320px]">Get for free now!</h2>
          <p className="text-2xl text-gray-400" >Available on ¡OS and Android</p>

          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <div className="  bg-white  text-green-700 rounded-lg py-3 px-8">
              <Link href="/login" className="flex transition-all whitespace-nowrap  ">
                <Image src="/apple.svg" alt="apple" width={20} height={50} className="mr-3 " />
                Download App
              </Link>
            </div>

            <div className="  border border-white  text-white rounded-lg py-3 px-8">
              <Link href="/login" className="flex transition-all whitespace-nowrap  ">
                <Image src="/android.svg" alt="play store" width={20} height={50} className="mr-3 " />
                Download App
              </Link>
            </div>
          </div>

        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={880}/>
        </div>


      </div>


    </section>
  )
}

export default GetApp 
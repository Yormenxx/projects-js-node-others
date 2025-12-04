import Image from "next/image"

const Guide = () => {
  return (
    <section className="mx-20 flex items-center justify-center flex-col">

      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24 ">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase text-[18px] font-[400] ">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">

          <h2 className="capitalize text-[40px] font-[700] leading-[120%] xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="text-[16px] font-[400] text-gray-600 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps. When there is not internet connection int the field. Invite your friends to join the hilink application, so you can share your location with each other. You can also share your location with your family, so they know where you are.
          </p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full mx-auto max-w-[1440px]">
        <Image src="/boat.png" alt="boat" width={1440} height={580} className="w-full object-cover object-center rounded-4xl" />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-20">
          
          <Image src="/meter.svg" alt="meter" width={16} height={158} className="h-full w-auto"/>
          
          <div className="flex items-center justify-between flex-col ">
            <div className="flex w-full flex-col">
              <div className="flex  justify-between flex-col ">
                <p className="text-[16px] font-[500] text-gray-600">
                  Destination
                </p>
                <p className="font-bold text-green-500">
                  48 min
                </p>

              </div>
              <p className="font-extrabold mt-2">Aguas calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="text-[16px] font-[500] text-gray-600">
                Start track
              </p>
              <h4 className="font-extrabold mt-2 whitespace-nowrap">
                Wonorejo Pasuran
              </h4>
              
            </div>
          </div>



        </div>

      </div>

    </section>
  )
}

export default Guide

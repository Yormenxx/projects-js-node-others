import { PEOPLE_URL } from "@/constants"
import Image from "next/image"

const Camp = () => {
  return (
    <section className="mx-10  relative 2xl:mx-auto 2xl:max-w-[1440px] flex flex-col py-10 lg:mb-10 lg:py20 xl:mb-20">

      <div className="hide-scrollbar flex h-[320px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">

        <div className="bg-[url('/img-1.png')] bg-cover bg-no-repeat rounded-4xl min-w-[1100px] w-full h-full">
          <div className="flex h-full flex-col items-start justify-between p-6  lg:px-20 lg:py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="rounded-full bg-green-600 p-4">
                <Image src="/folded-map.svg" alt="map" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-extrabold text-white">Putuk Truno Camp</h4>
                <p className="text-2xl text-white">Prigen Pasuruan</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="flex -space-x-4 overflow-hidden">
                {
                  PEOPLE_URL.map((url) => (

                    <Image
                      key={url}
                      src={url}
                      alt="people"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-green-600"
                    />
                  ))
                }
              </span>
              <p className="font-bold text-white">+50 people join</p>

            </div>
          </div>
        </div>

        <div className="bg-[url('/img-2.png')] bg-cover bg-no-repeat rounded-4xl min-w-[1100px] w-full h-full">
          <div className="flex h-full flex-col items-start justify-between p-6  lg:px-20 lg:py-10">
            <div className="flex justify-center items-center gap-4">
              <div className="rounded-full bg-green-600 p-4">
                <Image src="/folded-map.svg" alt="map" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-extrabold text-white">Putuk Truno Camp</h4>
                <p className="text-2xl text-white">Prigen Pasuruan</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="flex -space-x-4 overflow-hidden">
                {
                  PEOPLE_URL.map((url) => (

                    <Image
                      key={url}
                      src={url}
                      alt="people"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-green-600"
                    />
                  ))
                }
              </span>
              <p className="font-bold text-white">+50 people join</p>

            </div>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-400 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-2xl md:text-4xl capitalize text-white">
            <strong>Feeling lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-[18px] mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That´s why we are here for those of you who want to start an adventure but don´t know the way. We will guide you to the best climbing locations in Indonesia.
          </p>
          <Image src="/quote.svg" alt="camp2" width={186} height={219} className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0" />
        </div>
      </div>


    </section>
  )
}

export default Camp
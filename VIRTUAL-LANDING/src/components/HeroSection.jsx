import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 ">

        <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl tracking-wide">
            VirtualR build <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
            {" "}
            tools for developers
            </span>
        </h1>

        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex-flex-center my-10">
        <a href="#" className="rounded-md border border-solid border-white px-3 py-3 uppercase my-4 bg-gradient-to-r from-orange-500 to-orange-700 hover:opacity-60  ">
            Star for free
        </a>
        <a href="#" className="rounded-md border border-solid border-white px-3 py-3 mx-4 uppercase hover:opacity-60 ">
            Documentation
        </a>
      </div>

      <div className="flex justify-center mt-10">
        <video autoPlay muted loop className="w-2/5 rounded-2xl border border-solid border-red-600 mx-2 my-3" >
            <source src={video1} type="video/mp4" />
            Your browser doesnt show any response
        </video>
        <video autoPlay muted loop className=" w-2/5  rounded-2xl  border border-solid border-red-600 mx-2 my-3" >
            <source src={video2} type="video/mp4" />
            Your browser doesnt show any response
        </video>
      </div>



    </div>
  );
}

export default HeroSection
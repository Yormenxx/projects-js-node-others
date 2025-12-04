import { KEY_FEATURES_CONTENT } from "../constants"


function Features() {
  return (
    <>
        <section>

            <div className="max-w-7xl mx-auto py-14">
                <div className="text-center mb-12 border-t border-neutral-800 ">
                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">{KEY_FEATURES_CONTENT.sectionTitle}</h2>

                    <p className="mt-4 text-neutral-400">{KEY_FEATURES_CONTENT.sectionDescription}</p>
                </div>


                <div className="flex flex-wrap justify-between">
                  {
                    KEY_FEATURES_CONTENT.features.map((item,index)=>(
                      <div key={index} className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6">
                          <div className="flex justify-center items-center mb-4 text-white">
                            {
                              item.icon
                            }
                          </div>

                          <h3 className="text-xl text-white">{item.title}</h3>
                        <p className="mt-2 text-neutral-400">
                              {item.description}
                        </p>
                      </div>
                    ))
                  }
                </div>

            </div>


        </section>
    
    </>
  )
}

export default Features
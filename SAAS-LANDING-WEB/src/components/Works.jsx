import { HOW_IT_WORKS_CONTENT } from "../constants"


function Works() {
  return (
    <>
    <section>

        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 border-t border-neutral-800">
                <h2 className="text-3xl md:text-5xl mt-20  tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                    {HOW_IT_WORKS_CONTENT.sectionTitle}
                </h2>
                <p className="mt-4  text-neutral-400 max-w-xl mx-auto">
                    {HOW_IT_WORKS_CONTENT.sectionDescription}
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    { 
                        HOW_IT_WORKS_CONTENT.steps.map((item,index)=>(
                            <div key={index} className="bg-neutral-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:scale-105 duration-200 ease-in-out ">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-white text-center">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-400 mb-4">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                        <img src={item.imageSrc} alt={item.imageAlt} className="rounded-xl"/>
                                </div>

                                {/* {
                                    item.users && (
                                        
                                        <div className="flex justify-between items-center mt-4">
                                            
                                            <div className="flex space-x-2">

                                                {
                                                    item.users.map((user, userKey)=>(
                                                        <img key={userKey} src={user} alt="Person" />
                                                    ))
                                                }

                                            </div>


                                        </div>

                                    )
                                }       */}

                            </div>
                        ))
                    }


            </div>



        </div>
    </section>
    
    </>
  )
}

export default Works
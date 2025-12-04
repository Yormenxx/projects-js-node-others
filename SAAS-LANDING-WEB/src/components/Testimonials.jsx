import { TESTIMONIALS_CONTENT } from "../constants"


function Testimonials() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 mt-20 ">
                <div className="text-center mb-12  border-t border-neutral-900">
                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">{TESTIMONIALS_CONTENT.sectionTitle}</h2>

                    <p className="mt-4 text-neutral-400">{TESTIMONIALS_CONTENT.sectionDescription}</p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
                {
                    TESTIMONIALS_CONTENT.reviews.map((item,index)=>(
                        <div key={index} className="mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-900/40 border border-neutral-900 p-10">
                            <p className="text-neutral-100 mb-3">
                                {item.review}
                            </p>
                            <div className="flex items-center mt-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-4 " />
                                <div>
                                    <p className="text-sm font-bold text-yellow-50">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-neutral-600 ">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>



        </section>
    )
}

export default Testimonials
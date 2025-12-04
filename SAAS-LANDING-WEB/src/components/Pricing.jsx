import { PLANS_CONTENT } from "../constants"


function Pricing() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 mt-20 ">
                <div className="text-center mb-12  border-t border-neutral-900">
                    <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">{PLANS_CONTENT.sectionTitle}</h2>

                             <p className="mt-4 text-neutral-400">{PLANS_CONTENT.sectionDescription}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">

                {
                    PLANS_CONTENT.plans.map((item,index) =>(
                        <div key={index} className="p-8 rounded-xl shadow-lg bg-neutral-900 border border-neutral-300">
                                
                                <h3 className="text-lg lg:text-2xl mb-4 tracking-tighter uppercase text-white font-bold">
                                    {
                                        item.name
                                    }

                                </h3>

                                <p className="text-neutral-400 mb-6">
                                    {
                                        item.description
                                    }
                                </p>
                                <div className="text-2xl lg:text-3xl font-medium mb-6 text-blue-400">
                                        {item.price}
                                </div>
                                <ul className="mb-8 space-y-6 text-neutral-400 ">
                                    {
                                        item.features.map((feature,index) =>(
                                            <li key={index} className="flex items-center">
                                                <span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2">
                                                   
                                                </span>
                                                {feature}
                                            </li>
                                        ))
                                    }
                                </ul>

                                <button className="w-full py-3 px-4 bg-blue-700 hover:opacity-80 text-white font-medium duration-200 ease-in-out rounded-lg cursor-pointer">{PLANS_CONTENT.ctaText}</button>
                        </div>
                    ))
                }

            </div>



        </section>
    )
}

export default Pricing
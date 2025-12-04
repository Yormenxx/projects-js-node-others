import {DISHES}  from "../constants/App"
import DishCard from "../components/DishCard"

const Dishes = ()=>{
    return(
        <section className="container mx-auto py-16 " id="dishes">

            <h2 className="mb-8 text-center text-3xl font-bold text-orange-500  tracking-tighter lg:text-4xl">Our dishes</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">

                    {DISHES.map((project,index)=>(
                        <DishCard key={index} project={project}/>
                    ))}
                </div>
        </section>
    )
}
export default Dishes
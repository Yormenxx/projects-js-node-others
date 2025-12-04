
import { REVIEWS } from '../constants'

const Reviews = () => {
  return (
    <div className='dark:bg-neutral-950 dark:text-white'>
        <section className='pt-20'>

            <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase pt-20 mb-12'>Reviews</h2>

            <p className='text-center'>{REVIEWS.text}</p>

            <div className='flex flex-wrap justify-center'>

                {REVIEWS.reviews.map((item,index)=>(
                        <div key={index} className='flex flex-col mt-5 items-center justify-center rounded-md border border-neutral-400 max-w-xs p-10 mx-2 review-item'>
                                <p>{item.review}</p>

                                <div className='flex items-center mt-2'>

                                        <img src={item.image} alt={item.name} className='w-12 h-12 rounded-full mr-2 '/>

                                        <div>
                                            <p>{item.name}</p>
                                            <p className='font-bold text-sm
                                            '>{item.title}</p>
                                        </div>

                                </div>
                        </div>
                ))
                    
                }


            </div>

        </section>
    </div>
  )
}

export default Reviews
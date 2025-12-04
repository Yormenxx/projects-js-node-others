import React from 'react'
import ImageGallery from 'react-image-gallery'
import imageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../assets/partners/image-1.jpg"
function Carousel() {

  const images = [
    {
      original:" http://localhost:5173/src/assets/partners/image-1.jpg",
      thumbnail:"http://localhost:5173/src/assets/partners/image-1.jpg"
    },
    {
      original:"http://localhost:5173/src/assets/partners/image-2.jpg",
      thumbnail:"http://localhost:5173/src/assets/partners/image-2.jpg"
    },
    {
      original:"http://localhost:5173/src/assets/partners/image-3.jpg",
      thumbnail:"http://localhost:5173/src/assets/partners/image-3.jpg"
    }
  ]
  return (

    <div class="accion-bg-color pb-8">
        <div className='m-auto '>

          <ImageGallery  items={images}
            showPlayButton={false} 
            showFullscreenButton={false}
            showNav = {false}
            autoPlay={true}
         
            />       
      </div>
    </div>

  )
}

export default Carousel
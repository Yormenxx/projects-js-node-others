
import { motion } from "framer-motion"



function Footer() {
  return (
    <>
        <footer className="bg-[url('./assets/footer.jpg')] bg-cover bg-center bg-no-repeat relative bg-neutral-950 h-[500px] text-white flex justify-center items-end ">
            {/* <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to bg-black z-10"
            style={{
                background:
                "radial-gradient(circle, rgba(0,0,0,0.3)50%, rgba(11,11,13,0.5)70, rgba(11,11,13,0.8)90% )",
            }}>
              
            </div> */}

            <p>
                © 2024. All rights reserved
                </p>
        </footer>
    </>
  )
}

export default Footer
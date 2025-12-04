import { footerData } from "./constants/data"
import Logo from "./helper/Logo"


const Footer = () => {
    return (
        <footer className="section">

            <div className="container w-full ">

                <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4">

                    <Logo />

                    <div className="grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3">
                        {
                            footerData.links.map(({ title, items }, index) => (
                                <ul key={index}>
                                    <p className="mb-4">
                                        {title}
                                    </p>
                                    {
                                        items.map(({ href, label }, index) => (
                                            <li key={index} className="text-muted-foreground">
                                                <a href={href} className="inline-block py-1 transition-colors hover:text-primary">
                                                    {label}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            ))
                        }
                    </div>



                </div>


                <div className="flex justify-between mt-12 border-t border-gray-600/10 py-6">
                    <a href="">
                        {footerData.copyright}
                    </a>

                    <div className="social-wrapper">
                        <ul className="flex gap-5">
                            {
                                footerData.socialLinks.map(({ href, icon }, index) => (
                                    <li key={index}>
                                        <a href={href} target="_blank" rel="noopener noreferrer">
                                            {icon}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>



            </div>


        </footer>
    )
}

export default Footer

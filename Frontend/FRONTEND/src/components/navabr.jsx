import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenu] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/sevices' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handelScroll = () => { setMenu(false) }
        window.addEventListener('scroll', handelScroll)
        return () => window.removeEventListener('scroll', handelScroll)

    }, [])

    return (
        <>

            <nav className="bg-white fixed top-0 left-0 shadow-md w-full z-50 h-18">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg-px:8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex shrink-0 text-2xl font-bold text-value-600 text-orange-500"> QUICK BITES</div>
                        <div className="hidden md:flex space-x-8 text-align-center">
                            {navLinks.map((links) => (
                                <Link
                                    key={links.name}
                                    to={links.path}
                                    onClick={() => setMenu(false)}
                                    className="text-black hover:text-orange-500 transition duration-300 font-medium"
                                >
                                    {links.name}
                                </Link>
                            ))}

                        </div>
                        <div>
                            <div className="hidden md:flex space-x-8">
                                <img className="h-6 w-6" src="../../public/favourite.png" alt="" srcset="" />
                                <img className="h-6 w-6" src="../../public/shopping-cart.png" alt="" srcset="" />
                                <img className="h-6 w-6" src="../../public/person.png" alt="" srcset="" />
                            </div>
                        </div>


                        <div className="md:hidden">
                            <button type="button"
                                onClick={() => setMenu(!menuOpen)}
                                className="focus:outline-none">
                                <img className="h-6 w-6" src="../../public/menu.png" alt="" srcset="" />
                            </button>
                        </div>
                    </div>


                    <div className={`md:hidden bg-white shadow-md flex flex-col px-4 py-2 space-y-2 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-5  py-5" : "opacity-0 -translate-y-4 py-0 pointer-events-none"} `}

                    >
                        <div className="flex flex-col space-y-4 px-4 text-orange-500">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMenu(false)}
                                    className="text-black hover:text-orange-500 transition duration-300 font-medium">

                                    {link.name}
                                    
                                </Link>
                            ))}
                            <div>
                                <div className="flex  mt-2 space-x-4">
                                    <img className="h-6 w-6" src="../../public/favourite.png" alt="" srcset="" />
                                    <img className="h-6 w-6" src="../../public/shopping-cart.png" alt="" srcset="" />
                                    <img className="h-6 w-6" src="../../public/person.png" alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </nav>

        </>
    )
}

export default Navbar;
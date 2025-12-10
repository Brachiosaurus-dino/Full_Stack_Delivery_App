import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOrder } from "../Context.jsx";


const logout = () => {
    localStorage.removeItem("token"); // remove JWT
    localStorage.removeItem("Token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    localStorage.removeItem("cart-items")
    window.location.href = "/login";   // redirect to login page
};

function Navbar() {

    const [menuOpen, setMenu] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setlastScrollY] = useState(0)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/service' },
        { name: 'About', path: '/about_us' },
        { name: 'Contact', path: '/contact_us' },
        { name: 'Restaurents', path: '/restaurents' },
        // { name: 'Orders', path: '/orders' }
    ];

    useEffect(() => {
        const handelScroll = () => { setMenu(false) }
        window.addEventListener('scroll', handelScroll)
        return () => window.removeEventListener('scroll', handelScroll)

    }, [])

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false)
        }
        else {
            setShowNavbar(true)
        }
        setlastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY])



    const { cartCount } = useOrder();


    return (
        <>

            <nav className={`bg-white fixed top-0 left-0 shadow-md w-full z-50 h-18 transform transition duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"} `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px:8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex shrink-0 text-2xl font-bold text-value-600 text-orange-500"> QUICK BITES</div>
                        <div className="hidden md:flex space-x-8 text-align-center">
                            {navLinks.map((links) => (
                                <Link
                                    key={links.name}
                                    to={links.path}
                                    onClick={() => setMenu(false)}
                                    className="text-black text-sm hover:text-orange-500 transition duration-300 font-medium"
                                >
                                    {links.name}
                                </Link>
                            ))}

                        </div>
                        <div>
                            <div className="hidden md:flex space-x-8">
                                <img className="h-6 w-6" src="../../favourite.png" alt="" srcset="" />
                                <Link to="/cart"><div className="relative">
                                    <img
                                        src="../../shopping-cart.png"
                                        alt="Cart"
                                        className="w-8 h-8"
                                    />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-white text-orange-500 font-bold rounded-full w-5 h-5 flex items-center justify-center text-sm">
                                            {cartCount}
                                        </span>
                                    )}
                                </div></Link>
                                <Link to="/changes"><img className="h-6 w-6" src="../../person.png" alt="" srcset="" /></Link>
                                <button
                                    onClick={logout}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded transition text-sm"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>


                        <div className="md:hidden">
                            <button type="button"
                                onClick={() => setMenu(!menuOpen)}
                                className="focus:outline-none">
                                <img className="h-6 w-6" src="../../menu.png" alt="" srcset="" />
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
                                    <img className="h-6 w-6" src="../../favourite.png" alt="" srcset="" />
                                    <Link to="/cart"><div className="relative">
                                        <img
                                            src="../../shopping-cart.png"
                                            alt="Cart"
                                            className="w-8 h-8"
                                        />
                                        {cartCount > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-white text-orange-500 font-bold rounded-full w-5 h-5 flex items-center justify-center text-sm">
                                                {cartCount}
                                            </span>
                                        )}
                                    </div></Link>
                                    <Link to="/changes"><img className="h-6 w-6" src="../../person.png" alt="" srcset="" /></Link>
                                    <button
                                        onClick={logout}
                                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded transition text-sm"
                                    >
                                        Logout
                                    </button>
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

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-blue-950 text-white py-16">
            <div className="container mx-auto px-6 md:px-12 lg:w-3/4">
                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center lg:text-left">
                    {/* About */}
                    <div className="space-y-2 text-left">
                        <h3 className="text-md font-ubuntu font-bold text-orange-500">QuickBite</h3>
                        <p className="mt-5 text-sm">Your favourite food delivery service , Fast ,Fresh and delicious meals deliverd right to your door steps</p>

                    </div>

                    {/* Account */}
                    <div className="space-y-2 text-left">
                        <h3 className="text-md font-ubuntu font-bold mb-4">Quick links</h3>
                        <p className="text-xs">About Us</p>
                        <p className="text-xs">Restaurent</p>
                        <p className="text-xs">Delivery Areas</p>
                        <p className="text-xs">Career</p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                        <h3 className="text-md font-ubuntu font-bold mb-4">Contact Us</h3>

                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt className="text-orange-500 text-sm" />
                            <p className="text-xs">(+63) 555 1212</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="text-orange-500 text-sm" />
                            <p className="text-xs">hello@QuickBite.com</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-orange-500 text-sm" />
                            <p className="text-xs">96th Street, NY 10129</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-400 my-10"></div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row  justify-center lg:justify-between gap-4 text-left md:text-center">
                    <p className="text-xs font-light">© 2025 - QUICKBITES. All rights reserved</p>
                    <p className=" text-xs font-light">
                        Privacy Policy &nbsp; | &nbsp; Terms of Service
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

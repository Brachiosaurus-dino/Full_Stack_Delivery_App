import { FiPhone, FiMail, FiMessageCircle, FiMapPin } from "react-icons/fi";
function Contact_Us() {
    return (
        <>
            <div>
                <div className="h-full w-full bg-gray-100 flex flex-col items-center py-40 ">
                    <div className="texr-center space-y-6 max-w-3xl ">
                        <p className="font-semibold text-3xl text-center">Contact Us</p>
                        <p className="text-xs font-light text-center px-10 lg:px-0 ">
                            Have questions, feedback need any help?
                            We're here to assiste you 24/7. Reach out to us
                            through any of the channels below
                        </p>
                    </div>
                </div>

                <div className="container mx-auto py-4">
                    <div className="flex lg:flex-row flex-col justify-center gap-12 px-6 items-center">

                        <div className="w-full max-w-2xl">
                            <h1 className="text-left text-2xl pb-3 font-bold">Send Us a Message</h1>
                            <div className="h-full w-full rounded-xl">
                                <form className="py-5 border-1 rounded-xl shadow-lg">
                                    <div className="grid gap-6 md:grid-cols-2 px-5 py-2">

                                        <div>
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-sm font-medium text-black"
                                            >
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="bg-white h-10 px-2 rounded-xl border border-gray-300"
                                                required
                                            />
                                        </div>


                                        <div>
                                            <label
                                                htmlFor="last_name"
                                                className="block mb-2 text-sm font-medium text-black"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                id="last_name"
                                                className="bg-white h-10 px-2 rounded-xl border border-gray-300"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="px-5 py-1">

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block mb-2 text-sm font-medium text-black"
                                            >
                                                Phone number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="bg-white h-10 px-2 rounded-xl w-full border border-gray-300"
                                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                required
                                            />
                                        </div>


                                        <div className="py-4">
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-black"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="bg-white h-10 px-2 rounded-xl w-full border border-gray-300"
                                                placeholder="example@company.com"
                                                required
                                            />
                                        </div>


                                        <div className="py-2">
                                            <label
                                                htmlFor="message"
                                                className="block mb-2 text-sm font-medium text-black"
                                            >
                                                Your message
                                            </label>
                                            <textarea
                                                id="message"
                                                rows="6"
                                                className="block p-2.5 w-full rounded-2xl bg-white border border-gray-300"
                                                placeholder="How can we help you?"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="px-3 py-4">
                                        <button
                                            type="submit"
                                            className="rounded-xl w-full text-white bg-orange-600 h-10"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="w-full max-w-lg">
                            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Get in Touch</h2>

                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>

                                <ul className="space-y-6">

                                    <li className="flex items-start space-x-3">
                                        <FiPhone className="text-orange-500 text-2xl mt-1" />
                                        <div>
                                            <p className="font-medium text-gray-800">Phone Support</p>
                                            <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                                            <p className="text-xs text-gray-400">Available 24/7</p>
                                        </div>
                                    </li>


                                    <li className="flex items-start space-x-3">
                                        <FiMail className="text-orange-500 text-2xl mt-1" />
                                        <div>
                                            <p className="font-medium text-gray-800">Email Support</p>
                                            <p className="text-sm text-gray-600">support@quickbite.com</p>
                                            <p className="text-xs text-gray-400">Response within 2 hours</p>
                                        </div>
                                    </li>


                                    <li className="flex items-start space-x-3">
                                        <FiMessageCircle className="text-orange-500 text-2xl mt-1" />
                                        <div>
                                            <p className="font-medium text-gray-800">Live Chat</p>
                                            <p className="text-sm text-gray-600">chat.quickbite.com</p>
                                            <p className="text-xs text-gray-400">Instant responses</p>
                                        </div>
                                    </li>


                                    <li className="flex items-start space-x-3">
                                        <FiMapPin className="text-orange-500 text-2xl mt-1" />
                                        <div>
                                            <p className="font-medium text-gray-800">Office Address</p>
                                            <p className="text-sm text-gray-600">123 Food Street</p>
                                            <p className="text-sm text-gray-600">Tech District, City 12345</p>
                                            <p className="text-xs text-gray-400">United States</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_Us


function About_Us() {
    return (
        <>
            <div>
                <div className="h-full w-full bg-gray-100 flex flex-col items-center py-40 ">
                    <div className="texr-center space-y-6 max-w-3xl ">
                        <p className="font-semibold text-3xl text-center">About QuickBite</p>
                        <p className="text-xs font-light text-center px-10 lg:px-0 ">We are on a mission bring delicious food  from your favourite local restaurent straight
                            from local restaurent to your doorsteps faster and fresher then ever before
                        </p>
                    </div>
                </div>

                <div className="bg-white w-full py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-2xl font-bold text-center container mx-auto" >Our Story</h1>
                        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center  max-w-1xl py-10">
                            <div className=" text-center max-w-md w-full px-6 py-6 ">
                                <h1 className="text-xl text-left pb-1">Founded in 2020</h1>
                                <p className="text-left   w-full  text-xs pb-1">
                                    QuickBite started with a simple idea: everyone deserves access to great food,
                                    delivered quickly and affordably. What began as a small startup with just 5
                                    restaurants has grown into a thriving platform serving thousands of customers daily.
                                </p>
                                <p className="text-left  w-full  text-xs">
                                    We believe that food brings people together, and we're proud to be the bridge
                                    connecting hungry customers with passionate restaurant owners who pour their
                                    hearts into every dish.
                                </p>
                            </div>
                            <div className="text-center bg-orange-600 max-w-sm h-full px-5 py-5 rounded-2xl" >
                                <img className="h-10 w-10 " src="../public/likeingss-removebg-preview.png" alt="" />
                                <h1 className="text-xl text-left text-white ">Our Mission</h1>
                                <p className="text-white text-left  w-full text-xs">
                                    To make delicious, high-quality food accessible
                                    to everyone while supporting local restaurants
                                    and creating opportunities for delivery partners
                                    in our community.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 w-full h-full py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-center pb-15">Our Impact</h1>
                        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 justify-items-center items-center">
                            <div className=" flex flex-col  max-w-[250px] justify-center rounded-xl items-center bg-white shadow-2xl w-full h-50">
                                <img className="h-10 w-10" src="../public/icons8-account-male-96.png" alt="" />
                                <p className="text-orange-600">10,000+</p>
                                <p className="text-xs">Happy Customers</p>
                            </div>
                            <div className=" flex flex-col  max-w-[250px] justify-center rounded-xl items-center bg-white shadow-2xl w-full h-50">
                                <img className="h-10 w-10" src="../public/icons8-truck-96.png" alt="" />
                                <p className="text-orange-600">50,000+</p>
                                <p className="text-xs">Deliveries Male</p>
                            </div>
                            <div className=" flex flex-col  max-w-[250px] justify-center rounded-xl items-center bg-white shadow-2xl w-full h-50"> 
                                <img className="h-10 w-10" src="../public/icons8-time-96.png" alt="" />
                                <p className="text-orange-600 ">25 min</p>
                                <p className="text-xs">Avg Delivery Time</p>
                            </div>
                            <div className=" flex flex-col  max-w-[250px] justify-center rounded-xl items-center bg-white shadow-2xl w-full h-50">
                                <img className="h-10 w-10 " src="../public/icons8-badge-96.png" alt="" />
                                <p className="text-orange-500">500+</p>
                                <p className="text-xs">Partner Restaurents</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-center pb-15">Meet Our Team</h1>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 justify-items-center items-center">
                            <div className=" flex flex-col  max-w-[250px] justify-center rounded-xl items-center bg-white shadow-2xl w-full h-50">
                                <img className="h-10 w-10" src="../public/icons8-group-96.png" alt="" />
                                <p className="text-orange-600">Sarah Johnsson</p>
                                <p className="text-xs mt-1">CEO & Founder</p>
                                <p className="text-xs text-center w-1/2 mt-1">Passionate about connecting people with great food</p>
                            </div>
                            <div className=" flex flex-col  max-w-[250px] justify-center rounded-xl items-center bg-white shadow-2xl w-full h-50">
                                <img className="h-10 w-10" src="../public/icons8-group-96.png" alt="" />
                                <p className="text-orange-600">Mike Chen</p>
                                <p className="text-xs mt-1">Head Of Operations</p>
                                <p className="text-xs text-center w-1/2 mt-1">Ensuring every delivery is fast and fresh</p>
                            </div>
                            <div className=" flex flex-col  max-w-[250px] justify-center rounded-xl items-center bg-white shadow-2xl w-full h-50"> 
                                <img className="h-10 w-10" src="../public/icons8-group-96.png" alt="" />
                                <p className="text-orange-600 ">Lisa Rodriguez</p>
                                <p className="text-xs mt-1">Customer experience</p>
                                <p className="text-xs mt-1 text-center w-1/2">Making sure every customer has and amzing experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_Us


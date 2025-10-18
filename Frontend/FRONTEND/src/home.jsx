function Home() {

    const itemss = [
        {
            id: 1,
            src: "../public/burger.png",
            caption: "Burgers"
        },
        {
            id: 2,
            src: "../public/dietss.png",
            caption: "Healthy"
        },
        {
            id: 3,
            src: "../public/ice-cream.png",
            caption: "Desert"
        },
        {
            id: 4,
            src: "../public/pizza.png",
            caption: "Pizza",
        },
        {
            id: 5,
            src: "../public/coffee-cup.png",
            caption: "Coffee",
        },
        {
            id: 6,
            src: "../public/sushi.png",
            caption: "Sushi"
        },
    ]

    return (
        <>
            <div>
                <div className="w-full h-[400px] md:h-[600px] relative overflow-x-hidden mt-16 ">
                    <img className="h-full w-full object-cover" src="../public/dan-gold-4_jhDO54BYg-unsplash.jpg" alt="" srcset="" />


                    <div className="bg-orange-500 opacity-80 absolute inset-0 mix-blend-normal "></div>

                    <div className="absolute inset-0 flex items-center">
                        <div className="container mx-auto px-6 md:px-12 lg:px-20">
                            <div className="text-left max-w-xl">
                                <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">Delicious Food</h2>
                                <h2 className="text-white text-3xl md:text-5xl font-bold">Delivered Fast</h2>
                                <p className="text-lg md:text-xl pt-4 text-white leading-relaxed">
                                    Order from your favorite restaurant and get fresh, hot food delivered
                                    to your doorsteps in minutes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto">
                    <div className="text-center pb-20 ">
                        <h1 className="text-3xl font-bold py-10">What are you craving</h1>
                        <div className=" flex flex-col sm:flex-row flex-wrap justify-center gap-15 md:gap-25 ">
                            {itemss.map((item) => (

                                <div key={item.id} className="flex flex-col items-center ">

                                    <img src={item.src} className="h-10 w-10 object-contain mb-2" alt={item.caption} />
                                    <p className="sm">{item.caption}</p>

                                </div>

                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home
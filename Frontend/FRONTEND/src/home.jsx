function Home() {

    const boxes = [

        {
            id: 1,
            src: "../public/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
            caption1: "Balla Vista",
            caption2: "Itallian Pizza Pasta",
            time: "25-30 mins"
        },
        {
            id: 2,
            src: "../public/brooke-lark-oaz0raysASk-unsplash.jpg",
            caption1: "The Burger House",
            caption2: "American Burger Fast Food",
            time: "20-30 mins"
        },
        {
            id: 3,
            src: "../public/dan-gold-4_jhDO54BYg-unsplash.jpg",
            caption1: "Sakura Sushi",
            caption2: "Japanese Sushi",
            time: "30-40 mins"
        },
        {
            id: 4,
            src: "../public/eaters-collective-12eHC6FxPyg-unsplash.jpg",
            caption1: "Green Garden",
            caption2: "Healthy Salads",
            time: "15-25 mins"
        },
        {
            id: 5,
            src: "../public/lily-banse--YHSwy6uqvk-unsplash(1).jpg",
            caption1: "Spice Route",
            caption2: "Indian Spicy Curry",
            time: "20-40 mins"
        },
        {
            id: 6,
            src: "../public/thought-catalog-9aOswReDKPo-unsplash.jpg",
            caption1: "Taco Festa",
            caption2: "Mexican Taco",
            time: "23-44 mins"
        },


    ]

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
                                <p className="text-sm md:text-sm pt-4 text-white leading-relaxed">
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
                <div className="bg-gray-100">
                <div className="container lg:w-1/2 w-full mx-auto align-middle pb-20 pt-20">
                    <div className="flex justify-between items-center pb-5 px-5 sm:px-0">
                        <h3 className="text-sm lg:text-2xl font-bold">Popular Restaurents </h3>
                        <h3 className="lg:text-1xl text-sm  text-orange-500">View All</h3>
                    </div>
                    <div className="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-3 gap-6 sm:px-0 px-5">
                        {boxes.map((cards, index) => (
                            <div key={index} className="space-x-2 grid grid-col-3 bg-white shadow-2xl py-5 px-3 rounded-xl overflow-hidden hover:scale-105  transform transition duration-300">
                                <img src={cards.src} className="h-48 w-full object-cover rounded-lg " alt={cards.caption1} srcset="" />
                                <p className="text-lg font-semibold mt-6">{cards.caption1}</p>
                                <p className="text-gray-500 font-bold text-sm mt-2">{cards.caption2}</p>
                                <p className="text-gray-500 text-sm mt-2">{cards.time}</p>
                                <button className="w-full h-10 rounded-xl bg-orange-600 mt-3 text-white font-bold " type="button">View</button>
                            </div>
                        ))}
                    </div>

                    <div>

                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default Home

import axios from 'axios';
import { useEffect, useState } from 'react';

import { Link } from 'react-router';



function Menu() {

    const [allitems, setAllitems] = useState([])

    useEffect(() => {

        axios.get("http://localhost:4500/menu/get_items")
            .then((res) => {
                console.log(res.data)
                setAllitems(res.data.data)
            })

    }, [])

    return (
        <>
            <div>
                <div className='bg-gray-200 py-35'>
                    <p className=' text-center justify-center items-center font-bold text-3xl'>All Restaurants</p>
                    <p className='text-center justify-center items-center py-3'>Discover amazing food from local restaurant</p>

                </div>

                <div className="container lg:w-1/2 w-full mx-auto align-middle pb-20 pt-20">
                    <div className="flex justify-between items-center pb-5 px-5 sm:px-0">
                        <h3 className="text-sm lg:text-2xl font-bold">Available Restaurents </h3>
                        <h3 className="lg:text-1xl text-sm  text-orange-500">View All</h3>
                    </div>
                    <div className="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-3 gap-6 sm:px-0 px-5">
                        {allitems.map((cards, index) => (
                            <div key={index} className="space-x-2 grid grid-col-3 bg-white shadow-2xl py-5 px-3 rounded-xl overflow-hidden hover:scale-105  transform transition duration-300">
                                <img src={cards.image_url} className="h-48 w-full object-cover rounded-lg " alt={cards.caption1} srcset="" />
                                <p className="text-lg font-semibold mt-6">{cards.name}</p>
                                <p className="text-gray-500 font-bold text-sm mt-2">{cards.address}</p>
                                <p className="text-gray-500 text-sm mt-2">{cards.delivery_time}</p>
                                <Link
                                    to={`/restaurents/${cards._id}`} // Navigate to single restaurant menu
                                    className="mt-4 w-full inline-block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition"
                                >
                                    View Menu
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Menu
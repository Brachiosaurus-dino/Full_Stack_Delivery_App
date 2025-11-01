import axios from "axios"

import { useState, useEffect } from "react"
import { useParams } from "react-router"


function Menu_Items() {
    const { id } = useParams()
    const [items, setItems] = useState([])
    const [resname, setName] = useState(null)

    useEffect(() => {

        axios.get("http://localhost:4500/menu/get_items")
            .then((res) => {
                console.log("All restaurants response:", res.data);

                const allRestaurants = Array.isArray(res.data) ? res.data : res.data.data; // if your API wraps it inside .data

                if (Array.isArray(allRestaurants)) {
                    const found = allRestaurants.find(r => r._id === id);
                    if (found) {
                        setName(found);
                    } else {
                        console.warn("Restaurant not found for ID:", id);
                    }
                } else {
                    console.error("Unexpected API structure for /get_items:", res.data);
                }
            })
            .catch(err => console.error("Error fetching restaurant list:", err));



        axios.get(`http://localhost:4500/menu/get_items/${id}`)
            .then((res) => {
                console.log(res.data)
                setItems(res.data.data)
            })

    }, [id])

    return (
        <>
            <div>
                <div className="py-18 px-6 bg-gray-200">
                    {resname && (
                        <div className="h-full w-full flex flex-col items-center py-20">
                            <div className="text-center space-y-4 max-w-3xl">
                                <img
                                    src={resname.image_url}
                                    alt={resname.name}
                                    className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                                />
                                <p className="font-semibold text-3xl">{resname.name}</p>
                                <p className="text-sm text-gray-600">{resname.address}</p>
                                <p className="text-gray-500 text-sm">
                                    Cuisine: {resname.cuisine} | ⭐ {resname.rating} | ⏱ {resname.delivery_time}
                                </p>
                            </div>
                        </div>
                    )}
                </div>


                <div className="text-center py-6 font-bold text-4xl">Our Menu</div>
                <div className="flex flex-row flex-wrap lg:px-50  justify-center gap-6 py-10">
                    {items.map((item) => (
                        <div
                            key={item.item_id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 w-72"
                        >
                            <img
                                src={item.image_url}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col justify-between h-full">
                                <div>
                                    <h2 className="text-xl font-semibold mb-1 text-center">{item.name}</h2>
                                    <p className="text-gray-500 text-sm mb-2 text-center">{item.description}</p>
                                    <p className="text-orange-600 font-bold text-lg text-center">${item.price}</p>
                                    <button className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition">
                                        Add to Cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu_Items
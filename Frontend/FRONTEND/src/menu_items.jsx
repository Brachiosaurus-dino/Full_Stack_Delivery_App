import axios from "axios"

import { useState, useEffect } from "react"
import { useParams } from "react-router"


function Menu_Items() {
    const { id } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4500/menu/get_items/${id}`)
            .then((res) => {
                console.log(res.data)
                setItems(res.data.data)
            })
    }, [id])

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
                <div className="flex flex-row flex-wrap justify-center gap-6 py-10">
                    {items.map((item) => (
                        <div
                            key={item._id}
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
                                </div>
                                <button className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu_Items
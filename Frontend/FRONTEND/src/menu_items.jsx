

// Menu_Items.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useOrder } from "./Context";
import { api } from "./components/helper_api.jsx"; // your helper with getAuth

function Menu_Items() {
    const { addorder } = useOrder();
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [resname, setName] = useState(null);

    useEffect(() => {
        // Async function to fetch restaurant info and menu
        const fetchData = async () => {
            try {
                // Get all restaurants
                const restaurantsRes = await api.getAuth("/menu/get_items");
                const allRestaurants = Array.isArray(restaurantsRes) ? restaurantsRes : restaurantsRes.data;
                const foundRestaurant = allRestaurants.find(r => r._id === id);
                if (!foundRestaurant) {
                    console.warn("Restaurant not found for ID:", id);
                    return;
                }
                setName(foundRestaurant);

                // Get menu items for this restaurant
                const menuRes = await api.getAuth(`/menu/get_items/${id}`);
                const menuItems = Array.isArray(menuRes.data) ? menuRes.data : menuRes.data.data;
                setItems(menuItems);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {/* Restaurant Info */}
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

            {/* Menu */}
            <div className="text-center py-6 font-bold text-4xl">Our Menu</div>
            <div className="flex flex-row flex-wrap lg:px-50 justify-center gap-6 py-10">
                {items.map(item => (
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
                                <button
                                    onClick={() =>
                                        addorder({
                                            id: item.item_id,
                                            name: item.name,
                                            restaurant: resname.name,
                                            price: Number(item.price),
                                            image: item.image_url,
                                            qty: 1,
                                        })
                                    }
                                    className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu_Items;

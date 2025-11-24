import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function U_and_D() {
    const [allitems, setAllitems] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        delivery_time: "",
        image_url: ""
    });
    const [create, setCreate] = useState(false);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const resp = await axios.get("http://localhost:4500/menu/get_items");
            setAllitems(resp.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    // ✅ FIXED handleChange
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreate = async () => {
        try {
            await axios.post("http://localhost:4500/menu/add_item/", formData);
            fetchItems();

            // reset form
            setFormData({ name: "", address: "", delivery_time: "", image_url: "" });
            setCreate(false);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://localhost:4500/menu/update_item/${id}`, formData);
            fetchItems();
            setEditingId(null);
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (item) => {
        setEditingId(item._id);

        setFormData({
            name: item.name,
            address: item.address,
            delivery_time: item.delivery_time,
            image_url: item.image_url
        });

        window.scrollTo({ top: 0, behavior: "smooth" }); // prevent jump
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4500/menu/delete_item/${id}`);
            setAllitems(allitems.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="bg-gray-100">
                <div className="bg-gray-200 py-35 text-center">
                    <p className="font-bold text-3xl">All Restaurants</p>
                    <p className="py-3">Discover amazing food from local restaurant</p>

                    <button
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-3"
                        onClick={() => {
                            setCreate(!create);
                            setEditingId(null);
                            setFormData({ name: "", address: "", delivery_time: "", image_url: "" });
                        }}
                    >
                        {create ? "Cancel Create" : "Create New Restaurant"}
                    </button>
                </div>

                {/* Create/Edit Form */}
                {(create || editingId) && (
                    <div className="max-w-md mx-auto bg-white shadow-lg p-5 mt-5 rounded-lg">

                        
                        <h3 className="text-xl font-bold mb-3">
                            {/* Here If we are editing it shoes Edit Restaurent other wise Create restaurent */}
                            {editingId ? "Edit Restaurant" : "Create Restaurant"}
                        </h3>

                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border px-3 py-2 mb-3 rounded-lg" />
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full border px-3 py-2 mb-3 rounded-lg" />
                        <input type="text" name="delivery_time" placeholder="Delivery Time" value={formData.delivery_time} onChange={handleChange} className="w-full border px-3 py-2 mb-3 rounded-lg" />
                        <input type="text" name="image_url" placeholder="Image URL" value={formData.image_url} onChange={handleChange} className="w-full border px-3 py-2 mb-3 rounded-lg" />


                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                            onClick={() =>
                                editingId ? handleUpdate(editingId) : handleCreate()
                            }
                        >
                            {editingId ? "Update" : "Create"}
                        </button>

                        {/* ✅ Cancel Edit Button */}
                        {editingId && (
                            <button
                                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg ml-3"
                                onClick={() => {
                                    setEditingId(null);
                                    setFormData({
                                        name: "",
                                        address: "",
                                        delivery_time: "",
                                        image_url: ""
                                    });
                                }}
                            >
                                Cancel Edit
                            </button>
                        )}

                    </div>
                )}



                <div className="container lg:w-1/2 w-full mx-auto align-middle pb-20 pt-20">
                    <div className="justify-between items-center pb-5 px-5 sm:px-0">
                        <h3 className="text-sm text-center lg:text-2xl font-bold">
                            Available Restaurants
                        </h3>
                    </div>

                    <div className="sm:px-0 py-5 px-5">
                        {allitems.map((cards) => (
                            <div key={cards._id} className="space-x-2 mt-5 grid grid-col-3 bg-white shadow-2xl py-5 px-3 rounded-xl overflow-hidden hover:scale-105 transform transition duration-300">
                                <img src={cards.image_url} className="h-48 w-full object-cover rounded-lg" />
                                <p className="text-lg font-semibold mt-6">{cards.name}</p>
                                <p className="text-gray-500 font-bold text-sm mt-2">{cards.address}</p>
                                <p className="text-gray-500 text-sm mt-2">{cards.delivery_time}</p>

                                <div className="flex space-x-2 mt-4">
                                    <button className="bg-orange-400 hover:bg-yellow-300 text-white py-1 px-3 rounded-lg" onClick={(e) => { e.stopPropagation(); handleEdit(cards); }}>
                                        Edit
                                    </button>

                                    <button
                                        className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg"
                                        onClick={() => handleDelete(cards._id)}
                                    >
                                        Delete
                                    </button>
                                </div>

                                <Link
                                    to={`/restaurents/${cards._id}`}
                                    className="mt-4 w-full inline-block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition"
                                >
                                    View Menu
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default U_and_D;

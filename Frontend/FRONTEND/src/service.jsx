import React from "react";
import { Link } from "react-router";

function ServicesPage() {
    const services = [
        {
            title: "Fast Delivery",
            description: "Get your favorite meals delivered in under 30 minutes.",
            icon: "🚀",
        },
        {
            title: "Fresh & Healthy",
            description: "We ensure all food is fresh and healthy.",
            icon: "🥗",
        },
        {
            title: "Wide Variety",
            description: "Choose from hundreds of restaurants and cuisines.",
            icon: "🍔",
        },
        {
            title: "24/7 Support",
            description: "We're here to help anytime you need.",
            icon: "📞",
        },
    ];

    return (
        <div className="bg-white pt-18 text-gray-800">
            {/* Hero Section */}
            <section className="bg-orange-500 text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <p className="text-lg max-w-xl mx-auto">
                    Experience the best food delivery service in town with freshness,
                    speed, and variety.
                </p>
            </section>

            {/* Services Section */}
            <section className="py-20 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-orange-50 border border-orange-200 p-6 rounded-xl text-center hover:shadow-lg transition"
                    >
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </section>

            {/* Features CTA Section */}
            <section className="bg-orange-100 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                <p className="max-w-2xl mx-auto text-gray-700">
                    We combine fast delivery, quality food, and excellent customer
                    service to make your meal experience delightful.
                </p>
                <Link to='/restaurents'><button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                    Order Now
                </button>
                </Link>
            </section>
        </div>
    );
}
export default ServicesPage;
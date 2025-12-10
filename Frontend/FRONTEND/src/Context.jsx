import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const Ordercart = createContext()

export function Orderdetails({ children }) {

    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart-items');
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('cart-items', JSON.stringify(cart))
    }, [cart])

    // Add items
    const addorder = (item) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);


            if (existing) {
                return prev.map(i =>
                    i.id === item.id
                        ? { ...i, qty: i.qty + 1 }   
                        : i
                );
            }

            // Item not in cart → add with qty = 1
            return [...prev, { ...item, qty: 1 }];
        });
    };


    // Remove Items

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((c) => c.id !== id));
    };


    // Update Items

    const updateQty = (id, amount) => {
        setCart((prev) =>
            prev.map((c) =>
                c.id === id
                    ? { ...c, qty: Math.max(1, c.qty + amount) }
                    : c
            )
        );
    };

    // Delete cart after order

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart-items')
    }

      const cartCount = cart.reduce((total, item) => total + item.qty, 0);

    return (
        <Ordercart.Provider value={{ cart, addorder, removeFromCart, updateQty, clearCart ,cartCount }}>
            {children}
        </Ordercart.Provider>
    )
}

export function useOrder() {
    return useContext(Ordercart);
}



// // So Ordercart.Provider give access to data inside the values only to children(menu , home , contact pages) 

// // .provvider give access to data to Ordercart then children get access to the functions or values






















// import { useContext, createContext, useState } from "react";

// const Ordercart = createContext();

// export function Orderdetails({ children }) {

//     const [cart, setCart] = useState([]);

//     const addorder = (item) => {
//         setCart((prev) => [...prev, item]);
//     };

//     const removeFromCart = (id) => {
//         setCart((prev) => prev.filter((c) => c.id !== id));
//     };

//     const updateQty = (id, amount) => {
//         setCart((prev) =>
//             prev.map((c) =>
//                 c.id === id
//                     ? { ...c, qty: Math.max(1, c.qty + amount) }
//                     : c
//             )
//         );
//     };

//     return (
//         <Ordercart.Provider value={{ cart, addorder, removeFromCart, updateQty }}>
//             {children}
//         </Ordercart.Provider>
//     );
// }

// export function useOrder() {
//     return useContext(Ordercart);
// }

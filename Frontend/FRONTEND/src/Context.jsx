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

    const addorder = (item) => {
        setCart((prev) => {
            const index = prev.findIndex(i => i.id === item.id);
            if (index !== -1) {
                // Item already in cart, increment quantity
                const updatedCart = [...prev];
                updatedCart[index].quantity += 1;
                return updatedCart;
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((c) => c.id !== id));
    };
    const updateQty = (id, amount) => {
        setCart((prev) =>
            prev.map((c) =>
                c.id === id
                    ? { ...c, qty: Math.max(1, c.qty + amount) }
                    : c
            )
        );
    };

    return (
        <Ordercart.Provider value={{ cart, addorder, removeFromCart, updateQty }}>
            {children}
        </Ordercart.Provider>
    )
}

export function useOrder() {
    return useContext(Ordercart);
}



// //So Ordercart.Provider give access to data inside teh values only to children(menu , home , contact pages) 

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

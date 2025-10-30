
import axios from 'axios';
import { useEffect, useState } from 'react';



function Menu() {

    const [allitems, setAllitems] = useState(" ")

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
                <p>{console.log(allitems)}</p>
            </div>
        </>
    )
}

export default Menu
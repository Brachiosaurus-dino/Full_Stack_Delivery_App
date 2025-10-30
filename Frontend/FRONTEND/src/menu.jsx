
import axios from 'axios';
import { useEffect, useState } from 'react';



function Menu() {

    const [message, setMessage] = useState(" ")

    useEffect(() => {

        axios.get("http://localhost:4500/message")
            .then(res => { setMessage(res.data.message)})
            .catch(error => console.error('Error fetching data Cannot get data from frontend:', error));
    }, [])

    return (
        <>
            <div>
                <p className='text-5xl text-center mt-30 py-15'>{message}</p>
            </div>
        </>
    )
}

export default Menu
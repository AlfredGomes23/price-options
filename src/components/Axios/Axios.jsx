import axios from "axios";
import { useEffect, useState } from "react";
import { BallTriangle } from 'react-loader-spinner'


const Axios = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState([])

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => setPhones(data.data.data))
        setLoading(false)
    }, [])

    return (
        <div>
            {loading && <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />}
            <h1>Phones: {phones.length}</h1>
        </div>
    );
};

export default Axios;
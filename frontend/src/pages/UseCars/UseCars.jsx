import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom'

const UseCars = ({type}) => {
    // const type = useLocation();
    // console.log(type);

    useEffect(()=>{
        fetchCars();
    },[type])

    const fetchCars=async ()=>{
        try {
            const {data}= await axios.get(`http://localhost:5000/usedcars/${type}`);
            console.log(data);
        }
        catch (error) {
            console.log("Error", error);
        }
    }

    return (
        <div>
            UseCars {type} 
        </div>
    )
}

export default UseCars

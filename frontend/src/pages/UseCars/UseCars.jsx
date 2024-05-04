import React from 'react'
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom'

const UseCars = ({type}) => {
    // const type = useLocation();
    // console.log(type);
    return (
        <div>
            UseCars {type} 
        </div>
    )
}

export default UseCars

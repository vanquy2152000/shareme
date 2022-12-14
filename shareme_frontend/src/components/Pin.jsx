import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { urlFor } from '../client'

const Pin = ({ pin }) => {
    const { _id, image, postedBy, destination } = pin;

    const [postHovered, setPostHovered] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="m-2">
            <div
                // onMouseEnter={setPostHovered(true)}
                // onMouseLeave={setPostHovered(false)}
                onClick={() => navigate(`/pin-detail/${_id}`)}
                className="relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
            >
                <img src={(urlFor(image).width(250).url())} alt="user-post" className="rounded-lg w-full" />
            </div>
        </div>
    )
}

export default Pin
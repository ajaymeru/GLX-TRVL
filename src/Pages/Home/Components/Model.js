import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Model = ({ handleClick }) => {
    return (
        <div className="overlay">
            <div className="model">
                <div className="cross">
                    <FaTimes style={{ color: "white" }} size={25} onClick={handleClick} />
                </div>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt perspiciatis necessitatibus quas. Nesciunt, reiciendis fugit magnam ullam voluptatibus iusto porro?</h2>
            </div>
        </div>
    )
}

export default Model
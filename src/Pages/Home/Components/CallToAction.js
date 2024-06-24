import React, { useState } from 'react'
import Model from './Model'

const CallToAction = () => {

    const [model, setModel] = useState(false)

    const handleClick = () => {
        setModel(!model)
    }
    return (
        <>
            <secttion className="call-to-action">
                <h2>Hurry Up Book Your Tickets</h2>
                <button onClick={handleClick}>Know More</button>

            </secttion>
            {
                model && <Model handleClick={handleClick} />
            }
        </>

    )
}

export default CallToAction
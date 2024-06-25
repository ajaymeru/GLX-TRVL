import React from 'react'
import SingleCard from './SingleCard'

const Card = () => {

  const data = [
    {
      id: 1,
      hading: "Basic",
      line1: "5 Lakhs",
      line2: "No unlimited Access!",
      line3: "No Food",
    },
    {
      id: 1,
      hading: "Medium",
      line1: "10 Lakhs",
      line2: "unlimited Access!",
      line3: "No Food",
    },
    {
      id: 1,
      hading: "Premium",
      line1: "15 Lakhs",
      line2: "unlimited Access!",
      line3: "Food",
    }
  ]

  return (
    <>
      <h1 className='heading'>Pricing</h1>

      <section className="cards">
        {
          data.map((item) => {
            const {id, heading, line1, line2, line3} = item
            return (
              <SingleCard heading={heading} line1={line1} line2={line2} line3={line3} />
            )
          })
        }
      </section>
    </>
  )
}

export default Card
import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Header from '../../Components/Header/Header'
import Footer from "../../Components/Footer/Footer"
import Card from './Component/Card'
import "./PricingStyles.css"

const Pricing = () => {
    return (
        <>
            <Navbar />
            <Header heading="pricing page" />
            <Card />
            <Footer />
        </>
    )
}

export default Pricing
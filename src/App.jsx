import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Campain from './Components/Campain/Campain'
import OurImpact from './Components/Our Impact/OurImpact'
import PlantTree from './Components/Plant-Tree/PlantTree'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Campain/>
        <OurImpact/>
        <PlantTree/>
        <Footer/>
    </div>
  )
}

export default App

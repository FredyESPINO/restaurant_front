import "./App.css"
import React from 'react'
import {AboutUs,Chef,Findus,Footer,Gallery,Header,Intro,Laurels,Menu,} from "./container"
import {Navbar} from "./components"

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
      {/* <Intro /> */}
      
      
    </div>
  )
}

export default App
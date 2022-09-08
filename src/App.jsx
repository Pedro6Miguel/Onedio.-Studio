import React from "react"
import Navbar from "../components/Navbar/index"
import Header from "../components/Header/index"
import Record from "../components/Record/index"
import Lyrics from "../components/Lyrics/index"
import Info from "../components/Info/index"
import Location from "../components/Location/index"
import Contact from "../components/Contact/index"
import Footer from "../components/Footer/index"

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="Wide">
        <Header />
        <Record />
        <Lyrics />
        <Info />
        {/*<Location />*/}
        <Contact />
      </div>
      <Footer />

    </div>
  )
}

export default App

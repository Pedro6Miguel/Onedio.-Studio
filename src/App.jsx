import React from "react"
import Navbar from "../components/Navbar/index"
import Header from "../components/Header/index"
import Record from "../components/Record/index"
import MusicPlayer from "../components/MusicPlayer/index"
import Lyrics from "../components/Lyrics/index"
import Info from "../components/Info/index"
import Location from "../components/Location/index"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Record />
      <MusicPlayer />
      <Lyrics />
      <Info />
      <Location />
    </div>
  )
}

export default App

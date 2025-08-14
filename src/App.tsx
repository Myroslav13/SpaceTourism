import { useEffect, useState, useRef } from "react"
import './App.css'
import Destination from './Components/Destination'
import Navigation from './Components/Navigation'
import HomePage from './Components/HomePage'
import CrewMember from './Components/CrewMember'
import Technology from "./Components/Technology"

function App() {
  const [navigationElement, setNavigationElement] = useState<1|2|3|4>(1)

  return (
    <>
      <Navigation navigationElement = {navigationElement} setNavigationElement={setNavigationElement}></Navigation>
      {navigationElement === 1? <HomePage setNavigationElement={setNavigationElement}></HomePage>:<></>}
      {navigationElement === 2? <Destination></Destination>:<></>}
      {navigationElement === 3? <CrewMember></CrewMember>:<></>}
    </>
  )
}

export default App

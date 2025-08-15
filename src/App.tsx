import { useEffect, useState, useRef } from "react"
import './App.css'
import Destination from './Components/Destination'
import Navigation from './Components/Navigation'
import HomePage from './Components/HomePage'
import CrewMember from './Components/CrewMember'
import Technology from "./Components/Technology"

function App() {
  const [navigationElement, setNavigationElement] = useState<1|2|3|4>(1)
  const divClassArray = ["div-home-page", "div-destination-page", "div-crew-page", "div-technology-page"]
  const divClassDataArray = ["align-items-end justify-content-between", "align-items-center justify-content-center"]

  const [columnCount, setColumnCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
      const updateCount = () => {
          const gap = 18
          const columnWidth = 50 + gap

          if (!containerRef.current) return;

          const containerWidth = containerRef.current.offsetWidth
          const newCount = Math.ceil((containerWidth / columnWidth))

          setColumnCount(newCount)
      }

      updateCount()

      window.addEventListener("resize", updateCount)

      return () => {
          window.removeEventListener("resize", updateCount)
      }
  }, [])

  return (
    <>
      <Navigation navigationElement = {navigationElement} setNavigationElement={setNavigationElement}></Navigation>
      <div className={`${divClassArray[navigationElement-1]} d-flex align-items-center`}>
        <div ref={containerRef} className="container text-start text-white">
            <div className={`row ${divClassDataArray[navigationElement-1]} min-vh-100 position-relative`}>
                {navigationElement === 1? <HomePage setNavigationElement={setNavigationElement}></HomePage>:<></>}
                {navigationElement === 2? <Destination></Destination>:<></>}
                {navigationElement === 3? <CrewMember></CrewMember>:<></>}
                {navigationElement === 4? <Technology></Technology>:<></>}

                <div className="d-flex position-absolute top-0" style={{ zIndex: 0 }}>
                    {Array.from({ length: columnCount }).map((_, i) => {
                        const marginDivRight = i === columnCount - 1 ? "0px" : "18px"
                        
                        return (
                            <div
                                key={i}
                                style={{
                                    width: "50px",
                                    height: "100vh",
                                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                                    marginRight: marginDivRight
                                }}
                            ></div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App

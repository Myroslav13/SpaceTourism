import { useEffect, useState, useRef } from "react"
import './App.css'
import Destination from './Components/Destination'
import Navigation from './Components/Navigation'
import HomePage from './Components/HomePage'
import CrewMember from './Components/CrewMember'
import Technology from "./Components/Technology"
import type { DestinationType, TechnologyType, MemberType } from "./interfaces"

function App() {
    const [navigationElement, setNavigationElement] = useState<1|2|3|4>(1)
    const divClassArray = ["div-home-page", "div-destination-page", "div-crew-page", "div-technology-page"]

    const [columnCount, setColumnCount] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const [crewData, setCrewData] = useState<MemberType[]>([])
    const [destinationsData, setDestinationData] = useState<DestinationType[]>([]) 
    const [technologyData, setTechnologyData] = useState<TechnologyType[]>([]) 

    useEffect(() => {
        // Data fetch
        fetch("./data.json").then(response => response.json()).then(data => {
            setCrewData(data.crew)
            setDestinationData(data.destinations)
            setTechnologyData(data.technology)
        })

        // Column number calculation
        const updateCount = () => {
            const gap = 18
            const columnWidth = 50 + gap

            if (!containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth
            const newCount = Math.floor((containerWidth / columnWidth))

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
            <div className={`${divClassArray[navigationElement-1]} position-relative`}>
                <Navigation navigationElement = {navigationElement} setNavigationElement={setNavigationElement}></Navigation>
                <div ref={containerRef} className="container text-start text-white d-flex align-items-end" style={{ paddingBottom: "50px"}}>
                    <div className="row align-items-center justify-content-between position-relative" style={{height: "calc(100vh - 106px)"}}>
                        {navigationElement === 1? <HomePage setNavigationElement={setNavigationElement}></HomePage>:<></>}
                        {navigationElement === 2? <Destination destinationsData={destinationsData}></Destination>:<></>}
                        {navigationElement === 3? <CrewMember crewData={crewData}></CrewMember>:<></>}
                        {navigationElement === 4? <Technology technologyData={technologyData}></Technology>:<></>}
                    </div>

                    <div className="d-flex position-absolute top-0 z-0 align-items-center justify-content-between">
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
        </>
    )
}

export default App

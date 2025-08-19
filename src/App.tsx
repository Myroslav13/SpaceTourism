import { useEffect, useState, useRef } from "react"
import './App.css'
import Destination from './Components/Destination'
import Navigation from './Components/Navigation'
import HomePage from './Components/HomePage'
import CrewMember from './Components/CrewMember'
import Technology from "./Components/Technology"
import type { DestinationType, TechnologyType, MemberType } from "./interfaces"

function App() {
    const [navigationElement, setNavigationElement] = useState<0|1|2|3>(0)
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
            let newColumnCount = 19

            if (window.innerWidth < 1400) newColumnCount = 17
            if (window.innerWidth < 1200) newColumnCount = 14
            if (window.innerWidth < 992) newColumnCount = 11
            if (window.innerWidth < 768) newColumnCount = 8
            if (window.innerWidth < 576) newColumnCount = 4
    
            setColumnCount(newColumnCount)
        }

        updateCount()

        window.addEventListener("resize", updateCount)

        return () => {
            window.removeEventListener("resize", updateCount)
        }
    }, [])

    return (
        <>
            <div className={`${divClassArray[navigationElement]} position-relative`}>
                <Navigation navigationElement={navigationElement} setNavigationElement={setNavigationElement}></Navigation>
                <div ref={containerRef} className={`${(navigationElement === 3 && window.innerWidth < 992) ? "": "container"} text-start text-white`}>
                    {navigationElement === 0 ? <HomePage setNavigationElement={setNavigationElement}></HomePage> : <></>}
                    {navigationElement === 1 ? <Destination destinationsData={destinationsData}></Destination> : <></>}
                    {navigationElement === 2 ? <CrewMember crewData={crewData}></CrewMember> : <></>}
                    {navigationElement === 3 ? <Technology technologyData={technologyData}></Technology> : <></>}
                    
                    <div className="div-background-lines d-flex position-fixed top-0 align-items-center" style={{ zIndex: "9999", pointerEvents: "none", width: "100vw", left: 0, justifyContent: "center" }}>
                        {Array.from({ length: columnCount }).map((_, i) => {
                            const marginDivRight = i === columnCount - 1 ? "0px" : "18px";
                            const columnWidth = window.innerWidth < 576 ? "70px" : "50px";
                            return (
                            <div
                                key={i}
                                style={{
                                width: columnWidth,
                                height: "100vh",
                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                marginRight: marginDivRight,
                                }}
                            ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

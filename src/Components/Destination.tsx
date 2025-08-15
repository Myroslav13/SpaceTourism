import { useEffect, useState } from "react"
import type { DestinationType } from "../interfaces"

function Destination() {
    const [destinationsData, setDestinationData] = useState<DestinationType[]>([]) 
    const [planetPicked, setPlanetPicked] = useState(0)

    useEffect(() => {
        fetch("./data.json").then(response => response.json()).then(data => setDestinationData(data.destinations))
    }, [])    

    return (
        <>
            <h2 className="fw-lighter mt-5 pt-5" style={{fontFamily: "Barlow Condensed", fontSize: "28px"}}><span style={{color: "gray", fontWeight: "bold"}}>01</span> PICK YOUR DESTINATION</h2>

            <div className="col-6 mb-4">
                <img src={`${destinationsData[planetPicked]?.images.png}`} width={400}></img>
            </div>

            <div className="col-4 mb-4">
                <div className="d-flex gap-3">
                    {destinationsData.map((el, index) => (
                        <p className={`${planetPicked === index ? "border-bottom border-2" : ""} text-uppercase`} onClick={() => setPlanetPicked(index)} style={{cursor: "pointer", zIndex: "1", fontFamily: "Barlow Condensed", fontSize: "16px"}}>{el.name}</p>
                    ))}
                </div>

                <h1 style={{fontFamily: "Bellefair", fontSize: "96px"}} className="pt-2">{destinationsData[planetPicked]?.name}</h1>
                <p className="p-description py-3">{destinationsData[planetPicked]?.description}</p>

                <hr className="pb-3"></hr>

                <div className="d-flex justify-content-between">
                    <div>
                        <h3 className="h3-info">AVG. DISTANCE</h3>
                        <p className="p-info">{destinationsData[planetPicked]?.distance}</p>
                    </div>
                    <div>
                        <h3 className="h3-info">EST. TRAVEL TIME</h3>
                        <p className="p-info">{destinationsData[planetPicked]?.travel}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination

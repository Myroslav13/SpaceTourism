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
            <div className="col-6">
                <h2>01 PICK YOUR DESTINATION</h2>
                <img src={`${destinationsData[planetPicked]?.images.png}`} width={400}></img>
            </div>

            <div className="col-4">
                <div className="d-flex gap-3">
                    {destinationsData.map((el, index) => (
                        <p className={`${planetPicked === index ? "border-bottom border-2" : ""}`} onClick={() => setPlanetPicked(index)} style={{cursor: "pointer", zIndex: "1"}}>{el.name}</p>
                    ))}
                </div>

                <h1>{destinationsData[planetPicked]?.name}</h1>
                <p>{destinationsData[planetPicked]?.description}</p>

                <hr></hr>

                <div className="d-flex justify-content-between">
                    <div>
                        <h3>AVG. DISTANCE</h3>
                        <p>{destinationsData[planetPicked]?.distance}</p>
                    </div>
                    <div>
                        <h3>EST. TRAVEL TIME</h3>
                        <p>{destinationsData[planetPicked]?.travel}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination

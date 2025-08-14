import { useEffect, useState } from "react"
import type { DestinationType } from "../interfaces"

function Destination() {
    const [destinationsData, setDestinationData] = useState<DestinationType[]>([]) 

    useEffect(() => {
        fetch("./data.json").then(response => response.json()).then(data => setDestinationData(data.destinations))
    }, [])    

    return (
        <>
            <div>
                {
                    destinationsData.map((el, index) => (
                        <div key={index} className="container text-center">
                            <div className="row align-items-start">
                                <div className="col-6">
                                    <h2>PICK YOUR DESTINATION</h2>
                                    <img src={`${el.images.png}`} width={400}></img>
                                </div>

                                <div className="col-4">
                                    <h1>{el.name}</h1>
                                    <p>{el.description}</p>

                                    <hr></hr>

                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h3>AVG. DISTANCE</h3>
                                            <p>{el.distance}</p>
                                        </div>
                                        <div>
                                            <h3>EST. TRAVEL TIME</h3>
                                            <p>{el.travel}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Destination

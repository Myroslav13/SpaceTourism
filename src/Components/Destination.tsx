import { useState } from "react"
import type { DestinationType } from "../interfaces"

interface Props {
    destinationsData: DestinationType[],
}

function Destination({destinationsData}: Props) {
    const [planetPicked, setPlanetPicked] = useState(0)

    return (
        <div className="row align-items-center justify-content-between position-relative" style={{height: "calc(100vh - 160px)"}}>
            <h2 className="h2-chapter-headline fw-lighter text-uppercase position-static position-lg-absolute top-0"><span style={{color: "gray", fontWeight: "bold"}}>01</span> Pick your destination</h2>

            <div className="col-12 col-md d-flex justify-content-center justify-content-lg-start ps-3 ps-lg-0 m-0 p-0">
                <img src={`${destinationsData[planetPicked]?.images.png}`} className="img-planet" alt={`${destinationsData[planetPicked]?.name}`} title={`${destinationsData[planetPicked]?.name}`}></img>
            </div>

            <div className="col-12 col-md pe-0 pe-lg-5">
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-3 mt-lg-0">
                    {destinationsData.map((el, index) => (
                        <p className={`${planetPicked === index ? "border-bottom border-2" : ""} text-uppercase`} onClick={() => setPlanetPicked(index)} style={{cursor: "pointer", zIndex: "1", fontFamily: "Barlow Condensed", fontSize: "16px"}}>{el.name}</p>
                    ))}
                </div>

                <h1 className="h1-planet pt-0 pt-lg-2 text-center text-lg-start">{destinationsData[planetPicked]?.name}</h1>
                <p className="p-description py-1 py-lg-3 text-center text-lg-start">{destinationsData[planetPicked]?.description}</p>

                <hr className="pb-2 pb-lg-3"></hr>

                <div className="d-flex justify-content-center gap-5 text-center text-lg-start justify-content-lg-between">
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
        </div>
    )
}

export default Destination

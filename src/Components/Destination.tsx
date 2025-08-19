import { useState } from "react"
import type { DestinationType } from "../interfaces"

interface Props {
    destinationsData: DestinationType[],
}

function Destination({destinationsData}: Props) {
    const [planetPicked, setPlanetPicked] = useState(0)

    return (
        <div className="row align-items-start justify-content-between position-relative pt-4 pt-md-0" style={{ height: "calc(100vh - 110px)" }}>
            <h2 className="h2-chapter-headline fw-lighter text-uppercase position-static position-lg-absolute top-0 text-center text-md-start pt-0 pt-md-4"><span style={{color: "gray", fontWeight: "bold"}}>01</span> Pick your destination</h2>
        
            <div className="col-12 col-md d-flex justify-content-center justify-content-lg-start ps-0 ps-lg-3 m-0 p-0 my-3">
                <img src={`${destinationsData[planetPicked]?.images.png}`} className="img-planet" alt={`${destinationsData[planetPicked]?.name}`} title={`${destinationsData[planetPicked]?.name}`}></img>
            </div>

            <div className="col-12 col-md px-1 px-md-0 pe-0 pe-lg-3 pe-xl-4">
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-3 mt-lg-0">
                    {destinationsData.map((el, index) => (
                        <p className={`p-destination ${planetPicked === index ? "border-bottom border-2" : ""} text-uppercase`} onClick={() => setPlanetPicked(index)}>{el.name}</p>
                    ))}
                </div>

                <h1 className="h1-planet pt-0 pt-lg-2 text-center text-lg-start text-uppercase">{destinationsData[planetPicked]?.name}</h1>
                <p className="p-description py-1 py-lg-3 px-4 px-lg-0 text-center text-lg-start">{destinationsData[planetPicked]?.description}</p>

                <hr className="pb-2 pb-lg-3 mx-auto"></hr>

                <div className="d-block d-sm-flex justify-content-center gap-5 text-center text-lg-start justify-content-lg-between">
                    <div>
                        <h3 className="h3-info">AVG. DISTANCE</h3>
                        <p className="p-info">{destinationsData[planetPicked]?.distance}</p>
                    </div>
                    <div>
                        <h3 className="h3-info">EST. TRAVEL TIME</h3>
                        <p className="p-info mb-0">{destinationsData[planetPicked]?.travel}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination

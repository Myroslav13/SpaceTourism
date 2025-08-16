import { useState } from "react"
import type { TechnologyType } from "../interfaces"

interface Props {
    technologyData: TechnologyType[],
}

function Technology({technologyData}: Props) {
    const [currentTechnology, setCurrentTechnology] = useState(0)

    return (
        <div className="row align-items-center justify-content-between position-relative" style={{ height: "calc(100vh - 110px)" }}>
            <h2 className="h2-chapter-headline fw-lighter text-uppercase position-absolute top-0"><span style={{color: "gray", fontWeight: "bold"}}>03</span> Space launch 101</h2>
            
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <img src={`${technologyData[currentTechnology]?.images.portrait}`} className="d-block d-lg-none img-fluid" style={{height: "280px"}} alt={`${technologyData[currentTechnology]?.name}`} title={`${technologyData[currentTechnology]?.name}`}></img>

                <div className="d-flex gap-3 gap-lg-0 flex-lg-column justify-content-center justify-content-lg-start z-2 me-0 me-lg-5">
                    <button className={`rounded-circle btn-technology-switch mb-3 ${currentTechnology === 0? "active":""}`} onClick={() => setCurrentTechnology(0)}>1</button>
                    <button className={`rounded-circle btn-technology-switch mb-3 ${currentTechnology === 1? "active":""}`} onClick={() => setCurrentTechnology(1)}>2</button>
                    <button className={`rounded-circle btn-technology-switch ${currentTechnology === 2? "active":""}`} onClick={() => setCurrentTechnology(2)}>3</button>
                </div>

                <div className="row d-flex gap-5 align-items-center justify-content-start p-0 w-100">
                    <div className="col-12 col-lg-6">
                        <h2 className="text-uppercase fw-lighter text-center text-lg-start" style={{color: "gray", fontFamily: "Bellefair", fontSize: "32px"}}>The Terminology...</h2>
                        <h1 className="pt-2 text-uppercase text-center text-lg-start" style={{fontFamily: "Bellefair", fontSize: "56px"}}>{technologyData[currentTechnology]?.name}</h1>
                        <p className="p-description pt-3 mb-0 text-center text-lg-start">{technologyData[currentTechnology]?.description}</p>
                    </div>

                    <div className="col-12 col-lg-auto p-0">
                        <img src={`${technologyData[currentTechnology]?.images.portrait}`} className="d-none d-lg-block img-fluid" style={{maxHeight: "480px", maxWidth: "550px"}} alt={`${technologyData[currentTechnology]?.name}`} title={`${technologyData[currentTechnology]?.name}`}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology

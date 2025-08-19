import { useState } from "react"
import type { TechnologyType } from "../interfaces"

interface Props {
    technologyData: TechnologyType[],
}

function Technology({technologyData}: Props) {
    const [currentTechnology, setCurrentTechnology] = useState(0)

    return (
        <>
            <div className="row align-items-center justify-content-between position-relative" style={{ height: "calc(100vh - 110px)" }}>
                <div className="h2-chapter-headline-padding-left">
                    <h2 className={`h2-chapter-headline fw-lighter text-uppercase text-center text-md-start pt-4`}><span style={{color: "gray", fontWeight: "bold"}}>03</span> Space launch 101</h2>
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5 p-0">
                    <img src={`${technologyData[currentTechnology]?.images.landscape}`} className="d-block d-lg-none p-0 m-0 img-technology" style={{width: "100%"}} alt={`${technologyData[currentTechnology]?.name}`} title={`${technologyData[currentTechnology]?.name}`}></img>

                    <div className="d-flex gap-3 gap-lg-0 flex-lg-column justify-content-center justify-content-lg-start z-2 me-0 me-lg-5 mt-3 mt-lg-0 btn-current-technology-padding-left">
                        <button className={`rounded-circle btn-technology-switch mb-3 ${currentTechnology === 0? "active":""}`} onClick={() => setCurrentTechnology(0)}>1</button>
                        <button className={`rounded-circle btn-technology-switch mb-3 ${currentTechnology === 1? "active":""}`} onClick={() => setCurrentTechnology(1)}>2</button>
                        <button className={`rounded-circle btn-technology-switch ${currentTechnology === 2? "active":""}`} onClick={() => setCurrentTechnology(2)}>3</button>
                    </div>

                    <div className="row d-flex gap-5 align-items-center justify-content-start p-0 w-100">
                        <div className={`${window.innerWidth < 992? "container":""} col-12 col-lg-5 col-xl-6`}>
                            <h2 className="h2-terminology text-uppercase fw-lighter text-center text-lg-start">The Terminology...</h2>
                            <h1 className="h1-technology-name pt-2 text-uppercase text-center text-lg-start">{technologyData[currentTechnology]?.name}</h1>
                            <p className="p-description pt-1 mb-0 text-center text-lg-start px-3 px-md-5 pb-3 pb-lg-0 px-lg-0">{technologyData[currentTechnology]?.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={`${technologyData[currentTechnology]?.images.portrait}`} className="d-none d-lg-block position-absolute end-0 top-50 translate-middle-y mt-5" style={{height: "508px", width: "508px"}} alt={`${technologyData[currentTechnology]?.name}`} title={`${technologyData[currentTechnology]?.name}`}></img>
        </>
    )
}

export default Technology

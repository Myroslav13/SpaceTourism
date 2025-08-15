import type { TechnologyType } from "../interfaces"

interface Props {
    technologyData: TechnologyType[],
}

function Technology({technologyData}: Props) {
    return (
        <>
            <h2 className="fw-lighter text-uppercase position-absolute top-0" style={{fontFamily: "Barlow Condensed", fontSize: "28px"}}><span style={{color: "gray", fontWeight: "bold"}}>03</span> Space launch 101</h2>

            <div className="col-12 col-md pe-5">
            </div>

            <div className="col-12 col-md">
                <img src={`${technologyData[0]?.images.portrait}`} width={430}></img>
            </div>
        </>
    )
}

export default Technology

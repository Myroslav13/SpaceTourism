import { useState } from "react"
import type { MemberType } from "../interfaces"

interface Props {
    crewData: MemberType[],
}

function CrewMember({crewData}: Props) {  
    const [crewMember, setCrewMember] = useState(0)

    return (
        <div className="row align-items-start justify-content-between position-relative pt-4 pt-md-0" style={{ height: "calc(100vh - 110px)" }}>
            <h2 className="h2-chapter-headline fw-lighter text-uppercase position-absolute top-0 text-center text-md-start pt-4"><span style={{color: "gray", fontWeight: "bold"}}>02</span> Meet your crew</h2>

            <div className="mt-5">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-lg-5 col-xl-7 text-center text-lg-start">
                        <h2 className="h2-post text-uppercase fw-lighter mt-3 mt-md-0">{crewData[crewMember]?.role}</h2>
                        <h1 className="h1-member-name pt-2 text-uppercase">{crewData[crewMember]?.name}</h1>
                        <p className="p-description pt-3 pt-lg-0 px-2 px-lg-0">{crewData[crewMember]?.bio}</p>
                    </div>

                    <div className="d-flex d-lg-none gap-3 justify-content-center w-100 ms-2 z-3">
                        <button className={`btn-carousel ${crewMember === 0? "active" : ""} rounded-circle p-0`} onClick={() => setCrewMember(0)}></button>
                        <button className={`btn-carousel ${crewMember === 1? "active" : ""} rounded-circle p-0`} onClick={() => setCrewMember(1)}></button>
                        <button className={`btn-carousel ${crewMember === 2? "active" : ""} rounded-circle p-0`} onClick={() => setCrewMember(2)}></button>
                        <button className={`btn-carousel ${crewMember === 3? "active" : ""} rounded-circle p-0`} onClick={() => setCrewMember(3)}></button>
                    </div>

                    <div className="col-12 col-lg-auto pe-0 pe-lg-3 pe-xl-4 d-none d-lg-block justify-content-center img-crew-member-container">
                        <img src={`${crewData[crewMember]?.images.png}`} className={`${crewMember < 2? "img-crew-member-1" : `img-crew-member-${crewMember}`}`} alt={`${crewData[0].name}`} title={`${crewData[0].name}`}></img>
                    </div>
                </div>

                <div className="d-none d-lg-flex gap-3 justify-content-start w-100">
                    <button className={`btn-carousel ${crewMember === 0? "active" : ""} rounded-circle p-0`} onClick={() => setCrewMember(0)}></button>
                    <button className={`btn-carousel ${crewMember === 1? "active" : ""} rounded-circle p-0`} onClick={() => setCrewMember(1)}></button>
                    <button className={`btn-carousel ${crewMember === 2? "active" : ""} rounded-circle p-0`} onClick={() => setCrewMember(2)}></button>
                    <button className={`btn-carousel ${crewMember === 3? "active" : ""} rounded-circle p-0`} onClick={() => setCrewMember(3)}></button>
                </div>
                
                <div className="col-12 d-flex d-lg-none justify-content-center position-absolute bottom-0">
                    <img src={`${crewData[crewMember]?.images.png}`} className={`${crewMember < 2? "img-crew-member-1" : `img-crew-member-${crewMember}`}`} alt={`${crewData[0].name}`} title={`${crewData[0].name}`}></img>
                </div>
            </div>
        </div>
    )
}

export default CrewMember

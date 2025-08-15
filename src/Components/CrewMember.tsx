import type { MemberType } from "../interfaces"

interface Props {
    crewData: MemberType[],
}

function CrewMember({crewData}: Props) {  

    return (
         <>
            <h2 className="fw-lighter text-uppercase position-absolute top-0" style={{fontFamily: "Barlow Condensed", fontSize: "28px"}}><span style={{color: "gray", fontWeight: "bold"}}>02</span> Meet your crew</h2>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-7">
                                <h2 className="text-uppercase fw-lighter" style={{color: "gray", fontFamily: "Bellefair", fontSize: "32px"}}>{crewData[0]?.role}</h2>
                                <h1 className="pt-2 text-uppercase" style={{fontFamily: "Bellefair", fontSize: "56px"}}>{crewData[0]?.name}</h1>
                                <p className="p-description py-3">{crewData[0]?.bio}</p>
                            </div>

                            <div className="col-auto pe-5">
                                <img src={`${crewData[0]?.images.png}`} width={350} height={480}></img>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-7">
                                <h2 className="text-uppercase fw-lighter" style={{color: "gray", fontFamily: "Bellefair", fontSize: "32px"}}>{crewData[1]?.role}</h2>
                                <h1 className="pt-2 text-uppercase" style={{fontFamily: "Bellefair", fontSize: "56px"}}>{crewData[1]?.name}</h1>
                                <p className="p-description py-3">{crewData[1]?.bio}</p>
                            </div>

                            <div className="col-auto pe-5">
                                <img src={`${crewData[1]?.images.png}`} width={350} height={480}></img>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-7">
                                <h2 className="text-uppercase fw-lighter" style={{color: "gray", fontFamily: "Bellefair", fontSize: "32px"}}>{crewData[2]?.role}</h2>
                                <h1 className="pt-2 text-uppercase" style={{fontFamily: "Bellefair", fontSize: "56px"}}>{crewData[2]?.name}</h1>
                                <p className="p-description py-3">{crewData[2]?.bio}</p>
                            </div>

                            <div className="col-auto pe-5">
                                <img src={`${crewData[2]?.images.png}`} width={400} height={480}></img>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-7">
                                <h2 className="text-uppercase fw-lighter" style={{color: "gray", fontFamily: "Bellefair", fontSize: "32px"}}>{crewData[3]?.role}</h2>
                                <h1 className="pt-2 text-uppercase" style={{fontFamily: "Bellefair", fontSize: "56px"}}>{crewData[3]?.name}</h1>
                                <p className="p-description py-3">{crewData[3]?.bio}</p>
                            </div>

                            <div className="col-auto pe-5">
                                <img src={`${crewData[3]?.images.png}`} width={430} height={480}></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-indicators gap-3 justify-content-start w-100 ms-2 ps-1">
                    <button type="button" className="active rounded-circle" style={{width: "10px", height: "10px"}} data-bs-target="#carouselExample" data-bs-slide-to="0"></button>
                    <button type="button" className="rounded-circle" style={{width: "10px", height: "10px"}} data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
                    <button type="button" className="rounded-circle" style={{width: "10px", height: "10px"}} data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
                    <button type="button" className="rounded-circle" style={{width: "10px", height: "10px"}} data-bs-target="#carouselExample" data-bs-slide-to="3"></button>
                </div>
            </div>
        </>
    )
}

export default CrewMember

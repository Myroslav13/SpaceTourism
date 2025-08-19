import { useEffect, useState } from "react"

interface Props {
    navigationElement: 0|1|2|3,
    setNavigationElement: React.Dispatch<React.SetStateAction<0|1|2|3>>,
}

function Navigation({navigationElement, setNavigationElement}:Props) {
    const [modalWindowOpen, setModalWindowOpen] = useState(false)

    // Burger-menu closing after reaching 768px-width screen size
    useEffect(() => {
        if(window.innerWidth > 768) {
            setModalWindowOpen(false)
        }
    })

    return(
        <>
            <div className={`modal ${modalWindowOpen === true ? "d-flex d-md-none justify-content-end m-0" : ""}`} tabIndex={-1}>
                <div className="modal-dialog h-100 m-0" style={{width: "70%", backgroundColor: "rgba(11, 13, 23, 0.15)", backdropFilter: "blur(20px)"}}>
                    <div className="modal-content rounded-0">
                        <div className="modal-header border-0 p-4 pb-0 justify-content-end">
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalWindowOpen(false)}><img src="./assets/shared/icon-close.svg"></img></button>
                        </div>

                        <div className="modal-body mt-4 pe-0">
                            <ul className="navbar-nav" style={{fontFamily: "Barlow Condensed"}}>
                                <li className="nav-item py-1">
                                    <a className={`nav-link text-uppercase text-white text-start ps-4 ${navigationElement === 0 ? "border-end border-3" : ""}`} href="#" onClick={()=> setNavigationElement(0)}><b>00</b> Home</a>
                                </li>
                                <li className="nav-item py-1">
                                    <a className={`nav-link text-uppercase text-white text-start ps-4 ${navigationElement === 1 ? "border-end border-3" : ""}`} href="#" onClick={()=> setNavigationElement(1)}><b>01</b> Destination</a>
                                </li>
                                <li className="nav-item py-1">
                                    <a className={`nav-link text-uppercase text-white text-start ps-4 ${navigationElement === 2 ? "border-end border-3" : ""}`} href="#" onClick={()=> setNavigationElement(2)}><b>02</b> Crew</a>
                                </li>
                                <li className="nav-item py-1">
                                    <a className={`nav-link text-uppercase text-white text-start ps-4 ${navigationElement === 3 ? "border-end border-3" : ""}`} href="#" onClick={()=> setNavigationElement(3)}><b>03</b> Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-md w-100 pt-4 z-2">
                <div className="container-fluid p-0">
                    <img src="./assets/shared/logo.svg" className="ps-5" alt="logo"></img>

                    <button className="navbar-toggler navbar-dark me-5" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setModalWindowOpen(true)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse p-0 m-0" id="navbarNav">
                        <div className="d-flex ms-auto">
                            <hr className="d-none d-xl-block" style={{border: "1px solid rgba(255, 255, 255, 0.5)", width: "400px", alignSelf: "center", marginRight: "-20px"}}></hr>

                            <ul className="navbar-nav gap-3 px-5 flex-fill flex-md-none" style={{backgroundColor: "rgba(255, 255, 255, 0.05)", fontFamily: "Barlow Condensed"}}>
                                <li className={`nav-item py-3 ${navigationElement === 0 ? "border-bottom border-3" : ""}`}>
                                    <a className="nav-link text-uppercase text-white text-center" href="#" onClick={()=> setNavigationElement(0)}><b>00</b> Home</a>
                                </li>
                                <li className={`nav-item py-3 ${navigationElement === 1 ? "border-bottom border-3" : ""}`}>
                                    <a className="nav-link text-uppercase text-white text-center" href="#" onClick={()=> setNavigationElement(1)}><b>01</b> Destination</a>
                                </li>
                                <li className={`nav-item py-3 ${navigationElement === 2 ? "border-bottom border-3" : ""}`}>
                                    <a className="nav-link text-uppercase text-white text-center" href="#" onClick={()=> setNavigationElement(2)}><b>02</b> Crew</a>
                                </li>
                                <li className={`nav-item py-3 ${navigationElement === 3 ? "border-bottom border-3" : ""}`}>
                                    <a className="nav-link text-uppercase text-white text-center" href="#" onClick={()=> setNavigationElement(3)}><b>03</b> Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation

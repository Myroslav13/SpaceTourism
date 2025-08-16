interface Props {
    navigationElement: 1|2|3|4,
    setNavigationElement: React.Dispatch<React.SetStateAction<1|2|3|4>>,
}

function Navigation({navigationElement, setNavigationElement}:Props) {
    return(
        <nav className="navbar navbar-expand-sm w-100 pt-4 z-2">
            <div className="container-fluid p-0">
                <img src="./assets/shared/logo.svg" className="ps-5" alt="logo"></img>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse p-0 m-0" id="navbarNav">
                    <div className="d-flex ms-auto">
                        <hr className="d-none d-xl-block" style={{border: "1px solid rgba(255, 255, 255, 0.5)", width: "400px", alignSelf: "center", marginRight: "-20px"}}></hr>

                        <ul className="navbar-nav gap-3 px-5" style={{backgroundColor: "rgba(255, 255, 255, 0.05)", fontFamily: "Barlow Condensed"}}>
                            <li className={`nav-item py-3 ${navigationElement === 1 ? "border-bottom border-3" : ""}`}>
                                <a className="nav-link text-uppercase text-white" href="#" onClick={()=> setNavigationElement(1)}><b>00</b> Home</a>
                            </li>
                            <li className={`nav-item py-3 ${navigationElement === 2 ? "border-bottom border-3" : ""}`}>
                                <a className="nav-link text-uppercase text-white" href="#" onClick={()=> setNavigationElement(2)}><b>01</b> Destination</a>
                            </li>
                            <li className={`nav-item py-3 ${navigationElement === 3 ? "border-bottom border-3" : ""}`}>
                                <a className="nav-link text-uppercase text-white" href="#" onClick={()=> setNavigationElement(3)}><b>02</b> Crew</a>
                            </li>
                            <li className={`nav-item py-3 ${navigationElement === 4 ? "border-bottom border-3" : ""}`}>
                                <a className="nav-link text-uppercase text-white" href="#" onClick={()=> setNavigationElement(4)}><b>03</b> Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

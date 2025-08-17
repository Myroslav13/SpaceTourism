interface Props {
    setNavigationElement: React.Dispatch<React.SetStateAction<1|2|3|4>>,
}

function HomePage({ setNavigationElement }: Props) {
    return (
        <div className="row align-items-center justify-content-between position-relative" style={{height: "calc(100vh - 160px)"}}>
            <div className="col-12 col-lg-4 mt-5">
                <h1 className="fs-4 text-center text-lg-start fw-lighter m-0" style={{zIndex: "1", fontFamily: "Barlow Condensed"}}>SO, YOU WANT TO TRAVEL TO</h1>
                <h2 className="h2-space fw-lighter text-center text-lg-start">SPACE</h2>
                <p className="p-description text-center text-lg-start">
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>

            <div className="col-12 col-lg-4 col-xl-3 mt-0 mt-md-5 d-flex justify-content-center">
                <button className="btn-explore rounded-circle btn-light right-0 mt-3 mt-lg-0" onClick={() => setNavigationElement(2)}>
                    EXPLORE
                </button>
            </div>
        </div>      
    );
}

export default HomePage
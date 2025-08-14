interface Props {
    setNavigationElement: React.Dispatch<React.SetStateAction<1|2|3|4>>;
}

function HomePage({ setNavigationElement }: Props) {

    return (
        <>
            <div className="col-4" style={{marginBottom: "150px"}}>
                <h1 className="fs-4 fw-lighter m-0" style={{zIndex: "1"}}>SO, YOU WANT TO TRAVEL TO</h1>
                <h2 className="fw-lighter" style={{fontSize: "128px", zIndex: "1"}}>SPACE</h2>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>

            <div className="col-3 d-flex justify-content-center" style={{marginBottom: "150px"}}>
                <button
                    className="rounded-circle btn btn-light right-0"
                    style={{ width: "272px", height: "272px", zIndex: "1"}}
                    onClick={() => setNavigationElement(2)}
                >
                    EXPLORE
                </button>
            </div>
        </>      
    );
}

export default HomePage
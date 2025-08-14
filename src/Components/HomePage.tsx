import { useEffect, useState, useRef } from "react"

interface Props {
    setNavigationElement: React.Dispatch<React.SetStateAction<1|2|3|4>>;
}

function HomePage({ setNavigationElement }: Props) {
    const [columnCount, setColumnCount] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateCount = () => {
            const gap = 24
            const columnWidth = 50 + gap

            if (!containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth
            const newCount = Math.ceil((containerWidth / columnWidth))

            setColumnCount(newCount)
        }

        updateCount()

        window.addEventListener("resize", updateCount)

        return () => {
            window.removeEventListener("resize", updateCount)
        }
    }, [])

    return (
        <div className="div-home-page d-flex align-items-center">
            <div ref={containerRef} className="container text-start text-white">
                <div className="row align-items-end justify-content-between min-vh-100 position-relative">
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
                    <div className="d-flex position-absolute top-0" style={{ zIndex: 0 }}>
                        {Array.from({ length: columnCount }).map((_, i) => {
                            const marginDivRight = i === columnCount - 1 ? "0px" : "24px"
                            
                            return (
                                <div
                                    key={i}
                                    style={{
                                        width: "50px",
                                        height: "100vh",
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        marginRight: marginDivRight
                                    }}
                                ></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage
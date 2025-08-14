import { useEffect, useState } from "react"
import type { DestinationType } from "../interfaces"

function Technology() {
    const [technologyData, setTechnologyData] = useState<DestinationType[]>([]) 

    useEffect(() => {
        fetch("./data.json").then(response => response.json()).then(data => setTechnologyData(data.crew))
    }, [])    

    return (
        <>
            <div>
                
            </div>
        </>
    )
}

export default Technology

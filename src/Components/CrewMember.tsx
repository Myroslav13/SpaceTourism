import { useEffect, useState } from "react"
import type { DestinationType } from "../interfaces"

function CrewMember() {
    const [destinationsData, setDestinationData] = useState<DestinationType[]>([]) 

    useEffect(() => {
        fetch("./data.json").then(response => response.json()).then(data => setDestinationData(data.destinations))
    }, [])    

    return (
        <>
            <div>
                
            </div>
        </>
    )
}

export default CrewMember

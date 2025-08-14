import { useEffect, useState } from "react"
import type { DestinationType } from "../interfaces"

function CrewMember() {
    const [crewData, setCrewData] = useState<DestinationType[]>([]) 

    useEffect(() => {
        fetch("./data.json").then(response => response.json()).then(data => setCrewData(data.crew))
    }, [])    

    return (
        <>
            <div>
                
            </div>
        </>
    )
}

export default CrewMember

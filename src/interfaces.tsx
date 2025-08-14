export interface DestinationType {
    name: string,
    images: Images,
    description: string,
    distance: string,
    travel: string,
}

export interface Images {
    png: string,
    webp: string,
}

export interface Props {
    navigationElement: 1|2|3|4,
    setNavigationElement: React.Dispatch<React.SetStateAction<1|2|3|4>>,
}

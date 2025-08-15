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

export interface MemberType {
    name: string,
    images: Images,
    role: string,
    bio: string,
}

export interface ImagesTechnology {
    portrait: string,
    landscape: string,
}

export interface TechnologyType {
    name: string,
    images: ImagesTechnology,
    description: string,
}

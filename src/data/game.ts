export interface Game {
    id: string;
    title: string;
    price: number;
    description: string;
    rating: number;
    image: string;
    genre: string;
    platform: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    tags: string[];
}
import { collection, Firestore, getDocs } from "@firebase/firestore";

export interface Game {
    id: string;
    title: string;
    price: number;
    description: string;
    rating: number;
    image: string;
    genre: string[];
    platform: string[];
    releaseDate: string;
    developer: string;
    publisher: string;
    tags: string[];
}

export async function getGames(db: Firestore): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    return gamesList;
}

export async function getGameById(db: Firestore, id: string): Promise<Game | null> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const game = gamesList.find(game => game.id === id);
    return game || null;
}

export async function getGamesByGenre(db: Firestore, genre: string): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const gamesByGenre = gamesList.filter(game => game.genre.includes(genre));
    return gamesByGenre;
}

export async function getGamesByPlatform(db: Firestore, platform: string): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const gamesByPlatform = gamesList.filter(game => game.platform.includes(platform));
    return gamesByPlatform;
}

export async function getGamesByTag(db: Firestore, tag: string): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const gamesByTag = gamesList.filter(game => game.tags.includes(tag));
    return gamesByTag;
}

export async function getGamesByDeveloper(db: Firestore, developer: string): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const gamesByDeveloper = gamesList.filter(game => game.developer === developer);
    return gamesByDeveloper;
}

export async function getGamesByPublisher(db: Firestore, publisher: string): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const gamesByPublisher = gamesList.filter(game => game.publisher === publisher);
    return gamesByPublisher;
}

export async function getGamesByRating(db: Firestore, rating: number): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const gamesByRating = gamesList.filter(game => game.rating === rating);
    return gamesByRating;
}

export async function getGamesByPrice(db: Firestore, price: number): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const gamesByPrice = gamesList.filter(game => game.price === price);
    return gamesByPrice;
}

export async function getGamesByName(db: Firestore, name: string): Promise<Game[]> {
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data() as Game);
    const gamesByName = gamesList.filter(game => game.title.toLowerCase().includes(name.toLowerCase()));
    return gamesByName;
}
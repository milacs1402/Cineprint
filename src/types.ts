type Movie = {
    name : string,
    watchedDate : string,
    year?: number,
    rating?: number
}

type NetflixMovie = {
    Title : string,
    Date : string,
}

type LetterboxdMovie = {
    Date: string,
    Name: string,
    Year?: number,
    "Letterboxd URI": string,
    Rating?: number,
    Rewatch?: boolean,
    Tags: string,
    "Watched Date": string
}

export type { Movie, NetflixMovie, LetterboxdMovie }
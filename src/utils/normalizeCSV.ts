import type { Movie, NetflixMovie, LetterboxdMovie } from '../types/csv';

function normalizeNetflix(data: NetflixMovie[]) : Movie[] {

    return data.map((movie) => {
        return {
            name : movie.Title,
            watchedDate : movie.Date
        }
    })

}

function normalizeLetterboxd(data: LetterboxdMovie[]) : Movie[] {

    return data.map((movie) => {
        return {
            name : movie.Name,
            watchedDate : movie["Watched Date"],
            year : movie.Year,
            rating : movie.Rating
        }
    })
}

function detectSource(data: NetflixMovie[] | LetterboxdMovie[]) : 'netflix' | 'letterboxd' | 'data not found'{

    if(data.length === 0) return 'data not found'
    else {

    if ('Title' in data[0]) return 'netflix'
    else return 'letterboxd'

    }
}

export { normalizeNetflix, normalizeLetterboxd, detectSource }
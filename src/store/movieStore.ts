import { create } from 'zustand'
import type {Movie, Status} from '../types/csv.ts'


type MovieStore = {
    status: Status,
    mRaw: Array<Movie>,
    mEnriched: Array<Movie>,
    error: string | null,

    saveRaw: (movies: Movie[]) => void
}

const useMovieStore = create<MovieStore>()((set) => ({
    //definindo estados iniciais
    status: 'idle',
    mRaw: [],
    mEnriched: [],
    error: null,

    //função para salvar os filmes crus e já mudar o status para enriquecendo
    saveRaw: (movies: Movie[]) => {
        set({mRaw: movies, status: 'enriching'})
    }
}))

export default useMovieStore
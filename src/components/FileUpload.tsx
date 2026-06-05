import Papa from 'papaparse';
import React from 'react';
import {detectSource, normalizeLetterboxd, normalizeNetflix} from '../utils/normalizeCSV';
import type { NetflixMovie, LetterboxdMovie } from '../types/csv';
import useMovieStore from '../store/movieStore';

function FileUpload() {
    const { saveRaw } = useMovieStore();

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        //transforma o csv em um array bonitinho
        const file = event.target.files?.[0];
        if(!file) return
    
        Papa.parse(file,{
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
    
                    const raw = result.data
                    const source = detectSource(raw as NetflixMovie[] | LetterboxdMovie[])
    
                    //console.log(source)
    
                    if(source === 'netflix'){
                        const movie = normalizeNetflix(raw as NetflixMovie[])
                        saveRaw(movie)
                        //console.log(movie)
                    }else if(source === 'letterboxd'){
                        const movie = normalizeLetterboxd(raw as LetterboxdMovie[])
                        saveRaw(movie)
                        //console.log(movie)
                    }else return console.log('arquivo desconhecido')
                }
            }
        )
    }

    return(
        <div>
            <input type="file" accept=".csv" onChange = {handleFileChange} />
        </div>
    )
}


export default FileUpload;
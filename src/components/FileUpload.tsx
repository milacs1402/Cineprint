import Papa from 'papaparse';
import React from 'react';
import {detectSource, normalizeLetterboxd, normalizeNetflix} from '../utils/normalizeCSV';
import type { NetflixMovie, LetterboxdMovie } from '../types';

function FileUpload() {
    return(
        <div>
            <input type="file" accept=".csv" onChange = {handleFileChange} />
        </div>
    )
}

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

                console.log(source)

                if(source === 'netflix'){
                    const Movie = normalizeNetflix(raw as NetflixMovie[])
                    console.log(Movie)
                }else if(source === 'letterboxd'){
                    const Movie = normalizeLetterboxd(raw as LetterboxdMovie[])
                    console.log(Movie)
                }else console.log('arquivo desconhecido')
            }
        }
    )
}

export default FileUpload;
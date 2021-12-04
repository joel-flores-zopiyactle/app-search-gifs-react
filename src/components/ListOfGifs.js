import React, {useEffect, useState} from 'react'
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({params}) {

    const {keyword} = params

    const [gifs, updateValue] = useState([])

    useEffect(() => {

        console.log('Carga');
        
        getGifs({keyword}).then( res => updateValue(res))

    }, [keyword])

    return <div>
        {
            gifs.map( gif =>  
                <Gif 
                key={gif.id} 
                title={gif.title} 
                id={gif.id} 
                url={gif.url} />
                )
        }
    </div>
}
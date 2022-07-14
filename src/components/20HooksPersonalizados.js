import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados(){

    // console.log(useFetch());
    let url = 'https://pokeapi.co/api/v2/pokemon';
    url = 'https://jsonplaceholder.typicode.com/users';
    let {data, isPending, error} = useFetch(url);
    return(
        <>
            <h2>Hooks personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>

            <p>
                <pre style={{whiteSpace: "pre-wrap"}}>
                    <code>{JSON.stringify(data,undefined,2)}</code>
                </pre>
                
            </p>
            
        </>
    )
}
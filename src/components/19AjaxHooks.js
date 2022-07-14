import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}){
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks(){

    const [pokemons, setPokemons] = useState([]);
    
    // useEffect(()=>{
    //     let url = 'https://pokeapi.co/api/v2/pokemon';
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(({results}) => {
    //             results.forEach( el => {
    //                 fetch(el.url)
    //                     .then( res => res.json() )
    //                     .then( ({id, name, sprites}) => {
    //                         let pokemon = {
    //                             id, 
    //                             name, 
    //                             avatar : sprites.front_default  
    //                         };

    //                         setPokemons(pokemons => [...pokemons, pokemon]);
    //                     })
    //             });
    //         });
    // },[])



    //refactorizacion
    useEffect( ()=>{
        const getPokemons = async (url) => {
            let res = await fetch(url);
            let {results} = await res.json();
            results.forEach( async el => {
                let res = await fetch(el.url);
                let {id, name, sprites} = await res.json()
                    
                let pokemon = {
                    id, 
                    name, 
                    avatar : sprites.front_default  
                };

                setPokemons(pokemons => [...pokemons, pokemon]);
            });
        }

        let url = 'https://pokeapi.co/api/v2/pokemon';
        getPokemons(url);
        
    },[])

    return(
        <>
            <h2>Peticiones Asincronas en Hooks</h2>
            <div className="container-pokemons">
                {pokemons.length === 0 
                    ? (<h3>Cargando...</h3>) 
                    : pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)
                }
            </div>
            
        </>
    )
}
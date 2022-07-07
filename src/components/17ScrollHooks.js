import React, {useState, useEffect} from 'react';
    console.clear();

export default function ScrollHooks(){

    const [scrollY, setScrollY] = useState(0);

    useEffect( ()=> {
        console.log('Moviendo el Scroll');
        const detectarScroll = () => setScrollY(window.pageYOffset)
        window.addEventListener('scroll', detectarScroll);

        return () => {
            window.removeEventListener('scroll', detectarScroll);
            console.log('Fase de Desmontaje');
        }
        
    }, [scrollY]);

    useEffect( ()=> {
        console.log('Fase de Montaje');
    }, [] );

    useEffect( ()=> {
        console.log('Fase de Actualizacion');
    }, );

    useEffect( ()=> {
        return () => {
            console.log('Fase de Desmontaje');
        };
    }, );

    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del Navegador {scrollY}</p>
        </>
    );
}

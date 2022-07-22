import React from 'react';
import './23Estilos.css';
import './23Estilos.scss';
import moduleStyles from './Estilos23.module.css';

console.clear();

export default function Estilos(){

  let myStyles = {
    borderRadius:".5rem",
    margin: '2rem auto',
    maxWidth: '50%'
  };

  return(
    <>
      <section className='estilos'>
        <h2>Estilos CSS en React</h2>

        <h3 className='bg-react'>Estilos en hoja css externa</h3>

        <h3 
          className='bg-react' 
          style={{borderRadius:'.25rem', margin:'1rem'}}>Estilos en linea
        </h3>

        <h3 className='bg-react' style={myStyles}>Estilos en linea con varible</h3>

        <h3 className='bg-react' style={myStyles}>Agregando Normalize con
          <br />
          <code>@import-normalize;</code>
        </h3>

        <h3 className={moduleStyles.success}>Estilos con modulos</h3>
        <h3 className={moduleStyles.error}>Estilos con modulos</h3>

        <h3 className='bg-sass'>Estilos con SASS</h3>
      </section>
    </>
  );
}



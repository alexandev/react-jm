
import React from 'react';
import './App.css';
// import logo from './logo.svg';
// import Componente from './components/Componente';
// import Propiedades from './components/Propiedades';
// import Estado from "./components/Estado"
// import RenderizadoCondicional from './components/RenderizadoCondicional';
// import RenderizadoElementos from './components/RenderizadoElementos';
// import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'
// import ComunicacionComponents from './components/12ComunicacionComponentes';
// import CicloVida from './components/13CicloVida';
// import AjaxApis from './components/14AjaxApis';
// import ContadorHooks from './components/16ContadorHooks';
// import ScrollHooks from './components/17ScrollHooks';
import RelojHooks from './components/18RelojHooks';
import AjaxHooks from './components/19AjaxHooks';
import HooksPersonalizados from './components/20HooksPersonalizados';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <section>

					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</section>

				<section>
					<Componente msg='Hola soy un componente funcional expresado desde una prop'/>
					
					<hr/>

					<Propiedades 
						cadena="Esto es una cadena de texto" 
						numero={19} 
						booleano={true}
						arreglo={[1,2,3]}
						objeto={{nombre:'Jon', apellido:'Mircha'}}
						funcion={(num)=>num*num}
						elementoReact={<i>Esto es un elemento React</i>}
						componenteReact={<Componente msg="Soy un componente pasado como propiedad"/>}
					/>
				</section>

				<hr />
				<Estado></Estado>

                <hr />
                <RenderizadoCondicional/>

                <hr />
                <RenderizadoElementos/>

                <hr />
                <EventosES6/>

				<hr/>
				<EventosES7/>

				<hr/>
				<MasSobreEventos/>

				<hr />
				<ComunicacionComponents/>

				<hr />
				<CicloVida/>
					
				<hr />
				<AjaxApis/>

				<hr />
				<ContadorHooks titulo='seguidores'/> 

				<hr />
				<ScrollHooks/>
				*/}

				<hr />
				<RelojHooks/>

				<hr />
				<AjaxHooks/>

				<hr />
				<HooksPersonalizados/>


			</header>
		
		</div>
	);
}

export default App;

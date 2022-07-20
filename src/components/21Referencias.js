import React, {createRef, useRef} from "react";

const Referencias = ()=>{

	// let refMenu = createRef();
	let refMenu = useRef();
	let refMenuBtn = useRef();

	console.log(refMenu, refMenuBtn);

	const handleToggleMenu = (e)=>{

		// const $menu = document.getElementById("menu");

		// if(e.target.textContent === 'Menu'){
		//     e.target.textContent = 'Cerrar';
		//     $menu.style.display = 'block';
		// }else {
		//     e.target.textContent = "Menu";
		//     $menu.style.display = 'none'
		// }

		if(refMenuBtn.current.textContent === "Menu"){
			refMenuBtn.current.textContent = "Cerrar";
			refMenu.current.style.display = "block";
		}else{
			refMenuBtn.current.textContent = "Menu";
			refMenu.current.style.display = "none";
		}
	};

	return(
		<>
			<h2>Referencias</h2>
			<button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
			<nav id="menu" ref={refMenu} style={{display:"none"}}>
				<a href="">section</a>
				<br />
				<a href="">section</a>
				<br />
				<a href="">section</a>
				<br />
				<a href="">section</a>
				<br />
				<a href="">section</a> 
			</nav>
		</>
	);
}

export default Referencias;



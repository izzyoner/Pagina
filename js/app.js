// JavaScript Document
'use strict'



const panel = document.querySelector('.main-main_carrousel_panel');
const point = document.querySelectorAll('.main-main_carrousel_points_point');

// When click on point

point.forEach ( (EachPoint,i)=>{
  	point[i].addEventListener('click',()=>{
	
		let position = i
		let operation = position * -25
		panel.style.transform= `translateX(${operation }%)`
	  // position is 0 transform 0
	  // position is 1 transformX is -25%
	  //operation = 
	  
		point.forEach( ( EachPoint , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            point[i].classList.remove('point-active')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        point[i].classList.add('point-active')
		
  	})
})
	//know the position of point
	//Aply transform one translateX to panel
	//get out the class active to all points
	//get the class active to clicking point
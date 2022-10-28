import React from 'react'

export const Footer = () => {
 
  let footerStyle={
			position:"relative",  //instead of ; use ,  ==JS object
			top:"30vh",
			width:"100%",
			backgroundColour:"red" //camelCase
  }
   const d = new Date();
    const year = d.getFullYear();

    return(
    <footer>
        <p className="bg-dark py-3 text-light text-center "style={footerStyle}>Copyright SS&copy;{year}</p>
    </footer>);
 
}

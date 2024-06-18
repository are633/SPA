import React from "react";
import "./App.css"; // Importa tu archivo de estilos CSS
import florImage from "./images/1.jpg"; 
import florImag from "./images/2.jpg"; 
import florIma from "./images/3.jpg"; 
import florIm from "./images/4.jpeg"; 
import florI from "./images/5.jpg"; 
import flor from "./images/6.jpg"; 
import flores from "./images/7.jpg"; 
import floresita from "./images/8.jpg"; 
import florr from "./images/9.jpg"; 
import flora from "./images/10.jpg"; 

const Area1 = () => {
  return (
    <div className="component-container">
      <h2 className="center">Los Girasoles</h2>
      <h4 className="center-text">Girasol es una planta herbácea de la familia asterácea, de nombre científico helianthus annuus.</h4>
      
      <div className="two-columns">
        <div className="small-paragraph">El girasol recibe este nombre gracias a las propiedades que le permiten girar en dirección de los rayos del Sol (heliotropismo), y de esta manera aprovechar de sus virtudes..</div>
        <div className="small-paragraph">No obstante, el girasol también recibe otros nombres como mirasol, flor del Sol, maíz de tejas, entre otros. Asimismo, del náhuatl recibe los nombres de chimalatl o chimalxóchitl, que significan “flor de escudo”..</div>
      </div>
    </div>
  );
};

const Galeria = () => {
  // Rutas de las imágenes
  const images = [
    { id: 1, src: florImage, alt: "Image 1" },
    { id: 2, src: florImag, alt: "Image 2" },
    { id: 3, src: florIma, alt: "Image 3" },
    { id: 4, src: florIm, alt: "Image 4" },
    { id: 5, src: florI, alt: "Image 5" },
    { id: 6, src: flor, alt: "Image 6" },
    { id: 6, src: flores, alt: "Image 7" },
    { id: 6, src: floresita, alt: "Image 8" },
    { id: 6, src: florr, alt: "Image 9" },
    { id: 6, src: flora, alt: "Image 10" },
    // Agrega aquí las demás imágenes
  ];

  return (
    <div className="component-container">
      <h2 className="center-text">GALERÍA</h2>
      <div className="image-gallery">
        {images.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = React.useState("Area1");

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header>
        <h1 className="center-text">{currentPage === "Area1" ? "AREA 1" : "IMAGENES"}</h1>
      </header>
      <main>
        {currentPage === "Area1" ? <Area1 /> : <Galeria />}
      </main>
      <footer className="center-text">
        <nav>
          <button 
            onClick={() => handleChangePage("Area1")} 
            className={currentPage === "Area1" ? "active" : ""}
          >
            &uarr;
          </button>
          <button 
            onClick={() => handleChangePage("Home")} 
            className={currentPage === "Home" ? "active" : ""}
          >
            🏠
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default App;

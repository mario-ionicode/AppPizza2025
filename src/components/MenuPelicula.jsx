import style from "./style/Pelicula-style.module.css";
import Pelicula from "./Pelicula";

import { useState ,useEffect } from "react";
export default function MenuPelicula() {

  const mail = "mailto:mario.1698.mg@gmail.com";
  const fotoM = "./fotos/Pizz.jpg";
 const fotoStyle = {
    width: "300px",
    height: "390px",
    borderRadius: "20px",
    display: "block",  // Necesario para que margin auto funcione
    margin: "20px auto", // Auto en laterales centra horizontalmente
};
  
  const [peliculas, setPeliculas] = useState([

  {
    name: "Red Social",
    descripcion: "Película que narra la creación de Facebook y la vida de su fundador Mark Zuckerberg",
    calificacion: 7.8,
    photoName: "./fotos/red_social.jpg",
    soldOut: true,
  },
  {
    name: "Amigos intocables",
    descripcion: "Película francesa que narra la amistad entre un aristócrata tetrapléjico y su cuidador",
    calificacion: 8.5,
    photoName: "./fotos/amigos_intocables.jpg",
    soldOut: true,
  },
  {
    name: "Lobo de wall street",
    descripcion: "Película de Martin Scorsese basada en la vida del corredor de bolsa Jordan Belfort",
    calificacion: 8.2,
    photoName: "./fotos/lobo_Wall.jpg",
    soldOut: false,
  },
  {
    name: "Harry Potter(Saga)",
    descripcion: "Saga de películas basada en los libros de J.K. Rowling, que sigue las aventuras del joven mago Harry Potter",
    calificacion: 8.5,  
    photoName: "./fotos/harry_potter.jpg",
    soldOut: false,
  },
  {
    name: "Interestellar",
    descripcion: "Película de ciencia ficción dirigida por Christopher Nolan, que explora temas de amor, sacrificio y supervivencia en el espacio",
    calificacion: 8.6,  
    photoName: "./fotos/interstellar.jpg",
    soldOut: true,
  },
  {
    name: "Breaking Bad",
    descripcion: "Serie de televisión acerca de un profesor de química que se convierte en fabricante de metanfetaminas",
    calificacion: 9.5,
    photoName: "./fotos/breaking_bad.jpg",
    soldOut: false,
  },

]);  

  
useEffect(() => {
    const data = localStorage.getItem('peliculas');
    if (data) setPeliculas(JSON.parse(data));


  
    },[]);
    useEffect(() => localStorage.setItem('peliculas', JSON.stringify(peliculas)), [peliculas]);
    {/* se fija el estado en caso de que no exista*/ }


  const deletePelicula = (peliculaName) => setPelicula ( prev => prev.filter((pelicula) => pelicula.name !== peliculaName));

 return (
    <div className='menuOwner'>
      
      <hr />
      <h1>Mario Ramos Garcia</h1>
      <img src={fotoM}  style={fotoStyle} alt="Mario Ramos Garcia" className='img-fluid rounded-circle' />
    <hr />
      <a href={mail} className='btn btn-primary'>Contact me</a  >
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <p>
        Soy un apasionado de la programación y el desarrollo web. Me encanta crear aplicaciones que mejoren la experiencia del usuario y resuelvan problemas reales.    
      </p>
      <p>Tambien he aprendido a realizar pizzas con los mejores ingredientes y de la mejor calidad con la receta de la abuela</p>
      
   

      {peliculas.length > 0 ? 
                (
                   <>
                   <br />
                   <br />
                      <h2>Mis películas favoritas</h2>
                   <ul className="peliculas">
                    {peliculas.map((pelicula) => {
                        console.log(pelicula);
                        return (
                        <Pelicula peliculaObject={pelicula}
                            key={pelicula.name} 
                                // Usar un identificador único para cada pizza
                        
                        />
                    )
                    })}
                   </ul>
                   </>
                   ):(
                    <p>
                       No hay peliculas disponibles en tus favoritas
                           </p>    
                   )}
     
     
   
     

    </div>
  );

}


/**
 * /owner
- Agregar informacion publica personal.
- Foto - si no quieres una tuya,puede ser de lo que sea. 
- Nombre, correo/contacto, descripcion pequeña
- crear un listado de sus películas favoritas, y usar el hook useState para manejar el estado.
- la pagina debe tener su footer y un header. 
 * 
 * 
 * 
 */
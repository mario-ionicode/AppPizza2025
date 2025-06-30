import style from './style/Pelicula-style.module.css';

export default function Pelicula({peliculaObject}) {
    
    
        //Los estilos creados como el archivo Pizza-style.module.css
        //se importan como un objeto, y se accede a las clases como propiedades del objeto.
        //Por ejemplo, si en el archivo Pizza-style.module.css hay una clase llamada pizza, 
        //se puede acceder a ella como style.pizza.
        //Esto permite que los estilos sean únicos y no se mezclen con otros estilos en la aplicación.
        //los estilos css son globales en react, por lo que al usar css modules
        //se evita que los estilos se apliquen a otros componentes.
   

        //teca windows +. sale menu de emojis
return(
<div>
  { /*se usa el operador ternario para agregar la clase "sold-out" si la pizza está agotada*/}
    <li className={`${style.pelicula} ${peliculaObject.soldOut ? style["sold-out"] : ""}`}>
        <img src={peliculaObject.photoName} alt={peliculaObject.name} />
        <div>
            <h3>{peliculaObject.name}</h3>
            <p>{peliculaObject.descripcion}</p>
            <p>⭐ {peliculaObject.calificacion}</p>
        </div>
    </li>
    <br />
    </div>
);

}

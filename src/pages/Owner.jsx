export default function Owner() {
  const mail = "mailto:mario.1698.mg@gmail.com";
 return (
    <div className='container'>
      <h1>Mario Ramos Garcia</h1>
    
      <a href={mail} className='btn btn-primary'>Contact me</a  >
      <p>
        Soy un apasionado de la programación y el desarrollo web. Me encanta crear aplicaciones que mejoren la experiencia del usuario y resuelvan problemas reales.    
      </p>
      
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
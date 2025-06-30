import style from './style/Pizza-style.module.css';
export default function Pizza({pizzaObject,onDelete}) {
    
    
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
    <li className={`${style.pizza} ${pizzaObject.soldOut ? style["sold-out"] : ""}`}>
        <img src={pizzaObject.photoName} alt={pizzaObject.name} />
        <div>
            <h3>{pizzaObject.name}</h3>
            <p>{pizzaObject.ingredients}</p>
            <p>💲 {pizzaObject.price}</p>
            <button onClick={() => alert(`You ordered a ${pizzaObject.name}`)}>Order pizza 🍕</button>
            <button onClick={() =>onDelete(pizzaObject.name)}>Delete pizza 🗑️</button>
        </div>
    </li>
    <br />
    </div>
);

}

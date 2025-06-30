import Pizza from "./Pizza";
//import { useState } from "react";
import { useState   , useEffect } from "react";
export default function Menu() {

    /**
     * En programación, el estado se refiere a la información que un *programa o un objeto necesita para funcionar y que se almacena en *memoria. Este estado puede cambiar a medida que el programa se *ejecuta, y define la condición actual del programa o de sus *componentes.
     */
const [pizzas, setPizzas] = useState([

  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./pizzas/prosciutto.jpg",
    soldOut: false,
  },

]);  


  const [showForm, setShowForm] = useState(false);
  const [newPizza, setNewPizza] = useState({
    name: "",
    ingredients: "",
    price: "",
    photoName: "",
    photoFile: null, // Nuevo campo para almacenar el archivo
    soldOut: false,
  });

  const addPizza = (pizza) => {
    // Crear una URL local para la imagen seleccionada
    const photoUrl = pizza.photoFile ? URL.createObjectURL(pizza.photoFile) : "";
    
    setPizzas([...pizzas, {
      name: pizza.name,
      ingredients: pizza.ingredients,
      price: Number(pizza.price),
      photoName: photoUrl, // Usamos la URL local en lugar de una ruta
      soldOut: pizza.soldOut,
    }]);
    
    setShowForm(false);
    setNewPizza({
      name: "",
      ingredients: "",
      price: "",
      photoName: "",
      photoFile: null,
      soldOut: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPizza({
        ...newPizza,
        photoFile: file,
        photoName: file.name, // Opcional: mostrar el nombre del archivo
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPizza(newPizza);
  };

//Obtener datos del localStorage si existen, este hook es lanzado cuando se contruye el componente
useEffect(() => {
    const data = localStorage.getItem('pizzas');
    if (data) setPizzas(JSON.parse(data));


  
    },[]);
    useEffect(() => localStorage.setItem('pizzas', JSON.stringify(pizzas)), [pizzas]);
    {/* se fija el estado en caso de que no exista*/ }


  const deletePizza = (pizzaName) => setPizzas ( prev => prev.filter((pizza) => pizza.name !== pizzaName));
  
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Pizza'}
      </button>
      
      {showForm && (
        <form onSubmit={handleSubmit} className="pizza-form">
          <h2>Add a New Pizza</h2>
          <br />
          <input
            
            name="name"
            value={newPizza.name}
            onChange={handleInputChange}
            placeholder="Pizza name"
            required
          />
          <br />
          <input
            name="ingredients"
           
            value={newPizza.ingredients}
            onChange={handleInputChange}
            placeholder="Ingredients"
            required
          />
          <br />
          <input
            name="price"
            type="number"   
            value={newPizza.price}
            onChange={handleInputChange}
            placeholder="Price"
            required
          />
          <div className="file-input">
            <label>Select Image: </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            {newPizza.photoName && (
              <span>Selected: {newPizza.photoName}</span>
            )}
          </div>
          <label>
            Sold Out:
            <input
              name="soldOut"
              type="checkbox"
              checked={newPizza.soldOut}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Add Pizza</button>
        </form>
      )}
      



            {pizzas.length > 0 ? 
            (
               <>
               <p>
                Authentic Italian cousine. 6 creatives dishes to choose from. All
            from our stone oven, all organic all delicious.
               </p>
               <ul className="pizzas">
                {pizzas.map((pizza) => {
                    console.log(pizza);
                    return (
                    <Pizza pizzaObject={pizza}
                        key={pizza.name} 
                        onDelete={deletePizza}
                            // Usar un identificador único para cada pizza
                    
                    />
                )
                })}
               </ul>
               </>
               ):(
                <p>
                    We are still working on our menu. Please come back later.
                </p>    
               )}
            </main>
    );
}
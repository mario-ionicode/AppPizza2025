export default function addPizza() {

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

  return(
    
  )
}
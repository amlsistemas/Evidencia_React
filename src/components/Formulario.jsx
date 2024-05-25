import React, { useState } from 'react';

const Formulario = () => {
    const [formData, setFormData] = useState({ nombre: '', email: ''    });
    const [isToggled, setIsToggled] = useState(false);


    const toggle = () => {setIsToggled(prevState => !prevState);};

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData({ ...formData,[name]: value }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("se enviaron los datos", formData) 
    };// Aquí puedes enviar los datos a un servidor o realizar alguna acción con ellos    

    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Usuario: 
        <input type="text" 
        name="nombre"value={formData.nombre}onChange={handleChange}
        />
        Email:
        <input type="text" 
        name="email"value={formData.email}onChange={handleChange}
        />
        <button type="submit">Enviar</button>
        <h2>Valores del Formulario en Pantalla</h2>
          <p>Usuario: {formData.nombre}</p>
          <p>Email: {formData.email}</p>
      </form>
    </div>
  )
}

export default Formulario

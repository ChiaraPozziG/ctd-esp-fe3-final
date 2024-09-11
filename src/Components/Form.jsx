import React, { useState, useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Form = () => {
  const { theme } = useContext(ContextGlobal);  // Accedemos al tema desde el contexto

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length <= 5) {
      setError('Por favor verifique su información nuevamente. Su nombre debe tener al menos 5 caracteres.');
      setSuccessMessage(''); 
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor verifique su información nuevamente. Debe ingresar un email valido.');
      setSuccessMessage(''); 
      return;
    }

    setError('');
    console.log(email)
    console.log(name)
    setSuccessMessage(`Gracias ${name}, te contactaremos vía mail a la brevedad`);

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className={theme === 'dark' ? 'dark-form' : ''}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send</button>
      
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default Form;

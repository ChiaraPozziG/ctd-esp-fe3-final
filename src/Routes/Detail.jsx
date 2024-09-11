import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import axios from 'axios'; 

const Detail = () => {
  const { id } = useParams(); 
  const { data, theme } = useContext(ContextGlobal); 
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
   
    const foundDentist = data.find(d => d.id === parseInt(id));
    if (foundDentist) {
      setDentist(foundDentist);
    } else {
      
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) 
        .then(response => setDentist(response.data))
        .catch(error => console.error('Error fetching dentist details:', error));
    }
  }, [id, data]); 

  if (!dentist) {
    return <div>Loading...</div>; 
  }

  return (
    <main className={`detail ${theme}`}>
      <h1>Dentist {dentist.username} details</h1>
      <div className="dentist-info">
        <p><strong>Nombre:</strong> {dentist.name}</p>
        <p><strong>Email:</strong> {dentist.email}</p>
        <p><strong>Teléfono:</strong> {dentist.phone}</p>
        <p><strong>Sitio web:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
      </div>
    </main>
  );
}

export default Detail;


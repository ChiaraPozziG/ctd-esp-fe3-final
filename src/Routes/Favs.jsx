import React, { useState, useEffect, useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Favorites = () => {
  const { theme } = useContext(ContextGlobal);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (dentist) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.id === dentist.id)) {
      favorites.push(dentist);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <main className={`favorites ${theme}`}>
      <h1>Favorites</h1>
      <div className='card-grid'>
        {favorites.length > 0 ? (
          favorites.map(dentist => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
              addToFavorites={addToFavorites} // Aunque no es necesario aquí
            />
          ))
        ) : (
          <p>No favorites yet</p>
        )}
      </div>
    </main>
  );
}

export default Favorites;

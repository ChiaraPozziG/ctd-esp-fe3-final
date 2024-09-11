import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { data, theme } = useContext(ContextGlobal);

  const addToFavorites = (dentist) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.id === dentist.id)) {
      favorites.push(dentist);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <main className={`home ${theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.length > 0 ? (
          data.map(dentist => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
              addToFavorites={addToFavorites}
            />
          ))
        ) : (
          <p>No dentists available</p> // Mensaje en caso de que no haya dentistas
        )}
      </div>
    </main>
  );
}

export default Home;

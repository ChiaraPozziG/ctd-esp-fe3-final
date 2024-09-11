import { Link } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import doctorImage from '../../public/images/doctor.jpg';
import starIcon from '../../public/star.png';
import filledStarIcon from '../../public/filled-star.png'; 

const Card = ({ name, username, id, addToFavorites }) => {
  const { theme } = useContext(ContextGlobal);
  const [isFavorite, setIsFavorite] = useState(false);
  const [hovered, setHovered] = useState(false); 

  useEffect(() => {

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = favorites.some(fav => fav.id === id);
    setIsFavorite(isFav);
  }, [id]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {

      const updatedFavorites = favorites.filter(fav => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {

      addToFavorites({ id, name, username });
      setIsFavorite(true);
    }
  };

   return (
    <div className={`card ${theme}`}>
      <img src={doctorImage} alt={`Imagen del dentista ${name}`} className="dentist-image" />
      <h2>{name}</h2>
      <p>{username}</p>

      <img
        src={isFavorite || hovered ? filledStarIcon : starIcon}
        alt="Favorite Icon"
        className="star-icon"
        onClick={handleToggleFavorite}
        onMouseEnter={() => setHovered(true)}  
        onMouseLeave={() => setHovered(false)} 
        style={{ cursor: 'pointer' }} 
      />

      <Link to={`/dentist/${id}`}>View Details</Link>
    </div>
  );
};

export default Card;
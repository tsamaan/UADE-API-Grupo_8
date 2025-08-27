import React from 'react';
import './Card.css';

const Card = ({ 
  title, 
  subtitle, 
  imageUrl, 
  isHighlighted = false, 
  onCardClick, 
  onButtonClick, 
  buttonText = "Ver más",
  children 
}) => {
  
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(title);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Evita que se ejecute también onCardClick
    if (onButtonClick) {
      onButtonClick(title);
    }
  };

  return (
    <div 
      className={`card ${isHighlighted ? 'card--highlighted' : ''}`}
      onClick={handleCardClick}
    >
      {imageUrl && (
        <div className="card__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
        
        {/* Aquí se renderizan los children */}
        <div className="card__body">
          {children}
        </div>
        
        {onButtonClick && (
          <button 
            className="card__button"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

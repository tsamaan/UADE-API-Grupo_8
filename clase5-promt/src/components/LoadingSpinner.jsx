import { memo } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = memo(({ message = 'Cargando...', size = 'medium' }) => {
  return (
    <div className="loading-container">
      <div className={`loading-spinner ${size}`}>
        <div className="spinner-inner">
          <div className="spinner-circle"></div>
        </div>
      </div>
      <p className="loading-message">{message}</p>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;

import React from 'react';
import '../Styles/imageAcceuil.scss';
const ImageAcceuil: React.FC = () => {
  return (
    <>
      <p className='textImage'>Plein de rabais sur notre vaste catalogue !!!</p>
      <img src="https://kart-client-061a7049de9a.herokuapp.com/static/media/mainImage.d8368a30722c5274188e.png" alt="Welcome" style={{ width: '100%' }} />
    </>
  );
};

export default ImageAcceuil;

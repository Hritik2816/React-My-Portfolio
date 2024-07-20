import React, { useState } from 'react';
import Image from '../Image/HritikProfile.jpg'

const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div>
      <img src={Image} alt="My Image" className='w-100 h-100' />
    </div>
  );
};

export default ImageComponent
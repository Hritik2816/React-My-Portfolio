import React, { useState } from 'react';
import Image from '../Image/HritikProfile.jpg'

const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div>
      <img src={Image} alt="My Image" className='w-70 h-60' />
    </div>
  );
};

export default ImageComponent
// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDogImage = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Failed to load dog image</p>
      )}
    </div>
  );
};

export default App;
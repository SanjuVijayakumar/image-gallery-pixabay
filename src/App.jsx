import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("nature");

  console.log(images, "inside the state");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);

      setImages(response.data.hits);
      console.log(response.data, "response from api");
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <div>
    <h1 className="mb-8 text-center text-4xl font-bold text-purple-600"> Pixabay Image Gallery </h1>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
      {images.map((image) => ( 
        <Card key={image.id} image={image} /> 
      ))} 
    </div>
  </div>
  )
}

export default App

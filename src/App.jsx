import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ImageSearch from './components/imageSearch/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(images, "inside the state");

  useEffect(() => {
    fetchData();
  }, [term]);

  async function fetchData() {
    try {
      const response = await axios(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)

      setImages(response.data.hits);
      console.log(response.data, "response from api");
      
    } catch (error) {
      console.log(error);
      setImages([])

    } finally {
      setIsLoading(false)
    }
  }

  const searchImages = (text) => {
    setTerm(text)
  }
  return (
  <div>
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <ImageSearch searchImages={searchImages} />
        {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">
          No Images Found</h1>}
        {/* {isLoading ? <h3 className="text-6xl text-center mx-auto mt-32">Loading...</h3>} */}
        <h1 className="mb-8 text-center text-4xl font-bold text-purple-600"> Pixabay Image Gallery </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
          {images.map((image) => ( 
            <Card key={image.id} image={image} /> 
          ))} 
        </div>
      </main>
      <Footer />
    </div>
  </div>
  )
}

export default App

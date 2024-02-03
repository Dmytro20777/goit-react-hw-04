import { SearchBar } from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';
import { fetchimagesWithTopic } from "./articles-api.js"
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { ImageModal } from "./components/ImageModal/ImageModal.jsx";




export const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [quary, setQuary] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  

  const onSubmit = async (topic) => {
    setPage(1);
    setQuary(`${Date.now()}/${topic}`);
    setImages([]);
    setLoading(false);
    setError(true);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }

  useEffect(() => {

    if (quary === "") {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchimagesWithTopic(quary, page);
        setImages((preventImages) => [...preventImages, ...data]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [quary, page])

  

return (
  <div>

    <SearchBar onSubmit={onSubmit} />

    {images.length === 0 && !loading && !error && quary && <b>No images found</b>}

    
    <ImageGallery images={images} openModal={openModal} />
    <ImageModal isOpen={modalIsOpen} closeModal={closeModal} selectedImage={selectedImage} />

    {error && <b>Error! {loading ? 'Reloading page...' : 'Error loading images'}</b>}

    {loading &&  (<b>Loading...</b>)}

    {images.length > 0 && !loading && (<button onClick={handleLoadMore}>Load more</button>)}
    
    <Toaster position="bottom-center" />
    
    
  </div>
  );
}


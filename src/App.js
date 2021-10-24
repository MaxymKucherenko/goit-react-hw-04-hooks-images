import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { search } from './services/Api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import LoadMoreButton from './components/Button';
import Modal from './components/Modal';
import { ToastContainer } from 'react-toastify';
import './App';

export default function App() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageId, setImageId] = useState(null);

  const handleQChange = (query) => {
    if (!query) {
      return;
    }
    setLoading(true);
    search(query, 1).then((response) => {
      setImages(response.data.hits);
      setPage(2);
      setQuery(query);
      setLoading(false);
    });
  };

  const handleLoadMore = () => {
    setLoading(true);
    search(query, page).then((response) => {
      setImages([...images, ...response.data.hits]);
      setPage((prev) => prev + 1);
      setLoading(false);
      scroll();
    });
  };

  const openModal = (imageId) => () => {
    setShowModal(true);
    setImageId(imageId);
  };

  const closeModal = () => {
    setShowModal(false);
    setImageId(null);
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const image = images.find((image) => image.id === imageId);
  return (
    <div className="App">
      {showModal && <Modal onClose={closeModal} image={image}></Modal>}
      <header className="App-header">
        <h1>Image finder</h1>
      </header>
      <ToastContainer autoClose={3000} />

      <Searchbar search={handleQChange} />
      <ImageGallery images={images} onClick={openModal} />
      {loading === true && (
        <div className="loader">
          <Loader
            className="Button-container"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )}
      {images.length !== 0 && (
        <div className="Button-container">
          <LoadMoreButton handleLoadMore={handleLoadMore} disabled={loading} />
        </div>
      )}
    </div>
  );
}

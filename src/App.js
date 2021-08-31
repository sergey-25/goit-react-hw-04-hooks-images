import { useState, useEffect } from "react";
import { fetchImages } from "./services/pixabayApi";
import toast, { Toaster } from "react-hot-toast";
import { Spinner } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Notification } from "./components/Notification/Notification";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [activeImage, setActiveImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchImagesByQuery(searchQuery, page);
  }, [searchQuery, page]);

  const fetchImagesByQuery = (searchQuery, page) => {
    fetchImages(searchQuery, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          setStatus(Status.IDLE);
          toast.error("Sorry, we couldn't find any matches");
        } else {
          setImages((images) => [...images, ...hits]);
          setStatus(Status.RESOLVED);

          if (page > 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }
        }
      })
      .catch((error) => {
        setError(Status.REJECTED);
      });
  };

  const handleFormSubmit = (value) => {
    setSearchQuery(value);
    setPage(1);
    setImages([]);
  };

  const handleButtonClick = () => setPage((page) => page + 1);

  const resetActiveImage = () => setActiveImage(null);

  const handleImageClick = (activeImage) => setActiveImage(activeImage);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} toast={toast} />
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Spinner />}
      {status === Status.REJECTED && <Notification text={error} />}
      {status === Status.RESOLVED && (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          <Button onClick={handleButtonClick} />
          {activeImage && (
            <Modal onClose={resetActiveImage}>
              <img src={activeImage.largeImageURL} alt={activeImage.tags} />
            </Modal>
          )}
        </>
      )}
      <Toaster
        position="top-right"
        containerClassName=""
        containerStyle={{ top: 100 }}
        toastOptions={{
          style: {
            borderRadius: "4px",
            background: "#BA55D3",
            color: "#fff",
          },
        }}
      />
    </>
  );
}
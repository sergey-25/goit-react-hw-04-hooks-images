import { Component } from "react";
import { fetchImages } from "./services/pixabayApi";
import toast, { Toaster } from "react-hot-toast";
import { Spinner } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
import { Searchbar } from "./components/Searchbar/Searchbar";
import  {ImageGallery}  from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Notification } from "./components/Notification/Notification";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    status: Status.IDLE,
    activeImage: null,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ images: [] });
      this.fetchImagesByQuery(searchQuery, page);
      this.setState({ status: Status.PENDING });
    }

    if (prevState.page !== page && page !== 1) {
      this.fetchImagesByQuery(searchQuery, page);
    }

    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImagesByQuery = (searchQuery, page) => {
    fetchImages(searchQuery, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          this.setState({ status: Status.IDLE });
          toast.error("Sorry, we couldn't find any matches");
        } else {
          this.setState(({ images }) => ({
            images: [...images, ...hits],
            status: Status.RESOLVED,
          }));
        }
      })
      .catch((error) => {
        this.setState({ error, status: Status.REJECTED });
      });
  };

  handleFormSubmit = (value) => {
    this.setState({ searchQuery: value, page: 1 });
  };

  handleButtonClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  resetActiveImage = () => {
    this.setState({ activeImage: null });
  };

  handleImageClick = (activeImage) => {
    this.setState({ activeImage });
  };

  render() {
    const { images, status, activeImage, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} toast={toast} />
        {status === Status.IDLE && <></>}
        {status === Status.PENDING && <Spinner />}
        {status === Status.REJECTED && <Notification text={error} />}
        {status === Status.RESOLVED && (
          <>
            <ImageGallery
              images={images}
              onImageClick={this.handleImageClick}
            />
            {}
            <Button onClick={this.handleButtonClick} />
            {activeImage && (
              <Modal onClose={this.resetActiveImage}>
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
}
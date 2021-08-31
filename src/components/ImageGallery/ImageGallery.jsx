import PropTypes from "prop-types";
import { ImageGalleryItem } from "../../components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          imageSrc={webformatURL}
          onClick={() => onImageClick({ id, largeImageURL, tags })}
          alt={tags}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
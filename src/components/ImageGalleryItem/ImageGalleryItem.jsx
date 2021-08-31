import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
import defaultImage from "../../images/defaultImage.jpg";

export const ImageGalleryItem = ({ id, imageSrc, alt, onClick }) => {
  return (
    <GalleryItem>
      <GalleryItemImage id={id} src={imageSrc} alt={alt} onClick={onClick} />
    </GalleryItem>
  );
};

ImageGalleryItem.defaultProps = {
  imageSrc: defaultImage,
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "../ImageGalleryItem/ImageGalleryItem.styled";


const ImageGalleryItem = ({ id, imageSrc, alt, onClick }) => {
  return (
    <GalleryItem>
      <GalleryItemImage id={id} src={imageSrc} alt={alt} onClick={onClick} />
    </GalleryItem>
  );
};



ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
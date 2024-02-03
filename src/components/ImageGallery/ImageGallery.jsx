import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export const ImageGallery = ({ images, openModal }) => (
  <ul className={css.list}>
    {images.map((image) => (
      <ImageCard key={image.id} image={image} openModal={openModal} />
    ))}
  </ul>
);



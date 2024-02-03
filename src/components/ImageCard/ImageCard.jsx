import css from "./ImageCard.module.css"

export const ImageCard = ({ image, openModal }) => (
  <li className={css.item} key={image.id} onClick={() => openModal(image)}>
    <div>
      <img src={image.urls.small} alt={`Image ${image.id}`} />
    </div>
  </li>
);



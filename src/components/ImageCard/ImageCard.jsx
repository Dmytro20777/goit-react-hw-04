import css from "./ImageCard.module.css"

export const ImageCard = ({ image, openModal }) => (
  <li className={css.item} onClick={() => openModal(image)}>
    <div>
      <img className={css.img} key={image.id} src={image.urls.small} alt={image.alt_description} />
    </div>
  </li>
);



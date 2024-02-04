import Modal from 'react-modal';
import css from "./ImageModal.module.css"
import { IoMdClose } from "react-icons/io";

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, closeModal, selectedImage }) => (
  <Modal
    className={css.modalContent}
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Image Modal"
  >
    {selectedImage && (
      <>
        <div className={css.modalContainer}>
          <button className={css.closeButton} onClick={closeModal}><IoMdClose/></button>
          <img className={css.image} src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
          <p className={css.likes}>Likes: {selectedImage.likes}</p>
          <p className={css.description}>{ selectedImage.description}</p>
        </div>
      </>
    )}
  </Modal>
);



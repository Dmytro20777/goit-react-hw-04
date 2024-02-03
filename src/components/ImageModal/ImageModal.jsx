import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, closeModal, selectedImage }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Image Modal"
  >
    {selectedImage && (
      <>
        <button onClick={closeModal}>Close Modal</button>
        <img src={selectedImage.urls.regular} alt={`Image ${selectedImage.id}`} />
        <p>Likes: {selectedImage.likes}</p>
      </>
    )}
  </Modal>
);



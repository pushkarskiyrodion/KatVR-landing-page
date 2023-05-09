import Modal from "../Modal/Modal";

const Video = ({ onClose, isClick }) => (
  <Modal 
    isOpen={isClick}
    onClose={onClose}
    className="modal--video"
  >
    <iframe 
      width="1000" 
      height="480" 
      src="https://www.youtube.com/embed/SvTbB19bvIw" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
    >
    </iframe>
  </Modal>
);

export default Video;
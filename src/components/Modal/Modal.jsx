import { useState } from "react";

import classNames from 'classnames';

import SCSSVariables from '../../styles/utils/variables.module.scss';

const Modal = ({ onClose, isOpen, children, className }) => {
  const [isVisible, setIsVisible] = useState(isOpen)

  console.log(isVisible)

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose(), parseFloat(SCSSVariables.modalCloseTime) * 1000)
  } 
  
  return (
    <>
      {isOpen && (
        <div 
          className={classNames('modal', {
            'modal--hidden': !isVisible
          })}
        >
          <div className="modal__container">
            <div className={className}>
              <i onClick={handleClose} className="icon icon--close">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1.35355" y1="0.995568" x2="18.2206" y2="17.8626" stroke="white"/>
                  <path d="M1.13405 17.8672L18.0011 1.00011" stroke="white"/>
                </svg>
              </i>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
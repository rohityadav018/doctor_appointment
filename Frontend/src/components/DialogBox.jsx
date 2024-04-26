import React from 'react';
import '../App.css'


const DialogBox = ({ isOpen, onClose, title, children }) => {
  const overlayClasses = isOpen ? "overlay" : "";
  const dialogClasses = isOpen ? "dialog active" : "dialog";

  const handleClose = () => {
    onClose();
  };

  return (
    <div >
      <div className={overlayClasses}>
      <div className={`${dialogClasses} `} >
        <div className="dialog-header">
          <h2 className='mx-auto'>{title}</h2>
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="dialog-content">{children}</div>
      </div>
    </div>
    </div>
  );
};

export default DialogBox;

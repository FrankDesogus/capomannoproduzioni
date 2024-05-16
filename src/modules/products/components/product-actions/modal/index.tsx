import React, { useState } from 'react';

interface FocusModalProps {
  children: React.ReactNode;
}

const FocusModal: React.FC<FocusModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default FocusModal;

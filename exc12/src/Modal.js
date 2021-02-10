import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGloalContext} from './context'
const Modal = () => {
  const {isModalOpen,closeModal} = useGloalContext();

  return <div className={`${isModalOpen ? 'show-modal modal-overlay': 'modal-overlay'}`}>
    <div className="modal-container">
      <h3>modal content</h3>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal

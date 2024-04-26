import React, { useState } from 'react';
import ConsultationForm from './ConsultationForm';
import { IoSend } from "react-icons/io5";
import DialogBox from './DialogBox';
import '../App.css'

const PaymentButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  
  return (
    <div className='paymentButton' >
      <button onClick={openDialog} className='paymentButtons'>
        <p>Consult Doctor</p> 
        <IoSend />
      </button>
      <DialogBox isOpen={isOpen} onClose={closeDialog} title="Doctor Consultation">
        <ConsultationForm />
      </DialogBox>
    </div>
  );
};

export default PaymentButton;
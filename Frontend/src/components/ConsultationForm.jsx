import React, { useState } from 'react';
import '../App.css'

const ConsultationForm = () => {
    const handlePayment = () => {
    
        const options = {
          key: 'rzp_test_T0BfdH5QYBk7fM',
          amount: 1000*100, 
          currency: 'INR',
          name: 'Consultation Payment',
          description: 'Payment for doctor consultation',
          handler: function(response) {
          
            window.location.href = 'https://meet.google.com/kfk-yqfy-awd';
          },
        };
        /* global Razorpay */
        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      };

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [symptoms, setSymptoms] = useState('');
      const [medicalHistory, setMedicalHistory] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
       
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Symptoms:', symptoms);
        console.log('Medical History:', medicalHistory);
        handlePayment();
      };
    

  return (
    <form onSubmit={handleSubmit} className='formPayment'>
    <div className='inputField'>
    <label>
        Name:
      </label>
      <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
    </div>
    <div className='inputField'>
      <label>
        Email:
        
      </label>
      <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div className='inputField'>
      <label>
        Phone:
        
      </label>
      <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        </div>
       

       <div className='inputField'><label>
        Symptoms:
      </label>
      <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
</div>
      

<div className='inputField'>
<label>
        Medical History:
        
      </label>
      <textarea
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
        />
        
    </div>
      
      <button type="submit" className='submitButton'>Start Video Consultation</button>
    </form>
  );
};

export default ConsultationForm;
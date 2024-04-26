import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          DoCare is an innovative digital solution designed to simplify and enhance the healthcare experience for both patients and providers. Launched in 2021, DoCare is the product of a collaborative effort by a team of healthcare professionals and technology experts who recognized the need for a more streamlined, user-friendly appointment management system.
          </p>
         
          <p>
           DoCare's founder a tech entrepreneur with a background in software development and artificial intelligence. Frustrated by the inefficiencies in traditional appointment scheduling and management, they envisioned a system that not only makes the booking process smoother but also helps in managing patient flow and reduces waiting times.

The vision behind DoCare is to create a seamless bridge between healthcare professionals and patients, ensuring that access to healthcare becomes more efficient and less time-consuming. DoCare is driven by the mission to empower patients with the ability to manage their health care appointments easily while providing healthcare providers with robust tools to optimize their schedules, reduce administrative burdens, and improve patient care.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;

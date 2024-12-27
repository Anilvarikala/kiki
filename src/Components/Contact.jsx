
// import React, { useState,useEffect } from "react";
// import emailjs from "emailjs-com";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//    useEffect(() => {
//       window.scroll(0,0)
//    })
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.send(
//       "service_68o2a2f",
//       "template_g2urdgl",
//       {
//         from_name: formData.name,
//         from_email: formData.email,
//         to_email: "varikalaanil@gmail.com",
//         subject: formData.subject,
//         message: formData.message,
//         phone: formData.phone
//       },
//       "QJZdTTfvN2VYir2Va"
//     )
//     .then(
//       (result) => {
//         console.log("Email sent successfully:", result.text);
//         alert("Message sent successfully!");
//       },
//       (error) => {
//         console.log("Failed to send email:", error.text);
//         alert("Message failed to send. Please try again.");
//       }
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="contact-page">
//         <br />
//         <h2 className="text-center">Get in touch with us</h2>
//         <p className="text-center">
//           Any questions or remarks? <b className="secondary">Contact Us</b>
//         </p>

//         <form className="contact-info" onSubmit={sendEmail}>
//           <h5>Name</h5>
//           <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//           <br />
//           <h5>Phone Number</h5>
//           <input type="text" name="phone" placeholder="Phone number" onChange={handleChange} />
//           <br />
//           <h5>Email Address</h5>
//           <input type="email" name="email" placeholder="Email address" onChange={handleChange} />
//           <br />
//           <h5>Subject</h5>
//           <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />
//           <br />
//           <h5>Message</h5>
//           <textarea name="message" className="message-text" onChange={handleChange}></textarea>
//           <br />
//           <button type="submit" className="btn btn-success sub-btn">Send Message</button>
//         </form>
//       </div>
//       <br />
//       <Footer />
//     </>
//   );
// }

// export default Contact;







import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css"; // Import external CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_68o2a2f",
        "template_g2urdgl",
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "varikalaanil@gmail.com",
          subject: formData.subject,
          message: formData.message,
          phone: formData.phone
        },
        "QJZdTTfvN2VYir2Va"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-form-container">
          <h2 className="text-center">Get in Touch with Us</h2>
          <p className="text-center">
            Any questions or remarks? <b className="secondary">Contact Us</b>
          </p>

          <form className="contact-form" onSubmit={sendEmail}>
            
            <input
              type="text"
              
              name="name"
              id="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={formData.name}
            />
           
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Your Phone Number"
              onChange={handleChange}
              value={formData.phone}
            />
          
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={formData.email}
            />
            
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              onChange={handleChange}
              value={formData.subject}
            />
    
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <button type="submit" className="btn btn-warning sub-btn " style={{borderRadius:"10px"}}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

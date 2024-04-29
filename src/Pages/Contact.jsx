import './Contact.css'
import React from 'react'
import Email from '../Components/Assets/Emails.png'
import mail from '../Components/Assets/mail.png'
import phone from '../Components/Assets/phone.png'
import location from '../Components/Assets/location.png'

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c9c184de-f766-4c9b-b82a-64b23fdf6092");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



    return (
      <div className="contact">
        <div className="contact-col">
            <h3> Send us a Message<img src={Email} alt=''/></h3>
            <p>Have a question or inquiry? We're all ears! Send us a message and our dedicated team will get back to you promptly.
                 Whether you're seeking assistance, looking for collaboration opportunities, 
                 or simply want to say hello, we're here to help. 
                 Your feedback is invaluable to us as we strive to provide exceptional service and tailor-made solutions to meet your needs. 
                Don't hesitate to reach out – we're eager to hear from you!</p>
            <ul>
                <li><img src={mail} alt=''/> Projects@gmail.com</li>
                <li><img src={phone} alt=''/> +91 9876543210</li>
                <li><img src={location} alt=''/> Hyderabad, Telangana</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label> Your Name</label>
                <input type='text' name='name ' placeholder='Enter your name' required/>
                <label> Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your phone Number' required/>
                <label> Message</label>
                <textarea name='message' rows='6' placeholder='Enter your Message' required/>
                <button type='submit'  className='btn dark-btn'> Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
      </div>
    );
  }
  
  export default Contact;
  /*c9c184de-f766-4c9b-b82a-64b23fdf6092*/
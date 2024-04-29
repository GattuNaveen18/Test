import './About.css';
import Developer from '../Components/Assets/Developer.png';

function About() {
    return (
      <div className="about">
        <div className="about-left">
          <img src ={Developer} alt=''/>
        </div>
        <div className="about-right">
          <h1>We Devlopers</h1>
          <p>are passionate about transforming ideas into reality. 
            With a dedicated team of skilled professionals, 
            we strive to deliver innovative solutions that exceed expectations. Our commitment to excellence, 
            combined with a client-centric approach, ensures that every project is a success story. 
            Join us on our journey of creativity, collaboration, and continuous improvement.</p>
            <p>We believe in the power of technology to drive positive change. With a focus on innovation and quality,
               we aim to create impactful solutions that address the unique needs of our clients.
                Our diverse team brings together expertise from various fields, 
                allowing us to tackle projects of any scale and complexity. Together, 
              we're building a brighter future through creativity, collaboration, and cutting-edge technology.</p>

        </div>
      </div>
    );
  }
  
  export default About;
import './Projects.css'
import CarRental from '../Components/Assets/CarRental.png';
import web from '../Components/Assets/web.png';
import ml from '../Components/Assets/Ml.png';
import blockchainProject from '../Components/Assets/blockchainProject.png';
import pythonicon from '../Components/Assets/pythonicon.png';
import webicon from '../Components/Assets/webicon.png';
import mlicon from '../Components/Assets/mlicon.png';
import blockchainicon from '../Components/Assets/blockchainicon.png';

function Projects() {
    return (
      <div className ='projects'>
         <div className ='service'>
            <img src ={CarRental} alt=''/>
            <div className='caption'>
                <img src={pythonicon} alt=''/>
                <p>Python Projects</p>
            </div>
         </div>
         <div className ='service'>
            <img src ={web} alt=''/>
            <div className='caption'>
                <img src={webicon} alt=''/>
                <p>Web Development Projects</p>
            </div>
         </div>
         <div className ='service'>
            <img src ={ml} alt=''/>
            <div className='caption'>
                <img src={mlicon} alt=''/>
                <p>AI/ML Projects</p>
            </div>
         </div>
         <div className ='service'>
            <img src ={blockchainProject} alt=''/>
            <div className='caption'>
                <img src={blockchainicon} alt=''/>
                <p>Block Chain Projects</p>
            </div>
         </div>
      </div>
    );
  }
  
  export default Projects;
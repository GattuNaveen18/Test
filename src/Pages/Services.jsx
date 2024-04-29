import './Services.css'
import python from '../Components/Assets/python.png';
import web from '../Components/Assets/web.png';
import ml from '../Components/Assets/Ml.png';
import blockchain from '../Components/Assets/blockchain.png';
import pythonicon from '../Components/Assets/pythonicon.png';
import webicon from '../Components/Assets/webicon.png';
import mlicon from '../Components/Assets/mlicon.png';
import blockchainicon from '../Components/Assets/blockchainicon.png';

function Services() {
    return (
      <div className ='services' >
         <div className ='service'>
            <img src ={python} alt=''/>
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
            <img src ={blockchain} alt=''/>
            <div className='caption'>
                <img src={blockchainicon} alt=''/>
                <p>Block Chain Projects</p>
            </div>
         </div>
      </div>
    );
  }
  
  export default Services;
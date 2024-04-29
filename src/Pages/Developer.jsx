import './Developer.css';
import rnext from '../Components/Assets/rarrow.png';
import lnext from '../Components/Assets/larrow.png';
import profile from '../Components/Assets/profile.png';
import { useRef } from 'react';

function Developer() {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25; // Adjusted the value to slide one image at a time
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25; // Adjusted the value to slide one image at a time
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
      <div className='developer'>
        <img src={rnext} alt=''  className='nxt-btn' onClick={slideForward}/>
        <img src={lnext} alt=''  className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={profile}  alt=''/>
                                <div>
                                    <h3> Naveen Gattu</h3>
                                    <span> Senior Developer</span>
                                    <p>Naveen Gattu is a dynamic developer, proficient in a wide array of technologies. 
                                        With a knack for problem-solving and a passion for innovation,
                                         Naveen consistently delivers high-quality projects across diverse domains</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={profile}  alt=''/>
                                <div>
                                    <h3> Developer 2</h3>
                                    <span> Senior Developer</span>
                                    <p>Developer 2 is a dynamic developer, proficient in a wide array of technologies. 
                                        With a knack for problem-solving and a passion for innovation,
                                        Developer 2 consistently delivers high-quality projects across diverse domains</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={profile}  alt=''/>
                                <div>
                                    <h3> Developer 3</h3>
                                    <span> Senior Developer</span>
                                    <p>Developer 3 is a dynamic developer, proficient in a wide array of technologies. 
                                        With a knack for problem-solving and a passion for innovation,
                                        Developer 3 consistently delivers high-quality projects across diverse domains</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={profile}  alt=''/>
                                <div>
                                    <h3> Developer 4</h3>
                                    <span> Senior Developer</span>
                                    <p>Developer 4 is a dynamic developer, proficient in a wide array of technologies. 
                                        With a knack for problem-solving and a passion for innovation,
                                        Developer 4 consistently delivers high-quality projects across diverse domains</p>
                                </div>
                            </div>
                        </div>
                    </li>
                   
                </ul>
        </div>
      </div>
    );
  }
  
  export default Developer;
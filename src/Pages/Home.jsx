import './Home.css'
import  arrow from '../Components/Assets/arrow.png'
function Home() {
    return (
      <div className='home container'>
        <div className='home-text'> 
        <h1>Your One-Stop Destination for Customized Projects in Every Language and Technology</h1>
        <p>Crafting custom projects in all languages and technologies. Your vision, our expertise. Let's innovate together</p>
        <button className='btn'>Explore more <img src ={arrow} alt=''/></button>
        </div>
      </div>
    );
  }
  
  export default Home;
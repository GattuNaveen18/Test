import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Developer from './Pages/Developer';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='container'>
        <Title subtitle ='Our Services' title='Our Services'/>
      <Services/>
      <Title subtitle ='Our Services' title='Our Projects'/>
      <Projects/>
      <Title subtitle ='Our Services' title='About Us'/>
      <About/>
      <Title subtitle ='Our Services' title='Our Developers'/>
      <Developer/>
      <Title subtitle ='Our Services' title='Contact Us'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;

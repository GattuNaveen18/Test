import Alpha from './Assets/Alpha.png'
import '../Components/Navbar.css'
import './Navbar.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import menu from './Assets/menu.png'


function Navbar() {

    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50 ? setSticky(true): setSticky(false)
        })
    },[])

    const [mobilemenu, setmobilemenu] = useState(false);

const toglemenu =()=>{
    mobilemenu?setmobilemenu(false):setmobilemenu(true)
}

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        {/* <img src ={''} alt='' className='logo'/> */}
        <h1>PROJECTS</h1>
        <ul className={mobilemenu?'':'hide-mobile-menu'}>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
            <li><Link to='projects' smooth={true} offset={-150} duration={500}>Projects</Link></li>
            <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
            {/* <li><button className='btn'>SingnUp</button></li> */}
        </ul>
        <img src={menu} alt="Menu Icon" class="menu-icon" onClick={toglemenu}/>

     </nav>
    );
  }
  
  export default  Navbar;

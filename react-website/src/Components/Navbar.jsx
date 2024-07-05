import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Buttonc } from './Button';
import '../css/Navbar.css';
// import PopUp from './PopUp';



function Navbar() {
  //la primera linea te guarda el estado del click si esta True o False 
  const [click, setClick] = useState(false);
  const [button,setButton]=useState(true);
  // el segundo te lo cambia si el click esta TRue te cambia a False
  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);

  //si la pantalla del ordenador es menos que 960 mm, el boton desaparece sino el boton aparecera como sign-up
  const showButton =() => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true);
    }
  };

  

  window.addEventListener('resize', showButton);

  useEffect(() => {
    showButton();
  }, []);


  return (
    
      <nav className= 'navbar'>
         <div className='navbar-container'>
          {/* El / te dice que el link te va a llevar a la pagina principal de tu web  */}
          <div className= 'menu-icon' onClick={handleClick}>
            <i className= {click ? 'fas fa-times' : 'fas fa-solid fa-bars'}> </i>
            
          </div> 
          <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
           <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
           </li>
           <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Education
            </Link>
           </li>
           <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Work Experience
            </Link>
           </li>
           <li className='nav-item'>
            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
           </li>
          </ul>
          {button && <Buttonc buttonStyle='btn--outline' > Connect</Buttonc>}
        </div>
      </nav>
     
  );
  
}

export default Navbar








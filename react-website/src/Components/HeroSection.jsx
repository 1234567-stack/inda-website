import  React from 'react' ;
import { Buttonp } from "./Button";
import '../css/App.css';
import '../css/HeroSection.css'



function HeroSection(){

    return (

        <div className= 'hero-container'>

              <div className = 'hero-btns'>


                  <Buttonp
                    className = 'btns'
                    buttonStyle = 'btn--outline'
                    buttonSize= 'btn--large'
                  >
                    SEE MY WORK
                  </Buttonp>           
            </div>
        </div>
    );
}

export default HeroSection;
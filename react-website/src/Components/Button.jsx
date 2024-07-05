
import '../css/Button.css';
import {Link} from 'react-router-dom';
import React,{ useState} from 'react';
// import PopUp from './PopUp';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium','btn--large'];


// Is a function, even thought it doesn't look like it
export const Buttonp = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    })=>{
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

        return (
            <Link to='/products' className= 'btn-mobile'>
                <button className ={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick= {onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
          
        )
    };


export const Buttonc = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    })=>{
        const [showPopup, setShowPopup] = useState(false);
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
        const handleButtonClick = ()=> {
            setShowPopup(!showPopup);
            if (onClick) onClick();
        }
    
        return (
            <>
              <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={handleButtonClick}
                type={type}
              >
                {children}
              </button>
              {showPopup && (
                <div className='popup-container'>
                  <div className='popup-window'>
                    <p>Your popup content goes here</p>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                  </div>
                </div>
              )}
            </>
          );
        };




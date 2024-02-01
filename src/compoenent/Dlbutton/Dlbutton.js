 import React, { useState, useEffect } from 'react'
import './Dlbutton.css'
import Button from './Button';

export default function Dlbutton(props) {

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
  return (
    
<div>
<div className="top-to-btm2">
    {" "}
            {showTopBtn && (
                <div className="icon-position2 " 
                   
                >
                  <Button color={props.colorhandle}></Button>
                </div> 
            )}{" "}


            {/* {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position2 icon-style2" 
                    style={{backgroundColor: props.mode==='light'?' #36454F':'#551B54'}}
                ></FaAngleUp> 
            )}{" "} */}
        </div>
    </div>
    
  )
}

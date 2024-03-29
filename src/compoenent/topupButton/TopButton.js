import React, { useState, useEffect }from 'react'
import { FaAngleUp } from "react-icons/fa";
import './TopButton.css';

export default function TopButton(props) {
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
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <div>
<div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    // className="icon-position icon-style" text-${props.mode === "light" ? "dark" : 'light'}
                    className={`icon-position icon-style   `}
                    style={{backgroundColor: props.mode==='light'?' #36454F':'#551B54'}}
                    onClick={goToTop}
                ></FaAngleUp> 
            )}{" "}
        </div>
    </div>
  )
}

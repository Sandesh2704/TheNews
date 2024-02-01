import React, { useState } from 'react'
import './Navbar.css'
import { FaAlignJustify, FaBookOpenReader } from "react-icons/fa6";
// import NavCatigery from './NavCatigery';
import { NavLink} from 'react-router-dom';


export default function Navbar(props) {
  const [state, setsate] = useState(false)
  const changevalue = () => {
    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 100) {
      setsate(true)
    }
    else {
      setsate(false)
    }
  }
  window.addEventListener('scroll', changevalue)
  return (
    <>
     
        <div className="nav-position" style={{ backgroundColor: props.mode === 'dark' ? ' #282C35' : 'white' }}>
          <nav>

            <div className='left'>
              <div className="form-group has-search ">
                <span className="fa fa-search form-control-feedback "></span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>
            <div className='mylogo1'>
              <div className={state ? "mylogo" : 'mylog1 '}>
                <NavLink className={state ? "mylogo" : 'mylog1 '} to="/"> The Squad<FaBookOpenReader fontSize={"15px"} style={{ marginBottom: '7px', marginLeft: "3px", marginRight: '3px' }} />NEWS</NavLink>
                {/* The Squad<FaBookOpenReader fontSize={"15px"} style={{marginBottom:'7px', marginLeft:"3px", marginRight:'3px'}}/>NEWS */}
              </div>
            </div>
            <input type="checkbox" className='check' id="click" />
            <label htmlFor="click" className="menu-btn">

              <FaAlignJustify color="white" fontSize="1.5em" className='check2'></FaAlignJustify>
            </label>
            <ul>
              <li><NavLink  to="/">Home</NavLink></li>
              {/* <li><Link to='/'>Home</Link><a className="active" href=" ">Home</a></li> */}
              <li><NavLink to="/Abouts ">About</NavLink></li>
              <li><NavLink to="/feedback ">Feedback</NavLink></li>
              <li><NavLink to="/subscribe ">SUBSCRIBE</NavLink></li>
              <li><NavLink to="/sign-in"  className='sign' >Sign-in</NavLink></li>
            </ul>
          </nav>
        </div>
        {/* <div >
          <NavCatigery mode={props.mode} style={{ backgroundColor: props.mode === 'dark' ? ' #282C35' : 'white' }}></NavCatigery>
        </div> */}
        
       
    </>
  )
}

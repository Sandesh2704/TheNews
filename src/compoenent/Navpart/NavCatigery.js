import React from 'react'
import './NavCatergery.css'
export default function NavCatigery(props) {
  return (
    <div>
      <div className={`top-margin `} >
        <div className='top' style={{ backgroundColor: props.mode === 'dark' ? ' #36454F' : 'white' }}>


          <ul className="nav justify-content-center " >
           
              <li className="nav-item" >
                <a className='nav-link'  aria-current="page" href="# ">All</a>
              </li>
              <li className="nav-item" >
                <a className={`nav-link   `} href="# ">General </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link `}href="# ">Business </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} aria-current="page" href="# ">Politics</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} href="# ">Religion</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} href="# ">Sports</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`}  href="# ">Technology</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} href="# ">Weather</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link `} href="# "> Business</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link `} aria-current="page" href="# ">Agriculture</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} href="# ">Stock Market</a>
              </li>
              
          </ul>

        </div>
      </div>

    </div>
  )
}

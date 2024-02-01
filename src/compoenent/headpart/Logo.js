import React from 'react'
import './Logo.css'
import Weather from './logopart/Weather'
import DaLibutton from './logopart/DaLibutton'
import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Logo(props) {
  return (
    <>
      <div className={`logohead   text-${props.mode === "light" ? "dark" : 'light'}`} style={{ backgroundColor: props.mode === 'dark' ? ' #36454F' : 'white' }}>
        <Link to="/" className={`logo   text-${props.mode === "light" ? "dark" : 'light'}`} >
          The Squad<FaBookOpenReader fontSize={"30px"} style={{ marginBottom: '10px', marginLeft: "5px", marginRight: '5px' }} />NEWS
        </Link>
        <div className="weather">
          <DaLibutton color={props.colorhandle}></DaLibutton>
          <Weather></Weather>
        </div>
      </div>

    </>
  )
}

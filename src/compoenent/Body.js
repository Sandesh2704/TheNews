import React from 'react'
import './Body.css'
import Logo from './headpart/Logo'
import Navbar from './Navpart/Navbar'
import Artical from './articalpart/Artical'
 import TopButton from './topupButton/TopButton'
 import Dlbutton from './Dlbutton/Dlbutton'



export default function Body(props) {
  

  return (
    <>
      
        <TopButton />
        <Dlbutton mode={props.mode} colorhandle={props.modehandle} />
        <Logo mode={props.mode} colorhandle={props.modehandle}></Logo>
        <Navbar mode={props.mode}></Navbar>
        <Artical mode={props.mode} ></Artical>
       
    </>
  )
}


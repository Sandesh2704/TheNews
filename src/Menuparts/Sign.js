import React from 'react'
import Logo from '../compoenent/headpart/Logo'
import Navbar from '../compoenent/Navpart/Navbar'

export default function Sign(props) {
  return (
    <>
    <Logo mode={props.mode} colorhandle={props.modehandle}></Logo>
    <Navbar mode={props.mode} colorhandle={props.modehandle}></Navbar>
    
    </>
  )
}

import React from 'react'
import Toppart from './toppart/Toppart'

import './Artical.css'
import Firstpart from './Firstpart/Firstpart'
import Secondpart from './secondpart/Secondpart'
import NavCatigery from '../Navpart/NavCatigery'
export default function Artical(props) {
  return (
    <>
    <NavCatigery mode={props.mode} style={{ backgroundColor: props.mode === 'dark' ? ' #282C35' : 'white' }}></NavCatigery>
      <div className='artical' style={{ backgroundColor: props.mode === 'dark' ? ' #36454F' : 'white' }}>
        <Toppart mode={props.mode}></Toppart>
        </div >

         <div className={`margin text-${props.mode === "light" ? "dark" : 'light'}`} style={{ backgroundColor: props.mode === 'dark' ? ' #36454F' : 'white' }}>
          <div className="row">
            <div className="col-6 col-md-4 coloum1" >
              <h3 className='firstcolomns'>Recommended For You </h3>
              <Firstpart mode={props.mode}></Firstpart>
              <Firstpart mode={props.mode}></Firstpart>
              <Firstpart mode={props.mode}></Firstpart>
              <Firstpart mode={props.mode}></Firstpart>
              <Firstpart mode={props.mode}></Firstpart>
            </div>
            <div className="col-12 col-sm-6 col-md-8 coloum2 " >
              <h1 className='text-center'>
                Todays Top Head-Lines
              </h1>
              <div className="my-3">
                <div className='row'>
                  <div className="col-md-4 top-distance">
                    <Secondpart mode={props.mode}></Secondpart>
                  </div>
                  <div className="col-md-4 top-distance">
                    <Secondpart mode={props.mode}></Secondpart>
                  </div>
                  <div className="col-md-4 top-distance">
                    <Secondpart mode={props.mode}></Secondpart>
                  </div>
                  <div className="col-md-4 top-distance">
                    <Secondpart mode={props.mode}></Secondpart>
                  </div>
                  <div className="col-md-4 top-distance">
                    <Secondpart mode={props.mode}></Secondpart>
                  </div>
                  <div className="col-md-4 top-distance">
                    <Secondpart mode={props.mode}></Secondpart>
                  </div>
                  <div className="col-md-4 top-distance">
                    <Secondpart mode={props.mode}></Secondpart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
  )
}

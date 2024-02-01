import React from 'react'
import './Firstpart.css'



export default function Firstpart(props) {




  return (
  <>
      
      <div className={` card3  bg-${props.mode}  text-${props.mode === "light" ? "dark" : 'light'}`} >
        <div className="mycard-text">
          <p className="mycard-title">Some quick example text to build on the card title and make up the <a className=' mx-2' href=" ">Read  More</a></p>
        </div>
        <div >
          <img className='firstimg' src="https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
        </div>
      </div>

  

      </>
      )
}

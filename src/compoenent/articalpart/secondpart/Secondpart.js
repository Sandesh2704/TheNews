import React from 'react'
import './Secondpart.css'
export default function Secondpart(props) {
  return (
    <>
   <div className={`box card-border   bg-${props.mode}  text-${props.mode ==="light"?"dark":'light'}`}>
        <div className="">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" alt='hyfmnbt h ' className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div>
          <div className=" card-body2">
            <h5 className="card-title  ">Card title</h5>
            <p className="card-text extra">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="# " className="card-link mx-2">Share</a>
            <a href="# " className="card-link mx-2">Read More</a>
          </div>
        </div>
      </div>


    </>
  )
}

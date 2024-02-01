import React from 'react';
import './Weather.css'

export default function Weather() {


    
           
    return (
        <>
            <div className="cont" >
                <div className=''>
                    <div className="Circle1"></div>
                    <div className="Circle2"></div>
                    <div className="Circle3"></div>
                    <div className="content">
                        <h1 className='Condition '><i className="material-icons sun">wb_sunny</i> Sunny</h1>
                        <h1 className="Temp " id="temperature">77<span id="F">&#8457;</span></h1>
                       
                        <div style={{marginTop:'20px'}}>
                        <h1 className="Time">g</h1>
                        </div>
                        <h1 className="Location"><i className="material-icons locationIcon">place</i> Raleigh, NC</h1>
                    </div>
                </div>
            </div>
            
        </>
    )
}

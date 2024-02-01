
 import {BrowserRouter, Route,  Routes} from 'react-router-dom';
import './App.css';
import Body from './compoenent/Body';

import React , {useState }from 'react';
import Abouts from './Menuparts/Abouts';
import Sign from './Menuparts/Sign';
import Subscribe from './Menuparts/Subscribe';
import Feedback from './Menuparts/Feedback';



function App(props) {
  const[mode, setdarkmode] =useState('light')
  const enablemode=()=>{
 if(mode === 'dark'){
  setdarkmode('light');
  document.body.style.backgroundColor ='light';
 }
 if(mode === 'light'){
  setdarkmode('dark');
   document.body.style.backgroundColor ='light';
  // document.body.style.backgroundColor ='green';
 }
  }
  return (
   <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body mode={mode} modehandle={enablemode}></Body>} />
          <Route path='/abouts' element={<Abouts mode={mode} modehandle={enablemode}></Abouts>}></Route>
          <Route path='/sign-in' element={<Sign mode={mode} modehandle={enablemode}></Sign>}></Route>
          <Route path='/feedback' element={<Feedback mode={mode} modehandle={enablemode}></Feedback>}></Route>
          <Route path='/subscribe' element={ <Subscribe mode={mode} modehandle={enablemode}></Subscribe>}></Route>
         
        </Routes>
      </BrowserRouter>

 {/* <Body mode={mode} modehandle={enablemode}></Body> */}




   </>
  );
}

export default App;

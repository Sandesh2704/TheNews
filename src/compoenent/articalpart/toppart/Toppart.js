import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './Toppart.css'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { FaAffiliatetheme } from "react-icons/fa6";




export default function Toppart(props) {

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <FaAffiliatetheme className={`left2 text-${props.mode === "light" ? "dark" : 'light'}`} disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </FaAffiliatetheme>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
      <FaAffiliatetheme disabled={isLastItemVisible} className={`right2 text-${props.mode === "light" ? "dark" : 'light'}`} onClick={() => scrollNext()}>
        Right
      </FaAffiliatetheme>
    );
  }

  return (
    <>
<div  >
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}  >
        <article  className={`card5 bg-${props.mode}  text-${props.mode === "light" ? "dark" : 'light'}`}>
          <div>
            <img src="https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="iage" />
          </div>
          <div>
            <p><strong>Lorem ipsum dolor sit dolor sit amet, conse ctetur adipis icing elit<a className='mx-2 link' href=" "> Read More...</a></strong></p>
            <span>
              <i className="fab fa-instagram"></i>
              Instagram - <time>10 min ago</time>
            </span>
          </div>
        </article>

        <article className={`card5 bg-${props.mode}  text-${props.mode === "light" ? "dark" : 'light'}`}>
          <div>
            <img src="https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="iage" />
          </div>

          <div>
            <p><strong>Lorem ipsum dolor sit dolor sit amet, conse ctetur adipis icing elit<a className='mx-2' href=" "> Read More...</a></strong></p>
            <span>
              <i className="fab fa-instagram"></i>
              Instagram - <time>10 min ago</time>
            </span>
          </div>
        </article>

        <article className={`card5 bg-${props.mode}  text-${props.mode === "light" ? "dark" : 'light'}`}>
          <div>
            <img src="https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="iage" />
          </div>

          <div>
            <p><strong>Lorem ipsum dolor sit dolor sit amet, conse ctetur adipis icing elit <a className='mx-2' href=" ">Read More...</a></strong></p>
            <span>
              <i className="fab fa-instagram"></i>
              Instagram - <time>10 min ago</time>
            </span>
          </div>
        </article>

        <article className={`card5 bg-${props.mode}  text-${props.mode === "light" ? "dark" : 'light'}`}>
          <div>
            <img src="https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="iage" />
          </div>

          <div>
            <p><strong>Lorem ipsum dolor sit dolor sit amet, conse ctetur adipis icing elit<a className='mx-2' href=" "> Read More...</a></strong></p>
            <span>
              <i className="fab fa-instagram"></i>
              Instagram - <time>10 min ago</time>
            </span>
          </div>
        </article>

        <article className={`card5 bg-${props.mode}  text-${props.mode === "light" ? "dark" : 'light'}`}>
          <div>
            <img src="https://images.unsplash.com/photo-1540317700647-ec69694d70d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="iage" />
          </div>

          <div>
            <p><strong>Lorem ipsum dolor sit dolor sit amet, conse ctetur adipis icing elit <a className='mx-2' href=" ">Read More...</a></strong></p>
            <span>
              <i className="fab fa-instagram"></i>
              Instagram - <time>10 min ago</time>
            </span>
          </div>

        </article>
       
        {/* <div className={` mycard text-${props.mode === "light" ? "dark" : 'light'}`} style={{ backgroundColor: props.mode === 'dark' ? '  #26282A' : 'white' }}>
          <div className="mycard-text">
            <p className="mycard-title">Some quick example text to build on the card title and make<a className='mx-2' href=" ">Read More</a></p>
          </div>
          <div ><img className='img2' src="https://www.heraldtribune.com/gcdn/presto/2023/09/01/NMLF/528b7963-3f21-4436-b754-659d5a75d09f-Vaccine.jpg?crop=1911,1075,x0,y0&width=1911&height=1075&format=pjpg&auto=webp" alt="" /></div>
        </div>

        <div className={` mycard text-${props.mode === "light" ? "dark" : 'light'}`} style={{ backgroundColor: props.mode === 'dark' ? '  #26282A' : 'white' }}>
          <div className="mycard-text">
            <p className="mycard-title">Some quick example text to build on the card title and make<a className='mx-2' href=" ">Read More</a></p>
          </div>
          <div ><img className='img2' src="https://www.heraldtribune.com/gcdn/presto/2023/09/01/NMLF/528b7963-3f21-4436-b754-659d5a75d09f-Vaccine.jpg?crop=1911,1075,x0,y0&width=1911&height=1075&format=pjpg&auto=webp" alt="" /></div>
        </div>

        <div className={` mycard text-${props.mode === "light" ? "dark" : 'light'}`} style={{ backgroundColor: props.mode === 'dark' ? '  #26282A' : 'white' }}>
          <div className="mycard-text">
            <p className="mycard-title">Some quick example text to build on the card title and make<a className='mx-2' href=" ">Read More</a></p>
          </div>
          <div ><img className='img2' src="https://www.heraldtribune.com/gcdn/presto/2023/09/01/NMLF/528b7963-3f21-4436-b754-659d5a75d09f-Vaccine.jpg?crop=1911,1075,x0,y0&width=1911&height=1075&format=pjpg&auto=webp" alt="" /></div>
        </div> */}
      </ScrollMenu>
      </div>
    </>
  )
}

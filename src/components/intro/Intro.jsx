import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef} from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect (()=> {
    init(textRef.current, {
       backDelay: 1500,
       backSpeed: 60,
       showCursor: true, // shows the blinking cursor
        strings: ['Developer', 'Front-End Developer', 'Full-Stack Developer', 'Pokemon Fan' ], //any titles or things you can think of that looks cool
       });
  },[])
  
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            {/* be sure to change this to something that actually is of yourself, or for the project at hand  */}
            <img src="assets/man.png" alt=""/> 
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi there, I'm</h2>
            <h1>CJ Trahey</h1>
            <h3>I'm a <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""/>
          </a>
        </div>
    </div>
  )
}

import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef} from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect (()=> {
    init(textRef.current, {
       backDelay: 1500,
       backSpeed: 60,
       showCursor: true,
        strings: ['Developer', 'Front-End Developer', 'Full-Stack Developer', 'Pokemon Fan' ],
       });
  },[])
  
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
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

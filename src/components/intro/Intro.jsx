import "./intro.scss";
import { init } from 'ityped';

export default function Intro() {
  
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
            <h3>Freelance <span>Designer</span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""/>
          </a>
        </div>
    </div>
  )
}

import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { 
  featuredPortfolio,
  frontEndPortfolio,
  backEndPortfolio,
  fullStackPortfolio,
  contentPortfolio,
 } from "../../data";

export default function Portfolio() {

  // ... =useState("this is where you place your default selection");
  const [selected,setSelected] = useState("featured");
  const [data,setData] = useState([]);
  const list = [

    // Feel free to rename any of these to fit into your needs, just be sure to change the id tag in "data.js"
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "frontend",
      title: "Front-End",
    },
    {
      id: "backend",
      title: "Back-End",
    },
    {
      id: "fullstack",
      title: "Full-Stack",
    },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  // ALSO!! Be sure to change whatever's in () as to not break things, hopefully :)
  useEffect(()=> {

    switch(selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "frontend":
        setData(frontEndPortfolio);
        break;
      case "backend":
        setData(backEndPortfolio);
        break;
      case "fullstack":
        setData(fullStackPortfolio);
        break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
        default:
          setData(featuredPortfolio);
    }

  },[selected])

  // If you are using this template for anything other than a portfolio, be sure to rename ALL components in this as well.
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map(item=>(
            <PortfolioList 
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map(d=>(


          <div className="item">
            <img
            src={d.img}
            alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
        </div>
    </div>
  );
}

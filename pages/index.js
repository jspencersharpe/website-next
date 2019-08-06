import React from "react"
import Nav from "../components/Nav"
// import Heading from "../Heading"
// import spencer from "./spencer.jpg"
// import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <section>
        <Nav />
        <div className="img-container">
          {/* <img src={spencer} className="spencer" alt="spencer" /> */}
        </div>
        <div className="bio">
          {/* <Heading value="Spencer Sharpe" /> */}
          <h3>Husband, sports fan, software developer</h3>
        </div>
      </section>
    </div>
  )
}

export default Home

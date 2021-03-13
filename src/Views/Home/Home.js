import React from "react";
import "./Home.css"

export function Home() {
  return (
     <div className="margin container text-center">
      <h1 className="home-tittle">Menu Generator</h1>
      <div className="blackboard text-center"> 
      <h2 className="centered">About us</h2>
        <ul className="about-text">
          <li>Duis quis augue leo. Curabitur tincidunt</li><br></br>
          <li>Duis quis augue leo. Curabitur tincidunt</li><br></br>
          <li>Duis quis augue leo. Curabitur tincidunt</li><br></br>
          <li>Duis quis augue leo. Curabitur tincidunt</li>
        </ul>
        <img src="/img/ekaterina-novitskaya-gLroHoWh_as-unsplash.jpg" className="rounded float-start img-fluid size"></img>
      </div>
      </div>
  )
}

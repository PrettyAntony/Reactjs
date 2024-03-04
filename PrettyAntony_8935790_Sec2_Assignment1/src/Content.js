import React from 'react';

class Content extends React.Component {
    render(){
        return(
            <section style={{marginLeft:'-100px'}}>
      <div class="introduction-section">
          <h1>About myself</h1>
          <p>I am an Android Developer with an experience of 6 years.</p>
          <p>I love the logical thinking and mystery solutions hidden in every program. And I have keen observaton skills which helps me understand everyone.</p>
      </div>
      <div class="location-section">
          <h1>My Origin</h1>
          <p>I'm from Kerala, India. But currently I am residing in Waterloo, Ontario, Canada </p>
      </div>
      <div class="questions-section">
          <h1>Hands on Projects</h1>
          <h2>Kribbz</h2>
          <p>Kribbz is the evolution of real estate. Buy and sell a home instantly from your mobile device. 
              Search deals, make offers, digitally sign contracts and track escrow in real-time by using the Kribbz app. 
              Kribbz is the ultimate real estate marketplace, whether you want to buy, sell or invest in property in the United States.</p>
          <h2>SpotOn GPS Fence</h2>
          <p>SpotOn GPS Fence offers dogs and dog owners a reliable and convenient wireless containment system. 
              The only GPS fence to use patented True Location™ technology, SpotOn is the easiest and most reliable way to contain your dog. 
              Simply set the boundary and leave your dog to go about their business, while you go about your day.</p>
          <h2>TrailCamera App</h2>
          <p>NEW for 2022, the ENCOUNTER 2.0™ and Terra Cell™ cellular trail cameras by Wildgame™ now utilizing the strength of the Verizon and AT&T networks for optimum nationwide coverage. 
              Built into a compact & rugged housing, the ENCOUNTER 2.0™ and Terra Cell™ send images straight to your mobile device via the HuntSmart™ app.</p>
          <h2>My Hobbies</h2>
          <ul>
              <li>Logical Puzzle Gaming</li>
              <li>Techgig Hackathon Quizes</li>
              <li>Reading and watching movies</li>
          </ul>
      </div>
      </section>
        );
    }

}

export default Content;
import React from "react";
import days from "../6plates";
import Card from "./Card";

function Plan() {
  return (
    <><div className="card-one">
      <Card
        name={days[0].name}
        img={days[0].imgurl}
       />
    </div><div className="card-one">
        <Card
          name={days[1].name}
          img={days[1].imgurl} 
          
        />
      </div><div className="card-one">
        <Card
          name={days[2].name}
          img={days[2].imgurl} 
          
        />
      </div><div className="card-one">
        <Card
          name={days[3].name}
          img={days[3].imgurl} 
        
        />
      </div><div className="card-one">
        <Card
          name={days[4].name}
          img={days[4].imgurl} 
      
        />
      </div><div className="card-one">
        <Card
          name={days[5].name}
          img={days[5].imgurl} 
        
        />
      </div></>
  );
}

export default Plan;

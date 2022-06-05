import React from "react";
import {Link} from "react-router-dom";

function Card(props){
    return(
    <> <div className="top">
             <img className="circle-img" src={props.img} alt="meme_img" />
        </div>
        <div className="bottom">
        <button className={props.name}><Link  to="/days"><h2 className="name">{props.name}</h2></Link></button>
        </div></>
        
    );
}

export default Card;
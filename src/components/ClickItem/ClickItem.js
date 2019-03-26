import React from "react";

const ClickItem = props => (
    <div className = "icons" onClick={() => props.handleClick(props.id)}>
    <div className = "Container">
    <img alt={props.name} src={props.image} />
    </div>
    </div> 
    // <div className
    // <div 
    //     role = "img"
    //     onClick={() => props.handleClick(props.id)}
    //     style={{backgroundImage: `url("${props.image}")`}}
    //     className ={`click-item${props.randomizer ? "randomizer" :""}`}
    // />
);
export default ClickItem;
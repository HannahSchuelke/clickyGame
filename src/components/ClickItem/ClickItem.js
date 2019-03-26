import React from "react";

const ClickItem = props => (
    <div 
        role = "img"
        onClick={() => props.handleClick(props.id)}
        style={{backgroundImage: `url("${props.image}")`}}
        className ={`click-item${props.randomizer ? "randomizer" :""}`}
    />
);
export default ClickItem;
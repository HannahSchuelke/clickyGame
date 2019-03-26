import React,{ Component} from "react";

const ClickItem = props => (
    <div 
        role = "image"
        onClick={() => props.handleClick(props.id)}
        style={{backgroundImage: `url("${props.image}")`}}
        className ={`click-item${props.randomizer ? "randomizer" :""}`}
    />
);
export default ClickItem;
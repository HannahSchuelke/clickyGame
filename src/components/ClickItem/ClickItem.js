import React from "react";
import "./ClickItem.css";


const ClickItem = props => (
    <div className="icons" onClick={() => props.handleClick(props.id)}>
        <div className="Container">
                    <img className="icon-img" alt={props.name} src={props.image} />
        </div>
    </div>
);
export default ClickItem;
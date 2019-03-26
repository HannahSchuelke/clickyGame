import React from "react";

const ClickItem = props => (
    <div className="icons" onClick={() => props.handleClick(props.id)}>
        <div className="Container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);
export default ClickItem;
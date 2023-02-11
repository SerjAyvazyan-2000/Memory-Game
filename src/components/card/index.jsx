import React, {useState} from "react";
import "./style.scss"




const Card = ({item,index,handleClick}) => {
 let elementState = item.state ?  " active " + item.state : ''

    return <div className={"card" + elementState } onClick={()=>handleClick(index)}>
        <img src={item.img} alt=""/>
    </div>
}

export default Card
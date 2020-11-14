import React from "react";


export default function View(props) {
  return (

    <div className='card' >

        <tr>
    {props.el.name}
        . _ .
    {props.el.state}
        . _ .
    {props.el.salary}
        <br/>
            <button disabled={props.el.group === 1} onClick={()=>props.moveCard(props.el.id, -1) }> Move left </button>
            <button disabled={props.el.group === 4} onClick={() => props.moveCard(props.el.id, + 1)}> Move right </button>
    </tr>


    </div>
  );
}


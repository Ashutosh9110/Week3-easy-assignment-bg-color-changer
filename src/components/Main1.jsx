import React, { useState } from "react";


export default function Main1 () {

    const [ color, setColor ] = useState("white");
    return (
        <>

            <div style={{ backgroundColor: color, width: "100vw", height: "100vw"}}>
                <button onClick={() => setColor("red")} style={{ width:"50px", height:"30px", borderRadius:"15px"}}>Red</button>
                <button onClick={() => setColor("brown")} style={{ width:"50px", height:"30px", borderRadius:"15px"}}>brown</button>
                <button onClick={() => setColor("yellow")} style={{ width:"50px", height:"30px", borderRadius:"15px"}}>yellow</button>
                <button onClick={() => setColor("green")} style={{ width:"50px", height:"30px", borderRadius:"15px"}}>green</button>
            </div>
        
        </>
    )
}
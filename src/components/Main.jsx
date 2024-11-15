import React, { useEffect, useState } from "react";


export default function Main() {

const [ bgColor, setBgColor ] = useState("teal") //Default Value on Component Load: When the Main component first renders, bgColor is initialized with the value "red".


useEffect(() => {
    document.body.style.backgroundColor = bgColor
}, [bgColor])

    return (
        <>
            <div className="container">
                <div className="toggle-button">
                    <div className="red" onClick={() => setBgColor("red")}>Red</div>
                    <div className="yellow" onClick={() => setBgColor("yellow")}>Yellow</div>
                    <div className="black" onClick={() => setBgColor("black")}>Black</div>
                    <div className="purple" onClick={() => setBgColor("purple")}>Purple</div>
                    <div className="green" onClick={() => setBgColor("green")}>Green</div>
                    <div className="blue" onClick={() => setBgColor("blue")}>Blue</div>
                    <div className="default" onClick={() => setBgColor("bisque")}>Default</div>
                </div>
            </div>
        </>
    )
}




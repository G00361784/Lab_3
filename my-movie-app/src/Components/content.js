import React from "react";
const Content = ()=>{//declaring arrow function called content
    return(
        <div>
            <h1>Hello World!</h1>//printing Hello World
            <h2>It is {new Date().toLocaleTimeString()}</h2>//using javascript to create time String
        </div>
    )
}
export default Content;

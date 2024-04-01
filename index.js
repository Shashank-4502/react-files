import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

function MainContent(){
    return (
        <div>
            <h1>This is React-logo</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originakly created by jordan walke</li>
                <li>Has well over 100k stars on github</li>
                <li>Is Maintaned by Facebook</li>
            </ul>
        </div>
    );
}
function Footer(){
    return (
        <footer>
            <small>
                @ Shashankb Development, All rights reserved
            </small>
        </footer>
    );
}


function Page(){
    return (
        <div>
           <Header />
            <MainContent />
            <Footer /> 
            
        </div>
        
    );   
}
ReactDOM.render(<Page />,document.getElementById("root"));

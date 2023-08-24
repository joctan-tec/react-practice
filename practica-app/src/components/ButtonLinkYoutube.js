import React from "react";
import '../App.css';

export default function ButtonLinkYoutube() {
    
    var n1 = 2;
    var n2 = 4;
    var n3 = " Hola mundo";


    return(
        <div className = 'myButtonContainer'>
            <div className = 'myButton'>
                <p>
                    Ver video {n1+n2 + n3}
                </p>
            </div>
        </div>
    )
}

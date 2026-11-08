import React from "react";

function Navbar(prob){
    return <div style={{backgroundColor:'green', width:'30%', height:'100vh'}}>
        <ul style={{textDecorationLine:'none'}}>
            <li>Home, {prob.age}</li>
            <li>Home {prob.phone}</li>
            <li>Home {prob.fullname}</li>
        </ul>
    </div>
}

export default Navbar
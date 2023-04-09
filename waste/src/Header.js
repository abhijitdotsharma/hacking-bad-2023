import { useState } from "react"
// import logo from './logo.png';


export default function Header(){
    const [noobs,setNoob]=useState(false)
    return(
        <div class="header" id="head">
            {/* <br/> */}
            <hr/>
            <h3 class="creator" onMouseOver={()=>setNoob(true)} onMouseLeave={()=>setNoob(false)}>Do you want to know the creators? </h3>
       
            <h1 class="title">ScrapHole</h1>
            {
                noobs && <span class="nameRnP">
                    <h3>RIYA TEKCHAM <br/> PARTHA PRATIM DEURI</h3>
                </span>
            }
            <hr/>
        </div>

    )
}
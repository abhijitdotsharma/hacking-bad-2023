import { useState } from "react"


export default function SgstComp(){
    const [sgstCompBtn,setSCbtn]= useState(false)
    return(
        <div class="sgstComp">
        <h1>Suggestion/Complaints</h1>
        <textarea name="textarea"rows="5" cols="100" placeholder="Write your feedback Here" required/> &nbsp;<br/>
        <button onClick={()=>setSCbtn(true)}>Submit</button>
        {
            sgstCompBtn && <div>
                Thank you for submitting your thoughts. We'll look into it soon.
                </div>
        }
        </div>
    )
}
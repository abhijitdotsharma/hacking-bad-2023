import React,{useState} from 'react'

export default function SuggestNewBin(){
    const [sgst,setSugst] = useState(false);
    const [dustBin,setDustBin] =useState({
        city: "", location: "",pin:"",
    });
    let name,value;
    const updateBin = (e)=>{
        console.log(e)
        name = e.target.name;
        value =  e.target.value;

        setDustBin({...dustBin,[name]:value});
    }

    return(
        <div class="sgst" id="sgstN">
            <span ><h3>Suggest New Bin Location</h3></span>
            {
                 <div>
                    <form>
                        <label>City : <input type="text" name="city" value={dustBin.city} onChange={updateBin}></input> </label><br/><br/>
                        <label>Location : <input type="text" name='location' value={dustBin.location} onChange={updateBin}></input> </label><br/><br/>
                        <label>PIN : <input type="number" name='pin' value={dustBin.pin} onChange={updateBin}></input> </label>

                        {/* <p>Add Image <input type="file" alt="attach"></input> </p> */}

                        <p><input type="Submit" value="Submit" onClick={()=>setSugst(true)}/></p>
                        {
                            sgst && <div>
                                Thank you for your suggestion we'll look forward to it. 
                            </div>
                        }
                    </form>
                    </div>
            }

        </div>
    )
}
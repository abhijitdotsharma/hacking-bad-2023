import React,{useState} from 'react'
import Intro from './Intro'
import SuggestNewBin from './SuggestNewBin'
import SgstComp from './SgstComp'
import logo from './logo.png'
import Nirjuli from './Nirjuli'
import Doimukh from './Doimukh'
import NotMatch from './NotMatch'
function Map(){
    const [searchBtn,setSearch] = useState(false)
    const [searchArea,setSearchArea] =useState("")
    let name,value;
    const hndlEvent = (e)=>{
            name = e.target.name;
            value  = e.target.value;
            console.log(searchArea);
            setSearchArea(value);
    }
    // const []
    const searchSubmit = async ()=>{
        setSearch(true);

    }
    return(
        <div class="map" id="searchBtn">
            <label><strong>Enter your City/Village Name</strong> <input type="text" name="search" class="cityName"  value={searchArea} onChange={hndlEvent}></input>&nbsp;
            <button class="srcBtn" onClick={searchSubmit}>Search</button></label>
            {
                searchBtn && (searchArea === "Nirjuli" ||searchArea === "nirjuli") &&
                    <div>
                    <Nirjuli/>
                    </div>
            }
            {
                searchBtn && (searchArea === "Doimukh"|| searchArea === "doimukh") &&
                    <div>
                    <Doimukh/>
                    </div>
            }
            {
                searchBtn && (searchArea!=="" && searchArea !== "Doimukh" && searchArea !== "Nirjuli" && searchArea !== "nirjuli" && searchArea !== "doimukh") &&
                    <div>
                    <NotMatch/>
                    </div>
            }
            <h3>We are currently available only for Nirjuli and Doimukh</h3>
            
        </div>
    )
}
function NavLeft(){
    return(
        <div class="navLeft">
            <ul>
            <strong>
            <li><a href="#head">Introduction</a></li>
            <br/>
            <br/>
            <li><a href="#searchBtn">Search Bins</a></li>
            <br/>
            <br/>
            <li><a href="#sgstN">Suggest New Bins</a></li>
            <br/>
            <br/>
            <li><a href="#foot">Complaint/Suggestion &nbsp;&nbsp;&nbsp;</a></li>
            <br/>
            </strong>
            </ul>
        </div>
    )
}

export default function Body(){
    return(
        <div class="body">

        {/* <h1>Body</h1> */}
        <NavLeft/>
        <img class="logo" src={logo} alt="logo" height="150px"/>
        <Intro/>
        <Map/>
        <SuggestNewBin/>
        <SgstComp/>

        </div>
    )
}
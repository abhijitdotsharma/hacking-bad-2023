import introimg from './introimg.jpeg'
import midimg from './midimg.png'
import truck from './truck.jpg'

export default function Intro(){
    return (
        <div>
            
            <p  ><h2 class="qsn">WHAT DO WE DO??</h2>
            <ul class="qsnlist">
               <h3>
                <li>Weekly waste collection service on the available areas.</li>
                <li>Setting  up more Garbage Bins.</li>
                <li>On demand waste collection</li>
                </h3>
            </ul>
            <img class="introImg" src={introimg}/>
            </p>
            {/* <img class="truck" src={truck}/> */}
            <p class="introPara">
            A critical component in any waste management program is public awareness and participation, in addition to appropriate legislation, strong technical support, and adequate funding. Waste is the result of human activities and everyone needs to have a proper understanding of waste management issues, without which the success of even the best conceived waste management plan becomes questionable. The paper presents an overview of the fundamentals of waste management and, using examples from the United States, illustrates how public awareness and participation results in succcssful waste management. Examples of the methods and techniques that have been very effective in creating and enhancing public awareness of waste management problems, including the author's proven method of public education, are presented in the paper. The details of a course aimed at educating school teachers on waste management issues and a specialized curriculum on waste and litter control, designed for kindergarten through 8th grade students and developed by the author, are discussed in the paper. A case study dealing with remediation of one of the worst contaminated hazardous waste sites in the United States, that included substantial public participation, is reviewed. The paper concludes by emphasizing that the public must be made aware of waste management issues to understand the consequences of improper management of waste and how it may ultimately pose a serious threat to their lives and well-being.
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <img class="midImg" src={midimg}/>
            {/* 
            <p class="introPara">
            A critical component in any waste management program is public awareness and participation, in addition to appropriate legislation, strong technical support, and adequate funding. Waste is the result of human activities and everyone needs to have a proper understanding of waste management issues, without which the success of even the best conceived waste management plan becomes questionable. The paper presents an overview of the fundamentals of waste management and, using examples from the United States, illustrates how public awareness and participation results in succcssful waste management. Examples of the methods and techniques that have been very effective in creating and enhancing public awareness of waste management problems, including the author's proven method of public education, are presented in the paper. The details of a course aimed at educating school teachers on waste management issues and a specialized curriculum on waste and litter control, designed for kindergarten through 8th grade students and developed by the author, are discussed in the paper. A case study dealing with remediation of one of the worst contaminated hazardous waste sites in the United States, that included substantial public participation, is reviewed. The paper concludes by emphasizing that the public must be made aware of waste management issues to understand the consequences of improper management of waste and how it may ultimately pose a serious threat to their lives and well-being.
            </p> */}
            <p class="dailyQuote">
                
            <h2>Today, recycle for a better tomorrow.</h2>
            </p>
        </div>
    )
}
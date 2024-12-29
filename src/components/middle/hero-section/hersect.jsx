
import React, { useState } from "react";
import './hersect.css'
import Weeklysong from "../weeklyTopsong/topSong";

function MiddleSection() {
    const Billiedesc = "Billie Eilish is among the top 50+ most streamed artists of the year. Her unique sound and emotional depth leave a lasting impression on listeners. From the haunting When the Party's Over to the hit Bad Guy. Her music resonates deeply, making her a standout in the music industry."
    
    const [heroDesc, setHerodesc] = useState([Billiedesc])
    const [heroName, setHeroname] = useState(['Billie Eilish'])
    return (
     <>
     <div className="middleContainer"> 
     <HeroContent name={heroName} description= {heroDesc}/>
     <Weeklysong />
     </div>
     </>   
    )
}

function HeroContent(props){
    
    
    return(
        <>
            <div className='img'>
           <div className='hersectContent'>
                <h1 className='heroName poppins'>{props.name}</h1>
                <p className='description poppins poppins-small'>{props.description}</p>
                <button className="listenBtn poppins">Listen Now</button>
                <button className="followBtn poppins">Follow</button>
            <p className="arrow-container"><i className="arrow right"></i></p>
            <p className="arrow-container"><i className="arrow left"></i></p>
            </div>

            </div>
        </>
    )
}

export default MiddleSection
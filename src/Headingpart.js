import React, { useState } from 'react'
import Data from './Data.json';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './Headingpart.css';
import Excessdata from './Excessdata';
const Headingpart = () => {
    const[changedata,setChangedate]=useState(0);
    // this listsize the size of the array:
    const listsize=Object.keys(Data.query.results.channel.item.forecast).length;
    const NextDate=()=>{
        if(changedata<listsize-1){
            setChangedate(changedata+1);
        }
        else {
            setChangedate(0);
        }
    }
  return (
    <>
    <div className="mainhead">
        <h1>{Data.query.results.channel.image.title} <span><OfflineBoltIcon/></span></h1>
    </div>
    <div className="location">
        <h1>{Data.query.results.channel.description}</h1>
    </div>
    <div className="topportion">
    <div className="lefttop">
    <div className="tempdetails">
        <h1><span>{Data.query.results.channel.item.forecast[changedata || 0].code}</span></h1>
        <sup>o</sup>
    </div>
    <div className="datetemp">
        <h2>{Data.query.results.channel.item.forecast[changedata || 0].date}</h2>
        <h2>{Data.query.results.channel.item.forecast[changedata || 0].text}</h2>
    </div>
    </div>
    <div className="lastupdate">
        <h3>LastBuildDate:{Data.query.results.channel.lastBuildDate}</h3>
        <div className="riseset">
        <li><WbSunnyIcon/>-{Data.query.results.channel.astronomy.sunrise}</li>
            <li><NightsStayIcon/>-{Data.query.results.channel.astronomy.sunset}</li>
        </div>
        <div className="nextbtn">
        <button onClick={NextDate}>Next Day</button>
        <button><a href={Data.query.results.channel.image.link} target="_blank">Explore</a></button>
        </div>
    </div>
    </div>
    <Excessdata changedata={changedata}/>
    </>
  )
}

export default Headingpart
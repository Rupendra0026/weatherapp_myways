import React from 'react'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CompressIcon from '@mui/icons-material/Compress';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AirIcon from '@mui/icons-material/Air';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import './Excessdata.css';
import Data from './Data.json';
const Excessdata = (props) => {
  return (
    <>
    <div className="excessdata">
    <div className="rightop">
        <h1>{Data.query.results.channel.item.title}</h1>
        <div className="detailclimate">
        <div className="climatedataleft">
        <table>
            <tr> 
            <td><AirIcon/>Wind</td>
                    <td>{Data.query.results.channel.wind.speed}{Data.query.results.channel.units.speed}</td>
            </tr>
            <tr>
                <td><InvertColorsIcon/>Humdity</td>
                <td>{Data.query.results.channel.atmosphere.humidity}%</td>
            </tr>
            <tr>
                <td><CompressIcon/>Pressure</td>
                <td>{Data.query.results.channel.atmosphere.pressure}</td>
            </tr>
            <tr>
                <td><VisibilityIcon/>Visibility</td>
                <td>{Data.query.results.channel.atmosphere.visibility}</td>
            </tr>
        </table>
          </div>
          <div className="climatedataright">
            <table>
                <tr>
                <td><ThermostatIcon/>High/Low</td>
                <td>{Data.query.results.channel.item.forecast[props.changedata || 0].high}/
                {Data.query.results.channel.item.forecast[props.changedata || 0].low}</td>
                </tr>
                <tr>
                    <td><AcUnitIcon/>Climate</td>
                    <td>{Data.query.results.channel.item.forecast[props.changedata || 0].text}</td>
                </tr>
                <tr>
                    <td><CalendarMonthIcon/>Date/Day</td>
                    <td>{Data.query.results.channel.item.forecast[props.changedata || 0].date}/
                    {Data.query.results.channel.item.forecast[props.changedata || 0].day}</td>
                </tr>
                <tr>
                    <td><StackedLineChartIcon/>Lat/Long</td>
                    <td>{Data.query.results.channel.item.lat}/{Data.query.results.channel.item.long}</td>
                </tr>
            </table>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Excessdata
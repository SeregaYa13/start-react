import React from 'react'

function  Weather(props) {
    return (
 <div 
 style={{
    width:'200px',
    textAlign: 'center',
    color: 'white',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'grey',
 }}>
    <h3>{props.city}</h3>
    <h3>{props.temp}<sup>o</sup>C</h3>
    <img src={props.icon}/>
 </div>
    );
}

export default Weather;


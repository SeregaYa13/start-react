import { useState } from "react";

function TempControl() {
    const [ temperature, setTemperature] = useState(20);

    const increaseTemp = () => setTemperature(element => element + 1)
    const decreaseTemp = setTemperature(element => element - 1)
    return (

        <div
            style={{
                border: '1px solid #ccc',
                wight: '300px',
                marginTop: '10px'
            }}>
            <h1>Температура:{temperature} <sup>o</sup>C</h1>
            <button onClick={increaseTemp}
            style={{marginRight: '10px'}}>
                
            Больше</button>
            <button onClick={decreaseTemp}>Меньше</button>
        </div>

    );
}

export default TempControl;
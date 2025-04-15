import React, { useState, useEffect } from "react";

function SimpleSecond() {
let [seconds, setSeconds] = useState(0)

useEffect(()=> {
    let interval = setInterval(()=> {
        setSeconds(elem => elem + 1)
}, 1000)
    return () => clearInterval(interval)
}, [])


    return (
        <div>Прошло {seconds} секунд</div>
    );
  
}

export default SimpleSecond;

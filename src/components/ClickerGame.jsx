import React, {useState, useEffect} from "react";


function ClickerGame() {
let [score, setScore] = useState(0)
let [timeLeft, setTimeLeft] = useState(30)
let [gameActive, setGameActive] = useState(false)
let [targetPosition, setTargetPosition] = useState({x: 0, y: 0})
let [targetSize, setTargetSize] = useState(50)

function generateRandomPosition () {
    let maxX = window.innerWidth - 200;
    let maxY = window.innerHeight - 200;
    setTargetPosition({
       x: Math.floor(Math.random() * maxX),
       Y: Math.floor(Math.random() * maxY) 
    })
}

function targetClick() {
    if (!gameActive) return
    setScore(count => count + 1)
    setTargetSize(elem => Math.max(20, elem - 2))
    generateRandomPosition()
}

useEffect(() => {
    if (!gameActive) return;
    let timer = setInterval(() => {
        setTimeLeft(time => {
            if (time <= 1) {
                setGameActive(false)
                clearInterval(timer)
                return 0
            }
            return time - 1
        })

    }, 1000);
    return () => clearInterval(timer)
}, [gameActive])


function startGame () {
    setScore(0)
    setTimeLeft(30)
    setTargetSize(50)
    setGameActive(true)
    generateRandomPosition()
}
return (
<div style={{textAlign:"center", height: "100vh"}}>
    <div>
    <h2>Игра кликер</h2>
    <p>Счет: {score}</p>
    <p>Время: {timeLeft} сек</p>
    {!gameActive && (
        <button onClick={startGame}>
            {timeLeft === 0 ? 'Играть заново' : 'Начать игру'}
        </button>
    )}
    </div>

{gameActive && (
    <div
    onClick={targetClick}
    style={{
        position: 'absolute',
        left: `${targetPosition.x}px`,
        top: `${targetPosition.y}px`,
        backgroundColor: 'red',
        borderRadius: '50%',
        width: `${targetSize}px`,
        height: `${targetSize}px`,
        cursor: 'pointer',
        transition: 'all .3s ease'
    }}
    ></div>
)}

{!gameActive && timeLeft === 0 && (
    <p style={{fontSize: '24Ppx', marginTop: '20px'}}
    >Игра окончена! Ваш счет: {score}</p>
)}
</div>
);


}
export default ClickerGame
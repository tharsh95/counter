import React, { useState } from 'react'
import './counterinterval.css'
const Counterinterval = () => {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    const [id, setId] = useState()
    const [likes, setLikes] = useState(0)
    function handleStart(e) {
        e.preventDefault()
        let intId = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        setId(intId)
    }
    function handleStop() {
        clearInterval(id)
    }
    function handleReset() {
        setCount(initialState)
        clearInterval(id)
    }
    function handleLike() {
        setLikes(likes + 1)
    }
    function handleDislike() {
        // if (likes === 0) {
        //     setLikes(0)
        // }
        // else {
            setLikes(likes - 1)
        // }

    }
    return (
        <>
        <div className="full__container">
            
            <div className="container my-3 timer__container">
                <h1>Timer</h1>
                <div id="count">
                {count}

                </div>
                <button id="start" className="btn btn-primary mx-3" onClick={handleStart}>Start</button>
                <button id="stop" className="btn btn-primary mx-3" onClick={handleStop} disabled={count===0?true:false}>Stop</button>
                <button id="reset" className="btn btn-primary mx-3" onClick={handleReset} disabled={count===0?true:false} >Reset</button>
            </div>
            <div className="container my-3 likes__container">
                <h1>Likes/Dislikes</h1>
                <div id="likes">

                {likes}
                </div>
                <button className="btn btn-primary mx-3" onClick={handleLike}>Like</button>
                <button className="btn btn-primary mx-3" onClick={handleDislike} disabled={likes===0?true:false} >Dislike</button>
            </div>
        </div>
        </>
    )
}

export default Counterinterval

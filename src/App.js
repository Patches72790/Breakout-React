import React, { useRef, RefObject, useState } from "react";
import { ReactDOM } from 'react-dom';
import { Paddle } from './components/Paddle'

export const App = () => {

    const [ mouseXPosition, setMouseXPosition] = useState(null)
    const paddleRef: RefObject<HTMLDivElement> = useRef(null)


    const onMouseMove = (event: MouseEvent) => {
        setMouseXPosition(event.clientX)
    }


//    const onMouseMove = (event: MouseEvent) => {
//        event = event || window.event
//        console.log("moving the paddle")
//
//        paddleRef.current.childPaddleRef.style.left = event.pageY + "px"
//    }



    return (<div onMouseMove={onMouseMove}>
        <Paddle position={mouseXPosition}/>
    </div>)
}

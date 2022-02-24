import React, { useRef, useState } from "react";
import { ReactDOM } from 'react-dom';
import { Paddle } from './components/Paddle'

export const App = () => {

    const [mouseXPosition, setMouseXPosition] = useState(null)

    const onMouseMove = (event: MouseEvent) => {
        setMouseXPosition(event.clientX)
    }

    return (<div id={"app-container"} onMouseMove={onMouseMove}>
        <Paddle position={mouseXPosition}/>
    </div>)
}

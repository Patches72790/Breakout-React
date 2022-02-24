import React, { useRef, RefObject, useEffect } from 'react'

export const Paddle = ({
    onMouseMove,
    position
}) => {
    const childPaddleRef = useRef(null)
    useEffect (() => {
        console.log("changing paddle position to " + position)
        childPaddleRef.current.style.left = position + 'px'
    }, [position])


    return <div id="paddle" ref={childPaddleRef}></div>
}

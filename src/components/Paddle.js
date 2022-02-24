import React, { useRef, RefObject, useEffect } from 'react'

export const Paddle = ({
    onMouseMove,
    position
}) => {
    const childPaddleRef = useRef(null)
    useEffect (() => {
        console.log("changing paddle position to " + position)
        childPaddleRef.current.style.left = position + 'px'
        childPaddleRef.current.style.top = position + 'px'

    }, [position])


    return <div /*onMouseMove={onMouseMove}*/ id="paddle" ref={childPaddleRef}></div>
}
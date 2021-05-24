import React, { useRef } from 'react'


const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);


const TestButton = () => {

    const compRef = useRef(null);
    const isScroll = () => scrollToDiv(compRef);


    return (
        <div>
            <button onClick={() => isScroll(compRef)}>Section 1</button>   
        </div>
    )
}

export default TestButton

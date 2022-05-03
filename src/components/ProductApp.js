import { mount } from 'productMF/ProductApp'
import React, { useRef, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

export default ({ history, setCart }) => {
    const ref = useRef(null);
    // const history = useNavigate();

    useEffect(() => {
        console.log(history)
        const { onParentNavigate } = mount(ref.current, setCart);
        // onParentNavigate(history,pathname);
        // console.log(onParentNavigate)
    }, [])

    return <div ref={ref} />
}
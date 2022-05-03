import { mount } from 'cartMF/CartApp'
import React, { useRef, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

export default ({ cart, setCart }) => {
    const ref = useRef(null);
    const history = useNavigate();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, cart, setCart);
        // history.listen(onParentNavigate)
        // console.log(history)
    }, [cart])

    return <div ref={ref} />
}
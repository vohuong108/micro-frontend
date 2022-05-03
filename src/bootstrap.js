import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import { createBrowserHistory } from 'history'

const mount = (el, cart, setCart) => {
    const history = createBrowserHistory()

    const root = ReactDOM.createRoot(el); // createRoot(container!) if you use TypeScript
    root.render(<App history={history} cart={cart} setCart={setCart} />);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('cart-dev')
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
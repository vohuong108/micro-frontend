import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import { createBrowserHistory } from 'history'
import { useNavigate, useLocation  } from 'react-router-dom';

const mount = (el, setCart) => {
    const history = createBrowserHistory()
    
    // const navigate = useNavigate()

    const root = ReactDOM.createRoot(el); // createRoot(container!) if you use TypeScript
    root.render(<App history={history} setCart={setCart} />);

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
    const devRoot = document.getElementById('product-dev')
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
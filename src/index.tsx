import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './app/App'

const root = document.getElementById('root')
const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <h1>about</h1>,
            },
            {
                path: '/shop',
                element: <h1>shop</h1>,
            },
        ],
    },
])

container.render(<RouterProvider router={router} />)

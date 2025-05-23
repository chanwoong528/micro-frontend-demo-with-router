
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import RoutesList from './routes'
import Nav from './components/Nav'

import './App.css'
import { Suspense } from 'react'
const router = createBrowserRouter(
  [
    {
      path: '/react',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Outlet />
        </Suspense>
      ),

      // errorElement: <Navigate to="/react" />,
      children: RoutesList
    },
  ],

)
function App() {



  return (
    <RouterProvider router={router} />
  )
}

export default App 
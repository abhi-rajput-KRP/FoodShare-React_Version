import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HeroSection from './components/Hero.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: "",
        Component: HeroSection
      },
      // {
      //   path: "login",
      //   Component: Login
      // },
      // {
      //   path: "register",
      //   Component: Register
      // },
      // {
      //   path: "all_polls",
      //   Component: AllPolls
      // },
      // {
      //   path: "my_polls",
      //   Component: MyPolls
      // },
      // {
      //   path: "create_poll",
      //   Component: CreatePoll
      // },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

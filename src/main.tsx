import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Scores from './pages/Scores.tsx'
import DetailsScore from './pages/DetailsScore.tsx'


const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Scores/>
  },
  {
    path: 'details/:scoreID',
    element: <DetailsScore/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={browserRouter}/>
  </StrictMode>,
)


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './components/Home/Home';
import Recommendation from './components/recommendation/Recommendation';
import Concept from './components/concept/Concept';
import Team from './components/about/Team';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/recommendation",
    element: <Recommendation />
  },
  {
    path: "/concept",
    element: <Concept />
  },
  {
    path: "/about",
    element: <Team />
  }
])

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App

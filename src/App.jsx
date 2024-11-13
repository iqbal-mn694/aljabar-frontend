import Profile from './components/profil/Profile';
import Recommender from './components/recommender/Recommender';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Recommender />
  },
  {
    path: "/profile",
    element: <Profile />
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

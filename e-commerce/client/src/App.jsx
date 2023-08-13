import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Marketplace from './pages/Marketplace';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
// import './App.css';


function App() {

  const router = createBrowserRouter([
    {path: '/', element:<LandingPage/>},
    {path: '/sign-in', element:<SignIn/>},
    {path: '/sign-up', element:<SignUp/>},
    {path: '/marketplace', element:<Marketplace/>},
    {path: '/product-page', element:<ProductPage/>},
    {path: '/cart-page', element:<CartPage/>}
  ]);

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App

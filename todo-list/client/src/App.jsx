import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'

import LandingPage from '../pages/LandingPage';
import { useState } from 'react';
import TaskPage from '../pages/TasksPage';

function App() {
  const [userEmail, setUserEmail] = useState({
    email: null
  });

  const saveEmail = ({email}) => {
    setUserEmail({
      email: email
    });
  }

  // console.log(userEmail);

  const router = createBrowserRouter([
    { path: '/' , element: <LandingPage saveEmail = {saveEmail}/> },
    { path: '/tasks', element: <TaskPage userEmail = {userEmail.email}/> }
  ]);

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App;

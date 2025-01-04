import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayout from './Layout/MainLayout'

import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'


const router=createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<MainLayout/>}>
    <Route index element ={<HomePage/>}/>
    <Route path='/donate' element={<JobsPage/>}
    />
    <Route path='*' element={<NotFoundPage/>}
    />
    </Route>
  )
);

//Enclose all JS Code in curly braces
//Use curly braces for inline CSS
const App = () => {
  return <RouterProvider router={router}/>
};

export default App
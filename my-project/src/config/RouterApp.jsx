import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import Cards from '../pages/Cards'
import CardDetails from '../pages/CardsDetails'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import PrivateRouter from './PrivateRouter'
import { PublicRouter } from './PublicRouter'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<PrivateRouter />}>

        <Route path='/' element={<Cards />} />
        <Route path='/cardDetails/:id' element={<CardDetails />} />
      </Route>
      <Route path="" element={<PublicRouter />}>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

      </Route>

    </Route>
  )
)



const RouterApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default RouterApp

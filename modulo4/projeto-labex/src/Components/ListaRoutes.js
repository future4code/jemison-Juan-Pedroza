import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './HomePage'
import ListTripsPage from './ListTripsPage';
import AdminHomePage from './AdminHomePage';
import ApplicationFormPage from './ApplicationFormPage';
import CreateTripPage from './CreateTripPage';
import LoginPage from './LoginPage';
import TripDetailsPage from './TripDetailsPage';

function ListaRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path = 'trips/list' element={<ListTripsPage/>}/>
            <Route path = 'trips/application' element={<ApplicationFormPage/>}/>
            <Route path = 'login' element={<LoginPage/>}/>
            <Route path = 'admin/trips/list' element={<AdminHomePage/>}/>
            <Route path = 'admin/trips/create' element={<CreateTripPage/>}/>
            <Route path = 'admin/trips/:id' element={<TripDetailsPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default ListaRoutes
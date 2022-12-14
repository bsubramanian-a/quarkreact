import React from 'react';
import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';
import VerifyAccount from './screens/VerifyAccount';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import Dashboard from './screens/Dashboard';
import BookingInfo from './screens/BookingInfo';
import EditBooking from './screens/EditBooking';
import TruckInfo from './screens/TruckInfo';
import AddTruck from './screens/AddTruck';
import DashboardBooking from './screens/DashboardBooking';
import DashboardComplete from './screens/DashboardComplete';
import CargoInfo from './screens/CargoInfo';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verify-account' element={<VerifyAccount/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/edit-profile' element={<EditProfile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/booking-information' element={<BookingInfo/>}/>
        <Route path='/edit-booking' element={<EditBooking/>}/>
        <Route path='/truck-information' element={<TruckInfo/>}/>
        <Route path='/add-truck' element={<AddTruck/>}/>
        <Route path='/dashboard-booking' element={<DashboardBooking/>}/>
        <Route path='/dashboard-complete' element={<DashboardComplete/>}/>
        <Route path='/cargo-information' element={<CargoInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;

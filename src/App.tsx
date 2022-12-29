import React from 'react';
import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword'
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
import Information from './screens/Information';
import Document from './screens/Document';
import CompletedOrder from './screens/CompletedOrder';
import UserSettings from './screens/UserSettings';
import ChangePassword from './screens/ChangePassword';
import ResetPassword from './screens/ResetPassword';
import Verified from './screens/Verified';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/verify-user' element={<Verified/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
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
        <Route path='/information' element={<Information/>}/>
        <Route path='/document' element={<Document/>}/>
        <Route path='/completed-order' element={<CompletedOrder/>}/>
        <Route path='/user-settings' element={<UserSettings/>}/>
        <Route path='/change-password' element={<ChangePassword/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;

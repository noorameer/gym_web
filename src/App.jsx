import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'
import Adduser from './pages/Adduser.jsx'
import Sidebar from './components/Sidebar'
import Participant from './pages/Participant'
import Add_paricipant from './pages/Add_paricipant'
import Trainers_list from './pages/Trainers_list'
import Add_trainers from './pages/Add_trainers'
import Device from './pages/Device'
import Add_device from './pages/Add_device'
import Report from './pages/Report';
import Login from './pages/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/participant' element={<Participant />} />
          <Route path='/add_participant' element={< Add_paricipant />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/trainers_list' element={<Trainers_list />} />
          <Route path='/add_trainers' element={<Add_trainers />} />
          <Route path='/device' element={<Device />} />
          <Route path='/add_device' element={<Add_device />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;

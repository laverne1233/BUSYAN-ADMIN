import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Applicant from './pages/Applicant.jsx';
import People from './pages/People.jsx';
import Bus from './pages/Bus.jsx';
import BusSchedule from './pages/BusSchedule.jsx';
import Job from './pages/Job.jsx';
import Notification from './pages/Notification.jsx';
import Profile from './pages/Profile.jsx';
import LogOut from './pages/LogOut.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/People" element={<People />} />
          <Route path="/Bus" element={<Bus />} />
          <Route path="/BusSchedule" element={<BusSchedule />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/Applicant" element={<Applicant />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

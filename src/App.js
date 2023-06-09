import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PersonalDetail from "./Components/Pages/Personal Detail/PersonalDetail";
import Home from "./Components/Pages/Home/Home";
import CalendarLayout from "./Components/Pages/Calendar/CalendarLayout";
import Employees from "./Components/Pages/Employees/Employees";
import Rotas from "./Components/Pages/Rotas/Rotas";
import AddEmployees from "./Components/Pages/Add Employees/AddEmployees";
import AddSickness from "./Components/Pages/Add Sickness/AddSickness";
import AnnualLeave from "./Components/Pages/Annual Leave/AnnualLeave";
import AddLateness from "./Components/Pages/Add Lateness/AddLateness";
import AddOtherAbsence from "./Components/Pages/Add Other Absence/AddOtherAbsence";
import Sidebar from "./Components/Common components/Sidebar/Sidebar";
import TimelineView from "./Components/Pages/Timeline View/TimelineView";
import AdminDetail from "./Components/Pages/Admin Detail/AdminDetail";
import Login from "./Components/Common components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';

function App() {
  const isAuthenticated = useSelector((state) => state.handleLoginLogout)

  return (
    <>
      {isAuthenticated && <Sidebar />}
      <Routes>
        {isAuthenticated ? null : <Route path="/login" element={<Login />} />}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/personal-detail/:id" element={<PersonalDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarLayout />} />
          <Route path="/add-employees" element={<AddEmployees />} />
          <Route path="/timeline-view" element={<TimelineView />} />
          <Route path="/add-sickness" element={<AddSickness />} />
          <Route path="/annual-leave" element={<AnnualLeave />} />
          <Route path="/add-lateness" element={<AddLateness />} />
          <Route path="/add-other-absence" element={<AddOtherAbsence />} />
          <Route path="/admin-detail" element={<AdminDetail/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/employees-teams" element={<PrivateRoute isAuthenticated={isAuthenticated}><Employees /></PrivateRoute>} />
        <Route path="/rota-planner" element={<PrivateRoute isAuthenticated={isAuthenticated}><Rotas /></PrivateRoute>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
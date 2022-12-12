import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './Home';
import Landing from './Landing';
import HostEvent from './HostEvent';
import Login from './Login';
import Event from './Event';
import Signup from './Signup';
import Key from './Key';
import ViewEvents from './ViewEvents'
import EditPage from './EditPage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { clearLoginStatus } from '../Slices/userSlice'
import "./Header.css"

import NavBar from './Shared/NavBar/NavBar';

function Header() {
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  )

  //get dispath function
  let dispath = useDispatch()

  //get navigate function
  let navigate = useNavigate()

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  }


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HostEvent" element={<HostEvent />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Key" element={<Key />} />
        <Route path="/ViewEvents" element={<ViewEvents />} />
        <Route path="/EditPage" element={<EditPage />} />
      </Routes>
    </>
  )
}

export default Header
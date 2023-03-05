import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import useToken from './useToken';
import About from '../NavPages/About';
import JobBoard from '../NavPages/JobBoard';
import InterviewQuestions from '../NavPages/InterviewQuestions';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {

  // const { token, setToken } = useToken(); 

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      {/* <img src={require('./logo.png')} width={'30%'}/> */}
      <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand href="/About">
            <img
              src="../App/logo.svg"
              width="200"
              height="30"
              className="d-inline-block align-top"
              alt="SWEtrainer logo"
            />
          </Navbar.Brand>
            {/* <Navbar.Brand href="#home">SWEtrainer.com</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="Dashboard">Dashboard</Nav.Link>
                <Nav.Link href="JobBoard">Job Board</Nav.Link>
                <Nav.Link href="InterviewQuestions">Interview Questions</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                  {/* <Navbar.Text text-align={'right'}>
                    You are logged in
                  </Navbar.Text> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/JobBoard" element={<JobBoard/>}/>
          <Route path="/InterviewQuestions" element={<InterviewQuestions/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
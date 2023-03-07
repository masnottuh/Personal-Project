import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../NavPages/Dashboard';
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

function App() {

  const { token, setToken } = useToken(); 

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      {/* <img src={require('./logo.png')} width={'30%'}/> */}
      <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand>
            <img
              src="/logo.png"
              width="125px"
              height="50px"
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
                <Navbar.Collapse className="justify-content-end">
                 <button id="logout_button" onClick={logout_now}>
                Logout</button>
                </Navbar.Collapse>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/JobBoard" element={<JobBoard/>}/>
          <Route path="/InterviewQuestions" element={<InterviewQuestions/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

function logout_now() {
  sessionStorage.clear();
  window.location.reload();
}

export default App;
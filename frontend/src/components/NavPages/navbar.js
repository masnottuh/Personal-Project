import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/JobBoard">Job Board</Link>
    </li>
    <li>
      <Link to="/InterviewQuestions">Interview Questions</Link>
    </li>
    <li>
      <Link to="/About">About</Link>
    </li>
    </ul>
  </div>
  );
}
export default navbar;
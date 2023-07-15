import React from 'react'
import './home.css';
import {Link} from 'react-router-dom';
export default function Home(props) {
  return (
    <div className='container text-center mt-4'>
      <h1>Welcome to E-Learning</h1>
      <Link to='/cource'>
      <button className='btn_1 mt-4'>Start Learning</button>
      </Link>
    
    </div>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='card mb-4'>
        <div className='list-group list-group-flush'>
            <Link to='/user-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
            <Link to='/my-courses' className='list-group-item list-group-item-action'>My Courses</Link>
            <Link to='/favorite-courses' className='list-group-item list-group-item-action'>Favorite Courses</Link>
            <Link to='/recommended-courses' className='list-group-item list-group-item-action'>Recommended Courses</Link>
            <Link to='/my-assignments' className='list-group-item list-group-item-action'>Assignments</Link>
            <Link to='/profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
            <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
            <Link to='/user-login' className='list-group-item list-group-item-action'>Logout</Link>
        </div>
    </div>
  )
}

export default Sidebar;
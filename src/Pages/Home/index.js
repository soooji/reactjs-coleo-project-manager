import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div style={{textAlign:'center'}}>
        Home Page
        <br/>
        <Link to="/login">
            <div>Login</div>
        </Link>
        <br/>
        <Link to="/panel">
            <div>Panel</div>
        </Link>
    </div>
  );
}

export default HomePage; 
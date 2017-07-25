import React from 'react';
import { Link } from 'react-router';

export default ({ children }) => {
    return <div>
    <nav>
    <div className="nav-wrapper">
     <Link className="brand-logo" to="/">
     CSS
     </Link>
    </div>
  </nav>
  <div className="container">
    {children}
    </div >
    </div>;
}
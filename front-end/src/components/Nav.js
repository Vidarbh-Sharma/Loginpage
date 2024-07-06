import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

export const Nav = () => {
  const auth=localStorage.getItem('user');
const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/sign')
  }
  return (
    <div>
        <ul className="nav-ul">
    <li><Link to="/">Products</Link></li>
    
    <li><Link to="/add">Add Products</Link></li>
    <li><Link to="/update">Update Products</Link></li>
    <li><Link to="/profile">Profile</Link></li>
    <li>{auth  ?<Link onClick={logout} to="/sign">Logout</Link>:
    <Link to="/sign">Signup</Link>}</li>

    </ul>
    </div>

  )
};

export default Nav;

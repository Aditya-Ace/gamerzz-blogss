import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h1>The Gamer's Blog</h1>
      </Link>
      <div className='links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/create'>New Blog</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

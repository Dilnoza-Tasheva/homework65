import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-primary-subtle">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <span className="navbar-brand mb-0 h1 text-primary-emphasis fs-1">Lantern</span>
          </div>
          <div className="ms-auto">
            <nav className="navbar navbar-nav d-flex flex-row gap-3">
              <li>
                <NavLink to="/" className="text-primary-emphasis text-decoration-none">home</NavLink>
              </li>
              <li>
                <NavLink to="/pages/about" className="text-primary-emphasis text-decoration-none">about</NavLink>
              </li>
              <li>
                <NavLink to="/pages/contacts" className="text-primary-emphasis text-decoration-none">contacts</NavLink>
              </li>
              <li>
                <NavLink to="/pages/services" className="text-primary-emphasis text-decoration-none">services</NavLink>
              </li>
              <li>
                <NavLink to="/pages/membership"
                         className="text-primary-emphasis text-decoration-none">membership</NavLink>
              </li>
              <li>
                <NavLink to="/pages/login" className="text-primary-emphasis text-decoration-none">login</NavLink>
              </li>
              <li>
                <NavLink to="/pages/admin" className="text-primary-emphasis text-decoration-none">admin</NavLink>
              </li>
            </nav>
          </div>
        </div>
      </nav>

    </>
  );
};

export default NavBar;
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="title">React Query</div>
        <div className="NavBar">
          <nav>
            <ul className="nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/oldMethod">Axios</NavLink>
              </li>
              <li>
                <NavLink to="/reactquery">React Query</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

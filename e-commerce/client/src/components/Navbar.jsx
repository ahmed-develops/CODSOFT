import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="http://localhost:5173">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink className="navbar-item" to='/'>
                            Home
                        </NavLink>

                        <NavLink className="navbar-item" to='/marketplace'>
                            Marketplace
                        </NavLink>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <NavLink className="button is-light" to='/sign-in'>
                                    Sign In
                                </NavLink>
                                <NavLink className="button is-primary" to='/sign-up'>
                                    Sign Up
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
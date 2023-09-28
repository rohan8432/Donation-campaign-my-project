import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <div>
            <header>
           
                    <nav className="flex justify-between items-center mt-8">
                    <Logo></Logo>
                    <ul className="flex gap-5">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </nav>
           

               
            </header>
        </div>
    );
};

export default NavBar;
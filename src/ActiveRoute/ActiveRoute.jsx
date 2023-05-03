/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ children,to }) => {
    return (
        <>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? "text-amber-300" : ""
                }
            >
                {children}
            </NavLink>
        </>
    );
};

export default ActiveRoute;
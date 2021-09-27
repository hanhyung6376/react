import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="sidebar-item">
            <Link to = "/">Home</Link>
            <Link to = "/Menu">Menu</Link>
            <Link to ="/Profile">Profile</Link>
        </div>
    )
}

export default Sidebar;
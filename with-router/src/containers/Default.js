import React from "react";
import Nav from '../components/Nav'
import Content from '../components/Content'
import Sidebar from "../components/Sidebar";

const Default = () => {
    return (
    <>
    <div className="header">
        <Nav/>
    </div>
        <div className="sidebar">
            <Sidebar/>
        </div>
    <div className="content">
        <Content/>
    </div>
        </>
)
};

export default Default;
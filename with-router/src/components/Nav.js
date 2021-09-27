import React from "react";
import { withRouter } from 'react-router-dom';
import routes from "../routes";

const Nav = ({location}) =>
{
    console.log(location)
    return (
        <>
            {routes.map((route, idx) => {
                {console.log(route)}
                if (route.path === location['pathname'] && route.child !== undefined) {
                    const child = route.child
                    return (
                        <div className="nav-item" key={route.name}>
                            {child.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </div>)
                }
            })
            }
        </>
    )
};

export default withRouter(Nav);
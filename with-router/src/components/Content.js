import React from 'react';
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import routes from "../routes";

const Content = () => {
    return (
        <>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component && (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            child={route.child}
                            render={props => (
                                <>
                                    <route.component {...props} />
                                    </>
                            )} />
                    )
                })}
                <Redirect from="/" to="/Home" />
            </Switch>
        </>
    )
}

export default React.memo(Content)
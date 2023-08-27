import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared"
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom"
import Poll from "./Poll";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import LoadingBar from "react-redux-loading-bar";
import AuthenticateUser from "./AuthenticateUser";
import ErrorPage from "./ErrorPage";

const App = (props) => {
    useEffect(() => {
        props.dispatch(handleInitialData());
    }, [props]);

    return (
        <Fragment>
            <div className="container">
                <Nav />
                {props.loading === true ? null : (
                    <Routes>
                        <Route exact path="/" element={<AuthenticateUser><Dashboard /></AuthenticateUser>} />
                        <Route exact path="/question/:id" element={<AuthenticateUser><Poll /></AuthenticateUser>} />
                        <Route exact path="/Login" element={<Login />} />
                        <Route exact path="/Leaderboard" element={<AuthenticateUser><Leaderboard /></AuthenticateUser>} />
                        <Route exact path="/New" element={<AuthenticateUser><NewPoll /></AuthenticateUser>} />
                        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
                    </Routes>
                )

                }
            </div>
        </Fragment>
    )
}

export default connect()(App);
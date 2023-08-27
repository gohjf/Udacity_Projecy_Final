import { connect } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router";
import Nav from "./Nav";

const AuthenticateUser = ({ children, isAuthorised }) => {
    const navigate = useNavigate();
    const location = useLocation();

    if (isAuthorised) {
        return children;
    }
    return <Navigate to={"/login"} state={{ from: location }} replace={true} />

}

const mapStateToProps = ({ authedUser }) => {
    return {
        isAuthorised: authedUser === null ? false : true,
    };
};

export default connect(mapStateToProps)(AuthenticateUser);
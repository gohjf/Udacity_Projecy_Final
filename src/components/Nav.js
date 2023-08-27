import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";


const Nav = ({ user, users, authedUser, dispatch }) => {

  const onClickLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAuthedUser())
  }

  return (

    <nav className="nav">
      {authedUser ? (
        <ul>
          <li className="left_side_nav">
            <Link to="/">Home</Link>
          </li>
          <li className="left_side_nav">
            <Link to="/Leaderboard">Leaderboard</Link>
          </li>
          <li className="left_side_nav">
            <Link to="/New">New</Link>
          </li>
          <li className="right_side_nav">
            <img src={user.avatarURL} className="user_login_avatar"></img>
          </li>
          <li className="right_side_nav">
            <span
              className="user_login_infomation">{user.name}
            </span>
          </li>
          <li className="right right_side_nav">
            <span>
              <Link to='/Login' onClick={onClickLogout}>Logout</Link>
            </span>
          </li>
        </ul>
      ) : (<></>)}

    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    user: users[authedUser],
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Nav);

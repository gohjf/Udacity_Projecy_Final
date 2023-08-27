import { connect } from "react-redux";

const Leaderboard = ({ usersRanking }) => {
    return (
        <div>
            <h3>Leaderboard</h3>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {usersRanking.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>
                                    <span>{user.name}</span>
                                </td>
                                <td>
                                    <span>{Object.keys(user.answers).length}</span>
                                </td>
                                <td>
                                    <span>{user.questions.length}</span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = ({ users }) => {
    const usersRanking = Object.values(users).sort(
        (a, b) => Object.keys(b.answers).length + b.questions.length - (Object.keys(a.answers).length + a.questions.length))
    console.log(usersRanking);
    return {
        usersRanking
    };
};

export default connect(mapStateToProps)(Leaderboard);
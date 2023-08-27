import { connect } from "react-redux";
import { Questions } from "./Question";

const Dashboard = (props) => {

    return <div className='Dashboard-Container'>
        <h3 className="center">New Questions</h3>
        <ul className="dashboard-list">
            {props.newQuestions.map((question) => (
                <Questions
                    id={question.id}
                    question={question}
                    user={question.author}
                ></Questions>
            ))}
        </ul>
        <h3 className="center">Done</h3>
        <ul className="dashboard-list">
            {props.doneQuestions.map((question) => (
                <Questions
                    id={question.id}
                    question={question}
                    user={question.author}
                ></Questions>
            ))}
        </ul>
    </div>
};

const mapStateToProps = ({ authedUser, users, questions }) => {
    const questionIds = Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    const listOfQuestions = Object.keys(questions).map((question) => questions[question]);
    const doneQuestions = listOfQuestions.filter((question) => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser),)
        .sort((a, b) => b.timestamp - a.timestamp);
    const newQuestions = listOfQuestions.filter((question) => !doneQuestions.includes(question))
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        authedUser,
        questionIds: questionIds,
        questions,
        doneQuestions,
        newQuestions,
        users,
    };
};


export default connect(mapStateToProps)(Dashboard);
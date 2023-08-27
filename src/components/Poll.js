import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";
import { formatQuestion } from "../utils/helpers";
import { handleAnswerQuestion } from "../actions/questions"

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};




const Poll = ({ dispatch, authedUser, users, id, question }) => {

  const {
    name,
    avatar,
    hasUserAnswered,
    optionOneText,
    optionTwoText,
    optionOneVotesPercentage,
    optionTwoVotesPercentage,
    isUserAuthor,
    totalVotes,
  } = question;

  console.log("Percentage for Option 1 : " + optionOneVotesPercentage);
  console.log("Percentage for Option 2 : " + optionTwoVotesPercentage);
  console.log("Total Votes: " + totalVotes);

  const toNavigate = useNavigate();
  const onChangeOne = (event) => {
    event.preventDefault();
    dispatch(handleAnswerQuestion({
      authedUser,
      qid : id,
      answer: "optionOne",
    }))
    toNavigate('/');
  }
  const onChangeTwo = (event) => {
    event.preventDefault();
    dispatch(handleAnswerQuestion({
      authedUser,
      id,
      answer: 'optionTwo',
    }))
    toNavigate('/');
  }

  return (
    <div>
      <div className="Poll_Header">
        <h3>Poll By {name}</h3>
      </div>
      <div className="Poll_Question">
        <h3>Would You Rather</h3>
      </div>
      {!hasUserAnswered ? (
        <div className="Poll_Choice_Container">
          <div className="Poll_Choice_One">
            {optionOneText}
            <button onClick={onChangeOne}>Vote</button>
          </div>
          <div className="Poll_Choice_Two">
            {optionTwoText}
            <button onClick={onChangeTwo}>Vote</button>
          </div>
        </div>

      ) : (
        <div>Thank you for answering this question.
          <div className="Poll_Choice_One">
            {optionOneText}
            <button disabled>{optionOneVotesPercentage}%</button>
          </div>
          <div className="Poll_Choice_Two">
            {optionTwoText}
            <button disabled>{optionTwoVotesPercentage}%</button>
          </div>
        </div>
      )}

    </div>
  )
}

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.router.params;
  const question = questions[id];

  return {
    authedUser,
    users,
    id,
    question: formatQuestion(question, users[question.author], authedUser),
  };
};

export default withRouter(connect(mapStateToProps,)(Poll));
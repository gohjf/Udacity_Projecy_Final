import React from "react";
import { formatDate } from "../utils/helpers";
import { useNavigate, Link } from "react-router-dom";


export const Questions = ({ id, question, user }) => {
    return (
        <div key={id} className="center question-container">
            <div className="question-user-information">
                <span className="username">
                    {user}
                </span>
            </div>
            <div className="center question-datetime-information">
                <span className="datetime">
                    {formatDate(question.timestamp)}
                </span>
            </div>
            <div className="center question-link-information">
                <Link to={`/question/${id}`} className="question">
                    <button>Show</button>
                </Link>
            </div>
        </div>
    )
}
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const SAVE_ANSWER_TO_USER = "SAVE_ANSWER_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addQuestionToUser(question) {
  return {
    type: ADD_QUESTION_TO_USER,
    authedUser: question.author,
    id: question.id,
  };
}

export function saveAnswerToUser({ authedUser, id, answer }) {
  return {
    type: SAVE_ANSWER_TO_USER,
    authedUser,
    id,
    answer,
  };
}
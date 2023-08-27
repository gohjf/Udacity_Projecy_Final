var {_saveQuestion, _saveQuestionAnswer} = require('../utils/_DATA.js');

describe('_saveQuestion', () => {
    it('to verify that the saved question is returned and all expected fields are populated when correctly formatted data', async() => {
        const author = "tylermcginnis";
        const optionOneText = "Japan";
        const optionTwoText = "Korea";

        const question = {
            author,
            optionOneText,
            optionTwoText,
        };
        
        const result = await _saveQuestion(question);
        
        expect(result.optionOne.text).toEqual(optionOneText);
        expect(result.optionTwo.text).toEqual(optionTwoText);
    });
})

describe('_saveQuestion', () => {
    it('to verify that an error is returned if incorrect data is passed to the function.', async() => {
        const author = "tylermcginnis";
        const optionOneText = "Japan";
        const optionTwoText = "Korea";

        const question = {
            optionOneText,
            optionTwoText,
        };
        
        await expect()
        const result = await _saveQuestion(question).catch((exception) => exception);
        
        expect(result).toEqual(('Please provide optionOneText, optionTwoText, and author'));
    });
})

describe('_saveQuestionAnswer', () => {
    it('to verify that the saved question answer is returned and all expected fields are populated when correctly formatted data is passed to the function.', async() => {
        const authedUser = "tylermcginnis";
        const qid = "8xf0y6ziyjabvozdd253nd";
        const answer = "optionOne";
        
        const result = await _saveQuestionAnswer({authedUser,qid,answer});
        
        expect(result).toBeTruthy();
    });
})

describe('_saveQuestionAnswer', () => {
    it('to verify that an error is returned if incorrect data is passed to the function.', async() => {
        const authedUser = "tylermcginnis";
        const qid = "";
        const answer = "optionOne";
        
        await expect()
        const result = await _saveQuestionAnswer({authedUser,qid,answer}).catch((exception) => exception);
        
        expect(result).toEqual(('Please provide authedUser, qid, and answer'));
    });
})
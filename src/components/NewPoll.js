import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = ({ dispatch }) => {
    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const handleOptionOneChange = (e) => {
        const value = e.target.value;
        setOptionOneText(value);
    };

    const handleOptionTwoChange = (e) => {
        const value = e.target.value;
        setOptionTwoText(value);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(optionOneText, optionTwoText));
        setOptionOneText("");
        setOptionTwoText("");
        navigate("/");
    };

    return (
        <div>
            <h3>Would You Rather</h3>
            <h4>Create Your Own Poll</h4>

            <form className="create_poll" onSubmit={handleSubmit}>
                <div className="OptionOneInput">
                    <textarea
                        className="OptionOne_Info"
                        placeholder="Option One"
                        value={optionOneText}
                        onChange={handleOptionOneChange}
                        data-testid={"OptionOne_Text"}
                    >
                    </textarea>
                </div>

                <div className="OptionTwoInput">
                    <textarea
                        className="OptionTwo_Info"
                        placeholder="Option Two"
                        value={optionTwoText}
                        onChange={handleOptionTwoChange}
                        data-testid={"OptionTwo_Text"}
                    >
                    </textarea>
                </div>

                <div className="SubmitButton">
                    <button
                        disabled={optionOneText === "" || optionTwoText === ""}
                        type="submit"
                        data-testid={"Button_poll"}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default connect()(NewPoll);

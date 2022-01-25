import "./Button.css";

const Button = ({handleClick}) => {
    return (
            <div className="button">
                <button onClick={() => handleClick()}>Next</button>
            </div>
    )
}

export default Button;
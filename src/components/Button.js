import "./Button.css";

const Button = ({handleClick}) => {
    return (
        <div>
            <div className="button">
                <button onClick={() => handleClick()}>Next</button>
            </div>
        </div>
       
        
    )
}

export default Button;
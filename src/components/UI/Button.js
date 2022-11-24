import './Button.css'

function Button(props){
    const value=props.children;

    const DataHandler=(event)=>{
        props.onClick(value);
    }

    return(
        <div className={`button ${(value==='0')?'zero':' '}`} onClick={DataHandler}>
            {props.children}
        </div>
    );
}

export default Button;
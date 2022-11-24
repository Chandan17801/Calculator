import './Display.css'

function Display(props) {
    return (
    <div className="display">
        <pre className="display_value">{props.toShow}</pre>
    </div>
  )
}

export default Display

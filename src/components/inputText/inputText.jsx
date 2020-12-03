import './inputText.css'
function InputText(props){
    return(
        <input placeholder={props.placeholder} className="input" type="text"/>
    )
}

export default InputText;
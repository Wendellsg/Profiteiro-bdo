import './subitem.css';

function SubItem(props){
    return(
        <div className="Subitem">
            <div style={{backgroundImage:`url(${props.img})`}} className="SubitemImage">
                
            </div>
            <p className="SubitemName">{props.name}</p>
            <p className="SubitemName">{props.quantity}</p>
        </div>
    )
}
export default SubItem;
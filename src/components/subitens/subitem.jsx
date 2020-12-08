import './subitem.css';

function Item(props){
    return(
        <div className="item">
            <div style={{backgroundImage:`url(${props.img})`}} className="itemImage">
                
            </div>
            <h2 className="itemName">{props.name}</h2>
        </div>
    )
}
export default Item;
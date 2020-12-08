import Button from '../../components/button/Button'
import {Link} from 'react-router-dom'
import Item from '../../components/itens/item'
import './SubItens.css';
import InputText from '../../components/inputText/inputText'
import Itens from '../../Dados/Itens'



function SubItens(){
    return(

        <div className="conteiner" >
            <h1>Me diga quanto desse item você já possue</h1>
            <Item  img={Itens[0].img} name={Itens[0].name}/>
            
            <InputText placeholder="Quantas unidades você ja tem?"/>

            <Link to="/resultado">
                <Button texto="Próximo"></Button>
            </Link>
            <Link to="/subitem?1">
                <Button texto="Voltar"></Button>
            </Link>
        </div>
    )
}

export default SubItens
import Button from '../../components/button/Button'
import {Link} from 'react-router-dom'
import Item from '../../components/itens/item'
import Itemimage from '../../assets/00004987.png'
import './receitas.css';
import InputText from '../../components/inputText/inputText'

function Receitas(){
    
    return(
        <div className="conteiner" >
            <h1>Selecione um item</h1>
            <Item img={Itemimage}name="Cristal Negro de Magia Concentrada"/>
            
            <InputText placeholder="Quantas unidades você quer crafitar?"/>

            <Link to="/resultado">
                <Button texto="Selecionar"></Button>
            </Link>
        </div>
    )

};

export default Receitas;
import Button from '../../components/button/Button'
import {Link} from 'react-router-dom'
import Item from '../../components/itens/item'
import './receitas.css';
import InputText from '../../components/inputText/inputText'
import Itens from '../../Dados/Itens'

function Receitas(){
    
    return(
        <div className="conteiner" >
            <h1>Diga quanto</h1>
            <Item  img={Itens[0].img} name={Itens[0].name}/>
            
            <InputText placeholder="Quantas unidades você quer crafitar?"/>


            <Link to="/resultado">
                <Button texto="Selecionar"></Button>
            </Link>
        </div>
    )

};

export default Receitas;
import {Link} from 'react-router-dom'
import Button from '../../components/button/Button'
import SubItens from '../../components/subitens/subitem'
import './resultado.css';
import Itens from '../../Dados/Itens'

function Resultado(){
    return(
        <div className="conteiner" >
            <h1>Resultado</h1>
            <p>Você precisa comprar</p>

            <div className="Table">
                
                <ul>
                    <li>
                        <SubItens img={Itens[2].img} name={Itens[2].name} quantity="250"/>
                    </li>
                    <li>
                        <SubItens img={Itens[3].img} name={Itens[3].name} quantity="250"/>
                    </li>
                    <li>
                        <SubItens img={Itens[4].img} name={Itens[4].name} quantity="250"/>
                    </li>
                    <li>
                        <SubItens img={Itens[5].img} name={Itens[5].name} quantity="250"/>
                    </li>
                    <li>
                        <SubItens img={Itens[6].img} name={Itens[6].name} quantity="250"/>
                    </li>
                </ul>

            </div>
            <p>Você vai gastar no total</p>
            <h2>3.161.651.616</h2>
            <p>Vai lucrar no total</p>
            <h2>3.161.651.616</h2>
            <div className="pkt">
            <input type="checkbox" name="pktecon" id="pktecon"/>
            <p>Tenho pacote econômico</p>
            </div>
            

            <Link to="/">
                <Button texto="Refazer"></Button>
            </Link>
        </div>
    )

};

export default Resultado;
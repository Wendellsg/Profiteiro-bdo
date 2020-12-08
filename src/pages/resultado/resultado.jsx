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

            <div>
                <ul >
                    <li>
                        <SubItens img={Itens[2].img} name={Itens[2].name}/>
                    </li>
                    <li>
                        <SubItens img={Itens[3].img} name={Itens[3].name}/>
                    </li>
                    <li>
                        <SubItens img={Itens[4].img} name={Itens[4].name}/>
                    </li>
                    <li>
                        <SubItens img={Itens[5].img} name={Itens[5].name}/>
                    </li>
                    <li>
                        <SubItens img={Itens[6].img} name={Itens[6].name}/>
                    </li>
                </ul>

            </div>
            <Link to="/">
                <Button texto="Refazer"></Button>
            </Link>
        </div>
    )

};

export default Resultado;
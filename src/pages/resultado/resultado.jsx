import {Link} from 'react-router-dom'
import Button from '../../components/button/Button'
import './resultado.css';

function Resultado(){
    return(
        <div className="conteiner" >
            <h1>Resultado</h1>
            <Link to="/">
                <Button texto="Refazer"></Button>
            </Link>
        </div>
    )

};

export default Resultado;
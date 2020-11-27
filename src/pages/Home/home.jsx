// import react from 'react'
import './home.css';
import Button from '../../components/button/Button'
import {Link} from 'react-router-dom'


function Home(){
    return(
        <div className="conteinerHome">
                <div className="textbox">
                    <h1>Calcule o lucro exato das suas receitas no Black Desert</h1>
                </div>
                
                <Link to="/receitas">
                <Button className="btn" texto="Iniciar"/>
                </Link>


        </div>
    )

}

export default Home;
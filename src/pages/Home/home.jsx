import react from 'react'
import './home.css';
import Button from '../../components/button/Button'
import image from '../../assets/guardian.png'

function Home(){
    return(
        <div className="conteiner">
                <div className="textbox">
                    <h1>Calcule o lucro exato das suas receitas no Black Desert</h1>
                </div>
                
                <Button className="btn" texto="Iniciar"/>



        </div>
    )

}

export default Home;
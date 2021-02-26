import './game.css'



function Game(props) {
    return (
        <main className='game'>
            <div className="you">
                <h1>Вы</h1>
                <img onClick={props.UserRock} className='userChoice' src={props.rock} alt="#"/>
                <img onClick={props.UserPaper} className='userChoice' src={props.paper} alt="#"/>
                <img onClick={props.UserScissors} className='userChoice' src={props.scissors} alt="#"/>
            </div>

            <div className="vs">
                <h4>{props.gameState}</h4>
                <h1>VS</h1>
            </div>

            <div className="comp">
                <h1>Компьютер</h1>
                <img src={props.comp} alt=""/>
            </div>
        </main>
    )
}

export default Game
